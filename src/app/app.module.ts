import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {IonicStorageModule} from '@ionic/storage';
import {Storage} from "@ionic/storage";

// 自定义服务
import {StorageServe} from "../common/serve/storage-serve";
import {DataManagementServe} from "../project/serve/data-management-serve"

// 页面组件
import {HomePageModule} from "../pages/home/home.module";
import {FoodEditPageModule} from "../pages/food-edit/food-edit.module";

import {FoodInfoServe} from "../project/serve/food-info-serve";


@NgModule({
  declarations: [
    MyApp,
    /*    AboutPage,
        ContactPage,
        HomePage,*/
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回', // 配置返回按钮的文字
      // backButtonIcon: 'arrow-dropleft-circle' // 配置返回按钮的图标
    }),
    //本地数据服务
    IonicStorageModule.forRoot({
        name: '_myAppDB',
        driverOrder: ['indexeddb', 'sqlite', 'websql']
      }
    ),

    // 页面模块
    HomePageModule,
    FoodEditPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    /*    AboutPage,
        ContactPage,
        HomePage,*/
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // 自定义服务
    DataManagementServe,
    FoodInfoServe,
    // Storage,
    // StorageServe,

    // BASEFUN,
  ]
})
export class AppModule {
}
