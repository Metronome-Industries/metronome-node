# Changelog

## 0.2.0 (2025-07-31)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([87261b8](https://github.com/Metronome-Industries/metronome-node/commit/87261b8a5114bf6b783b41ec8bf5cf9153789a23))
* **api:** api update ([d5bb1fc](https://github.com/Metronome-Industries/metronome-node/commit/d5bb1fcf8d555dba0b4302fee6b3fc3b8d7035b5))
* **api:** api update ([55b4980](https://github.com/Metronome-Industries/metronome-node/commit/55b4980a82d2d03303fb9750b5d94df04e6691ba))
* **api:** api update ([f82d931](https://github.com/Metronome-Industries/metronome-node/commit/f82d931a0f2c19bdcccb3b84f934b4b0d78a0b6d))
* **api:** api update ([17bcd56](https://github.com/Metronome-Industries/metronome-node/commit/17bcd5644382bac31d9e9141b2787856856d4dfe))
* **api:** api update ([1ed6adf](https://github.com/Metronome-Industries/metronome-node/commit/1ed6adf3bc3dc869939bb17231cc554e6864549d))
* **api:** api update ([d7e8869](https://github.com/Metronome-Industries/metronome-node/commit/d7e8869855af380dd27225b154b22134cc169d7e))
* **api:** api update ([9416c33](https://github.com/Metronome-Industries/metronome-node/commit/9416c334b94acc3fc21ac0ed13a3f935680296e3))
* **api:** api update ([35b011e](https://github.com/Metronome-Industries/metronome-node/commit/35b011ec7776ceaf1bbdeabeb5f59b270494e42d))
* **api:** api update ([fe1cfec](https://github.com/Metronome-Industries/metronome-node/commit/fe1cfec62380940f235af23f195bfb60f287bf7a))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([6360a30](https://github.com/Metronome-Industries/metronome-node/commit/6360a30406f17497609bf5bd84748a627ad9f646))
* **mcp:** fix tool description of jq_filter ([ca5d633](https://github.com/Metronome-Industries/metronome-node/commit/ca5d633cce8c971c42df4c909984c28bbf69a565))
* **mcp:** reverse validJson capability option and limit scope ([bd6e8f5](https://github.com/Metronome-Industries/metronome-node/commit/bd6e8f5014961d7fc94e0316a4363ac44c724cfa))


### Chores

* **internal:** remove redundant imports config ([f5025bd](https://github.com/Metronome-Industries/metronome-node/commit/f5025bd85a565940a8cf5ebff1d7f7afe24fbe21))

## 0.1.0 (2025-07-24)

Full Changelog: [v0.1.0-beta.12...v0.1.0](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.12...v0.1.0)

### Features

* **api:** Allow for Pagination past empty pages ([1b1308b](https://github.com/Metronome-Industries/metronome-node/commit/1b1308b513d14ae4da8c4c2626b31979812ab752))
* **api:** api update ([b9a103e](https://github.com/Metronome-Industries/metronome-node/commit/b9a103e4cb6df2b6aee6abb86b45b80629f015dd))
* **api:** api update ([2615251](https://github.com/Metronome-Industries/metronome-node/commit/26152511f0ca5b5fc6c899ad67edbdd27035d9a8))
* **api:** api update ([2bf2236](https://github.com/Metronome-Industries/metronome-node/commit/2bf22368018398ab1297177ad905d614f708ba94))
* **api:** api update ([5d3cd18](https://github.com/Metronome-Industries/metronome-node/commit/5d3cd180cb012878780ec99d8469a99d8f2fe5c6))


### Chores

* **internal:** codegen related update ([a587ca5](https://github.com/Metronome-Industries/metronome-node/commit/a587ca5d5b9e51241afe9b3bf570f47cee3a8916))

## 0.1.0-beta.12 (2025-07-18)

Full Changelog: [v0.1.0-beta.11...v0.1.0-beta.12](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.11...v0.1.0-beta.12)

### Features

* **api:** Add Event Search API for finding events to match to customers and billable metrics ([1317600](https://github.com/Metronome-Industries/metronome-node/commit/13176003e84098a2ad6cd9f15b4c2cc9a5afc13c))
* **api:** add previewEvents API for generating draft invoices with provided events ([39bdb26](https://github.com/Metronome-Industries/metronome-node/commit/39bdb26b0dc826a4abfecdbf50e6c6e524bdbb1e))
* **api:** add support for Anrok and Precalculated tax types in payment gateway configuration ([063282e](https://github.com/Metronome-Industries/metronome-node/commit/063282e256add65b977bc1ed312dcd7d3b8f7447))
* **api:** add hierarchy configuration to v1 contracts and v2 contracts ([6a2cac4](https://github.com/Metronome-Industries/metronome-node/commit/6a2cac46aa813c57ab797e6060c413f3809f7dee))
* **api:** add UUID format annotations to credit type IDs ([07bec6a](https://github.com/Metronome-Industries/metronome-node/commit/07bec6a672c803fdf8708ed5fe6502044a7957b4))
* **api:** add custom credit type support to prepaid balance thresholds ([ad34431](https://github.com/Metronome-Industries/metronome-node/commit/ad344316b76a56cced5c2a6cd2d6b3cd7cf94c5e))
* **api:** add contract priority field ([1b84492](https://github.com/Metronome-Industries/metronome-node/commit/1b84492f3bc2456447dc0e8e0dd0acb9190a3b7c))
* **client:** add support for endpoint-specific base URLs ([9f93c51](https://github.com/Metronome-Industries/metronome-node/commit/9f93c51f5aab3e07e19ddacf9db29b87ff1dc0ff))
* **mcp:** fallback for void-typed methods ([d9dad2b](https://github.com/Metronome-Industries/metronome-node/commit/d9dad2b63eae17db6be436ef66af4d0f621787be))
* **mcp:** implement support for binary responses ([4cbe51d](https://github.com/Metronome-Industries/metronome-node/commit/4cbe51df7fba1a011a6aa2fb3174ca2a2f69ef11))
* **mcp:** set X-Stainless-MCP header ([e175ec9](https://github.com/Metronome-Industries/metronome-node/commit/e175ec9b72a2196c0ed9dade64e60d307b3ce9e5))
* **mcp:** support filtering tool results by a jq expression ([ebc5682](https://github.com/Metronome-Industries/metronome-node/commit/ebc5682662424f1912e40cb26c4409f001195435))


### Bug Fixes

* **build:** bump node version in CI build to 20 to be compatible with MCP package ([52b0abc](https://github.com/Metronome-Industries/metronome-node/commit/52b0abcac2913de4062e5249e27796647249bd7a))
* **ci:** release-doctor — report correct token name ([4e1621e](https://github.com/Metronome-Industries/metronome-node/commit/4e1621e8e77f29d18dcc6a3d428c0dde033723de))
* **client:** don't send `Content-Type` for bodyless methods ([7fd6259](https://github.com/Metronome-Industries/metronome-node/commit/7fd6259678fdf7c3878363732e6a1f2fbd90e595))
* **mcp:** include required section for top-level properties and support naming transformations ([63bb909](https://github.com/Metronome-Industries/metronome-node/commit/63bb909ae64ac02224a5261283cfcb00c556f7b0))
* **mcp:** relax input type for asTextContextResult ([672b608](https://github.com/Metronome-Industries/metronome-node/commit/672b6088899b3e56ccef1154061c179c0924eb7e))
* **mcp:** support jq filtering on cloudflare workers ([e560bbc](https://github.com/Metronome-Industries/metronome-node/commit/e560bbc9b9975e2b6fe4a0609e7bba5faf3ee487))
* publish script — handle NPM errors correctly ([59bc726](https://github.com/Metronome-Industries/metronome-node/commit/59bc726367965dac5877d900d81bec32b71c395d))


### Chores

* **ci:** enable for pull requests ([22d2ba8](https://github.com/Metronome-Industries/metronome-node/commit/22d2ba8b4decab21dc501ecd054e1ec92caa0d03))
* **ci:** only run for pushes and fork pull requests ([55faa25](https://github.com/Metronome-Industries/metronome-node/commit/55faa250be777add47dc8c3e56918184aa66a8be))
* **docs:** use top-level-await in example snippets ([b3010ef](https://github.com/Metronome-Industries/metronome-node/commit/b3010ef72fb05f33c3382354bc297e8a8fd4a175))
* **internal:** make base APIResource abstract ([128bf66](https://github.com/Metronome-Industries/metronome-node/commit/128bf662fd0437cdcbd771d006e20b9a0f26f333))
* make some internal functions async ([4ce7c1b](https://github.com/Metronome-Industries/metronome-node/commit/4ce7c1bdbd26d2144e8cf04d58a80c78bd69931f))
* **mcp:** formatting ([51ed397](https://github.com/Metronome-Industries/metronome-node/commit/51ed397af653cdc96799a69a7065a66315c1410d))
* **mcp:** provides high-level initMcpServer function and exports known clients ([7f82ab5](https://github.com/Metronome-Industries/metronome-node/commit/7f82ab5960c2bc474063395fd4c7af6e14964bbf))
* **mcp:** rework imports in tools ([a1434bc](https://github.com/Metronome-Industries/metronome-node/commit/a1434bc98c123bd605091e1953faf6250022ed81))
* mention unit type in timeout docs ([74a810d](https://github.com/Metronome-Industries/metronome-node/commit/74a810d4f89fd2840cf0d69cf0c77af4a22a9ffb))


### Refactors

* **types:** replace Record with mapped types ([34e6799](https://github.com/Metronome-Industries/metronome-node/commit/34e6799903417585e94f5db100fbb49bd2f047f0))

## 0.1.0-beta.11 (2025-05-30)

Full Changelog: [v0.1.0-beta.10...v0.1.0-beta.11](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.10...v0.1.0-beta.11)

### Features

* **api:** add subscription quantity history endpoint ([e9b4bbe](https://github.com/Metronome-Industries/metronome-node/commit/e9b4bbef3d7435fd9d35a9938426b59f91e03ad4))
* **api:** api update ([d1052dc](https://github.com/Metronome-Industries/metronome-node/commit/d1052dce85e4a5497f457bd2168118f9cbb6dde3))
* **api:** api update ([9ef4660](https://github.com/Metronome-Industries/metronome-node/commit/9ef4660419a21dfcd3f060c93a372fbe010ea843))
* **api:** api update ([7a4ca29](https://github.com/Metronome-Industries/metronome-node/commit/7a4ca29be180fd7d06ae0b6d4598e708fa538281))
* **api:** api update ([1f75a2f](https://github.com/Metronome-Industries/metronome-node/commit/1f75a2fe161f762465ee072de1806bf4a510c2ce))
* **api:** api update ([81d3f3d](https://github.com/Metronome-Industries/metronome-node/commit/81d3f3d2be3ecfb033a6c9aeac2939b2ba0adf5a))
* **api:** api update ([18b541e](https://github.com/Metronome-Industries/metronome-node/commit/18b541eb177314ca299572a7053389701cea18a8))
* **api:** api update ([a9ddbe3](https://github.com/Metronome-Industries/metronome-node/commit/a9ddbe3c8a26df141f5ad41acaf8c2fc28bf1dd8))
* **api:** api update ([2da7274](https://github.com/Metronome-Industries/metronome-node/commit/2da7274efe1a758fbabf5ca4b54107fd33a3c069))
* **api:** api update ([31bbcc9](https://github.com/Metronome-Industries/metronome-node/commit/31bbcc96c9ae847939a2877475d14e094d06ecf1))
* **api:** api update ([7aecbf6](https://github.com/Metronome-Industries/metronome-node/commit/7aecbf620e2bb02afe1d3ee5cf6dbc6b4e6c5988))
* **api:** api update ([56bf37d](https://github.com/Metronome-Industries/metronome-node/commit/56bf37d8aa13c9f55f6ec75dcaf17adaadf2fb69))
* **api:** rename get subscription quantity history to retrieve ([e8fba34](https://github.com/Metronome-Industries/metronome-node/commit/e8fba347a4de50f939292a263c75ce8407bc33d2))
* **mcp:** include http information in tools ([726c5e8](https://github.com/Metronome-Industries/metronome-node/commit/726c5e8f508b4f106e753315f045eff3b66ad33f))


### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([5f170a7](https://github.com/Metronome-Industries/metronome-node/commit/5f170a7dc19dc1fdfd52f1da2e77bcbe4d421d22))
* **mcp:** include description in dynamic tool search ([aa45634](https://github.com/Metronome-Industries/metronome-node/commit/aa456341222b425c6c76ca8db767bbbfa6117721))


### Chores

* **api:** mark some methods as deprecated ([964f311](https://github.com/Metronome-Industries/metronome-node/commit/964f31117ebd10c9a340ffcda002761871d6c194))
* configure new SDK language ([f579630](https://github.com/Metronome-Industries/metronome-node/commit/f5796305b442d41d73cbc4bc6a713894f7aae190))
* configure new SDK language ([9f9be53](https://github.com/Metronome-Industries/metronome-node/commit/9f9be5311ee3cbd15e67ea4fdbfd7d1354cf7437))
* **docs:** grammar improvements ([a205060](https://github.com/Metronome-Industries/metronome-node/commit/a2050605f798ce57798f61135753ca489c6c99b2))
* improve docs for MCP servers ([8d769fc](https://github.com/Metronome-Industries/metronome-node/commit/8d769fc5714bddfa2094d8b31c4181c7aacb0661))
* improve publish-npm script --latest tag logic ([51cf030](https://github.com/Metronome-Industries/metronome-node/commit/51cf030151865adfc17dbf30392d92eaee780819))
* **mcp:** remove duplicate assignment ([3aee147](https://github.com/Metronome-Industries/metronome-node/commit/3aee1475476e8dc7b0672b3295358b498781bb93))


### Documentation

* **pagination:** improve naming ([3861f31](https://github.com/Metronome-Industries/metronome-node/commit/3861f31fbe55cfd3d976d1a7794f7c7eb82b5fb7))

## 0.1.0-beta.10 (2025-05-14)

Full Changelog: [v0.1.0-beta.9...v0.1.0-beta.10](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.9...v0.1.0-beta.10)

### Features

* **api:** api update ([7dff441](https://github.com/Metronome-Industries/metronome-node/commit/7dff441268a88ce3a8846b6cdb7e68e2dca046fb))
* **api:** api update ([f2c27c0](https://github.com/Metronome-Industries/metronome-node/commit/f2c27c08def847f83d9d49fb756b223705d7afa2))
* **api:** api update ([8d84c75](https://github.com/Metronome-Industries/metronome-node/commit/8d84c75e3f9328f62b708d9594dcc1c087cbb756))
* **api:** api update ([af88cb0](https://github.com/Metronome-Industries/metronome-node/commit/af88cb055d1b1e3f20466f4dd0d31099c7a8dc43))
* **api:** api update ([3b80d3e](https://github.com/Metronome-Industries/metronome-node/commit/3b80d3ecfe26bc2a8250a4bb66fb328ac41d3392))
* **api:** api update ([a5f5e03](https://github.com/Metronome-Industries/metronome-node/commit/a5f5e0333a21847386d5f8be4d6351a2d1f7f452))
* **api:** api update ([1180b76](https://github.com/Metronome-Industries/metronome-node/commit/1180b76854337d77e1d2a4add70bb72d2dc6141e))
* **api:** api update ([6613c56](https://github.com/Metronome-Industries/metronome-node/commit/6613c563f56f6335a9f6061a365044bfcccb2e92))
* **api:** api update ([4cade32](https://github.com/Metronome-Industries/metronome-node/commit/4cade32a3dca201cde909e94ae2996bbf3cc12ac))
* **api:** api update ([3ba4f8e](https://github.com/Metronome-Industries/metronome-node/commit/3ba4f8e1b677282008728c84da4c3faf5697b7ed))
* **api:** api update ([60b4143](https://github.com/Metronome-Industries/metronome-node/commit/60b4143a03cc8e006b86c93da5a545e32703cd83))
* **api:** api update ([516d9c2](https://github.com/Metronome-Industries/metronome-node/commit/516d9c2fc1bf4b697bb4fafe6f628ea8fbccf79a))
* **api:** api update ([1c3e744](https://github.com/Metronome-Industries/metronome-node/commit/1c3e744c5003d63781cac40c89e1c5eef24b3bbe))
* **api:** api update ([bdc9761](https://github.com/Metronome-Industries/metronome-node/commit/bdc97612465ee679612a7b6abb4062d497249a68))
* **api:** api update ([d6f5562](https://github.com/Metronome-Industries/metronome-node/commit/d6f5562f12c16c51d0126efa3fcc0119fb961621))
* **api:** api update ([0fd2a49](https://github.com/Metronome-Industries/metronome-node/commit/0fd2a490b5b4e0df89433bfdd584dde69f4d4ea1))
* **api:** api update ([6dfdf86](https://github.com/Metronome-Industries/metronome-node/commit/6dfdf860700fd361f397a8af15f6f2d1c2577d39))
* **api:** api update ([4eba9b5](https://github.com/Metronome-Industries/metronome-node/commit/4eba9b5fc38511e98b2b75135dbece28c32af3a2))
* **api:** api update ([35aae7e](https://github.com/Metronome-Industries/metronome-node/commit/35aae7e331c078b459e73f027c7b4dc6f49176bc))
* **api:** api update ([84e20e7](https://github.com/Metronome-Industries/metronome-node/commit/84e20e7d6440e2fd6f53860a99600e7206d5d24c))
* **api:** api update ([3d93874](https://github.com/Metronome-Industries/metronome-node/commit/3d938742990b866401d760fe99a13c217d2c5ab3))
* **api:** api update ([7049bb8](https://github.com/Metronome-Industries/metronome-node/commit/7049bb8ed7f7f99c89b3a3b8a0e21871f4284055))
* **api:** api update ([e787f9e](https://github.com/Metronome-Industries/metronome-node/commit/e787f9e186c63ce947eae31727e05e74b6147aa3))
* **api:** api update ([30f0366](https://github.com/Metronome-Industries/metronome-node/commit/30f0366cfb29018ed2481d91b5fd5badb17da445))
* **api:** api update ([ea39816](https://github.com/Metronome-Industries/metronome-node/commit/ea39816046abc8384c5572af3aa86b77aa91a43e))
* **api:** api update ([eff527e](https://github.com/Metronome-Industries/metronome-node/commit/eff527efd5cd6ba1b340e63db45ff7e83a02718d))
* **api:** api update ([4c5558b](https://github.com/Metronome-Industries/metronome-node/commit/4c5558be27dde87e5801917847af58eab5b1115c))
* **api:** api update ([ae1b4a1](https://github.com/Metronome-Industries/metronome-node/commit/ae1b4a1fa632f1df8c7b57f63060ff54486b84c3))
* **api:** api update ([#214](https://github.com/Metronome-Industries/metronome-node/issues/214)) ([44fdb08](https://github.com/Metronome-Industries/metronome-node/commit/44fdb088aab81774a76b23332d631c7e524526bb))
* **api:** api update ([#216](https://github.com/Metronome-Industries/metronome-node/issues/216)) ([835b4ce](https://github.com/Metronome-Industries/metronome-node/commit/835b4ce72456738d7840dac151e53fe42c85e18d))
* **api:** api update ([#218](https://github.com/Metronome-Industries/metronome-node/issues/218)) ([37545a3](https://github.com/Metronome-Industries/metronome-node/commit/37545a3c3558f8d5ccc6307eb4ac957c43480ef3))
* **api:** api update ([#220](https://github.com/Metronome-Industries/metronome-node/issues/220)) ([6185553](https://github.com/Metronome-Industries/metronome-node/commit/6185553a7e1fbc048f37d1b4f376873d488e19f9))
* **api:** api update ([#222](https://github.com/Metronome-Industries/metronome-node/issues/222)) ([a6de865](https://github.com/Metronome-Industries/metronome-node/commit/a6de865062cc996ca2babb990df2483af26b3a81))
* **api:** api update ([#224](https://github.com/Metronome-Industries/metronome-node/issues/224)) ([ca18ead](https://github.com/Metronome-Industries/metronome-node/commit/ca18eada2acc3fca19509316825cf7d0cdc12053))
* **api:** api update ([#225](https://github.com/Metronome-Industries/metronome-node/issues/225)) ([e4d9ab0](https://github.com/Metronome-Industries/metronome-node/commit/e4d9ab0f33722af6b7141c2fc69011454ace1e44))
* **api:** api update ([#227](https://github.com/Metronome-Industries/metronome-node/issues/227)) ([5f15374](https://github.com/Metronome-Industries/metronome-node/commit/5f15374a6dd354723b6e8fe2f8d5a02407c604ce))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#223](https://github.com/Metronome-Industries/metronome-node/issues/223)) ([35a28ba](https://github.com/Metronome-Industries/metronome-node/commit/35a28ba8b62e6b9afa5c0f86f13ae59335e01f05))
* **client:** send `X-Stainless-Timeout` in seconds ([#219](https://github.com/Metronome-Industries/metronome-node/issues/219)) ([f36c73a](https://github.com/Metronome-Industries/metronome-node/commit/f36c73aeadc23b5f641a498efe28e9d9b9cfa6ee))
* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#217](https://github.com/Metronome-Industries/metronome-node/issues/217)) ([23ce14d](https://github.com/Metronome-Industries/metronome-node/commit/23ce14d6a34b552c0f6fc8718029dbf12f919696))
* **mcp:** remove unused tools.ts ([#226](https://github.com/Metronome-Industries/metronome-node/issues/226)) ([43d45f6](https://github.com/Metronome-Industries/metronome-node/commit/43d45f68095bd4cfd04091ba078d85e3e38c1ea9))


### Chores

* add hash of OpenAPI spec/config inputs to .stats.yml ([f797d09](https://github.com/Metronome-Industries/metronome-node/commit/f797d094fdccd8db75ed5c441580519b91d11f5a))
* **ci:** add timeout thresholds for CI jobs ([a2dcbf2](https://github.com/Metronome-Industries/metronome-node/commit/a2dcbf26450fe624fc073cd2f82006246b1a0997))
* **ci:** bump node version for release workflows ([501b76f](https://github.com/Metronome-Industries/metronome-node/commit/501b76f969395ab5bcace5ac9b229eac136e5a16))
* **ci:** only use depot for staging repos ([ee6b514](https://github.com/Metronome-Industries/metronome-node/commit/ee6b51494f1ab87c9a0d02d59c61d518d108c818))
* **ci:** run on more branches and use depot runners ([ed00453](https://github.com/Metronome-Industries/metronome-node/commit/ed00453cd92c062247cffe03ab50d055088c1fe5))
* **client:** minor internal fixes ([04a2029](https://github.com/Metronome-Industries/metronome-node/commit/04a20299b1f439d6bc20110a2043cb73650b8fdb))
* **internal:** add aliases for Record and Array ([#221](https://github.com/Metronome-Industries/metronome-node/issues/221)) ([3452e8a](https://github.com/Metronome-Industries/metronome-node/commit/3452e8ada01c6f42579e6be5aac0eac294cbafd3))
* **internal:** reduce CI branch coverage ([ac7f37b](https://github.com/Metronome-Industries/metronome-node/commit/ac7f37b6edee302bd25f2e9ad0d878739f58d2f5))
* **internal:** upload builds and expand CI branch coverage ([#229](https://github.com/Metronome-Industries/metronome-node/issues/229)) ([1a2c110](https://github.com/Metronome-Industries/metronome-node/commit/1a2c11097f7100c35b0318ad59105ba15bcdc363))
* **tests:** improve enum examples ([#228](https://github.com/Metronome-Industries/metronome-node/issues/228)) ([3476c1e](https://github.com/Metronome-Industries/metronome-node/commit/3476c1e6be559ad946a7843ec5b4bcc3f6d3670e))


### Documentation

* add examples to tsdocs ([a2494b9](https://github.com/Metronome-Industries/metronome-node/commit/a2494b955cf88704027b087f429715c6f49ccb52))
* **readme:** fix typo ([f8da328](https://github.com/Metronome-Industries/metronome-node/commit/f8da3281bbff42cecb7abdf02d89f6ce6643bfd7))

## 0.1.0-beta.9 (2025-03-25)

Full Changelog: [v0.1.0-beta.8...v0.1.0-beta.9](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.8...v0.1.0-beta.9)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#198](https://github.com/Metronome-Industries/metronome-node/issues/198)) ([544d349](https://github.com/Metronome-Industries/metronome-node/commit/544d349fecda73a515121ada3b806db5baf09ea3))
* **api:** api update ([#184](https://github.com/Metronome-Industries/metronome-node/issues/184)) ([06fe395](https://github.com/Metronome-Industries/metronome-node/commit/06fe3958630e2d74debbc70156b60357c4a738d9))
* **api:** api update ([#186](https://github.com/Metronome-Industries/metronome-node/issues/186)) ([1664ab4](https://github.com/Metronome-Industries/metronome-node/commit/1664ab438dcd126f0a14efaf94162fc40ef8caf1))
* **api:** api update ([#190](https://github.com/Metronome-Industries/metronome-node/issues/190)) ([b52e98b](https://github.com/Metronome-Industries/metronome-node/commit/b52e98b973d3b5fedbb3934e597c99cb6402b7f7))
* **api:** api update ([#193](https://github.com/Metronome-Industries/metronome-node/issues/193)) ([c59b373](https://github.com/Metronome-Industries/metronome-node/commit/c59b373f045c8ae80d11694029ad53a9dc38178f))
* **api:** api update ([#194](https://github.com/Metronome-Industries/metronome-node/issues/194)) ([9bc2925](https://github.com/Metronome-Industries/metronome-node/commit/9bc2925267fc9a3c1200218952031ca4251e8c02))
* **api:** api update ([#195](https://github.com/Metronome-Industries/metronome-node/issues/195)) ([53acc95](https://github.com/Metronome-Industries/metronome-node/commit/53acc95e94df149834a1d3429598da42b1db2118))
* **api:** api update ([#196](https://github.com/Metronome-Industries/metronome-node/issues/196)) ([764940e](https://github.com/Metronome-Industries/metronome-node/commit/764940e9a25db57cc161dfd51f2da39c11f5f523))
* **api:** api update ([#197](https://github.com/Metronome-Industries/metronome-node/issues/197)) ([2205e62](https://github.com/Metronome-Industries/metronome-node/commit/2205e6222dccca01d1e208fa4a3839e362866566))
* **api:** api update ([#199](https://github.com/Metronome-Industries/metronome-node/issues/199)) ([8a841d2](https://github.com/Metronome-Industries/metronome-node/commit/8a841d2aa55607729aff538e412593f81c87ed1d))
* **api:** api update ([#201](https://github.com/Metronome-Industries/metronome-node/issues/201)) ([43e3bd1](https://github.com/Metronome-Industries/metronome-node/commit/43e3bd1828177baf0d49ac8115a632660edc5cbe))
* **api:** api update ([#202](https://github.com/Metronome-Industries/metronome-node/issues/202)) ([bd1a2fc](https://github.com/Metronome-Industries/metronome-node/commit/bd1a2fc37594a41645d0dab2867d8db1d7ce293c))
* **api:** api update ([#205](https://github.com/Metronome-Industries/metronome-node/issues/205)) ([5a11e9d](https://github.com/Metronome-Industries/metronome-node/commit/5a11e9d4846a300eddbc7fd6bac48a1e1566b257))
* **api:** api update ([#207](https://github.com/Metronome-Industries/metronome-node/issues/207)) ([9a3a1e0](https://github.com/Metronome-Industries/metronome-node/commit/9a3a1e07d2ce6a66c64f19e42769df63b0d9e569))
* **api:** api update ([#208](https://github.com/Metronome-Industries/metronome-node/issues/208)) ([de903a1](https://github.com/Metronome-Industries/metronome-node/commit/de903a1f16810fb46b18eb1113f03d9af30afeb4))
* **api:** api update ([#209](https://github.com/Metronome-Industries/metronome-node/issues/209)) ([d4dfbed](https://github.com/Metronome-Industries/metronome-node/commit/d4dfbed762fb631d3896229ef7f676bf49a98301))
* **api:** api update ([#211](https://github.com/Metronome-Industries/metronome-node/issues/211)) ([4bccf66](https://github.com/Metronome-Industries/metronome-node/commit/4bccf66082d6cd21d7e35a3f40932d7a86f54360))
* **api:** manual updates ([#212](https://github.com/Metronome-Industries/metronome-node/issues/212)) ([7423f29](https://github.com/Metronome-Industries/metronome-node/commit/7423f292405bf645ce21ad0f338145031fb9ba1c))
* **client:** accept RFC6838 JSON content types ([#200](https://github.com/Metronome-Industries/metronome-node/issues/200)) ([7b2dbb5](https://github.com/Metronome-Industries/metronome-node/commit/7b2dbb5a3f8917182a256f73d18d1c68e8e99805))


### Bug Fixes

* avoid type error in certain environments ([#206](https://github.com/Metronome-Industries/metronome-node/issues/206)) ([0621095](https://github.com/Metronome-Industries/metronome-node/commit/0621095b11a6f90499cb42f1c480f394d3af8c3c))
* **client:** mark some request bodies as optional ([#188](https://github.com/Metronome-Industries/metronome-node/issues/188)) ([ccd11d0](https://github.com/Metronome-Industries/metronome-node/commit/ccd11d02a833be483334af37dfeebc70027b8658))


### Chores

* **exports:** cleaner resource index imports ([#203](https://github.com/Metronome-Industries/metronome-node/issues/203)) ([ce3b069](https://github.com/Metronome-Industries/metronome-node/commit/ce3b069bda73cbbd08bbeb194e6d63cee38d0c62))
* **exports:** stop using path fallbacks ([#204](https://github.com/Metronome-Industries/metronome-node/issues/204)) ([aa701f2](https://github.com/Metronome-Industries/metronome-node/commit/aa701f28e265fbd87eaa7d4bd4f802dffb5df226))
* **internal:** codegen related update ([1cbad9c](https://github.com/Metronome-Industries/metronome-node/commit/1cbad9ca8d07a881679a82b3433966a922a6f2d8))
* **internal:** codegen related update ([8ad1b81](https://github.com/Metronome-Industries/metronome-node/commit/8ad1b81bd525d57a8f21b5928772539e1fe873fe))
* **internal:** codegen related update ([#187](https://github.com/Metronome-Industries/metronome-node/issues/187)) ([ec2d099](https://github.com/Metronome-Industries/metronome-node/commit/ec2d099444f2df38f60e912cd71fccd5f126dc99))
* **internal:** fix devcontainers setup ([#189](https://github.com/Metronome-Industries/metronome-node/issues/189)) ([519bf1d](https://github.com/Metronome-Industries/metronome-node/commit/519bf1ddc7b7ef7084f4d746c8a4123108a58f1e))
* **internal:** remove extra empty newlines ([e5a2f8a](https://github.com/Metronome-Industries/metronome-node/commit/e5a2f8a001a178780faf628678df5eed36e20631))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#191](https://github.com/Metronome-Industries/metronome-node/issues/191)) ([f5e0b39](https://github.com/Metronome-Industries/metronome-node/commit/f5e0b39c3df9e5a04cc3b5e588984685d2861c19))

## 0.1.0-beta.8 (2025-02-07)

Full Changelog: [v0.1.0-beta.7...v0.1.0-beta.8](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.7...v0.1.0-beta.8)

### Features

* **api:** api update ([#175](https://github.com/Metronome-Industries/metronome-node/issues/175)) ([914b7ce](https://github.com/Metronome-Industries/metronome-node/commit/914b7cec0dec35505f24876a753c855bfffa1fea))
* **api:** api update ([#177](https://github.com/Metronome-Industries/metronome-node/issues/177)) ([a8e25ae](https://github.com/Metronome-Industries/metronome-node/commit/a8e25ae5ad4ac878adcd0d6fe40cd332aab27c00))
* **api:** api update ([#178](https://github.com/Metronome-Industries/metronome-node/issues/178)) ([160b791](https://github.com/Metronome-Industries/metronome-node/commit/160b7915e0374f4a2e7eb0b7a0e0876920795c53))
* **api:** api update ([#180](https://github.com/Metronome-Industries/metronome-node/issues/180)) ([f99d29e](https://github.com/Metronome-Industries/metronome-node/commit/f99d29e9bce0d27adcebc473dfe594762381e79d))
* **api:** api update ([#181](https://github.com/Metronome-Industries/metronome-node/issues/181)) ([63d9161](https://github.com/Metronome-Industries/metronome-node/commit/63d91614e279b2b942aec39b3561e646dd4cb4ed))
* **api:** api update ([#182](https://github.com/Metronome-Industries/metronome-node/issues/182)) ([ea794e4](https://github.com/Metronome-Industries/metronome-node/commit/ea794e4be020125f90689b2417c7ec2901cbe201))
* **client:** send `X-Stainless-Timeout` header ([#179](https://github.com/Metronome-Industries/metronome-node/issues/179)) ([9bf9863](https://github.com/Metronome-Industries/metronome-node/commit/9bf986348667e88ffaadf082a5583d6a74bca848))

## 0.1.0-beta.7 (2025-01-27)

Full Changelog: [v0.1.0-beta.6...v0.1.0-beta.7](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.6...v0.1.0-beta.7)

### Features

* **api:** api update ([#172](https://github.com/Metronome-Industries/metronome-node/issues/172)) ([4d55129](https://github.com/Metronome-Industries/metronome-node/commit/4d55129c5b03fd7eb3a8f01819345360de5b3d61))

## 0.1.0-beta.6 (2025-01-22)

Full Changelog: [v0.1.0-beta.5...v0.1.0-beta.6](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.5...v0.1.0-beta.6)

### Features

* **api:** api update ([#118](https://github.com/Metronome-Industries/metronome-node/issues/118)) ([cd2ada8](https://github.com/Metronome-Industries/metronome-node/commit/cd2ada88e51df663a5375c1aea37d5fd4f1ea943))
* **api:** api update ([#119](https://github.com/Metronome-Industries/metronome-node/issues/119)) ([f018a3a](https://github.com/Metronome-Industries/metronome-node/commit/f018a3afeb71f3206552f54b215c6cbd01667a53))
* **api:** api update ([#122](https://github.com/Metronome-Industries/metronome-node/issues/122)) ([238d9e7](https://github.com/Metronome-Industries/metronome-node/commit/238d9e7553317f958e4dfa3ccea2f568af4255d5))
* **api:** api update ([#124](https://github.com/Metronome-Industries/metronome-node/issues/124)) ([44f18f2](https://github.com/Metronome-Industries/metronome-node/commit/44f18f2a2587208be0792b8d8c8805b17e8f2e91))
* **api:** api update ([#128](https://github.com/Metronome-Industries/metronome-node/issues/128)) ([c959843](https://github.com/Metronome-Industries/metronome-node/commit/c959843489fcd67e8f837abc265f58e28bb3fc34))
* **api:** api update ([#131](https://github.com/Metronome-Industries/metronome-node/issues/131)) ([409a74b](https://github.com/Metronome-Industries/metronome-node/commit/409a74b326e286d29d34db31259eb59c5bd2649d))
* **api:** api update ([#132](https://github.com/Metronome-Industries/metronome-node/issues/132)) ([cdc8068](https://github.com/Metronome-Industries/metronome-node/commit/cdc8068557ffe5174f9f9a07f2e1095a81df4b43))
* **api:** api update ([#133](https://github.com/Metronome-Industries/metronome-node/issues/133)) ([16ed804](https://github.com/Metronome-Industries/metronome-node/commit/16ed80433f3356df5c98ca4258425f37fcf03811))
* **api:** api update ([#135](https://github.com/Metronome-Industries/metronome-node/issues/135)) ([051ae0a](https://github.com/Metronome-Industries/metronome-node/commit/051ae0aef252a8ba2f44aa98e8eac3f075f18ddf))
* **api:** api update ([#136](https://github.com/Metronome-Industries/metronome-node/issues/136)) ([9eef6e2](https://github.com/Metronome-Industries/metronome-node/commit/9eef6e226f1f110bf47b0b8c8cc12c7a19a78e18))
* **api:** api update ([#142](https://github.com/Metronome-Industries/metronome-node/issues/142)) ([b31ad8b](https://github.com/Metronome-Industries/metronome-node/commit/b31ad8ba44c6e0ba671f142f9a9aa52148e2e97f))
* **api:** api update ([#143](https://github.com/Metronome-Industries/metronome-node/issues/143)) ([19edcb6](https://github.com/Metronome-Industries/metronome-node/commit/19edcb64432c1eda8a26e249290fdfe8bfcc1ff6))
* **api:** api update ([#145](https://github.com/Metronome-Industries/metronome-node/issues/145)) ([70d9c12](https://github.com/Metronome-Industries/metronome-node/commit/70d9c12d30e5d7162840d7cd454e2264b082dabb))
* **api:** api update ([#148](https://github.com/Metronome-Industries/metronome-node/issues/148)) ([df04908](https://github.com/Metronome-Industries/metronome-node/commit/df049082c2794907362128705a3714c124033c5c))
* **api:** api update ([#151](https://github.com/Metronome-Industries/metronome-node/issues/151)) ([764ef1b](https://github.com/Metronome-Industries/metronome-node/commit/764ef1b3e6e0e8b4360c2750ef606f8af43384af))
* **api:** api update ([#153](https://github.com/Metronome-Industries/metronome-node/issues/153)) ([72ad248](https://github.com/Metronome-Industries/metronome-node/commit/72ad2481fec2eb0ad61b3bc53c3eca1baa0653e4))
* **api:** api update ([#156](https://github.com/Metronome-Industries/metronome-node/issues/156)) ([10d97b4](https://github.com/Metronome-Industries/metronome-node/commit/10d97b43ef1550496a2043fd78dbdfa3994f7ae7))
* **api:** api update ([#158](https://github.com/Metronome-Industries/metronome-node/issues/158)) ([30b43d0](https://github.com/Metronome-Industries/metronome-node/commit/30b43d013b7148ef12f859b2d4e7578f7c239d8b))
* **api:** api update ([#160](https://github.com/Metronome-Industries/metronome-node/issues/160)) ([f4665bd](https://github.com/Metronome-Industries/metronome-node/commit/f4665bde087cbe34ce82eef2de9a32f020071bff))
* **api:** api update ([#161](https://github.com/Metronome-Industries/metronome-node/issues/161)) ([5ea040a](https://github.com/Metronome-Industries/metronome-node/commit/5ea040a4cbfc9c184f427a72b73809507dc38771))
* **api:** api update ([#162](https://github.com/Metronome-Industries/metronome-node/issues/162)) ([7af268f](https://github.com/Metronome-Industries/metronome-node/commit/7af268fc4d2f30f437d81d8c4dbad6483e1768a1))
* **api:** api update ([#163](https://github.com/Metronome-Industries/metronome-node/issues/163)) ([15d1806](https://github.com/Metronome-Industries/metronome-node/commit/15d18064383ab00890b042c4cf5cdd95c2d63992))
* **api:** api update ([#164](https://github.com/Metronome-Industries/metronome-node/issues/164)) ([ed372b0](https://github.com/Metronome-Industries/metronome-node/commit/ed372b0aea0a3a4d009020c2c820d00e723181a1))
* **api:** api update ([#165](https://github.com/Metronome-Industries/metronome-node/issues/165)) ([872db74](https://github.com/Metronome-Industries/metronome-node/commit/872db74e8330788c0f71b0ef84432f38642257c7))
* **api:** api update ([#167](https://github.com/Metronome-Industries/metronome-node/issues/167)) ([bb3f432](https://github.com/Metronome-Industries/metronome-node/commit/bb3f432e2523d874c9fe6af2ad0544d113614a68))
* **api:** api update ([#168](https://github.com/Metronome-Industries/metronome-node/issues/168)) ([d4e5f6f](https://github.com/Metronome-Industries/metronome-node/commit/d4e5f6f588ec681572f1661b53401fb77ac13d23))
* **api:** api update ([#170](https://github.com/Metronome-Industries/metronome-node/issues/170)) ([e697ccc](https://github.com/Metronome-Industries/metronome-node/commit/e697cccc67fe4de123f05e338d0b61a0301d8adc))
* **api:** OpenAPI spec update via Stainless API ([#111](https://github.com/Metronome-Industries/metronome-node/issues/111)) ([594c7aa](https://github.com/Metronome-Industries/metronome-node/commit/594c7aa0b348a3ba12cd4440dd2c6b58e766c50a))
* **api:** OpenAPI spec update via Stainless API ([#114](https://github.com/Metronome-Industries/metronome-node/issues/114)) ([933a4e9](https://github.com/Metronome-Industries/metronome-node/commit/933a4e95100d2fdace1578d51c588931d463a1d2))
* **api:** OpenAPI spec update via Stainless API ([#117](https://github.com/Metronome-Industries/metronome-node/issues/117)) ([4cdfad6](https://github.com/Metronome-Industries/metronome-node/commit/4cdfad676be1cc7a703f9d682e6a95bcdf0f3452))
* **internal:** make git install file structure match npm ([#144](https://github.com/Metronome-Industries/metronome-node/issues/144)) ([b0fb2e3](https://github.com/Metronome-Industries/metronome-node/commit/b0fb2e3dd44160876369832bf8feb6efeb0da219))


### Bug Fixes

* **client:** normalize method ([#154](https://github.com/Metronome-Industries/metronome-node/issues/154)) ([58901f8](https://github.com/Metronome-Industries/metronome-node/commit/58901f8d4a4f6be19dfeb19b3d60d234b96d03fb))


### Chores

* **internal:** add test ([#169](https://github.com/Metronome-Industries/metronome-node/issues/169)) ([1a8ab65](https://github.com/Metronome-Industries/metronome-node/commit/1a8ab65ed37c47f3381b1014d7f9335a110f6698))
* **internal:** bump cross-spawn to v7.0.6 ([#147](https://github.com/Metronome-Industries/metronome-node/issues/147)) ([88cb0d1](https://github.com/Metronome-Industries/metronome-node/commit/88cb0d15944864ce2153d303cb5009af11df8cac))
* **internal:** codegen related update ([#113](https://github.com/Metronome-Industries/metronome-node/issues/113)) ([f89462a](https://github.com/Metronome-Industries/metronome-node/commit/f89462a6fb658924918ec10ee7bbc0363e13ed5a))
* **internal:** codegen related update ([#115](https://github.com/Metronome-Industries/metronome-node/issues/115)) ([335f682](https://github.com/Metronome-Industries/metronome-node/commit/335f68267fc8465ddcdf793d5c762833f9aeb24c))
* **internal:** codegen related update ([#116](https://github.com/Metronome-Industries/metronome-node/issues/116)) ([d2f661f](https://github.com/Metronome-Industries/metronome-node/commit/d2f661fb3516edb01c2e9bf474703585e49b92ac))
* **internal:** codegen related update ([#157](https://github.com/Metronome-Industries/metronome-node/issues/157)) ([a7ab136](https://github.com/Metronome-Industries/metronome-node/commit/a7ab136f9f99826c7503c7d847fb190f55501ca3))
* **internal:** codegen related update ([#159](https://github.com/Metronome-Industries/metronome-node/issues/159)) ([a719033](https://github.com/Metronome-Industries/metronome-node/commit/a719033ad2f22ad3dd43e0f3acbac6dd261b5cf3))
* **internal:** fix some typos ([#152](https://github.com/Metronome-Industries/metronome-node/issues/152)) ([945c122](https://github.com/Metronome-Industries/metronome-node/commit/945c122b4591d26e68c70ad8032b03ea4a452235))
* **internal:** remove unnecessary getRequestClient function ([#146](https://github.com/Metronome-Industries/metronome-node/issues/146)) ([4962aa2](https://github.com/Metronome-Industries/metronome-node/commit/4962aa234709086b9bebf59ac3b307e186abf899))
* **internal:** update isAbsoluteURL ([#150](https://github.com/Metronome-Industries/metronome-node/issues/150)) ([612368e](https://github.com/Metronome-Industries/metronome-node/commit/612368ee51c80bb257299b16c92171b9cb31c1b0))
* rebuild project due to codegen change ([#120](https://github.com/Metronome-Industries/metronome-node/issues/120)) ([86457e7](https://github.com/Metronome-Industries/metronome-node/commit/86457e70bac520852a29225d2d3e0742826c6818))
* rebuild project due to codegen change ([#121](https://github.com/Metronome-Industries/metronome-node/issues/121)) ([e264a9e](https://github.com/Metronome-Industries/metronome-node/commit/e264a9e51431a436b650f95954541f5945f2aee6))
* rebuild project due to codegen change ([#123](https://github.com/Metronome-Industries/metronome-node/issues/123)) ([fcaec0b](https://github.com/Metronome-Industries/metronome-node/commit/fcaec0b6d9cdc30fd98c28bfe4f2398d2b135025))
* rebuild project due to codegen change ([#125](https://github.com/Metronome-Industries/metronome-node/issues/125)) ([100bd01](https://github.com/Metronome-Industries/metronome-node/commit/100bd0182759cee4ed634957159821d778057e30))
* rebuild project due to codegen change ([#127](https://github.com/Metronome-Industries/metronome-node/issues/127)) ([1690817](https://github.com/Metronome-Industries/metronome-node/commit/16908173f688bdde88c7fda64a6dfb238865cde6))
* rebuild project due to codegen change ([#129](https://github.com/Metronome-Industries/metronome-node/issues/129)) ([309283d](https://github.com/Metronome-Industries/metronome-node/commit/309283dd0718bbdb809669b892046e9a36800f52))
* rebuild project due to codegen change ([#130](https://github.com/Metronome-Industries/metronome-node/issues/130)) ([2e7c9a5](https://github.com/Metronome-Industries/metronome-node/commit/2e7c9a500c69a4cd2ce56e99ed4e40ebf46a9232))
* rebuild project due to codegen change ([#134](https://github.com/Metronome-Industries/metronome-node/issues/134)) ([05445b4](https://github.com/Metronome-Industries/metronome-node/commit/05445b4a416cf0b1e8ce28229e94f2a14818ff8a))
* rebuild project due to codegen change ([#137](https://github.com/Metronome-Industries/metronome-node/issues/137)) ([a4cde39](https://github.com/Metronome-Industries/metronome-node/commit/a4cde39de04f535254ff7d5b047aa39ac185f23d))
* rebuild project due to codegen change ([#138](https://github.com/Metronome-Industries/metronome-node/issues/138)) ([95a3ea6](https://github.com/Metronome-Industries/metronome-node/commit/95a3ea6c14b21771733a7370b4b6479715b382e1))
* rebuild project due to codegen change ([#139](https://github.com/Metronome-Industries/metronome-node/issues/139)) ([680a6ac](https://github.com/Metronome-Industries/metronome-node/commit/680a6acca11ddf57b4d8aa256f358600ffdf663b))
* remove redundant word in comment ([#141](https://github.com/Metronome-Industries/metronome-node/issues/141)) ([db353a3](https://github.com/Metronome-Industries/metronome-node/commit/db353a3a54450b277dd6f72b0c64c83db424dcb4))
* **types:** add `| undefined` to client options properties ([#166](https://github.com/Metronome-Industries/metronome-node/issues/166)) ([f99a262](https://github.com/Metronome-Industries/metronome-node/commit/f99a2620b4bf43b054439e8911079fb0279b4fe7))
* **types:** nicer error class types + jsdocs ([#149](https://github.com/Metronome-Industries/metronome-node/issues/149)) ([f856f7a](https://github.com/Metronome-Industries/metronome-node/commit/f856f7add30f53993ddf9465fda626fc3f18e7d8))


### Documentation

* minor formatting changes ([#155](https://github.com/Metronome-Industries/metronome-node/issues/155)) ([e504499](https://github.com/Metronome-Industries/metronome-node/commit/e5044991492be391f0bf87fcca87959bf6c08f9e))
* remove suggestion to use `npm` call out ([#140](https://github.com/Metronome-Industries/metronome-node/issues/140)) ([3ff1ab5](https://github.com/Metronome-Industries/metronome-node/commit/3ff1ab57d0e60a8e4a78aeea3503c0b5d328e336))

## 0.1.0-beta.5 (2024-09-20)

Full Changelog: [v0.1.0-beta.4...v0.1.0-beta.5](https://github.com/Metronome-Industries/metronome-node/compare/v0.1.0-beta.4...v0.1.0-beta.5)

### Features

* **api:** OpenAPI spec update via Stainless API ([#109](https://github.com/Metronome-Industries/metronome-node/issues/109)) ([015b008](https://github.com/Metronome-Industries/metronome-node/commit/015b008fc62450e29de68671b932246d80328101))
* **client:** send retry count header ([#107](https://github.com/Metronome-Industries/metronome-node/issues/107)) ([6992cf7](https://github.com/Metronome-Industries/metronome-node/commit/6992cf75364fb700caa3b9148dbb905aa109671d))

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
