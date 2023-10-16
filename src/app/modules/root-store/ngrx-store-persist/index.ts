import * as localForage from "localforage";
import { middlewareStorage } from "./middleware-storage";
import { config, StorageConfig } from "./options";
import { storageSync } from "./storage-sync";

export const getAllDataFromLocalForage = (options: StorageConfig) => {
  config.keys = options.keys;
  config.storage = middlewareStorage;
  localForage.config({
    driver: options.driver || localForage.LOCALSTORAGE,
    name: "NGRX Storage",
    version: 1.0,
    size: 4980736,
    storeName: "keyvaluepairs",
    description: "NGRX storage persist"
  });

  return localForage.keys()
    .then(keys => {
      return Promise.all(
        keys.map(
          (key) => localForage.getItem(key).then(data => [key, data])
        )
      );
    })
    .then(dataWithKeys => {
      const dataStorage = dataWithKeys.reduce((previousValue: any, [key, data]) => {
        previousValue[key as string] = data;
        return previousValue;
      }, {});
      middlewareStorage.dataStorage = dataStorage;
      return dataStorage;
    });
};

export function storageSyncMetaReducer(
  reducer: any
): any {
  return storageSync(reducer);
}

export default localForage;