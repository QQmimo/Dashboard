const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './Frameworks/UI/App.tsx',
	output: {
		filename: './main.js'
	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)?$/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	}
};