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

export default function main() {
    return (
        <Card>
            <img src="https://images-na.ssl-images-amazon.com/images/I/91DUejN+hAL.jpg" alt="Book Cover" />
            <button onClick={OpenInfo}>Info</button>
            <InfoContainer>
                <button onClick={CloseInfo}>X</button>
                <h1>Title: <span>The Three Body Problem</span></h1>
                <h2>Author: <span>Cixin Liu</span></h2>
                <h3>Publisher: <span>Chongqing Press</span></h3>
                <a href="http://google.com" target="_blank" rel="noreferrer">More info</a>
            </InfoContainer>
        </Card>
    )
}