import {Routes, Route} from 'react-router-dom'
import 'modern-normalize/modern-normalize.css'
//import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
