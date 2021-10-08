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

export default function CardContainer(props) {

    let image = "https://books.google.com/books/content/images/frontcover/" + props.id +"?fife=w400-h600"
    return (
        <Card>
            <img src={image} alt="Book Cover" />
            <button onClick={OpenInfo}>Info</button>
            <InfoContainer>
                <button onClick={CloseInfo}>X</button>
                <h1>Title: <span>{props.book.title}</span></h1>
                <h2>Author: <span>{props.book.authors[0]}</span></h2>
                <h3>Publisher: <span>{props.book.publisher}</span></h3>
                <a href={props.book.infoLink} target="_blank" rel="noreferrer">More info</a>
            </InfoContainer>
        </Card>
    )
}