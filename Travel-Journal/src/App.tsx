import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from './data'


function App() {

  const cards = data.map((item, index) => {
    return(
      <>
        <Card 
          key = {index}
          item = {item}
        />
        {index < data.length - 1 && <hr className='card--hr' />}
      </>
    )
  })

  return (
    <div>
      <Navbar />
      {cards}
    </div>
  )
}

export default App
