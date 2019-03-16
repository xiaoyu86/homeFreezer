import {Injectable} from "@angular/core";


@Injectable()
export class DataManagementServe {
  obj;

  constructor() {

  }


  create(data) {
    //多条或单条
    if (Array.isArray(data)) {
      data.map((_obj) => {
        this.obj[_obj.id] = _obj;
      });
    } else {
      this.obj[data.id] = data;
    }
    return this.obj
  }


  del(data?, all?) {
    if (data) {
      //多条或单条
      if (Array.isArray(data)) {
        data.map((_obj) => {
          Object.assign(this.obj, _obj);
        });
      } else {
        Object.assign(this.obj, data);
      }
    } else {
      this.obj = {};
    }
    return this.obj
  }


  get(data) {
    let returnData = {};

    //多条或单条
    if (Array.isArray(data)) {
      data.map((_obj) => {
        if (typeof this.obj[_obj.id] != 'undefined') {
          returnData[_obj.id] = this.obj[_obj.id];
        }
      });
    } else {
      if (typeof this.obj[data.id] != 'undefined') {
        returnData[data.id] = this.obj[data.id];
      }
    }

    return returnData
  }


  put(data) {
    return this.create(data)
  }


}
