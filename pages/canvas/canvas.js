// pages/canvas/canvas.js
var context = new wx.createCanvasContext('canvasid', this);
var strat_num = 1,
  end_num = 20;
var sAngle = 1.5 * Math.PI,
  eAngle = 0;
Page({
  onReady: function() {
    this.canvas()
  },
  canvas: function() {
    var that = this;
    if (strat_num <= end_num) {
      console.log('strat_num:', strat_num)
      eAngle = strat_num * 2 * Math.PI / end_num + 1.5 * Math.PI;
      setTimeout(function() {
        context.setStrokeStyle("#00ff00")
        context.setLineWidth(2)
        context.fillText(strat_num * 5 <= 100 ? strat_num * 5 : 100, 95, 95)
        context.arc(100, 100, 60, sAngle, eAngle, false)
        context.stroke()
        context.draw()
        that.canvas()
        strat_num++
      }, 200)
    } else {
      console.log('strat_num_end:', strat_num)
    }
  }
})
