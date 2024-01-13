import { Container } from 'react-bootstrap'
import './App.css'
import Titulo from '../components/Titulo'
import Footer from '../components/Footer'
import Formulario from '../components/Formulario'

function App() {

  return (
    <>
      <main className='my-4 mainPage'>
        <Container>
          <Titulo />
          <Formulario />
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default App
