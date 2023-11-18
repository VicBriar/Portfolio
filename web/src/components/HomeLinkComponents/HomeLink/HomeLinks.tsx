import { Link, routes } from '@redwoodjs/router'

const HomeLinks = () => {
  return (
    <div className="m-2 flex basis-2/3 flex-col items-center text-5xl italic text-zinc-50 sm:text-6xl md:text-8xl min-[1154px]:text-9xl">
      <Link
        className="m-5 p-4 transition delay-100 hover:-translate-y-1 hover:scale-110 hover:text-black hover:underline motion-reduce:transition-none motion-reduce:hover:transform-none"
        to={routes.portfolio()}
      >
        Portfolio
      </Link>
      <Link
        className="m-5 p-4 transition delay-100 hover:-translate-y-1 hover:scale-110 hover:text-black hover:underline motion-reduce:transition-none motion-reduce:hover:transform-none"
        to={routes.experience()}
      >
        Experience
      </Link>
      <Link
        className="m-5 p-4 transition delay-100 hover:-translate-y-1 hover:scale-110 hover:text-black hover:underline motion-reduce:transition-none motion-reduce:hover:transform-none"
        to={routes.bio()}
      >
        About Me
      </Link>
    </div>
  )
}

export default HomeLinks
