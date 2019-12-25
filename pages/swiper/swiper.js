// pages/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
        url: 'https://www.diyimei.net/upload/2018/1539661799191601-lp.jpg'
      },
      {
        url: 'http://www.qqpf.net/uploads/allimg/20170529/1_144729_1.jpg'
      },
      {
        url: 'https://cdn.pixabay.com/photo/2019/12/20/14/06/winter-4708505__340.jpg'
      },
      {
        url: 'https://t1.hddhhn.com/uploads/tu/201612/357/7.png'
      }
    ],
    currentId: 0
  },
  durationChange: function(e) {
    this.setData({
      current: e.detail.current
    });
    console.log(e.detail.currentItemId);
  },
  per: function() {
    this.setData({
      currentId: 2
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})