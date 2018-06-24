/**
 * 全局工具类函数
 */
export const BASEFUN = {

  DATE: {
    // 毫秒转标准日期
    msToDate: (_msTime) => {
      // return new Date(+_msTime + 8 * 60 * 60 * 1000).toISOString();
      return new Date(+_msTime).toISOString();
    }
  },

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //
  OBJECT: {
    get: (_obj, _name) => {

    }
  }


};
