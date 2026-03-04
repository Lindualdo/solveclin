const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function extractBg() {
    const html = await fetch('https://green-devices-212747.framer.app/').then(res => res.text());
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Look for all img tags that might be backgrounds
    const imgs = document.querySelectorAll('img');
    let bgUrls = [];
    imgs.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.includes('framerusercontent.com/images/')) {
            bgUrls.push({
                src: src,
                alt: img.getAttribute('alt') || '',
                style: img.getAttribute('style') || '',
                width: img.getAttribute('width') || '',
                height: img.getAttribute('height') || ''
            });
        }
    });

    // Look for inline styles with background-image
    const elementsWithStyle = document.querySelectorAll('[style*="background-image"]');
    elementsWithStyle.forEach(el => {
        const style = el.getAttribute('style');
        const match = style.match(/url\(['"]?(.*?)['"]?\)/);
        if (match && match[1].includes('framerusercontent.com/images/')) {
            bgUrls.push({
                src: match[1],
                type: 'inline-background'
            });
        }
    });

    console.log(JSON.stringify(bgUrls, null, 2));
}

extractBg().catch(console.error);
