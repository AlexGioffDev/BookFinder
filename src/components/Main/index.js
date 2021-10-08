import {useState, useEffect} from 'react'

import Book from '../utility'
import Container from './Container.js';
import Input from './Input/index';
import Cards from './Cards/index';

export default function Main(props) {

    const [books, setBooks] = useState(props.books)
    useEffect(() => {
        if(props.books.length > 0) {
            setBooks(props.books)
        }
    }, [props.books])

    const searchBook = async (text) => {
        if(text.length > 0) {
            setBooks([]);
            text = text.replace(/ /g, "%20");
            const response = await fetch(`https://books.googleapis.com/books/v1/volumes?q=${text}&orderBy=relevance&maxResults=40`);
            const json = await response.json();
            let result = await json.items;
            result = result.filter(item => item.volumeInfo.imageLinks);
            result = result.filter(item => item.volumeInfo.authors);
            result = result.filter(item => item.volumeInfo.publisher);
            const booksLoad = [];
            result.forEach(book => {
                booksLoad.push(new Book(book.id, book.volumeInfo))
            })
            setBooks(booksLoad)
        }
    }

    return (
        <Container>
            <Input searchBook={searchBook}/>
            {books.length <= 0 ? (<p>Loading...</p>) : (<Cards books={books} />) }
        </Container>
    )
}