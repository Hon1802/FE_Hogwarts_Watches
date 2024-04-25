import './App.css'
import LayoutHome from './components/layout/layoutHome' // Import LayoutHome component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import PageNotFound from './pages/404' // Import routes
function App() {
  return (
    // <Router basename="/test/VanHon/Watches/">
    <Router>
      <Routes>
        <Route path='/' element={<LayoutHome />}>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.element />} />
          ))}
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
