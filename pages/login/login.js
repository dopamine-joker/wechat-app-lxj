// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //自定义函数
  /**
   * 重置按钮
   */
  formReset: function () {
    console.log('form发生了reset事件,数据重置')
  },

  /**
   * 提交按钮
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    // console.log('form发生了submit事件，携带数据为：', e.detail.value.uname);
    //获得对应参数
    let duname = e.detail.value.uname;
    let duid = e.detail.value.uid;
    let ducollege = e.detail.value.ucollege;
    let duclass = e.detail.value.uclass;
    let dureason = e.detail.value.ureason;
    let dutime = e.detail.value.utime;
    let dudepartment = e.detail.value.udepartment;
    let duvisit = e.detail.value.uvisit;
    let data = {uname:duname,uid:duid,ucollege:ducollege,uclass:duclass,ureason:dureason,utime:dutime,udepartment:dudepartment,uvisit:duvisit};
    wx.navigateTo({
      url: '../show/show',
      success: function(res){
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', data)
      }
    })
  },

})