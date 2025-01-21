import { ROUTES } from './config/constants'
import { RouteSwitch, Route } from './Router'
import Navbar from './Navbar'
import HomeView from './HomeView'
import FullScreenView from './FullScreenView'

function App() {
  return (
    <div className='bg-white w-full h-screen'>
      <Navbar />

      <div className='px-10 md:px-24 xl:px-36 2xl:px-52 pb-10 pt-12'>
        <RouteSwitch>
          <Route
            path={ROUTES.home}
            component={<HomeView />}
          />
          <Route
            path={ROUTES.new}
            component={<div>Nuevo</div>}
          />
          <Route
            path={ROUTES.view}
            component={<FullScreenView />}
          />
        </RouteSwitch>
      </div>
    </div>
  )
}

export default App
