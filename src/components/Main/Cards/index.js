import Container from './Container';
import Card from './Card/index'



export default function Cards(props) {
    return (
        <Container>
            { props.books.map(book => <Card book={book.info} id={book.id} key={book.id} />) }
        </Container>
    )
}