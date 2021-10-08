import {useState} from 'react'
import ContainerInput from './ContainerInput'
import Input from './Input';
import Button from './Button';



export default function InputContainer(props) {
    const [inputValue, setValue] = useState("");
    
    
    return (
        <ContainerInput>
            <Input type="text" placeholder="Write here!" onChange={(e) => setValue(e.target.value)}/>
            <Button onClick={() => props.searchBook(inputValue)}>Search</Button>
        </ContainerInput>
    )
}