# vue2-template
A vue project base on vue2
https://github.com/tangtongda/vue2-template
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build:prod
```
#### Add more environment variables
If you need more environment variables,you and add ```.env.xxx``` file in project location like：
```
.env.dev
.env.beta
.env.uat
...
```
#### What does the build params means in environment file?
```
VUE_APP_HOST=https://demo.xxx.cn/api
VUE_APP_BASE_URL=/
```
```VUE_APP_HOST``` referts to the api server domain
```VUE_APP_BASE_URL``` referts to the vue ```publicPath```,when your project build to production, ngnix locate to 的domain like "https://demo.xxx.cn/web/user", then the ```VUE_APP_BASE_URL=/web/user```.
More details see[Vue Cli Configuration Reference](https://cli.vuejs.org/config/#publicpath)

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Use Antdv Components
See [Ant Design Vue@1.7.8](https://antdv.com/docs/vue/getting-started/).
#### Change the need of Antdv Components
Edit the ```/src/antd.js```
Only import the components you need.

### Pack
I have used the webpack-compression to make the packed asset resources smaller then before, you can change the rule in ```vue.config.js```.
And also use the ngnix ```gzip``` to split the js file to multiple.
You must switch the ngnix gizp on in ngnix configuration like this:
```
gzip            on;
gzip_min_length 1000;
gzip_proxied    expired no-cache no-store private auth;
gzip_types      text/plain application/xml;
```