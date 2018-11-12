#!/usr/bin/env node

const markdownpdf = require('markdown-pdf'),
    fs = require('fs');

const options = {
    cssPath: './css/resume.css',
    remarkable: {
        breaks: false
    }
};

fs.readdir('./src', (err, files) => {
    files.forEach(file => {
        fs.createReadStream(`./src/${file}`)
            .pipe(markdownpdf(options))
            .pipe(fs.createWriteStream(`distribute/${file}.pdf`));
    });
});

