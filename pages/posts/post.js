var postsData = require('../../data/posts-data.js');

Page({
  data: {},
  onLoad: function(options) {
    this.setData({
      post_list: postsData.postList
    });
  }, 
  onPostTap:function(event){

    console.log(event);
    wx.navigateTo({
      url: './post-detail/post-detail',
    });
  }
})