import {Link} from 'react-router-dom'
import BooksForPatients from '../Books/BooksForPatients'
import BooksForTherapists from '../Books/BooksForTherapists'

const Books = () => {
  return (
    <>
      <h1>Książki</h1>
      <h1>
        <Link to="/books/BooksForTherapist">BooksForTherapists</Link>
      </h1>
      <h1>
        <Link to="/books/BooksForPatients">BooksForPatients</Link>
      </h1>{' '}
    </>
  )
}

export default Books
