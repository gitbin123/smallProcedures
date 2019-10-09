// pages/index13/index13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleClickId: 0,
    swiperImage: [
      { url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1609821804,3836868561&fm=26&gp=0.jpg" },
      { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2545576747,331107992&fm=26&gp=0.jpg" },
      { url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918186327,974007665&fm=26&gp=0.jpg" }
    ],
    dataList: [
      { url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1609821804,3836868561&fm=26&gp=0.jpg", text:'这是一段文我的文档无多无多无多无无多无我的文档字描述我的文档无多无为单位多无多我都我'},
      { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2545576747,331107992&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' },
      { url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918186327,974007665&fm=26&gp=0.jpg", text: '这'},
      { url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1609821804,3836868561&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' },
      { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2545576747,331107992&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' },
      { url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918186327,974007665&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' },
      { url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1609821804,3836868561&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我'},
      { url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2545576747,331107992&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' },
      { url: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2918186327,974007665&fm=26&gp=0.jpg", text: '这是一段文字描述我的文档无多无为单位多无多我都我' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList()
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
  getNavList() {
    let _this = this
    wx.request({
      // url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      url: 'http://www.baidu.com',
      success(res) {
        _this.setData({
          // navList: res.data.data.navList
          navList: [{ text: '首页', id: 0 }, { text: '首页1', id: 1 }, { text: '首页2', id: 2 }, { text: '首页3', id: 3 }, { text: '首页4', id: 4 }, { text: '首页5', id: 5 }, { text: '首页6', id: 6 }, { text: '首页7', id: 7 }, { text: '首页8', id: 8 }, { text: '首页9', id: 9 }, { text: '首页10', id: 10 }, { text: '首页11', id: 11 }, { text: '首页12', id: 12 }],

        })
      }
    })
  },
  selectTitle(e) {
    this.setData({
      titleClickId: e.target.dataset.id
    })
  }
})