# Changelog

## 0.1.0-beta.4 (2024-09-19)

Full Changelog: [v0.1.0-beta.3...v0.1.0-beta.4](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.3...v0.1.0-beta.4)

### Features

* **api:** OpenAPI spec update via Stainless API ([#104](https://github.com/Metronome-Industries/metronome-node/issues/104)) ([6cc74f3](https://github.com/Metronome-Industries/metronome-node/commit/6cc74f326221fcc00d01765248deab8821b22bb3))


### Bug Fixes

* **types:** remove leftover polyfill usage ([#103](https://github.com/Metronome-Industries/metronome-node/issues/103)) ([8faaf42](https://github.com/Metronome-Industries/metronome-node/commit/8faaf425cb227e1d02b8de4e123a3aefb650c8d8))


### Chores

* **docs:** fix snippets ([#105](https://github.com/Metronome-Industries/metronome-node/issues/105)) ([c99e5ea](https://github.com/Metronome-Industries/metronome-node/commit/c99e5ea02cb6523125535e2296e6266d99477e64))
* **internal:** add dev dependency ([#100](https://github.com/Metronome-Industries/metronome-node/issues/100)) ([bc3a17e](https://github.com/Metronome-Industries/metronome-node/commit/bc3a17e444052d409f3a9da1907178377c98a528))
* **internal:** fix some types ([#102](https://github.com/Metronome-Industries/metronome-node/issues/102)) ([eedfa95](https://github.com/Metronome-Industries/metronome-node/commit/eedfa95113d65ae2b7764eb6a034e39cc807c774))

## 0.1.0-beta.3 (2024-09-13)

Full Changelog: [v0.1.0-beta.2...v0.1.0-beta.3](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.2...v0.1.0-beta.3)

### Features

* **api:** OpenAPI spec update via Stainless API ([#93](https://github.com/Metronome-Industries/metronome-node/issues/93)) ([96e2738](https://github.com/Metronome-Industries/metronome-node/commit/96e2738640fa6e5dd9f6a00c57bec3da48e42c5e))


### Bug Fixes

* **errors:** pass message through to APIConnectionError ([#94](https://github.com/Metronome-Industries/metronome-node/issues/94)) ([383df6d](https://github.com/Metronome-Industries/metronome-node/commit/383df6d7b41b6e68722716daf4bfac5bc90dbb9a))
* **uploads:** avoid making redundant memory copies ([#91](https://github.com/Metronome-Industries/metronome-node/issues/91)) ([38c2861](https://github.com/Metronome-Industries/metronome-node/commit/38c2861bd37ddac6447357d36699938dbadd459b))


### Chores

* better object fallback behaviour for casting errors ([#95](https://github.com/Metronome-Industries/metronome-node/issues/95)) ([aa9e7ad](https://github.com/Metronome-Industries/metronome-node/commit/aa9e7ad3f48f6d6d2ad08c3093518e0cd326ab22))
* **internal:** codegen related update ([#96](https://github.com/Metronome-Industries/metronome-node/issues/96)) ([0df33e3](https://github.com/Metronome-Industries/metronome-node/commit/0df33e3ce5a0630f6be7c72ced8242af3f575973))
* **internal:** codegen related update ([#97](https://github.com/Metronome-Industries/metronome-node/issues/97)) ([03fb88a](https://github.com/Metronome-Industries/metronome-node/commit/03fb88a5885ae99703f3731e113b91bf6cdc3cbc))


### Documentation

* update CONTRIBUTING.md ([#98](https://github.com/Metronome-Industries/metronome-node/issues/98)) ([0af4791](https://github.com/Metronome-Industries/metronome-node/commit/0af479124895e36b02456ef31b8aee0ab9f1c1f8))

## 0.1.0-beta.2 (2024-09-05)

Full Changelog: [v0.1.0-beta.1...v0.1.0-beta.2](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.1...v0.1.0-beta.2)

### Features

* **api:** OpenAPI spec update via Stainless API ([#80](https://github.com/Metronome-Industries/metronome-node/issues/80)) ([64ca167](https://github.com/Metronome-Industries/metronome-node/commit/64ca167d1a58a2019335e66f6ce865eddd89a5e0))
* **api:** OpenAPI spec update via Stainless API ([#83](https://github.com/Metronome-Industries/metronome-node/issues/83)) ([b9b40f8](https://github.com/Metronome-Industries/metronome-node/commit/b9b40f8238a9df6b0a40e46484cf7dd2a37fdf29))
* **api:** OpenAPI spec update via Stainless API ([#89](https://github.com/Metronome-Industries/metronome-node/issues/89)) ([2189fbb](https://github.com/Metronome-Industries/metronome-node/commit/2189fbbacc85fba4dd92fff6a233fcbde4e2416a))


### Bug Fixes

* **client:** correct File construction from node-fetch Responses ([#86](https://github.com/Metronome-Industries/metronome-node/issues/86)) ([bd542df](https://github.com/Metronome-Industries/metronome-node/commit/bd542df2dd247dfaec1b7dfb69917bbb7e1eac54))


### Chores

* **ci:** check for build errors ([#82](https://github.com/Metronome-Industries/metronome-node/issues/82)) ([40011a9](https://github.com/Metronome-Industries/metronome-node/commit/40011a999f06ff27d38e2e854f68ae223249e51f))
* **ci:** install deps via ./script/bootstrap ([#85](https://github.com/Metronome-Industries/metronome-node/issues/85)) ([14ee02d](https://github.com/Metronome-Industries/metronome-node/commit/14ee02d3651d5038a640676be79dad9f22825140))
* **internal:** codegen related update ([#84](https://github.com/Metronome-Industries/metronome-node/issues/84)) ([f0753f2](https://github.com/Metronome-Industries/metronome-node/commit/f0753f272509d79b0b6d3be01393dd61c41ecbc2))
* **internal:** dependency updates ([#87](https://github.com/Metronome-Industries/metronome-node/issues/87)) ([1f4dd86](https://github.com/Metronome-Industries/metronome-node/commit/1f4dd860ab54c4a20eeb15018e6008c667a42dfc))
* **internal:** minor bump qs version ([#88](https://github.com/Metronome-Industries/metronome-node/issues/88)) ([603491f](https://github.com/Metronome-Industries/metronome-node/commit/603491fecaed5a8004e6ab19ea7d7fbf0f471c0b))

## 0.1.0-beta.1 (2024-08-23)

Full Changelog: [v0.1.0-beta.0...v0.1.0-beta.1](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.0...v0.1.0-beta.1)

### Features

* **api:** OpenAPI spec update via Stainless API ([#75](https://github.com/Metronome-Industries/metronome-node/issues/75)) ([c50a30a](https://github.com/Metronome-Industries/metronome-node/commit/c50a30a19c3eea878c71207173241acd56283dee))
* **api:** OpenAPI spec update via Stainless API ([#77](https://github.com/Metronome-Industries/metronome-node/issues/77)) ([c11168d](https://github.com/Metronome-Industries/metronome-node/commit/c11168df10fd4f2523670fbccc31eb6e2abb80ec))
* **api:** OpenAPI spec update via Stainless API ([#78](https://github.com/Metronome-Industries/metronome-node/issues/78)) ([5a6a54f](https://github.com/Metronome-Industries/metronome-node/commit/5a6a54f51fc0db786e8cc54297a6abac08b726c7))

## 0.1.0-beta.0 (2024-08-22)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-beta.0](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-alpha.4...v0.1.0-beta.0)

### Features

* **api:** OpenAPI spec update via Stainless API ([#55](https://github.com/Metronome-Industries/metronome-node/issues/55)) ([15bd178](https://github.com/Metronome-Industries/metronome-node/commit/15bd17847a400df178d25e6c922a7a6b690d6616))
* **api:** OpenAPI spec update via Stainless API ([#57](https://github.com/Metronome-Industries/metronome-node/issues/57)) ([0e9d365](https://github.com/Metronome-Industries/metronome-node/commit/0e9d3658783efbb87cb3bc41e7662a1506b1044f))
* **api:** OpenAPI spec update via Stainless API ([#58](https://github.com/Metronome-Industries/metronome-node/issues/58)) ([bdb2c46](https://github.com/Metronome-Industries/metronome-node/commit/bdb2c46ce76a3846e6de70ac09d8c61c2fd3a437))
* **api:** OpenAPI spec update via Stainless API ([#59](https://github.com/Metronome-Industries/metronome-node/issues/59)) ([270fe8a](https://github.com/Metronome-Industries/metronome-node/commit/270fe8a9402e448bd698d819737a8b83ed75d132))
* **api:** OpenAPI spec update via Stainless API ([#61](https://github.com/Metronome-Industries/metronome-node/issues/61)) ([4ce07d0](https://github.com/Metronome-Industries/metronome-node/commit/4ce07d03bf3ffdfebed6d71020da48be221c8fb0))
* **api:** OpenAPI spec update via Stainless API ([#64](https://github.com/Metronome-Industries/metronome-node/issues/64)) ([8fcd675](https://github.com/Metronome-Industries/metronome-node/commit/8fcd675ba3812b743b2212b87d116e990e6bcecc))
* **api:** OpenAPI spec update via Stainless API ([#66](https://github.com/Metronome-Industries/metronome-node/issues/66)) ([30fd815](https://github.com/Metronome-Industries/metronome-node/commit/30fd8154807d09a98222065b2e799604f943dc0a))
* **api:** OpenAPI spec update via Stainless API ([#67](https://github.com/Metronome-Industries/metronome-node/issues/67)) ([d9fbbb6](https://github.com/Metronome-Industries/metronome-node/commit/d9fbbb60f0d031965393a3ead353e31ee2db281b))
* **api:** OpenAPI spec update via Stainless API ([#68](https://github.com/Metronome-Industries/metronome-node/issues/68)) ([888fa5a](https://github.com/Metronome-Industries/metronome-node/commit/888fa5a10d7b3c7f71bc62b6b1985eb62d4b60d3))
* **api:** OpenAPI spec update via Stainless API ([#69](https://github.com/Metronome-Industries/metronome-node/issues/69)) ([51f3a7d](https://github.com/Metronome-Industries/metronome-node/commit/51f3a7db6cb57a770a9b9aab7f05a19587a94681))
* **api:** OpenAPI spec update via Stainless API ([#70](https://github.com/Metronome-Industries/metronome-node/issues/70)) ([6b4fd60](https://github.com/Metronome-Industries/metronome-node/commit/6b4fd609d5169648f53f3518f83b93c550c78604))
* **api:** OpenAPI spec update via Stainless API ([#72](https://github.com/Metronome-Industries/metronome-node/issues/72)) ([3c5a396](https://github.com/Metronome-Industries/metronome-node/commit/3c5a39610786728f27aeb00a4f97b705047b61d3))
* **api:** OpenAPI spec update via Stainless API ([#73](https://github.com/Metronome-Industries/metronome-node/issues/73)) ([b275770](https://github.com/Metronome-Industries/metronome-node/commit/b2757709a197d7544498f383fdea264b856823ac))


### Chores

* **ci:** bump prism mock server version ([#63](https://github.com/Metronome-Industries/metronome-node/issues/63)) ([9058bc6](https://github.com/Metronome-Industries/metronome-node/commit/9058bc65e94042fe4f4627c2ea3c705882314603))
* **ci:** minor changes ([#62](https://github.com/Metronome-Industries/metronome-node/issues/62)) ([a2a72d3](https://github.com/Metronome-Industries/metronome-node/commit/a2a72d3c31f5399882552e81a2f81e424c952582))
* **examples:** minor formatting changes ([#65](https://github.com/Metronome-Industries/metronome-node/issues/65)) ([d080d1b](https://github.com/Metronome-Industries/metronome-node/commit/d080d1b1d909c01c57a1f8648dde3c8fe960acf0))
* force eslint to use non flat config ([#60](https://github.com/Metronome-Industries/metronome-node/issues/60)) ([52c52f5](https://github.com/Metronome-Industries/metronome-node/commit/52c52f587333151c0a3f59cb2939e4853864619b))
* update SDK settings ([#71](https://github.com/Metronome-Industries/metronome-node/issues/71)) ([a736a0d](https://github.com/Metronome-Industries/metronome-node/commit/a736a0da2d5c18bba34a1d082b3c3a01719b4cba))

## 0.1.0-alpha.4 (2024-08-01)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** OpenAPI spec update via Stainless API ([#28](https://github.com/Metronome-Industries/metronome-node/issues/28)) ([d8e6bd8](https://github.com/Metronome-Industries/metronome-node/commit/d8e6bd81bffc2ed5a90b8ca876f3dbe067d42a2c))
* **api:** OpenAPI spec update via Stainless API ([#30](https://github.com/Metronome-Industries/metronome-node/issues/30)) ([ca6a6b2](https://github.com/Metronome-Industries/metronome-node/commit/ca6a6b27f22877d53b161538820f328ff9213924))
* **api:** OpenAPI spec update via Stainless API ([#31](https://github.com/Metronome-Industries/metronome-node/issues/31)) ([a028087](https://github.com/Metronome-Industries/metronome-node/commit/a028087120218009fb756c5dec3441ec2bf88f92))
* **api:** OpenAPI spec update via Stainless API ([#32](https://github.com/Metronome-Industries/metronome-node/issues/32)) ([b1158a2](https://github.com/Metronome-Industries/metronome-node/commit/b1158a259cb774240c94ee7127723cfc9d471fda))
* **api:** OpenAPI spec update via Stainless API ([#33](https://github.com/Metronome-Industries/metronome-node/issues/33)) ([a6be9e9](https://github.com/Metronome-Industries/metronome-node/commit/a6be9e9f523e9eecfd82e3e87b54c5a5623d79aa))
* **api:** OpenAPI spec update via Stainless API ([#34](https://github.com/Metronome-Industries/metronome-node/issues/34)) ([1412cfe](https://github.com/Metronome-Industries/metronome-node/commit/1412cfe826183ee4b26aa31a742548d8d27c3701))
* **api:** OpenAPI spec update via Stainless API ([#35](https://github.com/Metronome-Industries/metronome-node/issues/35)) ([af30903](https://github.com/Metronome-Industries/metronome-node/commit/af30903856c825e52421a4fdb3af9d4d89b1b7a2))
* **api:** OpenAPI spec update via Stainless API ([#39](https://github.com/Metronome-Industries/metronome-node/issues/39)) ([deedff3](https://github.com/Metronome-Industries/metronome-node/commit/deedff33df21403effe5d60492336779f6988f84))
* **api:** OpenAPI spec update via Stainless API ([#44](https://github.com/Metronome-Industries/metronome-node/issues/44)) ([59de927](https://github.com/Metronome-Industries/metronome-node/commit/59de927af450fbc7626cfc382c48906751491043))
* **api:** OpenAPI spec update via Stainless API ([#49](https://github.com/Metronome-Industries/metronome-node/issues/49)) ([1281d74](https://github.com/Metronome-Industries/metronome-node/commit/1281d744182785af6f3ce7bd8da4d6b8a8985fbf))
* **api:** OpenAPI spec update via Stainless API ([#51](https://github.com/Metronome-Industries/metronome-node/issues/51)) ([eab9d3b](https://github.com/Metronome-Industries/metronome-node/commit/eab9d3b5536898c90cf510a7319941d1406f4ed4))
* **api:** OpenAPI spec update via Stainless API ([#52](https://github.com/Metronome-Industries/metronome-node/issues/52)) ([c0bbb62](https://github.com/Metronome-Industries/metronome-node/commit/c0bbb6271252fbce053958ee3a03fd5df6b71f86))


### Bug Fixes

* **compat:** remove ReadableStream polyfill redundant since node v16 ([#47](https://github.com/Metronome-Industries/metronome-node/issues/47)) ([668bca2](https://github.com/Metronome-Industries/metronome-node/commit/668bca2beba7924da0614bf264e5f9af87501a87))
* use relative paths ([#46](https://github.com/Metronome-Industries/metronome-node/issues/46)) ([91fc393](https://github.com/Metronome-Industries/metronome-node/commit/91fc393a15cd2dcd75db88de0e4fffe40f1edcc5))


### Chores

* **ci:** correctly tag pre-release npm packages ([#53](https://github.com/Metronome-Industries/metronome-node/issues/53)) ([aa857ca](https://github.com/Metronome-Industries/metronome-node/commit/aa857ca701bc20091ff431e7c7bb691e05354e9c))
* **ci:** limit release doctor target branches ([#38](https://github.com/Metronome-Industries/metronome-node/issues/38)) ([373dc8a](https://github.com/Metronome-Industries/metronome-node/commit/373dc8a165398998e12bfaba767d1ae9e36f8916))
* **ci:** limit release doctor target branches ([#42](https://github.com/Metronome-Industries/metronome-node/issues/42)) ([43fe4fb](https://github.com/Metronome-Industries/metronome-node/commit/43fe4fb2f071139e8e02eda993f5de6fc989e9b1))
* **docs:** fix incorrect client var names ([#48](https://github.com/Metronome-Industries/metronome-node/issues/48)) ([0a62e2c](https://github.com/Metronome-Industries/metronome-node/commit/0a62e2c32a4e75511b19383e62aac9fae3fa7060))
* **docs:** mention support of web browser runtimes ([#36](https://github.com/Metronome-Industries/metronome-node/issues/36)) ([be42b42](https://github.com/Metronome-Industries/metronome-node/commit/be42b42c94fd138c4907aaf1fff32cdb15ff134b))
* **docs:** use client instead of package name in Node examples ([#37](https://github.com/Metronome-Industries/metronome-node/issues/37)) ([f50e036](https://github.com/Metronome-Industries/metronome-node/commit/f50e036c4079ef9847272cd184f6e33e05f46d57))
* **docs:** use client instead of package name in Node examples ([#41](https://github.com/Metronome-Industries/metronome-node/issues/41)) ([fa333b0](https://github.com/Metronome-Industries/metronome-node/commit/fa333b0b534d5c8c02b2776ff4253145903790d6))
* **internal:** add constant for default timeout ([#50](https://github.com/Metronome-Industries/metronome-node/issues/50)) ([9c44d56](https://github.com/Metronome-Industries/metronome-node/commit/9c44d56b6b7a283868325d5104870a22ef5eb990))
* **internal:** codegen related update ([#40](https://github.com/Metronome-Industries/metronome-node/issues/40)) ([898ec86](https://github.com/Metronome-Industries/metronome-node/commit/898ec86db2ef0388e011516b72f3df5e59519130))
* **internal:** refactor release doctor script ([#43](https://github.com/Metronome-Industries/metronome-node/issues/43)) ([ec09b32](https://github.com/Metronome-Industries/metronome-node/commit/ec09b32287c12bcef7a8e86c7f0c502191f1f253))
* **tests:** update prism version ([#45](https://github.com/Metronome-Industries/metronome-node/issues/45)) ([6bc6f8f](https://github.com/Metronome-Industries/metronome-node/commit/6bc6f8f29397e3c790137b8e62453d11b84849e8))

## 0.1.0-alpha.3 (2024-06-14)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** OpenAPI spec update via Stainless API ([#22](https://github.com/Metronome-Industries/metronome-node/issues/22)) ([b334bab](https://github.com/Metronome-Industries/metronome-node/commit/b334baba7f444a7a9a5adefb05ff9d5ce81074ae))
* **api:** OpenAPI spec update via Stainless API ([#24](https://github.com/Metronome-Industries/metronome-node/issues/24)) ([8449089](https://github.com/Metronome-Industries/metronome-node/commit/844908992ce8a1d722524660e9b17174342baee7))
* **api:** OpenAPI spec update via Stainless API ([#25](https://github.com/Metronome-Industries/metronome-node/issues/25)) ([957383b](https://github.com/Metronome-Industries/metronome-node/commit/957383ba18d0eff67b5fc121d277b77865d40383))
* Update README.md with warning and remove Stainless branding ([#26](https://github.com/Metronome-Industries/metronome-node/issues/26)) ([79eb373](https://github.com/Metronome-Industries/metronome-node/commit/79eb3731461b67dac82cc43a8e397cc39c663fa8))

## 0.1.0-alpha.2 (2024-06-10)

Full Changelog: [v0.1.0-alpha.0...v0.1.0-alpha.2](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-alpha.0...v0.1.0-alpha.2)

### Features

* **api:** update via SDK Studio ([#19](https://github.com/Metronome-Industries/metronome-node/issues/19)) ([363050b](https://github.com/Metronome-Industries/metronome-node/commit/363050b908b2680bbed116943dd1d19a688aba8a))
* **api:** update via SDK Studio ([#20](https://github.com/Metronome-Industries/metronome-node/issues/20)) ([56338f4](https://github.com/Metronome-Industries/metronome-node/commit/56338f4dc2222243ce9e889394ff472aa37ec154))


### Chores

* **internal:** version bump ([#17](https://github.com/Metronome-Industries/metronome-node/issues/17)) ([3f60240](https://github.com/Metronome-Industries/metronome-node/commit/3f60240d1d5c4b453cbd33cbdefc6ea92c75b091))

## 0.1.0-alpha.0 (2024-06-08)

Full Changelog: [v0.0.1...v0.1.0-alpha.0](https://github.com/Metronome-Industries/metronome-node/compare/v0.0.1...v0.1.0-alpha.0)

### Features

* **api:** add webhook helpers ([ea63380](https://github.com/Metronome-Industries/metronome-node/commit/ea63380bf6183c1d01eafdc33ff13a7a3282e492))
* **api:** OpenAPI spec update ([42751ad](https://github.com/Metronome-Industries/metronome-node/commit/42751ad3173c0a6a993265dc92631e1a914e1662))
* **api:** OpenAPI spec update ([#2](https://github.com/Metronome-Industries/metronome-node/issues/2)) ([b8f4c7f](https://github.com/Metronome-Industries/metronome-node/commit/b8f4c7fc25a31685ba33f640c1c9500fc5985dea))
* **api:** OpenAPI spec update ([#3](https://github.com/Metronome-Industries/metronome-node/issues/3)) ([9ce64bb](https://github.com/Metronome-Industries/metronome-node/commit/9ce64bb3f0976a406fa4f23c794e81852153a33b))
* **api:** OpenAPI spec update ([#4](https://github.com/Metronome-Industries/metronome-node/issues/4)) ([44148ba](https://github.com/Metronome-Industries/metronome-node/commit/44148ba28a0a04a02af9856a1bbc8efb74986348))
* **api:** OpenAPI spec update ([#5](https://github.com/Metronome-Industries/metronome-node/issues/5)) ([373257c](https://github.com/Metronome-Industries/metronome-node/commit/373257c2910803de72af5f49e06d13937744787d))
* **api:** OpenAPI spec update ([#6](https://github.com/Metronome-Industries/metronome-node/issues/6)) ([60f9ce3](https://github.com/Metronome-Industries/metronome-node/commit/60f9ce3c5ee6162de1d04c2f0486c5cb6b1ace89))
* **api:** OpenAPI spec update ([#7](https://github.com/Metronome-Industries/metronome-node/issues/7)) ([5e8ac18](https://github.com/Metronome-Industries/metronome-node/commit/5e8ac18a71efec7622898d0ef31975388c707269))
* **api:** OpenAPI spec update via Stainless API ([#11](https://github.com/Metronome-Industries/metronome-node/issues/11)) ([67c97fe](https://github.com/Metronome-Industries/metronome-node/commit/67c97fe471537076fd871d67580a8a7369c8f38d))
* **api:** OpenAPI spec update via Stainless API ([#13](https://github.com/Metronome-Industries/metronome-node/issues/13)) ([1a999c9](https://github.com/Metronome-Industries/metronome-node/commit/1a999c948e92880856bc84411dc7332ea84a6066))
* **api:** OpenAPI spec update via Stainless API ([#15](https://github.com/Metronome-Industries/metronome-node/issues/15)) ([55303bb](https://github.com/Metronome-Industries/metronome-node/commit/55303bb8f120caa2cd1eb3a2b6405de410519d48))
* **api:** OpenAPI spec update via Stainless API ([#8](https://github.com/Metronome-Industries/metronome-node/issues/8)) ([e99fb08](https://github.com/Metronome-Industries/metronome-node/commit/e99fb083497999a1ba945a0f4d0c0b79b8b02e7c))
* **api:** update via SDK Studio ([#10](https://github.com/Metronome-Industries/metronome-node/issues/10)) ([10c779d](https://github.com/Metronome-Industries/metronome-node/commit/10c779dd119a61303fb0e74fd8710b02a4c49594))
* **api:** update via SDK Studio ([#12](https://github.com/Metronome-Industries/metronome-node/issues/12)) ([37e5db3](https://github.com/Metronome-Industries/metronome-node/commit/37e5db362b412e6ca6be32be35e7f43ff92d0d01))
* **api:** update via SDK Studio ([#14](https://github.com/Metronome-Industries/metronome-node/issues/14)) ([861f35c](https://github.com/Metronome-Industries/metronome-node/commit/861f35cb321a0bad956098c4a52a2b52e989dec7))
* **api:** update via SDK Studio ([#9](https://github.com/Metronome-Industries/metronome-node/issues/9)) ([cd2e807](https://github.com/Metronome-Industries/metronome-node/commit/cd2e80774b0c28e97d82a3a394275dff012680ba))
