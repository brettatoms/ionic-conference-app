import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';

import { Provider1 } from '../providers/provider1';
import { Provider2 } from '../providers/provider2';
import { Provider3 } from '../providers/provider3';
import { Provider4 } from '../providers/provider4';
import { Provider5 } from '../providers/provider5';
import { Provider6 } from '../providers/provider6';
import { Provider7 } from '../providers/provider7';
import { Provider8 } from '../providers/provider8';
import { Provider9 } from '../providers/provider9';
import { Provider10 } from '../providers/provider10';
import { Provider11 } from '../providers/provider11';
import { Provider12 } from '../providers/provider12';
import { Provider13 } from '../providers/provider13';
import { Provider14 } from '../providers/provider14';
import { Provider15 } from '../providers/provider15';
import { Provider16 } from '../providers/provider16';
import { Provider17 } from '../providers/provider17';
import { Provider18 } from '../providers/provider18';
import { Provider19 } from '../providers/provider19';
import { Provider20 } from '../providers/provider20';
import { Provider21 } from '../providers/provider21';
import { Provider22 } from '../providers/provider22';
import { Provider23 } from '../providers/provider23';
import { Provider24 } from '../providers/provider24';
import { Provider25 } from '../providers/provider25';
import { Provider26 } from '../providers/provider26';
import { Provider27 } from '../providers/provider27';
import { Provider28 } from '../providers/provider28';
import { Provider29 } from '../providers/provider29';
import { Provider30 } from '../providers/provider30';


@NgModule({
  declarations: [
    ConferenceApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,

    Provider1,
    Provider2,
    Provider3,
    Provider4,
    Provider5,
    Provider6,
    Provider7,
    Provider8,
    Provider9,
    Provider10,
    Provider11,
    Provider12,
    Provider13,
    Provider14,
    Provider15,
    Provider16,
    Provider17,
    Provider18,
    Provider19,
    Provider20,
    Provider21,
    Provider22,
    Provider23,
    Provider24,
    Provider25,
    Provider26,
    Provider27,
    Provider28,
    Provider29,
    Provider30
  ]
})
export class AppModule { }
