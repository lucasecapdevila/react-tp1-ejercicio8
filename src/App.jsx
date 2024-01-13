import { Container } from 'react-bootstrap'
import './App.css'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'

function App() {

  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <Titulo />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
