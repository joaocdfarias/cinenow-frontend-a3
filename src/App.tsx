import { Route, Routes } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import { Layout } from './components/'

function App() {
  const navItems = [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: 'About',
      link: '/about',
    },
    {
      text: 'Contact',
      link: '/contact',
    },
  ]

  return (
    <Layout navItems={navItems}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}

export default App
