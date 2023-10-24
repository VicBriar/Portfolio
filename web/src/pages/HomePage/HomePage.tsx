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
      <div className='grid gap-4 grid-cols-2 grid-rows-2'>
      <h1 className='text-zinc-50 font-bold'>Victoria Briar</h1>
      <article>
        <HomeLinks />
      </article>
      </div>
    </>
  )
}

export default HomePage
