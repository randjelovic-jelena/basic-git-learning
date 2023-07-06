
import './App.css'
import Card from './components/Card'

import Navbar from './components/Navbar'
import data from './data';

function App() {

  return (
    <>
    {/*Navigation*/}
    <div>
      <Navbar />
    </div>

    {/*Cards*/}
    <div className='cards-container'>
      {  data.map(item => {
        return (
            <Card rating={0} reviewCount={0} key={self.crypto.randomUUID()}

              {...item}
            />
          )
        })    
      }
     
    </div>
    </>
  )
}

export default App
