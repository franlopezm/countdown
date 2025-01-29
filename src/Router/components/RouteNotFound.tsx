interface RouteNotFoundProps {
  text: string
}

const RouteNotFound = (props: RouteNotFoundProps) => {
  const { text } = props

  return (
    <div className="mt-6 md:mt-8 text-center">
      <p className="text-3xl md:text-7xl font-bold text-slate-700">
        404
      </p>
      <p className="px-10 mt-3 md:mt-5 text-base md:text-2xl text-slate-700">
        {text}
      </p>
    </div>
  )
}

export default RouteNotFound
