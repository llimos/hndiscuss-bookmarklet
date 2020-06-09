# hndiscuss-bookmarklet
Bookmarklet to go to the Hacker News discussion page of the current URL. Tested in Firefox.

If there isn't a discussion page for the URL you're on, it will offer you to submit it.

Code (highlight and drag to your bookmarks bar; unfortunately GitHub doesn't allow a real link in the readme)
```
javascript:(()=>{const w=window.open();fetch(`https://hn.algolia.com/api/v1/search?tags=story&query=${encodeURIComponent(window.location.href)}`).then(a=>a.json()).then(a=>{const c=a.hits.filter(b=>b.url===window.location.href)[0];if(c){w.location.replace(`https://news.ycombinator.com/item?id=${c.objectID}`)}else{w.confirm('Not on HN. Submit?')?w.location.replace(`https://news.ycombinator.com/submitlink?u=${encodeURIComponent(document.location)}&t=${encodeURIComponent(document.title)}`):w.close();}})})()
```

## How it works
It uses the [HN Search API](https://hn.algolia.com/api) from Algolia on the current URL. If a match is found it opens the discussion page in a new window. If not, it offers the user to submit and opens the submit page if so.
