# webpack-build-speed-testing

Code to test webpack's build time.

## Development

To add devDependencies, use `yarn install` (**Recommended**) or `npm install`.

## Plugins

Webpack's document says we can speed up our building process with DllPlugin, which can be found here: [DllPlugin](https://www.google.co.jp/url?sa=t&rct=j&q=&esrc=s&source=web&cd=4&ved=0ahUKEwjw_cGPtp_UAhVCNbwKHeYLA90QFgg5MAM&url=https%3A%2F%2Fwebpack.js.org%2Fplugins%2Fdll-plugin%2F&usg=AFQjCNGRClmGtJChARntRrMvocsIJfSLzw&sig2=2jUBiyJqqEv6U16D7nATlg).

Besides, HappyPack is a great tool to speed up our building process. You can find it here: [HappyPack](https://github.com/amireh/happypack).

## Build

By default, `npm run build` will build without plugins.

If you want to build with Happypack and DllPlugin, just pass a `dll` param:

`npm run build dll`

If you are told you haven't permissions to execute the script, run the code below:

``` bash
$ chmod +x ./script/build.sh
```

## License

Released under MIT license.
