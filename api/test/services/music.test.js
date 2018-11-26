const app = require('../../src/app')

describe('\'music\' service', () => {
  it('registered the service', () => {
    const service = app.service('music')
    expect(service).toBeTruthy()
  })
})
