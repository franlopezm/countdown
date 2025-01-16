import DateContainer from './DateContainer'

function App() {
  return (
    <div className='bg-slate-50 w-full h-screen'>
      <div className='px-56 py-3 text-2xl font-medium shadow-md text-sky-950'>
        Coutdown
      </div>
      <div className='px-56 py-8'>
        <DateContainer />
      </div>
    </div>
  )
}

export default App
