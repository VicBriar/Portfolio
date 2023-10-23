import { Link, routes } from "@redwoodjs/router"

const HomeLinks = (props:{}) => {
  return (
      <div>
        <Link to={routes.portfolio()}>My Work</Link>
        <Link to={routes.experience()}>My Skills</Link>     
        <Link to={routes.bio()}>About Me</Link>
      </div>
  )
}

export default HomeLinks
