type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <main className="h-screen w-screen bg-rose-200">{children}</main>
}

export default HomeLayout
