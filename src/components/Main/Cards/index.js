import Container from './Container';
import Card from './Card/index'



export default function main(props) {
    const firstMap = props.books.filter(book => book.volumeInfo.imageLinks);
    const secondMap = firstMap.filter(book => book.volumeInfo.authors)
    const thirdMap = secondMap.filter(book => book.volumeInfo.publisher);
    return (
        <Container>
            {thirdMap.map(book => <Card book={book.volumeInfo} key={book.id} />)}
        </Container>
    )
}