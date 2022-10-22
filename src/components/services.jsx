export const Services = (props) => {
  return (
    <div id='services' className='text-center service'>
      <div className='container'>
        <div className='section-title serv'>
          <h2>We Solve</h2>
          <p>
            We don't just serve our customers but people in general. We have solutions for everything be it...
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
