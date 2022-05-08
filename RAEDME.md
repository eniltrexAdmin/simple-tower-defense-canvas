https://blog.harveydelaney.com/creating-a-game-using-html5-canvas-typescript-and-webpack/


Historial:"

`npm init`: on the options, see what I put on the package.json
creating files, nothing interesting

`npm install --save typescript`
And copy pasting the tsconfig, very basic, to tweak later I guess.


Then this:

`npm install --save-dev webpack webpack-cli`

`npm install --save-dev ts-loader style-loader css-loader file-loader html-webpack-plugin.`

`npm install --save-dev webpack-dev-server`

I CREATED the webpack.config.js and changed it from the blog to put my paths.
Changed package json to add this:


```json
  "scripts": {
    "test": "test",
    "dev": "webpack-dev-server --open",
    "prod": "webpack --production"
  },
```

### npm run dev problems:

added in webpack this:
const path = require('path');
and in the ourtput of dist this:
path: path.resolve(__dirname+ '/dist'),

changed this in webpack config:

```javascript
    devServer: {
        static: './dist'
    },
```
### Compiled with problems

because I really want to use env variable (just for fun)
installing this:

`npm install dotenv --save`

and adding the .env file.

And adding this in the webpack config:
new webpack.DefinePlugin({
"process.env": JSON.stringify(process.env)
}),

#### mode not set

"dev": "webpack-dev-server --mode=development --open",
for package json

