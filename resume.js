#!/usr/bin/env node

//--------------------------------------------------
//  Utility script for converting markdown to PDF
//  or HTML.
//--------------------------------------------------

'use strict';

var markdownpdf = require('markdown-pdf'),
    fs = require('fs');

var files = process.argv.slice(2);

files.forEach(function(el, index, array) {
    var out = el + '.pdf';
    fs.createReadStream(el)
        .pipe(markdownpdf({cssPath: '../../../resume.css'}))
        .pipe(fs.createWriteStream(out));
});
