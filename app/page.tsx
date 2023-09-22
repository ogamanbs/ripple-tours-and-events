import Image from 'next/image'

export default function Home() {
  return (
    <div className='main'>
      <div className="element">
        <div className="logo">
          <img src="favicon.ico" alt="" />
        </div>
        <div className='name'>
          <h1>Ripple</h1>
          <h3>Events and Tours</h3>
        </div>
      </div>
      <div className="staytune">
        <h1>Stay Tune...</h1>
      </div>
    </div>
  )
}
