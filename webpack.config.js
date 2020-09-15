const path = require('path');

module.exports = {
  entry: './src/index.js',  // webpack에서 자원을 번들링할 때 필요한 최초 진입점 파일 경로
  output: {   // webpack 번들링 후 결과물이 출력될 파일 설정
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // webpack은 정규식(.css)을 사용하여, style-loader와 css-loader가 제공해야하는 파일을 결정합니다.
      {
        test: /\.css$/,
        use: [
          // style-loader -> css-loader 순서를 유지하지 않으면 webpack에서 오류가 발생할 수 있습니다.
          'style-loader',
          'css-loader',
        ],
      },
      // file-loader를 사용하여 이미지를 손쉽게 가져올 수 있습니다.
      {
        test: /\.(png|svg|jpg|gif|)$/,
        use: [
          'file-loader',
        ],
      },
      // file-loader는 글꼴을 포함한 모든 종류의 파일에 사용할 수 있습니다
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      // 로드 할 수있는 또 다른 유용한 자산은 JSON 파일, CSV, TSV 및 XML과 같은 데이터입니다
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
  },
};