const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure alias is correctly set
    },
    extensions: ['.js', '.jsx', '.json'],
  },
};
