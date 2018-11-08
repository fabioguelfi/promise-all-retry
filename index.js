const pmap = require('p-map');
const pretry = require('p-retry');

module.exports = (promiseList, options = {}) => {
  const { concurrency = 10, retries = 1 } = options;

  const retry = promise => {
    return pretry(promise, {
      onFailedAttempt: error => {
        if (error.attemptsLeft === 0) {
          throw new Error('No more retry attempts left', error);
        }
      },
      retries
    });
  };

  return pmap(promiseList, retry, { concurrency });
};
