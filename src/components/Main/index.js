import Container from './Container.js';
import Input from './Input/index';
import Cards from './Cards/index';

export default function main(props) {
    return (
        <Container>
            <Input />
            <Cards books={props.books}/>
        </Container>
    )
}