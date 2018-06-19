import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {FoodInfoClass} from "../../project/class/food-info-class";

/**
 * Generated class for the FoodEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-edit',
  templateUrl: 'food-edit.html',
})
export class FoodEditPage {
  ComponentInfo = new FoodInfoClass();
  actionType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad(navParams) {
    console.log('ionViewDidLoad FoodEditPage', this.navParams);
    this.componentInfoInit(navParams)
  }

  componentInfoInit(navParams) {
    console.log(this.ComponentInfo);
    const _data = this.navParams.data;

    // 动作判定
    if (_data.actionType == 'C') {
      this.actionType = '新增';
    } else if (_data.actionType == 'U') {
      this.actionType = '编辑';
    }


    this.ComponentInfo.put(_data.data);
    //初始化 日期
    this.ComponentInfo.createTime = this.ComponentInfo.createTime ? this.ComponentInfo.createTime : new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();

    this.ComponentInfo.foodShelfLife = this.ComponentInfo.foodShelfLife ? this.ComponentInfo.foodShelfLife : new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
  }


  goback() {
    // this.navCtrl.pop(); /*返回上一个页面*/
    this.navCtrl.popToRoot();
    /*回到根页面*/

    /*    const _params = {actionType: 'C'};
        this.navCtrl.push('HomePage', _params);*/
  }

  save() {

    console.log(this.ComponentInfo)
    this.navCtrl.popToRoot();

    /*    const _params = {actionType: this.actionType, data: this.ComponentInfo};
        this.navCtrl.push('HomePage', _params);*/
  }
}
