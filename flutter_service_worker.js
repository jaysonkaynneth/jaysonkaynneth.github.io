'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "e2aaaa0b70bf68231efef680c31b8e52",
"version.json": "29a707ffb87ec247f9ff5d19afd4cca1",
"JKFavicon.png": "f06c147ee0785356f72d9050e23f60dc",
"index.html": "036b6cd7de76b996fbbe420818e85a0e",
"/": "036b6cd7de76b996fbbe420818e85a0e",
"main.dart.js": "9072142012b56ac47814da6c984a9bf5",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "062d2697da98f27de35b9c7fd52863e8",
".git/config": "e41e4c6d117e7cb5e634be051595f023",
".git/objects/95/685e171b5edffdb50a36b9b1c899edb67f9388": "dab304fac6b7a45fbcd10b4f388d4c87",
".git/objects/92/0643c384a68c568d5537f262a48ce52c65553f": "7d49898a766de821e4f6637a94524c44",
".git/objects/68/d278d1115597b83b4f6d1b9d81b11b953e3732": "c627f3ade554a77cf5fae32104ead4a2",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/6f/148db7ad7a1f8ff8a221c84137dbb730e9488f": "eb01f028bbfa3c61fc2c911f98cab54a",
".git/objects/03/2ad5ea951396c2cc8b8c8351812a7b88d969fb": "8f47fa2dc1e2b0ec811657adc59c223f",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/6a/267194227ff123643b2de0122222ae539a93be": "a12cfce3cf0b27d5d96a3970f8bcc823",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/0b/af8db4fb48e1299d59e85aac8e78c6c3b5cf43": "a0d9933e10677f8e8ae715b4748f5abc",
".git/objects/0b/7101990c40672e74ca451ab4cf18e487819028": "1f834b089f83c6f51f61b6a4e6c908b1",
".git/objects/0b/ce40c64d7d1f59518ac5fe0f2c604d1c88f0b3": "07fff5eaa617e57b69e26b0f4144c29f",
".git/objects/93/1e1fc8546f53f038719326cf3f3900e7e37f97": "1388b84f0a9b44ef8d5b36950047f8cd",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/60/929bc723ebf990e0a29c3a0314432de9219a22": "1417bfd0eb4b9c9e568f6ffd6cfb0fca",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9d/2c31c9043ae442361c5c7365a80e7abb501938": "860e657f1054150883d333f64e1c0dd6",
".git/objects/b5/515c35a2df37e8446f8ff2ff73453334fb8cd7": "749f67c13391d50ea37b8b17aee8a512",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/b3/2d7015f9f02e47d0e85f09bc920cc3bc245a88": "c7e9d25ed2d7b74eabf2745ef0854556",
".git/objects/b3/ee29ba7b5e637c973c3af5c5fa0ce2dbbd745b": "b1863c2b722b514856b3860c51a0861f",
".git/objects/df/a7aa4295d3f7b29e418d2c938d2abc12131f44": "e68fb8d08f10601a0ac8e5de74fab163",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ac47caca7a589ea8daf8c5e563a4d21802df91": "670a2d7f4c9b72a97cd7abab0988a46d",
".git/objects/bc/f61380b636808418e5e7822d6508192f3b3486": "2742d8dd25814eec189bbd0f8552827a",
".git/objects/ab/0a741454e7d049d578100aaba3fe477efd8108": "b563ee36f70920b2c3cde5dbeadcdccd",
".git/objects/f4/eaf8b50ef6cf6c5c04529023940e1dd571796a": "022b2b675261aa773daef81d7f307dd5",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/577c647718e16f0ec2d0bb86f73a8c23536956": "585af9a17d65bc76b9e691b631a2d3fc",
".git/objects/c9/6a1b40c5fc60729cebb17c2f752a7daf67190a": "0c30d43cbacdf42236c56a7a2fc38f4c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/ec/04efaddc849943750d5cf5f0b191f7d8e78fbb": "8393324b89d99ff1f823e9ca800a051d",
".git/objects/4e/25f02ea7353572ab9f3f1e9abbdb50dbcb343d": "824820c23ab05d2df22c6c2d586cb215",
".git/objects/7c/625cb5074b658f8f57c6018210d0f840ab86bc": "9989370bcb04692c8d15349a335b5cf7",
".git/objects/16/1372479354dfbaecb68587d4e7d496445b5f49": "4eb18b43ec144f46319a4caf4e543507",
".git/objects/42/b2e14cabd0754d56868755d3745a4640b175e8": "bc08cc84f171e71dfd85439ffb596da5",
".git/objects/45/c5839b52916dd88364a8a0862dcc472a105f37": "51ad7f86688c2ff3d77428a367ac9bc3",
".git/objects/73/a685323a4242a3c491cc91556e0f45c114bf2a": "78216e0a0688d587010c1d29b9183db7",
".git/objects/74/d5c5c9820f731aed231c000d850d0b5ce3cd15": "b54c374aef915be2acd9fc7834049d36",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2a/d125cd8a4b25ffd76319669a4ccf53e8d38333": "f69588ee604dda48e62a5b768562bd67",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/0de35a41c1c90531b81840c4a1e5317542b005": "ad7e902107c7a0258d0bb19d861170f9",
".git/objects/6e/990616bba93125072fb3578f63b4dd212426ec": "4670dfa2bb640e23937a20d8307429d0",
".git/objects/9a/88e568be427fd12deee61eafdf22c787bce0d9": "1843051587842de65024626396626817",
".git/objects/09/58c45efaa0c1a46bc80512dd45349f6dba1665": "6e3ea855cd81454f2c45ea4c77c5df45",
".git/objects/5d/633c84877934ce4cc088ab0830d861bdeb0dd3": "4bf7fb140aea14d57592d9505e754e3a",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/21177660936b8882b8ccfc97a16a363d7f2b89": "435977761f1e3f1ade113805414717f1",
".git/objects/65/0a23ac1a3745a0e0dfb3978d19456453457443": "edf4c18f315731899a37e8ed8e98da98",
".git/objects/62/51b916035b3685491df0806ee1e88b90f6ff90": "cc90f4d8fd474d65dd4501aa98876297",
".git/objects/3a/5d6d5b7df82a0feadf084370287b311762b1ad": "16aa446d66378c03084450ef68bbb6c7",
".git/objects/6c/4d0b1328cd209d5724e8f0130a06f4d3b56b69": "d4479eec85728f65fd92f72ea12034f5",
".git/objects/6c/179445596dc332cd75942e9c20c31d2ff3cf10": "5f4b6837c21297ba3908277e9dd13f5a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e3b5161f3104f04d555d4ec2b46204b65361be": "b724041f6cfa61fa7f530afdbf36c657",
".git/objects/a7/1b1e24a45d8e295f605710339f58c9ac232fae": "2d57e5abac7bdcaf11ed83506409fc9b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/a08f65637c3fca53057736c8648c4c77139967": "8159f1e31d691b30b70e011a824e13e0",
".git/objects/d2/ac90e824c0f318c1112cb574a3753c83c5e6c4": "60ba9d9a8de410f46bd41962bd591694",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/412e7aa43a30fed24805d3a7bf0a2681c7821f": "e0dd51ddf350da9141058f1d90d90cec",
".git/objects/db/b4533fea5f8dbdd4427df080f8ba4877101406": "51fc908731685e859d2a5b19344d0673",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/de/55f861ca58072d98736965e248c50fe9a269fa": "d5c28b31725698df95c82584718d5e7e",
".git/objects/a6/f963dceb71d743b84c3060f44e26999949ead2": "767f7ecf7412120b94485f26f6873ae9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/c4/676149a1748e446e7459eaeb7e560a01080a40": "cfa4a78f62e8c5efa678eaedda0dd64c",
".git/objects/ea/bca6ef141fe97f25891698895ce4a5a8c1a96f": "a698a86ce2dd488186bd5cc9c3254a2b",
".git/objects/cd/f29bc4ffd93f385bd0a7c632688369d168f6a4": "eb2a0a810f5a34f2d5a44c92d3d8356a",
".git/objects/e6/131b5c0a32d2c9dc2130a76f65a7be0817ad36": "f325939189ef314be14fb5bc5404832c",
".git/objects/e6/e57050c1d3195ca413fc4dbfd81a7989afc6cf": "40e99840ad743cc634d73a624a8d9fff",
".git/objects/f7/3e1177fb9447aa97113540e47f7b651886fcf2": "85a7431113df9f03033be3ad9f516a6b",
".git/objects/e8/81930024c8add3a50f22d0e71fffe689b06d74": "1d006636fd78e060a26b50223c8eeb96",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ce/e5481579a4f4a92c33df0471bf2e301680b08e": "2874adbd58087ba16d44db67454cd1ff",
".git/objects/ce/344521099462869158c7a6a1856fc545cd75aa": "5bb9c292d35b9d3a4956b2bf5488d486",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/6b7ad3f0baf6aec2201ca718dd941f5b44f1f2": "1fa1633dab2e2d01c3957eae3119ca43",
".git/objects/83/cfad5890b9fb6a5ccbbf5f20f647fe20fae6d3": "de38eb3904dd74bca0ce9fb26ce178a2",
".git/objects/83/d9d7f5c75a048da78b63fca43adf0181f7fab3": "69f76c5e261992382ca9731321e86c6e",
".git/objects/77/4153bacbd03fda8f9a331835d526a944331ca2": "8d729b5a99ae5948b99a56062c2631a2",
".git/objects/4a/b0acb670c7f33bda387624f4699f4268e9bf3f": "a6a565feba0efe7dc84764e3ad8ae297",
".git/objects/23/26786b11e32210ab904de0ae42a37033333698": "130b5fdcd2a4d7c8f997364e7cdbbdac",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/4bac5c9d502bbb3549010871680b92937e2f3d": "f52a0088c3fd75fa267d4aa77ae30822",
".git/objects/1c/52883ffa8cddfed4b7ce7c7594e2de7477dba2": "2283be2ce7216d6a1f28daa31f5784a8",
".git/objects/82/d84f01c279441fb9aea3da3096f0680c79e1f1": "8f7f3f7da26371ed3cda2fab5d456e60",
".git/objects/40/74441c94018bef3913890023347c41f07da9ac": "fb0ec68c5eea83334c31b13eb28cee23",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/72285a11b8a8eb5037c9ebe0aaf1a90f2cc495": "bab0248b2c5fa94a1d8928645e8e2efd",
".git/objects/8b/c52bd988b4a33d460d2c5c8da61bad444d31a9": "6ff7e66a4f629dbf97a65f338f09670b",
".git/objects/7a/d6bb9dbc49f94b6121ddf6fe1338139b9f76ba": "e76fa7c3d59755fbe5073e50300a70f1",
".git/objects/8e/5428c755f307c23d9a2e35a5543a3c064bf82b": "369e5ba31ee17d1f87b48f4ee930b821",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d37f84e3fedc91ff6659fc3cbe05c6fd",
".git/logs/refs/heads/main": "d37f84e3fedc91ff6659fc3cbe05c6fd",
".git/logs/refs/remotes/origin/main": "8416e76628c1c906f10190a1bfc3d92c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a14c903fe08a6175acd3b85b1277e03d",
".git/refs/remotes/origin/main": "a14c903fe08a6175acd3b85b1277e03d",
".git/index": "31dd470dd3d7593e21a87df44b96b060",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/AssetManifest.json": "d9b05aed014995afc82edf793867e560",
"assets/NOTICES": "013b22ab5e6288e4aee7ce48a953120d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "38c7287860e986001d4f40a23c817786",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ddee1b6754f26514be2b660b1b72d41",
"assets/fonts/MaterialIcons-Regular.otf": "f0cf9493d03e949baa7a38b08ab568b7",
"assets/assets/flutter_logo.png": "8f433c4a76e0bcb9cc50ba8e8b430471",
"assets/assets/owl_launcher/change_ip_dialog.png": "9c23eb20c828ea5825042040755d7c77",
"assets/assets/owl_launcher/owl_launcher_logo.png": "806044e3aa82d9fb8cc0ffb196825169",
"assets/assets/owl_launcher/home_page.png": "87c7ea006082d936ffacc9b5ae6239c5",
"assets/assets/owl_launcher/pengaturan_page.png": "250e2941633583baa04a2a9f3272f50a",
"assets/assets/owl_launcher/search_page.png": "7f5a5444c8ddca5c43b888b38093d1d3",
"assets/assets/owl_launcher/client_secret_dialog.png": "87c3d8674e0c3c71f98d21b50454a84b",
"assets/assets/owl_launcher/tentang_aplikasi_page.png": "0e8bb791771d28c2e5735433b03f9be8",
"assets/assets/owl_launcher/change_pin_page.png": "ec7b5fcc3fc78316cae618a4747a620e",
"assets/assets/apple_logo.png": "e3b6f57b75f07ebaa41b9482b351e145",
"assets/assets/noise_texture.png": "b2aebf0485512abbe9fb4822fd283cc4",
"assets/assets/resume_logo.png": "c9d0c3f16e83b86da5f89a1869267a00",
"assets/assets/samsung_mockup.png": "1fb3e33f3274734173d6a955fccd766d",
"assets/assets/logos/chrome_logo.png": "835699fc64a8d68580730733e1e6c072",
"assets/assets/logos/flutter_logo.png": "8f433c4a76e0bcb9cc50ba8e8b430471",
"assets/assets/logos/gmail_logo_white.png": "9058c2ffac73b8022c572a4687c4effc",
"assets/assets/logos/apple_logo.png": "e3b6f57b75f07ebaa41b9482b351e145",
"assets/assets/logos/swift_logo.png": "5feee1d92a65e1b0743e6af3afc03327",
"assets/assets/logos/resume_logo.png": "c9d0c3f16e83b86da5f89a1869267a00",
"assets/assets/logos/safari_logo.png": "53f27cd3599bb22a6a7584f9b226d8d5",
"assets/assets/logos/github_logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/logos/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/logos/dart_logo.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/logos/apple_mail_logo.png": "4ba572463b40ee1403b0af14c5d55d66",
"assets/assets/logos/kotlin_logo.png": "3f3182e761cf45dcd05a2e745f917ce4",
"assets/assets/logos/android_logo.png": "aad5d86ecd87788ec2e33aaf617dba5f",
"assets/assets/logos/gmail_logo.png": "17db71b4b4b1604bf0be1455acf9e5d7",
"assets/assets/logos/linkedin_logo.png": "9d74c7d0cf599b3614f68a2c8ae7878b",
"assets/assets/github_logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/whatsapp_logo.png": "85becb35e8864e42a5796fd8e240fbfb",
"assets/assets/iphone_mockup.png": "394e4c86953e636fea8e29fd47a2db05",
"assets/assets/apphear/apphear_logo.png": "960f18569394445e178ec79136fb1ced",
"assets/assets/apphear/main%2520screen.png": "3bb7fcd7255170393a1bf3bd8d53b27b",
"assets/assets/apphear/recording%2520screen.png": "5b0b400123dd08fc9cc1c4223d6e4e3c",
"assets/assets/apphear/all%2520recordings%2520page.png": "f7e67e03b0800b888d2195b5e2473260",
"assets/assets/apphear/playback%2520screen.png": "da9054634c3db52ec355cbe3bfdcffdc",
"assets/assets/profile_pic.png": "9f854cd0331c0fe78e1e3c4477f31ca5",
"assets/assets/xpiry/shopping%2520list%2520screen.png": "6268fc0727fea19629dd9c91b7bc8e25",
"assets/assets/xpiry/add%2520items%2520screen.png": "30d147f6c73e75129ac5be313d4c44ce",
"assets/assets/xpiry/usage%2520report%2520screen.png": "1dbd6c84491a7e4d49b2041ac1f9129a",
"assets/assets/xpiry/all%2520items%2520page.png": "321fd5f5e7995ebdd9df3df1f0fd7539",
"assets/assets/xpiry/xpiry_logo.png": "6879ebec564d442685b65d8a5407461f",
"assets/assets/uena/stamp%2520android%2520old.jpg": "db54cc853bc1b55a5411b87e69dc7a83",
"assets/assets/uena/pop%2520up%2520purple%2520android.jpg": "9701b727831f769f5b10fd292f692645",
"assets/assets/uena/uenafood_logo.jpeg": "abd9504b20c31c3b28223a3ad5160bd6",
"assets/assets/uena/update%2520popup%2520android.jpeg": "c00b7de98651ac2e39157b93015ef5c2",
"assets/assets/uena/stamps%2520voucher%2520new%2520ios.jpeg": "0c9ed9a0a83d8ca271412ee32afc32f2",
"assets/assets/uena/stamp%2520with%2520voucher%2520android.jpeg": "fa887049aa54e7a545a07c9b953ed418",
"assets/assets/uena/pop%2520up%2520yellow%2520android.jpg": "b5ab768799b19fa8d1ca01a0f705b35c",
"assets/assets/android_logo.png": "aad5d86ecd87788ec2e33aaf617dba5f",
"assets/assets/gmail_logo.png": "17db71b4b4b1604bf0be1455acf9e5d7",
"assets/assets/linkedin_logo.png": "9d74c7d0cf599b3614f68a2c8ae7878b",
"assets/assets/totally/monthly%2520bills%2520screen.png": "5acf8534c54f387cd4ed38be628eaf27",
"assets/assets/totally/usage%2520screen.png": "5a2fd4cf45c3a8657ce2a077e346c188",
"assets/assets/totally/add%2520entry%2520screen.png": "9a394a94743a9b1644dd1d88b4c03416",
"assets/assets/totally/monthly%2520report%2520screen.png": "302c8042a54ced1a59a26026042d26ba",
"assets/assets/totally/totally_logo.png": "a83431f78e78b8b40e682d1d9c8e08ea",
"assets/assets/totally/bills%2520screen.png": "00d0b372298ef951c370956b066e9bff",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
