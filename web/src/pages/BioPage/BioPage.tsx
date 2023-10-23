import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BioPage = () => {
  return (
    <>
      <MetaTags title="Bio" description="Bio page" />

      <h1>BioPage</h1>
      <p>
        Find me in <code>./web/src/pages/BioPage/BioPage.tsx</code>
      </p>
      <p>
        My default route is named <code>bio</code>, link to me with `
        <Link to={routes.bio()}>Bio</Link>`
      </p>
    </>
  )
}

export default BioPage
