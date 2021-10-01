import ContainerInput from './ContainerInput'
import Input from './Input';
import Button from './Button';

export default function main() {
    return (
        <ContainerInput>
            <Input type="text" placeholder="Write here!"/>
            <Button>Search</Button>
        </ContainerInput>
    )
}