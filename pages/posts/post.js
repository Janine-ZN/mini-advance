var postsData = require('../../data/posts-data.js');

Page({
  data: {},
  onLoad: function(options) {
    // this.data.postList = postsData.postList;
    this.setData({
      post_list: postsData.postList
    });
  },
  onPostTap: function(event) {
    console.log(event);
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      // url: './post-detail/post-detail',
      url: './post-detail/post-detail?id=' + postId,
    });
  }
})