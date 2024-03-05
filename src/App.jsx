
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div className="container">
        <Navbar />
        <ItemListContainer greeting="Bienvenidos a Souls Way Music" />
      </div>
      
    </>
  )
}

export default App
