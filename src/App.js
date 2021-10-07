import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/index.js';
import Main from './components/Main/index.js';



function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
      
      (async function() {
        try {
          const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=harry%20potter&maxResults=40&orderBy=relevance&key=AIzaSyAB1Ml4WAKkJvG2Aku9IUHAofEZgxjFTm8`);
          const json = await response.json();
          const result = await json.items;
          setBooks(result);
        } catch (e) {
          console.error(e);
        }
      })();
    }, [])

  return (
    <div className="App">
      <Header />
      <Main books={books} />
    </div>
  );
}

export default App;
