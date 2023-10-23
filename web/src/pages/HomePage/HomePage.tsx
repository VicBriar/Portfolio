import { RouteAnnouncement } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HomeLinks from 'src/components/HomeLinkComponents/HomeLink/HomeLinks'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <RouteAnnouncement visuallyHidden>
        Home page with links to the rest of my portfolio. Thanks for visiting!
      </RouteAnnouncement>

      <h1>Victoria Briar</h1>
      <article>
        <HomeLinks />
      </article>
    </>
  )
}

export default HomePage
