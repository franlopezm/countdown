import { ROUTES } from './config/constants'
import { RouteSwitch, Route } from './Router'
import Navbar from './Navbar'
import HomeView from './HomeView'
import FullScreenView from './FullScreenView'
import CreateView from './CreateView'

function App() {
  return (
    <div className='bg-white w-full h-screen'>
      <Navbar />

      <div className='px-4 md:px-24 xl:px-36 2xl:px-52 pb-5 pt-5 md:pb-10 md:pt-12'>
        <RouteSwitch
          notFoundText='Lo sentimos, la página a la que desea acceder no existe.'
        >
          <Route
            path={ROUTES.home}
            component={<HomeView />}
          />
          <Route
            path={ROUTES.new}
            component={<CreateView />}
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
