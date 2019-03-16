export class FoodInfoClass {
  id;
  name: string;
  //todo 目前是字符串 后面改为字典
  foodType;
  foodNum;
  foodUnit;//单位
  foodDscribe;//备注
  foodShelfLife;//保质期

  createTime;
  putTime;
  parentFoodInfoId;
  delTimes;


  constructor(FoodInfoObj?: object) {
    this.create();
  }


  // 默认配置
  createDefaultConfigFun() {
    const _dateTime = new Date();

    const _defaultConfig = {
      id: _dateTime.getTime(),
      createTime: _dateTime.getTime()
    };
    return _defaultConfig
  };


  create(FoodInfoObj?, _type?) {
    const _obj = Object.assign(this.createDefaultConfigFun(), FoodInfoObj ? FoodInfoObj : {});


    for (let itemName in _obj) {
      console.log(itemName, ':', _obj[itemName]);

      this[itemName] = _obj[itemName];
    }

  }

  put(FoodInfoObj) {
    // this.create(FoodInfoObj,'put');
    this.create(FoodInfoObj)
  }

  del() {

  }

}
