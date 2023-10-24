import { render } from '@redwoodjs/testing/web'

import BioPage from './BioPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('BioPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BioPage />)
    }).not.toThrow()
  })
})
