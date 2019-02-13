# Your Task

There are 3 sets of data that need to be merged in order to display a summary
of the travelers on a **trip** and their flight information.

The `index.js` file contains a sample object for one of the travelers. The basic
structure is as follows.

```
{
  travelers: [
    id,
    name,
    flights: [
      {
        airlineCode,
        airlineName,
        flightNumber,
        frequentFlyerNumber
      }
    ]
  ]
}
```

Your task is to replace the hard-coded response and write a function that loads
and merges the data returned by the stubbed services in the `/api` folder. The
following are things to keep in mind as you work on your solution:

  - The trip defines who is flying where and on what airline
  - The order of the flights and legs matters
  - It's not guaranteed a traveler participates in the entire trip


# Working with the Data

This assignment isn't intended to assess your ability to integrate external services,
read from a database/file system, etc. Each of the services in the `/api` folder has
a `get` method that provides a stubbed response.

# External Dependencies

This assignment doesn't *require* any external dependencies. If you feel an external
library is required please explain its benefit when submitting your solution. Also
include the necessary `package.json` file.
