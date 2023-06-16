const cacheName = "ToyHeroCache";
const appFiles = [
  "manifest.webmanifest",
  "pwa.js",
  "pages/discover.html",
  "pages/favourites.html",
  "pages/game.html",
  "pages/inbox.html",
  "pages/product.html",
  "pages/profile.html",
  "style/home.css",
  "style/game.css",
  "style/product.css",
  "style/profile.css",
  "style/chat.css",
  "style/discoverFavourites.css",
  "images/arrowUp.png",
  "images/avatarIcon.png",
  "images/carIcon.png",
  "images/chatDarkBlue.png",
  "images/filter.png",
  "images/logo.png",
  "images/logoScan.png",
  "images/searchIcon.png",
  "images/toys/dragonPlushie.png",
  "images/toys/peppaPigToy.png",
  "images/toys/poroToy.png",
  "images/toys/stitchToy.png",
  "images/starFilledBlue.png",
  "images/starFilledPink.png",
  "images/starUnfilledBlue.png",
  "images/starUnfilledPink.png",
  "images/chatIcon.png",
  "icon-192x192.png",
  "icon-256x256.png",
  "icon-384x384.png",
  "icon-512x512.png",
  "./",
  "index.html",
];

self.addEventListener("install", (installing) => {
  installing.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Service Worker: Caching important offline files");
      return cache.addAll(appFiles);
    })
  );
  console.log("Service Worker: I am being installed, hello world!");
});

self.addEventListener("activate", (activating) => {
  console.log("Service Worker: All systems online, ready to go!");
});

self.addEventListener("fetch", (fetching) => {
  fetching.respondWith(
    caches.match(fetching.request.url).then((response) => {
      console.log("Service Worker: Fetching resource " + fetching.request.url);
      return (
        response ||
        fetch(fetching.request)
          .then((response) => {
            console.log(
              "Service Worker: Resource " +
                fetching.request.url +
                " not available in cache"
            );
            return caches.open(cacheName).then((cache) => {
              console.log(
                "Service Worker: Caching (new) resource " + fetching.request.url
              );
              return response;
            });
          })
          .catch(function () {
            console.log("Service Worker: Fetching online failed, HAALLPPPP!!!");
          })
      );
    })
  );
  console.log("Service Worker: User threw a ball, I need to fetch it!");
});

self.addEventListener("push", (pushing) => {
  console.log(
    "Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :("
  );
});
