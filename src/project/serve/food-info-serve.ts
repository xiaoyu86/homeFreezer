import {Storage} from '@ionic/storage';
import {DataManagementServe} from "./data-management-serve";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class FoodInfoServe {
  _dataArray = null;

  constructor(private storage: Storage,
              private dataManagementServe: DataManagementServe,
  ) {
    this.init()
  }
git
  init() {
    return new Promise(function (resolve, reject) {
      this.storage.get('foodInfo').then((_JSONData) => {
        console.log('foodInfo init', JSON.parse(_JSONData));
        resolve(_JSONData);
      });
    });
  }

  create(FoodInfo?) {
    return new Promise(function (resolve, reject) {
      this.init('foodInfo').then((_data) => {
        console.log('foodInfo init', JSON.parse(_data));
        this._dataArray = this.dataManagementServe.create(FoodInfo);
        resolve(this._dataArray);
      });
    });
  }

  del(FoodInfo) {
    return new Promise(function (resolve, reject) {
      this.init('foodInfo').then((_data) => {
        console.log('foodInfo init', JSON.parse(_data));
        this._dataArray = this.dataManagementServe.del(FoodInfo);
        resolve(this._dataArray);
      });
    });
  }

  get(FoodInfo) {
    return new Promise(function (resolve, reject) {
      this.init('foodInfo').then((_data) => {
        console.log('foodInfo init', JSON.parse(_data));
        this._dataArray = this.dataManagementServe.get(FoodInfo);
        resolve(this._dataArray);
      });
    });
  }

  put(FoodInfo) {
    return new Promise(function (resolve, reject) {
      this.init('foodInfo').then((_data) => {
        console.log('foodInfo init', JSON.parse(_data));
        this._dataArray = this.dataManagementServe.put(FoodInfo);
        resolve(this._dataArray);
      });
    });
  }


}
