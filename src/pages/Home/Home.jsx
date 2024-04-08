import Nav from '../../components/Nav/Nav'

import navigationData from '../../components/Nav/index.js'

const Home = () => {
  return (
    <>
      <Nav routes={navigationData.routes} />
    </>
  )
}

export default Home
