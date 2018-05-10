# Static

A minimal setup for writing a static site, includes cache busting, minification, es6 Support and Sass with Webpack.

``npm i``


## Web Development
You'll need nodemon to run in development mode
```npm i nodemon -g```


```npm run dev```


## Web Build for production

```npm start```

This will bundle and deploy files to /build which can be run with pretty much any server setup.

**/webpack**

Webpack configs are used in our package.json scripts to either bundle our app for development or deploy minified/cachebusted files to **/build** to be used in production.