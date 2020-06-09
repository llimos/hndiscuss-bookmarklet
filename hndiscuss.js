// We need to open the window first, otherwise Firefox popup-blocks it
const w = window.open(); 
fetch(`https://hn.algolia.com/api/v1/search?tags=story&query=${encodeURIComponent(window.location.href)}`)
    .then(res => res.json())
    .then(res => {
        const hit = a.hits.filter(b => b.url === window.location.href)[0];
        if (hit) {
            w.location.replace(`https://news.ycombinator.com/item?id=${c.objectID}`) 
        } else { 
            w.confirm('Not on HN. Submit?') 
                ? w.location.replace(`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(document.location)}&t=${encodeURIComponent(document.title)}`) 
                : w.close(); 
        } 
    })