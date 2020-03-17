module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  exportPathMap: function () {
    return {
      "/": {
        page: "/",
      },
      "/corona": {
        page: "/corona"
      }
    }
  }
}