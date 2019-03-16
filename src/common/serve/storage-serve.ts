import {Injectable} from "@angular/core";
import {Storage} from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class StorageServe {
  constructor(private storage: Storage,) {
  }

  create(_keyName, _JSONData) {
    return new Promise(function (resolve, reject) {
      this.storage.set(_keyName, JSON.stringify(_JSONData)).then(
        resolve('Success')
        // reject('error')
      );
    });
  }

  del(_keyName) {
    /*        return new Promise(function (resolve, reject) {
              this.storage.set(_keyName, null).then(
                resolve('Success')
                // reject('error')
              );
            });*/
  }

  get(_keyName) {
    return new Promise(function (resolve, reject) {
      this.storage.get(_keyName).then((_JSONData) => {
        console.log('StorageServe get', JSON.parse(_JSONData));
        resolve(_JSONData);
      });
    });
  }

  put(_keyName, _JSONData) {
    this.storage.set(_keyName, JSON.stringify(_JSONData));

/*    return new Promise(function (resolve, reject) {
      this.storage.set(_keyName, JSON.stringify(_JSONData)).then(
        resolve('Success')
        // reject('error')
      );
    });*/
  }

}

