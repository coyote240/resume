#!/usr/bin/env node

let markdownpdf = require('markdown-pdf'),
    fs = require('fs');

let options = {
    cssPath: 'css/resume.css',
    remarkable: {
        breaks: false
    }
};

fs.createReadStream('src/resume.md')
    .pipe(markdownpdf(options))
    .pipe(fs.createWriteStream('distribute/resume.pdf'));
