/**
 * Simulates an asynchronous request to load data.
 */
const get = () => {
  return Promise.resolve({
    trip: {
      flights: [
        {
          travelerIds: [1, 2, 3],
          legs: [
            {
              airlineCode: 'AA',
              flightNumber: 'AA456'
            }
          ]
        },
        {
          travelerIds: [1, 2],
          legs: [
            {
              airlineCode: 'VA',
              flightNumber: 'VA789'
            },
            {
              airlineCode: 'AK',
              flightNumber: 'AK789'
            }
          ]
        }
      ]
    }
  })
}

module.exports = {
  get
};
