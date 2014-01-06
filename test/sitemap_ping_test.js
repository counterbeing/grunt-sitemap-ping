'use strict';

/* global describe, it, xit, before, beforeEach, after, afterEach */

var grunt = require('grunt');
var lib   = require('../lib/functions.js');
var assert = require("assert");


describe('fullURL', function() {
  it('returns the full url with sitemap as query parameter', function() {
    assert.equal(
      lib.fullURL(
        'http://www.google.com/webmasters/tools/ping?sitemap=',
        'http://www.corylogan.com/sitemap.xml'
    ),
      'http://www.google.com/webmasters/tools/ping?sitemap=http%3A%2F%2Fwww.corylogan.com%2Fsitemap.xml' 
    );
  });
});

describe('formatSitemapURLs', function() {
  it('returns an array wether provided an array or a string', function() {
    assert.deepEqual(
      lib.formatSitemapURLs('http://example.com'),
      ['http://example.com']
    );
  });

  it('returns an array of strings when passed one', function() {
    assert.deepEqual(
      lib.formatSitemapURLs(['string1','string2']),
      ['string1','string2']
    );
  });
});

describe('getUrls', function(){
  // Not quite sure how to test this one as it requires variables from
  // the gruntfile and package.json
  xit('should provide me with my homepage', function () {
  });
});
