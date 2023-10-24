import { render } from '@redwoodjs/testing/web'

import HomeLinks from './HomeLinks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeLinks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeLinks />)
    }).not.toThrow()
  })
})
