const BarProgresStat = ({stat}) => {

  const getPrecentBarProgress = (statValue) =>{
          return `${(statValue*100)/255}%`
  }

  return (
    <article>
      <section className="flex justify-between px-1">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-slate-300 rounded-md ">
        <div 
          style={{width: getPrecentBarProgress(stat.value)}}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500  "></div>
      </div>
    </article>
  )
}

export default BarProgresStat