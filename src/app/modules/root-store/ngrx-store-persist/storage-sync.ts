

import * as deepmerge from "deepmerge";
import { validateStateKeys } from "./helpers";
import { config } from "./options";

const INIT_ACTION = "@ngrx/store/init";
const UPDATE_ACTION = "@ngrx/store/update-reducers";

export const syncStateUpdate = (
    state: any,
    keys: any[],
    storage: Storage
) => {
    keys.forEach(key => {
        // console.log("TCL: syncStateUpdate");

        const stateSlice = state[key];
        const replacer = null;
        const space = null;

        if (typeof stateSlice !== "undefined" && storage !== undefined) {
            try {
                storage.setItem(
                    key,
                    typeof stateSlice === "string"
                        ? stateSlice
                        : JSON.stringify(stateSlice, replacer, space)
                );
            } catch (e) {
                console.warn("Unable to save state to localStorage:", e);
            }
        } else if (typeof stateSlice === "undefined") {
            try {
                storage.removeItem(key);
            } catch (e) {
                console.warn(
                    `Exception on removing/cleaning undefined '${key}' state`,
                    e
                );
            }
        }
    });
};

export const rehydrateApplicationState = (
    keys: any[],
    storage: Storage
) => {
    return keys.reduce((acc, curr) => {
        // console.log("TCL: rehydrateApplicationState");

        const key = curr;

        if (storage !== undefined) {
            const stateSlice = storage.getItem(key);
            if (stateSlice) {
                const isObjectRegex = new RegExp("{|\\[");
                let raw = stateSlice;

                if (stateSlice === "null" || isObjectRegex.test(stateSlice.charAt(0))) {
                    raw = JSON.parse(stateSlice);
                }

                return Object.assign({}, acc, {
                    [key]: raw
                });
            }
        }
        return acc;
    }, {});
};


export function storageSync(reducer: any) {
    const stateKeys = validateStateKeys(config.keys);
    const rehydratedState = rehydrateApplicationState(stateKeys, config.storage);

    return (state: any, action: any) => {
        // console.log("TCL: storageSync -> action.type", action.type);
        let nextState: any;

        if ((action.type === INIT_ACTION) && !state) {
            nextState = reducer(state, action);
            // console.log("TCL: 1", nextState);
        } else {
            nextState = { ...state };
        }
        if (action.type === INIT_ACTION || action.type === UPDATE_ACTION) {
            nextState = setRailImagesRestoredFromCacheProperty(state, nextState);
            // @ts-ignore
            const overwriteMerge = (destinationArray: any, sourceArray: any) => sourceArray;
            const options: deepmerge.Options = {
                arrayMerge: overwriteMerge
            };
            nextState = deepmerge(nextState, rehydratedState, options);
            // console.log("TCL: 3", nextState);
        }

        nextState = reducer(nextState, action);

        if (action.type !== INIT_ACTION) {
            syncStateUpdate(
                nextState,
                stateKeys,
                config.storage
            );
            // console.log("TCL: 4", nextState);
        }

        return nextState;
    };
}

function setRailImagesRestoredFromCacheProperty(state: any, nextState: any): any {
    if (state) {
        const railImages = nextState.railImages;
        // console.log("TCL: 2 before", nextState);
        const railImagesInCache = railImages != null && railImages.ids != null && railImages.ids.length > 0;
        if (railImagesInCache) {
            // console.log("TCL: storageSync -> railImages.ids not null", railImages.ids.length);
            nextState = {
                ...state, railImages: {
                    ...railImages,
                    restoredFromCache: true
                }
            };
        }
        // console.log("TCL: 2 after", nextState);
    }
    return nextState;
}