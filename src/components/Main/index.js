import Container from './Container.js';
import Input from './Input.js';

export default function main() {
    return (
        <Container>
            <Input autofocus type="text" placeholder="Write the title of a Book!"/>
        </Container>
    )
}