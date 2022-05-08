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

### Up until here working

So the tutorial is finished, now I need to add my game. Unfortunately that guy didn't add mroe stuff
so I go back to the original place...

## Merging the project

I am bringin the old project here. There's a conflic of interests:

I am using the skeleton assuming it's canvas, but in reality, the structure
shoudl be more DDDy where canvas is part of the infra, as well as could be React,
and I could start the app either with react or canvas.

Either case, I need to think carefull what is shared among regular javacsript and react
so this can go outside, and would belong to reac etc.

All of this is like a lot of effor, so I will continue with just the canvas option,
placing unconmfortably all the files under Infrastructure/canvas....

Maybe in the future I'll be able to merge that. Maube I'll relaize it doens't make sense.
Who knows.

### merging problems

#### tsx and ts

old is all tsx... if its pure typesript, should be ts only...
and tsx only if it contains jsx
