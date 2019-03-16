import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

import {FoodInfoClass} from "../../project/class/food-info-class";
import {BASEFUN} from "../../common/class/base-fun-class";
import {FoodInfoServe} from "../../project/serve/food-info-serve";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private foodInfoServe: FoodInfoServe,
              private viewCtrl: ViewController) {
    console.log('FoodEditPage constructor Data', this.navParams.data)
  }

  ionViewDidLoad(navParams) {
    // console.log('FoodEditPage ionViewDidLoad ', this.navParams);
    this.componentInfoInit(navParams)
  }

  componentInfoInit(navParams) {
    console.log(this.ComponentInfo);
    const _data = this.navParams.data.presentDate || {};

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
    this.viewCtrl.dismiss()
  }

  save() {
    console.log(this.ComponentInfo);

    this.foodInfoServe.put(this.ComponentInfo);

    const _params = {actionType: this.actionType, data: this.ComponentInfo};
    this.viewCtrl.dismiss(_params)
  }
}
