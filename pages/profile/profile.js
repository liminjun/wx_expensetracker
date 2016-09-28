var util = require('../../utils/util.js')
Page({
  data: {
    array: ['深蓝', '浅绿', '米黄'],
    index:0,//默认选中第一个
    logs: [],
    switchModelChecked:false
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  switchModelChange:function(e){
    console.log('switch发生change事件，携带值为', e.detail.value)
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
