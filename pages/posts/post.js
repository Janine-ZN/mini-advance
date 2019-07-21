var postsData = require('../../data/posts-data.js');

Page({
  data: {},
  onLoad: function(options) {
    this.setData({
      post_list: postsData.postList
    });
  }
})