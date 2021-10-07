import Card from './Card'
import InfoContainer from './Info'


const OpenInfo = (event) => {
    const Info = event.target.nextSibling;
    Info.className = Info.className + " active";
}

const CloseInfo = (event) => {
    const Info = event.target.parentNode;
    Info.className = Info.className.replace('active', '')
}

export default function main(props) {
    return (
        <Card>
            <img src={props.book.cover} alt="Book Cover" />
            <button onClick={OpenInfo}>Info</button>
            <InfoContainer>
                <button onClick={CloseInfo}>X</button>
                <h1>Title: <span>{props.book.Title}</span></h1>
                <h2>Author: <span>{props.book.Author}</span></h2>
                <h3>Publisher: <span>{props.book.Publisher}</span></h3>
                <a href="http://google.com" target="_blank" rel="noreferrer">More info</a>
            </InfoContainer>
        </Card>
    )
}