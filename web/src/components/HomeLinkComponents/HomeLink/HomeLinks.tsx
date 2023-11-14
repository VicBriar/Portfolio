import { Link, routes } from '@redwoodjs/router'

const HomeLinks = () => {
  return (
    <div className="m-5 flex basis-1/2 flex-col items-center text-9xl text-zinc-50 italic">
      <Link className="m-1 p-4 hover:text-black hover:underline hover:scale-110 hover:-translate-y-1 transition delay-100 motion-reduce:transition-none motion-reduce:hover:transform-none" to={routes.portfolio()}>Portfolio</Link>
      <Link className="m-1 p-4 hover:text-black hover:underline hover:scale-110 hover:-translate-y-1 transition delay-100 motion-reduce:transition-none motion-reduce:hover:transform-none" to={routes.experience()}>Experience</Link>
      <Link className="m-1 p-4 hover:text-black hover:underline hover:scale-110 hover:-translate-y-1 transition delay-100 motion-reduce:transition-none motion-reduce:hover:transform-none" to={routes.bio()}>About Me</Link>
    </div>
  )
}

export default HomeLinks
