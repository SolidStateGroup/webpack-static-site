# Static

A minimal setup for writing cross platform applications in React and React Native. 
This project is the example for our blog post A sensible approach to Cross platform development with React and React Native (Link coming soon).


``npm i``


## Web Development
You'll need nodemon to run in development mode
```npm i nodemon -g```


```npm run dev```


## Web Build for production

```npm start```

This will deploy files to /build and splits your web code into 3 cache busted bundles

**/webpack**

Webpack configs are used in our package.json scripts to either bundle our app for development or deploy minified/cachebusted files to **/build** to be used in production.

## Syncing common code between web and mobile

running **/mobile/bin/common-watch.sh** will keep **/common** synced to **/mobile/common-mobile**. 
This is automatically executed when running the ios project.

<img src="http://g.recordit.co/j6A8lIxu6s.gif"/>
