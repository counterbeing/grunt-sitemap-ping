'use strict';

var grunt = require('grunt');
var request = require('request');

module.exports = {
  fullURL: function(engineURL, sitemapURL) {
    sitemapURL = encodeURIComponent(sitemapURL);
    return engineURL + sitemapURL;
  },

  formatSitemapURLs: function(url){
    if(typeof(url) === 'string'){
      url = [url];
    }
   return url; 
  },

  checkForSitemap: function(sitemapURL) {
    request(sitemapURL, function(error, res) {
      grunt.log.writeln('Request checking existence of \n' + sitemapURL);
      if (!error && res.statusCode === 200) {
        grunt.verbose.writeln("Got 200 for sitemap, it is there.");
        grunt.log.ok('Looked at remote location for sitemap and found it successfully... moving on.');
        return true;
      } else {
        grunt.verbose.writeln("Did not get 200 on sitemap check");
        grunt.fail.warn('I couldn\'t reach your sitemap '+ sitemapURL +' from here. You should double check all sitemaps you have defined.' );
      }
    });  
  },

  pingSearchEngines: function(pingURL) {
    request(pingURL, function(error, res) {
      grunt.log.writeln('Pinging...  \n' + pingURL);
      if (!error && res.statusCode === 200) {
        grunt.log.ok('Looked at remote location for sitemap and found it successfully... moving on.');
        return true;
      } else {
        grunt.fail.warn('Something went wrong, and I didn\'t get a 200 back from '+ pingURL +' and you need to investigate as to why' );
      }
    });  
  },

  getUrls: function(){
    var url = grunt.config.get('pkg.homepage');      
    // Make sure there's a slash at the end of the url for consistency
    if (url.slice(-1) !== '/') {
      url += '/';
    }
    url += 'sitemap.xml';
    grunt.log.writeln("You didn't specify your sitemapLocation in your gruntfile, so I guessed it based on your package.json homepage attribute... If this is not correct, you should specify one: \n" + url);
  }



  

};
