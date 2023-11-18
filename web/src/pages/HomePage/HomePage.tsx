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
      <main className="m-2 flex w-screen basis-full flex-col items-center justify-around border-2 border-red-400 tracking-wide md:flex-row md:flex-wrap">
        <div className="m-5 flex flex-initial basis-1/3 flex-col items-center justify-center rounded-sm border-8 border-zinc-50 px-5 py-10 text-4xl font-bold text-zinc-50 md:text-6xl lg:text-7xl">
          <h1>Victoria</h1>
          <h2>Briar</h2>
        </div>
        <article>
          <HomeLinks />
        </article>
      </main>
    </>
  )
}

export default HomePage
