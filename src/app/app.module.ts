import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { CramWelcomePage } from '../pages/cram/welcome/welcome';
import { InvcWelcomePage } from '../pages/invoice/welcome/welcome';
import { CramListPage } from '../pages/cram/list/list';
import { CramDetailPage } from '../pages/cram/cram-details/cram-details';
import { ElasticModule } from 'angular2-elastic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CreateCramPage } from '../pages/cram/create/create-cram';
import {enableProdMode} from '@angular/core';
import { CramDao } from './db/cram.db.module';
import { SQLite} from '@ionic-native/sqlite';
enableProdMode();

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CramWelcomePage,
    InvcWelcomePage,
    CramListPage,
    CramDetailPage,
    CreateCramPage
  ],
  imports: [
    BrowserModule,
    ElasticModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    CramWelcomePage,
    InvcWelcomePage,
    CramListPage,
    CramDetailPage,
    CreateCramPage
  ],
  providers: [
	  CramDao,
	  SQLite,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
