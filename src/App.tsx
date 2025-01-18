import { RouteSwitch, Route } from './Router/components'
import DateContainer from './DateContainer'
import Navbar from './Navbar'

function App() {
  return (
    <div className='bg-slate-50 w-full h-screen'>
      <Navbar />

      <div className='px-10 md:px-32 xl:px-36 2xl:px-52 py-8'>
        <RouteSwitch>
          <Route
            path='/'
            component={<DateContainer />}
          />
          <Route
            path='/new'
            component={<div>Nuevo</div>}
          />
          <Route
            path='/view'
            component={<div>Vista</div>}
          />
        </RouteSwitch>
      </div>
    </div>
  )
}

export default App
