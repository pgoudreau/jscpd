# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.11](https://github.com/kucherenko/jscpd/compare/v2.0.10...v2.0.11) (2019-02-27)


### Bug Fixes

* **options:** fix min tokens, lines and max lines options ([d0147b5](https://github.com/kucherenko/jscpd/commit/d0147b5)), closes [#208](https://github.com/kucherenko/jscpd/issues/208)



<a name="2.0.4"></a>
## [2.0.4](https://github.com/kucherenko/jscpd/compare/v2.0.3...v2.0.4) (2019-01-08)


### Bug Fixes

* **tokenizer:** split c/cpp and c-header/cpp-header formats, now files in headers detects separatly ([b9be29e](https://github.com/kucherenko/jscpd/commit/b9be29e)), closes [#188](https://github.com/kucherenko/jscpd/issues/188)
* **tokenizer:** split c/cpp and c/cpp headers formats ([97bbd55](https://github.com/kucherenko/jscpd/commit/97bbd55))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/kucherenko/jscpd/compare/v2.0.2...v2.0.3) (2019-01-08)


### Bug Fixes

* **detector:** fix bug with detection duplicates in single file ([2f4eb48](https://github.com/kucherenko/jscpd/commit/2f4eb48)), closes [#189](https://github.com/kucherenko/jscpd/issues/189)



<a name="2.0.2"></a>
## [2.0.2](https://github.com/kucherenko/jscpd/compare/v2.0.1...v2.0.2) (2018-12-28)


### Bug Fixes

* **license:** change packages with GPL-2 linense to analog with MIT ([8d1081f](https://github.com/kucherenko/jscpd/commit/8d1081f))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/kucherenko/jscpd/compare/v2.0.0...v2.0.1) (2018-12-28)


### Bug Fixes

* **threshold:** add ability to use 0 value for threshold ([a18fe71](https://github.com/kucherenko/jscpd/commit/a18fe71)), closes [#182](https://github.com/kucherenko/jscpd/issues/182)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/kucherenko/jscpd/compare/v1.2.3...v2.0.0) (2018-12-28)


### Features

* **store:** Add LevelDb store for optimisation memory usage ([2f04dd8](https://github.com/kucherenko/jscpd/commit/2f04dd8)), closes [#66](https://github.com/kucherenko/jscpd/issues/66) [#184](https://github.com/kucherenko/jscpd/issues/184)


### BREAKING CHANGES

* **store:** add persistent store/db



<a name="1.2.3"></a>
## [1.2.3](https://github.com/kucherenko/jscpd/compare/v1.2.2...v1.2.3) (2018-12-27)


### Bug Fixes

* **jscpd:** fix bug with mulitiformats files ([7d631db](https://github.com/kucherenko/jscpd/commit/7d631db))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/kucherenko/jscpd/compare/v1.2.1...v1.2.2) (2018-12-27)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/kucherenko/jscpd/compare/v1.2.0...v1.2.1) (2018-12-23)


### Bug Fixes

* **blamer:** Fix unhandled promise rejection in blamer ([23a9b5d](https://github.com/kucherenko/jscpd/commit/23a9b5d)), closes [#185](https://github.com/kucherenko/jscpd/issues/185)
* **readme:** fix path to screenshot ([09ca3b8](https://github.com/kucherenko/jscpd/commit/09ca3b8))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/kucherenko/jscpd/compare/v1.1.0...v1.2.0) (2018-12-14)


### Bug Fixes

* **html reporter:** Fix bug with empty lines in code blocks ([af99689](https://github.com/kucherenko/jscpd/commit/af99689))


### Features

* **html reporter:** add graph to report ([d051154](https://github.com/kucherenko/jscpd/commit/d051154))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/kucherenko/jscpd/compare/v1.0.3...v1.1.0) (2018-12-02)


### Features

* **html,consoleFull reporters:** Add blamed lines to html and consoleFull reporters, add syntax hig ([1168bfb](https://github.com/kucherenko/jscpd/commit/1168bfb))
* **modes:** Add custom mode ([3aba4cd](https://github.com/kucherenko/jscpd/commit/3aba4cd)), closes [#172](https://github.com/kucherenko/jscpd/issues/172)



<a name="1.0.3"></a>
## [1.0.3](https://github.com/kucherenko/jscpd/compare/v1.0.2...v1.0.3) (2018-11-27)


### Bug Fixes

* **options.path:** Fix path options ([106a6d4](https://github.com/kucherenko/jscpd/commit/106a6d4)), closes [#177](https://github.com/kucherenko/jscpd/issues/177)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/kucherenko/jscpd/compare/v1.0.1...v1.0.2) (2018-11-27)


### Bug Fixes

* support locally installed reporter and mode ([01ee5af](https://github.com/kucherenko/jscpd/commit/01ee5af))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/kucherenko/jscpd/compare/v1.0.0...v1.0.1) (2018-11-27)


### Bug Fixes

* add support for trailling slash gitignore pattern ([0a48301](https://github.com/kucherenko/jscpd/commit/0a48301))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.6...v1.0.0) (2018-11-21)


### Bug Fixes

* **travis:** add installation for jscpd-badge-reporter ([d09232f](https://github.com/kucherenko/jscpd/commit/d09232f))
* **travis:** add scripts running ([1bb099c](https://github.com/kucherenko/jscpd/commit/1bb099c))
* **travis:** fix scripts running ([fec133b](https://github.com/kucherenko/jscpd/commit/fec133b))
* **travis:** fix scripts running again ([bdccafb](https://github.com/kucherenko/jscpd/commit/bdccafb))



<a name="1.0.0-rc.6"></a>
# [1.0.0-rc.6](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.5...v1.0.0-rc.6) (2018-11-17)


### Features

* **reporter:** Add html reporter ([831447a](https://github.com/kucherenko/jscpd/commit/831447a))



<a name="1.0.0-rc.5"></a>
# [1.0.0-rc.5](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.4...v1.0.0-rc.5) (2018-11-15)



<a name="1.0.0-rc.4"></a>
# [1.0.0-rc.4](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2018-11-09)


### Features

* **cli:** Add ability to point few pathes to cli as args ([d1e6cfc](https://github.com/kucherenko/jscpd/commit/d1e6cfc))
* **readme,reporters,hooks:** Add hooks, change reporters interface, cleanup dependencies ([dc03298](https://github.com/kucherenko/jscpd/commit/dc03298))



<a name="1.0.0-rc.3"></a>
# [1.0.0-rc.3](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2018-10-11)


### Bug Fixes

* **cli:** Change storage type ([4b1a26a](https://github.com/kucherenko/jscpd/commit/4b1a26a))



<a name="1.0.0-rc.2"></a>
# [1.0.0-rc.2](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2018-10-11)


### Bug Fixes

* **exec-timer:** Fix bug with dependencies ([3c52587](https://github.com/kucherenko/jscpd/commit/3c52587))



<a name="1.0.0-rc.1"></a>
# [1.0.0-rc.1](https://github.com/kucherenko/jscpd/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2018-10-11)


### Features

* **exec-timer:** Add exec timer reporter ([d5d865e](https://github.com/kucherenko/jscpd/commit/d5d865e))



<a name="1.0.0-rc.0"></a>
# [1.0.0-rc.0](https://github.com/kucherenko/jscpd/compare/v1.1.0-rc.0...v1.0.0-rc.0) (2018-10-07)


### Bug Fixes

* **package.json:** Add RC prefix for releases ([5e6bf00](https://github.com/kucherenko/jscpd/commit/5e6bf00))


### Reverts

* **wrong release:** remove wrong release ([708f98a](https://github.com/kucherenko/jscpd/commit/708f98a))



<a name="1.0.0-alpha.2"></a>
# [1.0.0-alpha.2](https://github.com/kucherenko/jscpd/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2018-08-24)


### Bug Fixes

* **config:** Change config filename ([f693e3c](https://github.com/kucherenko/jscpd/commit/f693e3c))
* **package.json:** Fix generation of typedoc ([4769cf5](https://github.com/kucherenko/jscpd/commit/4769cf5))



<a name="1.0.0-alpha.1"></a>
# [1.0.0-alpha.1](https://github.com/kucherenko/jscpd/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2018-08-18)


### Features

* **package:** add bin script ([840af45](https://github.com/kucherenko/jscpd/commit/840af45))



<a name="1.0.0-alpha.0"></a>
# 1.0.0-alpha.0 (2018-08-18)


### Bug Fixes

* **package:** update codemirror to version 5.28.0 ([6eb6eab](https://github.com/kucherenko/jscpd/commit/6eb6eab))
* **package:** update codemirror to version 5.29.0 ([dcfa37b](https://github.com/kucherenko/jscpd/commit/dcfa37b))
* **package:** update codemirror to version 5.31.0 ([64d0b27](https://github.com/kucherenko/jscpd/commit/64d0b27))
* **package:** update codemirror to version 5.32.0 ([452d490](https://github.com/kucherenko/jscpd/commit/452d490))
* **package:** update codemirror to version 5.33.0 ([f9b5e08](https://github.com/kucherenko/jscpd/commit/f9b5e08))
* **package:** update codemirror to version 5.35.0 ([d292b73](https://github.com/kucherenko/jscpd/commit/d292b73))
* **package:** update codemirror to version 5.36.0 ([6eb9603](https://github.com/kucherenko/jscpd/commit/6eb9603))
* **package:** update codemirror to version 5.37.0 ([5bee414](https://github.com/kucherenko/jscpd/commit/5bee414))
* **package:** update shelljs to version 0.8.0 ([114649d](https://github.com/kucherenko/jscpd/commit/114649d))
* **package.json:** Remove not used [@types](https://github.com/types)/sinon ([6087a0d](https://github.com/kucherenko/jscpd/commit/6087a0d))
* **silent:** Fix ability to use xml, json and other not console reporters in silent mode ([16d4710](https://github.com/kucherenko/jscpd/commit/16d4710))
* **test:** Fix sinon spy ([e610f88](https://github.com/kucherenko/jscpd/commit/e610f88))


### Features

* **cache:** Add cache for detection results ([41ffaf4](https://github.com/kucherenko/jscpd/commit/41ffaf4))
* **JSCPD:** Started 1.0.0 version development, move from coffee to ts, change tokenizer, new report ([68ca373](https://github.com/kucherenko/jscpd/commit/68ca373))
* **language:** add yaml support ([7434bcc](https://github.com/kucherenko/jscpd/commit/7434bcc))
* **options:** add ability set formats extensions ([6a1e8b1](https://github.com/kucherenko/jscpd/commit/6a1e8b1))
* **options:** Add debug option for check options of jscpd ([aa3968b](https://github.com/kucherenko/jscpd/commit/aa3968b))
* **reporter:** add statistic reporter ([01fc2b3](https://github.com/kucherenko/jscpd/commit/01fc2b3))
* **reporter:** Add threshold reporter ([e8e1b25](https://github.com/kucherenko/jscpd/commit/e8e1b25))
* **reporter:** Add xml reporter ([6ae45ca](https://github.com/kucherenko/jscpd/commit/6ae45ca))
* **reporters:** Add silent reporter ([517d2ee](https://github.com/kucherenko/jscpd/commit/517d2ee))
* **statistic:** Add new clones statistic ([5c4761d](https://github.com/kucherenko/jscpd/commit/5c4761d))
