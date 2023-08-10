const path = require('path');

module.exports = {
  entry: './index.js', // Вказуємо точку входу
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.html$/, // Пошук файлів з розширенням .html
        use: ['html-loader'], // Використання html-loader
      },
      {
        test: /\.css$/, // Пошук файлів з розширенням .css
        use: ['style-loader', 'css-loader'], // Використання стилевих лоадерів
      },
      {
        test: /\.js$/, // Пошук файлів з розширенням .js
        exclude: /node_modules/, // Виключення папки node_modules
        use: {
          loader: 'babel-loader', // Використання Babel для транспіляції ES6+
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Пошук зображень
        type: 'asset/resource', // Використання asset ресурсів
      },
    ],
  },
};
