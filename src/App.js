import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import Main from './components/Main/index.js';
import Book from './components/utility';
import Footer from './components/Footer/index';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
      
      (async function() {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&orderBy=relevance&maxResults=40`)
          const json = await response.json();
          let result = await json.items;
          result = result.filter(item => item.volumeInfo.imageLinks);
          result = result.filter(item => item.volumeInfo.authors);
          result = result.filter(item => item.volumeInfo.publisher);
          const booksLoad = [];
          result.forEach(book => {
            booksLoad.push(new Book(book.id, book.volumeInfo))
          })
          setBooks(booksLoad);
        } catch (e) {
          console.error(e);
        }
      })();
    }, [])

  return (
    <div className="App">
      <Header />
      <Main books={books} />
      <Footer />
    </div>
  );
}

export default App;
