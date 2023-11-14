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
      <main  className="m-10 flex flex-auto justify-around items-center tracking-wide">
        <h1 className="m-5 px-10 py-20 font-bold  border-zinc-50 border-8 rounded-sm text-zinc-50 text-6xl">Victoria Briar</h1>
        <article>
          <HomeLinks/>
        </article>
      </main>
    </>
  )
}

export default HomePage
