import {Routes, Route} from 'react-router-dom'
import 'modern-normalize/modern-normalize.css'
//import SharedLayout from './components/SharedLayout/SharedLayout'
import Home from './pages/Home/Home'
import Books from './pages/Books/Books'
import InternetSources from './pages/InternetSources/InternetSources'
import KnowledgeBase from './pages/KnowledgeBase/KnowledgeBase'
import Materials from './pages/Materials/Materials'
import News from './pages/News/News'
import OnlineTools from './pages/OnlineTools/OnlineTools.jsx'
import Webinars from './pages/Webinars/Webinars'

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="Books" element={<Books />} />
          <Route path="InternetSources" element={<InternetSources />} />
          <Route path="KnowledgeBase" element={<KnowledgeBase />} />
          <Route path="Materials" element={<Materials />} />
          <Route path="News" element={<News />} />
          <Route path="OnlineTools" element={<OnlineTools />} />
          <Route path="Webinars" element={<Webinars />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
