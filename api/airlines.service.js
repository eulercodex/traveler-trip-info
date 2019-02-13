/**
 * Simulates an asynchronous request to load data.
 */
const get = () => {
  return Promise.resolve({
    airlines: [
      { code: 'AK', name: 'Alaskan' },
      { code: 'AA', name: 'American' },
      { code: 'BA', name: 'British' },
      { code: 'DT', name: 'Delta' },
      { code: 'UA', name: 'United' },
      { code: 'VA', name: 'Virgin' },
    ]
  })
}

module.exports = {
  get
};
