// pages/show/show.js
//获得util包，并放到util全局变量里面
var util = require('../../utils/util.js');

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //pass 动态变化的sx sy
    sx: 1,
    sy: 1,
    //pass (animation)
    animationData: '',
    //pass图标的动画样式（css)
    extraClasses: '',
    //pass图标的左位置
    left:0,
    //时间参数
    time:'2020/11/11 11:11:11',
    //上个页面传递过来的参数
    params:{},
    //图片路径
    tempFilePaths: '../../img/icon.jpg',
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this代表当前对象，这里用that保存下
    var that = this;
    //在onload获取数据
    const eventChannel = this.getOpenerEventChannel();
    //监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log("data="+data.uname);
      app.globalData.params = data;
      //这里set的就是全局的
      that.setData({
        params: data,
      })
    }); 
    //不断获取当前时间,500ms获取一次，并绑定到wxml界面
    setInterval(this.timeCnt,500);
    //动态修改pass图标的位置
    this.initPass();
    //让pass图标动起来
    this.setPassAni();
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

  /**
   * 刷新时间参数的函数
   */
  timeCnt: function(){
    let curtime = util.formatTime(new Date());
    this.setData({
      time:curtime,
    })
  },

  /**
   * 根据屏幕长宽更改pass图标的位置
   */
  initPass: function(){
    wx.getSystemInfo({
      success: (result) => {
        let pheight = result.windowHeight;
        let pwidth = result.windowWidth;
        this.setData({
          left:pwidth*0.5,
        })
      },
    })
  },

  /**
   * 选择图片上传
   */
  selectPic: function(){
    console.log(this);
    wx.chooseImage({
      count: 1,
      sizeType: ['original','compressed'],  //指定原图还是压缩图
      sourceType:['album'], //只能在相机
      success: res=>{
        wx.showToast({
          title: '正在上传...',
          icon: 'loading',
          mask: true,
          duration: 1000
        });
        console.log(this)
        this.setData({
          tempFilePaths: res.tempFilePaths
        })
      }
    })

  },

  /**
   * 设置pass的动画样式
   */
  setPassAni: function(){
    var _this = this;
    console.log("!!!");
    let next = 1;
    let animation = wx.createAnimation({
      duration: 1,
      timingFunction: "linear",
      delay: 0,
      transformOrigin :'100% 0% 0',
    });
    this.animation = animation;
    // 无限循环动画
    setInterval(function(){
      // console.log(next);
      if(next == 1){
        this.animation.scale(1.35,1.35).step();
      } else if(next == 2){
        this.animation.scale(1.7,1.7).step();
      } else if(next == 3){
        console.log(2);
        this.animation.scale(1.35,1.35).step()
      } else if(next == 4){
        this.animation.scale(1,1).step()
      } 
      if(next == 4)
        next = 0;
      next = next+1;
    // 导出动画
    this.setData({
      animationData: animation.export()
    })
   }.bind(this),300)

    // let cnt = 0;
    // setInterval(function(){
    //   cnt = cnt+1;
    //   if(cnt == 1 || cnt == 3){
    //     _this.setData({
    //       sx:1.3,
    //       sy:1.3,
    //     })
    //   }
    //   if(cnt == 2){
    //     _this.setData({
    //       sx:1.6,
    //       sy:1.6,
    //     });
    //   }
    //   if(cnt == 4){
    //     _this.setData({
    //       sx:1,
    //       sy:1,
    //     });
    //     cnt = 0;
    //   }
    // }.bind(this),300);
  },
})