const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // parcel main.js
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',
  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname : 해당하는 파일의 실제 경로를 나타내는 nodejs의 전역적인 변수
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    // clean을 추가하게 되면, 새롭게 빌드했을때 기존에 필요하지 않은 내용을 제거하고 다시 결과물 반환
    clean: true
  },
  module: {
    rules: [
      { 
        // .css라는 확장자로 끝나는 것을 찾는 정규식
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 생성
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    host: 'localhost'
  }
}