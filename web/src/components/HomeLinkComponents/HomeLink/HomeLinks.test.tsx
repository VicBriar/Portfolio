import { routes } from '@redwoodjs/router'
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
  it('renders all three links', () => {
    const tree = render(<HomeLinks />)
    const portfolioLink = tree.getByText('Portfolio')
    const experienceLink = tree.getByText('Experience')
    const aboutMeLink = tree.getByText('About Me')

    expect(portfolioLink).toBeInTheDocument()
    expect(portfolioLink.closest('a')).toHaveAttribute(
      'href',
      routes.portfolio()
    )
    expect(experienceLink).toBeInTheDocument()
    expect(experienceLink.closest('a')).toHaveAttribute(
      'href',
      routes.experience()
    )
    expect(aboutMeLink).toBeInTheDocument()
    expect(aboutMeLink.closest('a')).toHaveAttribute('href', routes.bio())
  })
})
