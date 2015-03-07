
exports.config = {
  files: {
    stylesheets: {
      joinTo: 'stylesheets/app.css'
    },
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^bower_components/
      }
    }
  },
  sourceMaps: false,
  modules: {
    wrapper: false
  }
};
