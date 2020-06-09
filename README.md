# hndiscuss-bookmarklet
Bookmarklet to go to the Hacker News discussion page of the current URL.

If there isn't a discussion page for the URL you're on, it will offer you to submit it.

Code (copy and paste to your bookmarks bar; unfortunately Github doesn't allow a real link in the readme)
```
javascript:(()=>{const w=window.open();fetch(`https://hn.algolia.com/api/v1/search?tags=story&query=${encodeURIComponent(window.location.href)}`).then(a => a.json()).then(a=>{const c=a.hits.filter(b=>b.url===window.location.href)[0];if(c){w.location.replace(`https://news.ycombinator.com/item?id=${c.objectID}`)}else{w.confirm('Not on HN. Submit?') ? w.location.replace(`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(document.location)}&t=${encodeURIComponent(document.title)}`):w.close();}})})()
```
<a href="javascript:(()=>{const w=window.open();fetch(`https://hn.algolia.com/api/v1/search?tags=story&query=${encodeURIComponent(window.location.href)}`).then(a=>a.json()).then(a=>{const c=a.hits.filter(b=>b.url===window.location.href)[0];if(c){w.location.replace(`https://news.ycombinator.com/item?id=${c.objectID}`)}else{w.confirm('Not on HN. Submit?')?w.location.replace(`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(document.location)}&t=${encodeURIComponent(document.title)}`):w.close();}})})()">HN submit</a>
