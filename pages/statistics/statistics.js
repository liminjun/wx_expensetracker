var util = require('../../utils/util.js')
Page({
  data: {
    items: [],
    logs: []
  },
  onLoad: function () {
    var that=this;
    //发送ajax请求获取数据
    wx.request({
      url: 'https://angularjsblog.duapp.com/api/items',
      data: {
        x: '',
        y: ''
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          items:res.data
        });
      },
      fail:function(res){
        console.log(res);
      }
    });

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
