# promise-all-retry

[![build status](https://img.shields.io/travis/shaunwarman/promise-all-retry.svg)](https://travis-ci.com/shaunwarman/promise-all-retry)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/promise-all-retry.svg)](https://codecov.io/gh/shaunwarman/promise-all-retry)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/promise-all-retry.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/promise-all-retry.svg)](https://npm.im/promise-all-retry)

> Promise.all with concurrency and retry benefits


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install promise-all-retry
```

[yarn][]:

```sh
yarn add promise-all-retry
```


## Usage

```js
const promiseAll = require('promise-all-retry');

(async () => {
  await promiseAll(promiseList, { concurrency: 10, retries: 3 });
})();
```


## Contributors

| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <https://shaunwarman.com> |


## License

[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
