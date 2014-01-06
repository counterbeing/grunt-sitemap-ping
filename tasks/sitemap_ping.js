/*
 * grunt-sitemap-ping
 * https://github.com/counterbeing/grunt-sitemap-ping
 *
 * Copyright (c) 2013 Cory Logan
 * Licensed under the MIT license.
 */

'use strict';


var request = require('request');
var async = require('async');
var lib = require('../lib/functions.js');

module.exports = function(grunt) {
  grunt.registerMultiTask('sitemap_ping', 'Ping Google and Bing with your sitemap url.', function() {
    
    // Need this to make it handle being asyncronous 
    var done = this.async();

    var submissionLoc = {
      'Google': 'http://www.google.com/webmasters/tools/ping?sitemap=',
      'Bing': 'http://www.bing.com/ping?sitemap='
    };

    // Get the sitemap url, or guess it based on package json.
    var urls = this.data.sitemapLocation || lib.getUrls(); 

    // Freak out if we don't know where the sitemap is. 
    var homeErrMess = 'You didn\'t specify a sitemapLocation in your package.json, and it\'s also not in your options... I can\'t go on.';
    if (!urls) {
      grunt.fail.warn(homeErrMess, 3);
    }
    
    urls = lib.formatSitemapURLs(urls);

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      //sitemapLocation: 'somewhere',
      checkForSitemap: true
    });

    
    urls.forEach(function(url){
      var fullURL;
      async.series([
        function() {
          if (options.checkForSitemap === true) {
            grunt.verbose.writeln("checkForSitemap is enabled, doing so now with " + url);
            lib.checkForSitemap(url);
          }else{
            grunt.log.writeln("Skipping checkForSitemap...");
          }
        },
        function() {
          grunt.log.writeln("doodie");
          grunt.log.writeln("getting url: " + url);
          fullURL = lib.fullURL(url);
        },
        function() {
          grunt.log.writeln("pinging: " + fullURL);
          //lib.pingSearchEngines(fullURL);
        }
      ]);

    });
  });

};
