module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
        {
            test: /\.mp3$/,
            loader: 'file-loader',
            query: {
                name: 'static/media/[name].[hash:8].[ext]'
            }
        }
        
      ],
    },
  };