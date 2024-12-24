// import path from 'path';
// import Dotenv from 'dotenv-webpack';

// export default (env) => {
//   const mode = env.production ? 'production' : 'development'; // 모드 설정

//   return {
//     mode,
//     entry: './src/index.js',
//     output: {
//       path: path.resolve('dist'),
//       filename: 'bundle.js',
//     },
//     module: {
//       rules: [
//         {
//           test: /\.jsx?$/,
//           exclude: /node_modules/,
//           use: 'babel-loader',
//         },
//         {
//           test: /\.css$/,
//           use: ['style-loader', 'css-loader'],
//         },
//       ],
//     },
//     plugins: [
//       new Dotenv({
//         path: `./.env-${mode === 'production' ? 'prod' : 'dev'}`, // 환경 파일 지정
//       }),
//     ],
//     resolve: {
//       extensions: ['.js', '.jsx'],
//     },
//     devServer: {
//       static: path.join('dist'),
//       compress: true,
//       port: 3000,
//     },
//   };
// };