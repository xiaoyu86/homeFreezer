import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {FoodInfoClass} from "../../project/class/food-info-class";
import {BASEFUN} from "../../common/class/base-fun-class";

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
    this.ComponentInfo.createTime = BASEFUN.DATE.msToDate(this.ComponentInfo.createTime ? this.ComponentInfo.createTime : new Date().getTime());

    this.ComponentInfo.foodShelfLife = BASEFUN.DATE.msToDate(this.ComponentInfo.foodShelfLife ? this.ComponentInfo.foodShelfLife : new Date().getTime());
  }


  goback() {
    // this.navCtrl.pop(); /*返回上一个页面*/
    this.navCtrl.popToRoot();
    /*回到根页面*/

    /*    const _params = {actionType: 'C'};
        this.navCtrl.push('HomePage', _params);*/
  }

  save() {

    console.log(this.ComponentInfo);
    this.navCtrl.popToRoot();

    /*    const _params = {actionType: this.actionType, data: this.ComponentInfo};
        this.navCtrl.push('HomePage', _params);*/
  }
}
