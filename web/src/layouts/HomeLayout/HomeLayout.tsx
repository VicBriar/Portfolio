type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <main className="bg-rose-200 h-screen w-screen">{children}</main>
}

export default HomeLayout
