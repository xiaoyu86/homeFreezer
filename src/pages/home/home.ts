import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Storage} from '@ionic/storage';


@IonicPage
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //card
  foodNum: number = 0;//总数

  freshLevel1: number = 0;//新鲜数量
  freshLevel2: number = 0;//一般数量
  freshLevel3: number = 0;//过期数量
// --------------------------------------------------
  // item 详情


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage) {


    // 初始化
    this.storage.get('foodInfo').then((val) => {
      console.log('Your age is', val);
    });


    // set a key/value
    // storage.set('name', 'Max');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad homepage');
  }

  foodAdd() {
    const _params = {actionType: 'C'};
    this.navCtrl.push('FoodEditPage', _params);
  }

}
