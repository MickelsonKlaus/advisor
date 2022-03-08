self.addEventListener("install", e => {
    console.log("working")
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./style.css", "./images/favicon-32x32.png", "./images/icon-dice.svg", "./images/pattern-divider-mobile.svg"])
        })
    )
})

self.addEventListener("fetch", e => {
    e.responseWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})