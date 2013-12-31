/*
 * grunt-sitemap-ping
 * https://github.com/counterbeing/grunt-sitemap-ping
 *
 * Copyright (c) 2013 Cory Logan
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('sitemap_ping', 'Ping Google and Bing with your sitemap url.', function() {

    var submissionUrl["Google"] = "http://www.google.com/webmasters/tools/ping?sitemap=";
    var submissionUrl["Bing"] = "http://www.bing.com/ping?sitemap=";

    // Get the sitemap url, or guess it based on package json.
    var url = this.data.homepage || grunt.config.get('pkg.homepage');

    // Freak out if we don't know where the sitemap is. 
    var homeErrMess = "You didn't specify a hompage in your package.json, and it's also not in your options... I can't go on.";
    if (!url) {
      grunt.fail.warn(homeErrMess, 3);
    }
    if (url.slice(-1) !== '/') {
      url += '/';
    }

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      sitemapLocation: 'somewhere',
      checkForSitemap: 'true'
    });

    http.get("http://www.corylogan.com/sitemap.xml", function(res) {
      if (res.statusCode === 200) {
        grunt.log.ok("Looked at remote location for sitemap and found it successfully...")
      }
    });
  });

};