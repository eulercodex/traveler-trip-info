/**
 * Simulates an asynchronous request to load data.
 */
const get = () => {
  return Promise.resolve({
    profiles: [
      {
        personId: 1,
        name: 'Neo',
        rewardPrograms: {
          air: {
            'AK': 'NAK123',
            'VA': 'NVA123'
          }
        }
      },
      {
        personId: 2,
        name: 'Morpheus',
        rewardPrograms: {
          air: {
            'AA': 'MAA123'
          }
        }
      },
      {
        personId: 3,
        name: 'Trinity',
        rewardPrograms: {
          air: {
            'VA': 'TVA123'
          }
        }
      },
      {
        personId: 4,
        name: 'Mr. Anderson',
        rewardPrograms: {
          air: {
            'AA': 'AAA444',
            'AK': 'AAK444',
            'VA': 'AVA444'

          }
        }
      }
    ]
  });
}

module.exports = {
  get
};
