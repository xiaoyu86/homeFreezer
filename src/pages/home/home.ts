import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, Events} from 'ionic-angular';


import {FoodEditPage} from "../food-edit/food-edit";
import {FoodInfoServe} from "../../project/serve/food-info-serve";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foodInfo;


  //card
  foodNum: number = 0;//总数

  freshLevel1: number = 0;//新鲜数量
  freshLevel2: number = 0;//一般数量
  freshLevel3: number = 0;//过期数量


  callbackData;
// --------------------------------------------------
  // item 详情
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController,
              private foodInfoServe:FoodInfoServe,
              private events: Events) {

    this.FoodInfoInit();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homepage');
  }


  FoodInfoInit() {
    this.foodInfo = this.foodInfoServe.get(null);
  }


  // modal
  foodAdd() {
    const _params = {actionType: 'C'};
    let presentPageModal = this.modalCtrl.create(FoodEditPage, {presentDate: _params});
    presentPageModal.onDidDismiss(data => {
      console.log('接收页面回调: ' + data);

      // 取出回调的值
      this.callbackData = data
    });
    presentPageModal.present()
  }


}
