'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f30bc3ff8abe502c660bcecae512a253",
"assets/AssetManifest.bin.json": "b990df2a01ed14b90d5cf4c97938144b",
"assets/assets/apphear/all%2520recordings%2520page.png": "f7e67e03b0800b888d2195b5e2473260",
"assets/assets/apphear/apphear_logo.png": "960f18569394445e178ec79136fb1ced",
"assets/assets/apphear/main%2520screen.png": "3bb7fcd7255170393a1bf3bd8d53b27b",
"assets/assets/apphear/playback%2520screen.png": "da9054634c3db52ec355cbe3bfdcffdc",
"assets/assets/apphear/recording%2520screen.png": "5b0b400123dd08fc9cc1c4223d6e4e3c",
"assets/assets/iphone_mockup.png": "394e4c86953e636fea8e29fd47a2db05",
"assets/assets/logos/android_logo.png": "aad5d86ecd87788ec2e33aaf617dba5f",
"assets/assets/logos/apple_logo.png": "e3b6f57b75f07ebaa41b9482b351e145",
"assets/assets/logos/apple_mail_logo.png": "4ba572463b40ee1403b0af14c5d55d66",
"assets/assets/logos/chrome_logo.png": "835699fc64a8d68580730733e1e6c072",
"assets/assets/logos/dart_logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/logos/flutter_logo.png": "8f433c4a76e0bcb9cc50ba8e8b430471",
"assets/assets/logos/github_logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/logos/gmail_logo.png": "17db71b4b4b1604bf0be1455acf9e5d7",
"assets/assets/logos/gmail_logo_white.png": "9058c2ffac73b8022c572a4687c4effc",
"assets/assets/logos/kotlin_logo.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/logos/linkedin_logo.png": "9d74c7d0cf599b3614f68a2c8ae7878b",
"assets/assets/logos/resume_logo.png": "c9d0c3f16e83b86da5f89a1869267a00",
"assets/assets/logos/safari_logo.png": "53f27cd3599bb22a6a7584f9b226d8d5",
"assets/assets/logos/swift_logo.png": "5feee1d92a65e1b0743e6af3afc03327",
"assets/assets/logos/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/noise_texture.png": "b2aebf0485512abbe9fb4822fd283cc4",
"assets/assets/owl_launcher/change_ip_dialog.png": "9c23eb20c828ea5825042040755d7c77",
"assets/assets/owl_launcher/change_pin_page.png": "ec7b5fcc3fc78316cae618a4747a620e",
"assets/assets/owl_launcher/client_secret_dialog.png": "87c3d8674e0c3c71f98d21b50454a84b",
"assets/assets/owl_launcher/home_page.png": "87c7ea006082d936ffacc9b5ae6239c5",
"assets/assets/owl_launcher/owl_launcher_logo.png": "806044e3aa82d9fb8cc0ffb196825169",
"assets/assets/owl_launcher/pengaturan_page.png": "250e2941633583baa04a2a9f3272f50a",
"assets/assets/owl_launcher/search_page.png": "7f5a5444c8ddca5c43b888b38093d1d3",
"assets/assets/owl_launcher/tentang_aplikasi_page.png": "0e8bb791771d28c2e5735433b03f9be8",
"assets/assets/profile_pic.png": "9f854cd0331c0fe78e1e3c4477f31ca5",
"assets/assets/samsung_mockup.png": "1fb3e33f3274734173d6a955fccd766d",
"assets/assets/totally/add%2520entry%2520screen.png": "9a394a94743a9b1644dd1d88b4c03416",
"assets/assets/totally/bills%2520screen.png": "00d0b372298ef951c370956b066e9bff",
"assets/assets/totally/monthly%2520bills%2520screen.png": "5acf8534c54f387cd4ed38be628eaf27",
"assets/assets/totally/monthly%2520report%2520screen.png": "302c8042a54ced1a59a26026042d26ba",
"assets/assets/totally/totally_logo.png": "a83431f78e78b8b40e682d1d9c8e08ea",
"assets/assets/totally/usage%2520screen.png": "5a2fd4cf45c3a8657ce2a077e346c188",
"assets/assets/ubee/ubee_logo.png": "6e604066f1b60ced81c0f0d4017465f4",
"assets/assets/uena/pop%2520up%2520purple%2520android.jpg": "9701b727831f769f5b10fd292f692645",
"assets/assets/uena/pop%2520up%2520yellow%2520android.jpg": "b5ab768799b19fa8d1ca01a0f705b35c",
"assets/assets/uena/stamp%2520android%2520old.jpg": "db54cc853bc1b55a5411b87e69dc7a83",
"assets/assets/uena/stamp%2520with%2520voucher%2520android.jpeg": "fa887049aa54e7a545a07c9b953ed418",
"assets/assets/uena/stamps%2520voucher%2520new%2520ios.jpeg": "0c9ed9a0a83d8ca271412ee32afc32f2",
"assets/assets/uena/uenafood_logo.jpeg": "abd9504b20c31c3b28223a3ad5160bd6",
"assets/assets/uena/update%2520popup%2520android.jpeg": "c00b7de98651ac2e39157b93015ef5c2",
"assets/assets/xpiry/add%2520items%2520screen.png": "30d147f6c73e75129ac5be313d4c44ce",
"assets/assets/xpiry/all%2520items%2520page.png": "321fd5f5e7995ebdd9df3df1f0fd7539",
"assets/assets/xpiry/shopping%2520list%2520screen.png": "6268fc0727fea19629dd9c91b7bc8e25",
"assets/assets/xpiry/usage%2520report%2520screen.png": "1dbd6c84491a7e4d49b2041ac1f9129a",
"assets/assets/xpiry/xpiry_logo.png": "6879ebec564d442685b65d8a5407461f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5b9a4de2f4e7d36d53d0bd0fbbf953eb",
"assets/NOTICES": "fae897ad6ea39aac31d850f347deba5b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "ebc63a87f6c5a865d1a7f954392b164a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "036b6cd7de76b996fbbe420818e85a0e",
"/": "036b6cd7de76b996fbbe420818e85a0e",
"JKFavicon.png": "f06c147ee0785356f72d9050e23f60dc",
"main.dart.js": "11f4cd240c5dbecdaf761a8460a24cde",
"manifest.json": "062d2697da98f27de35b9c7fd52863e8",
"version.json": "29a707ffb87ec247f9ff5d19afd4cca1"};
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
