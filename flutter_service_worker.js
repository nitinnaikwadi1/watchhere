'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f9fdf4d235db46e8e02369c14fbd594e",
"assets/AssetManifest.bin.json": "da49e4e2050a64b7e10cbd1e3cc33bcf",
"assets/AssetManifest.json": "7b1225c08446f7c38106f9fa5aedc2a5",
"assets/assets/audio/surprise_tune_birthday.mp3": "d9afc03f8e71f915b4b4cff79b15d711",
"assets/assets/images/day_backg/day_backg_1.png": "593df118a66597afcd66c6499119944c",
"assets/assets/images/day_backg/day_backg_10.png": "a00997d809b3d34e9f8d8e66cf65809e",
"assets/assets/images/day_backg/day_backg_11.png": "b12bd884e345f802de51a33193ecf3e0",
"assets/assets/images/day_backg/day_backg_12.png": "ab43c66b0c7c4aa38b57ddb5ce8f2b1a",
"assets/assets/images/day_backg/day_backg_13.png": "43bf00f02467f1edceed7e176c76667b",
"assets/assets/images/day_backg/day_backg_2.png": "419e06dc43017ec1a3c5c5a4560d6acc",
"assets/assets/images/day_backg/day_backg_3.png": "6b8af6afb6e30b89fe1f10e324b80738",
"assets/assets/images/day_backg/day_backg_4.png": "97c01da220186df6e042d977cdfe08fd",
"assets/assets/images/day_backg/day_backg_5.png": "50a5ee0253ce53b27f885caf85073f1d",
"assets/assets/images/day_backg/day_backg_6.png": "68fa9239d0707d296079bbc324bfc79c",
"assets/assets/images/day_backg/day_backg_7.png": "ed4c8e1c1be7a468af8882257f9b58bd",
"assets/assets/images/day_backg/day_backg_8.png": "3308a110e6721213039748a6629841b5",
"assets/assets/images/day_backg/day_backg_9.png": "87345a5e44eb52c87d03ae368c8e81a7",
"assets/assets/images/night_backg/night_backg_1.png": "13c076015c37db20f0732e22c5f6832b",
"assets/assets/images/night_backg/night_backg_10.png": "53b83cc264216c3e2705f8fa8702fdd3",
"assets/assets/images/night_backg/night_backg_11.png": "cc1df6b937afa5a1edfb7dfd68aa11fa",
"assets/assets/images/night_backg/night_backg_12.png": "78571a12fc2f68c8a593465698f7bb47",
"assets/assets/images/night_backg/night_backg_13.png": "a880599dbeb8ddd1ba7169c2f73e9ce3",
"assets/assets/images/night_backg/night_backg_14.png": "e9a71a6ed078f9c13cb0561db799be40",
"assets/assets/images/night_backg/night_backg_15.png": "af5764fad1727caa6cd8a529527bf146",
"assets/assets/images/night_backg/night_backg_2.png": "c0a9d27aa9308adbfa8cb0cc90d926ef",
"assets/assets/images/night_backg/night_backg_3.png": "3e614088d32aff241059607a9b2c246e",
"assets/assets/images/night_backg/night_backg_4.png": "e51916dfd24cd13146242fdb2f162bc6",
"assets/assets/images/night_backg/night_backg_5.png": "b6b40ef98d913743e947bc96e4789351",
"assets/assets/images/night_backg/night_backg_6.png": "7455f1f9294812c9510a24e5684143a2",
"assets/assets/images/night_backg/night_backg_7.png": "e4523a0c64a86eb054aaa7587ec9ce4f",
"assets/assets/images/night_backg/night_backg_8.png": "5b36f79e76ed99731e90601409a8c7c9",
"assets/assets/images/night_backg/night_backg_9.png": "8b9a891c4aeabc1b5ae5f9c8a5895ef3",
"assets/assets/images/surprise/bday_day.gif": "cc37c4ae038de463be6fe7d5bfc7efef",
"assets/assets/images/surprise/bday_night.gif": "a2c29b8eed0bb04669f06bf9dc601cab",
"assets/assets/images/surprise/close_button.gif": "fb397080e3c501d073a6cbcc4d60dc46",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "58ebf5947c421c26899f0f13f9d58a8c",
"assets/NOTICES": "9ad65cb7fd8a7e22e63bca7650de250d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "05f54804cbb456f01a92631a5056bc3a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "0b3a0ef6c5a8b8bab1c7b61f6de934b6",
"icons/Icon-192.png": "0b388ea6fed38ad1290f887c21ee10d6",
"icons/Icon-512.png": "5a4674aa460a96821209bb2615ce2c3f",
"index.html": "3fc653014ffe72fb639ebceaf3972fb8",
"/": "3fc653014ffe72fb639ebceaf3972fb8",
"main.dart.js": "6d3b82165dccc0172ee0b935cfaeeef9",
"manifest.json": "523f95aaf4fc717c24ba5f452856e354",
"version.json": "10c82317eaa841fef2d36c1195dec585"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
