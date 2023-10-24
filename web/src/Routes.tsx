// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/experience" page={ExperiencePage} name="experience" />
      <Route path="/portfolio" page={PortfolioPage} name="portfolio" />
      <Route path="/bio" page={BioPage} name="bio" />
      <Set wrap={HomeLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
