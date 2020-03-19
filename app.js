//app.js
//获取用户openId
var getOpenId = require('libs/js/public.js');
App({
  onLaunch: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // getOpenId.getOpenId(res.code);
      }
    })
  },
  globalData:{
    host: 'http://120.77.144.237:8080/',
    userInfo: null, //用户信息
    openId: null, //用户openId
    skillList:[],
    languageList:[],
    city:{
     'cityId':0,
     'cityName':'不限' 
    },
    cityList:null
  }
})