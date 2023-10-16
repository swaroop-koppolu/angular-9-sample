
import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders, ApplicationRef } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, ActionReducer, MetaReducer, Action, Store } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "@environment";
//import { Sanitizers } from "@bulk-data-viewer/store";
import { take } from "rxjs/operators";
import { createInputTransfer, removeNgStyles } from "@angularclass/hmr";

export function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any) => {
    if (action.type === "SET_ROOT_STATE") {
      console.log(action.payload);
      return action.payload;
    }
    return reducer(state, action);
  };
}
export const xyz: MetaReducer<any, Action>[] = [stateSetter];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
      },
      metaReducers: xyz
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.name !== "LOCAL",
      // stateSanitizer: Sanitizers.stateSanitizer,
      // actionSanitizer: Sanitizers.actionSanitizer
    }),
    EffectsModule.forRoot([])
  ],
  exports: [
  ],
  declarations: []
})
export class RootStoreModule {
  constructor(public appRef: ApplicationRef, private _store: Store<any>) { }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootStoreModule,
      providers: []
    };
  }
  createNewHosts(cmps) {
    const components = Array.prototype.map.call(cmps, function (componentNode) {
      const newNode = document.createElement(componentNode.tagName);
      const currentDisplay = newNode.style.display;
      newNode.style.display = "none";
      if (!!componentNode.parentNode) {
        const parentNode = componentNode.parentNode;
        parentNode.insertBefore(newNode, componentNode);
        return function removeOldHost() {
          newNode.style.display = currentDisplay;
          try {
            parentNode.removeChild(componentNode);
          } catch (e) { }
        };
      } else {
        return function () { }; // make it callable
      }
    });
    return function removeOldHosts() {
      components.forEach(function (removeOldHost) { return removeOldHost(); });
    };
  }
  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    this._store.pipe(take(1)).subscribe(s => store.rootState = s);
    store.disposeOldHosts = this.createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
  hmrOnInit(store) {
    if (!store || !store.rootState) {
      return;
    }
    // restore state by dispatch a SET_ROOT_STATE action
    if (store.rootState) {
      this._store.dispatch({
        type: "SET_ROOT_STATE",
        payload: store.rootState
      });
    }
    if ("restoreInputValues" in store) { store.restoreInputValues(); }
    // this.appRef.tick();  <<< REMOVE THIS LINE, or store will not work after HMR
    Object.keys(store).forEach(prop => delete store[prop]);
  }
}