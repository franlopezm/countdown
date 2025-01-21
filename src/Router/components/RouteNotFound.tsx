interface RouteNotFoundProps {
  text: string
}

const RouteNotFound = (props: RouteNotFoundProps) => {
  const { text } = props

  return (
    <div className="mt-8 text-center">
      <p className="text-7xl font-bold text-slate-700">
        404
      </p>
      <p className="mt-5 text-2xl text-slate-700">
        {text}
      </p>
    </div>
  )
}

export default RouteNotFound
