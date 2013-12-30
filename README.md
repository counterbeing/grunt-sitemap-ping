# grunt-sitemap-ping

> Ping Google, Bing, and Ask with your sitemap url.



## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sitemap-ping --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sitemap-ping');
```

## The "sitemap_ping" task

This was created following instructions provided by the most popular search engines as follows. You should read through these real quick if you've never done this before.

- [Google](https://support.google.com/webmasters/answer/183669?hl=en)
- [Bing](https://support.google.com/webmasters/answer/183669?hl=en)
- [Ask](https://support.google.com/webmasters/answer/183669?hl=en)

### Gotchas

- Google explicity tells you not to ping them more than once per hour, so if you're deploy often, you probably don't want to lump it in with your deploy task.
- Google only allows you to resubmit like this, you must first submit using webmaster tools. They also say you won't see your sitemap has been resubmitted in webmaster tools like this. Please [read their words](https://support.google.com/webmasters/answer/183669?hl=en) on this.


### Overview
In your project's Gruntfile, add a section named `sitemap_ping` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sitemap_ping: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.sitemapUrl
Type: `String`
Default value: `<hostname from package.json>/sitemap.xml`

This is the url of sitemap you wish to have submitted.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  sitemap_ping: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  sitemap_ping: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
