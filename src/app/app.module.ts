import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StorageExplorerModule } from './modules/storage-explorer/storage-explorer.module';
import { TestHarnessModule } from './modules/test-harness/test-harness.module';
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from "angular2-notifications";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from './modules/root-store/root-store.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    StorageExplorerModule,
    TestHarnessModule,
    //  StoreModule.forRoot({}),
    //  EffectsModule.forRoot([]),
     RootStoreModule.forRoot(),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
