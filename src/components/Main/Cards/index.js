import Container from './Container';
import Card from './Card/index'

const TestDB = [
    {
        'Title': "Harry Potter and the Philosopher's Stone",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://m.media-amazon.com/images/I/51UoqRAxwEL.jpg"
    },
    {
        'Title': "Harry Potter and the Chamber of Secrets",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://m.media-amazon.com/images/I/51TA3VfN8RL.jpg"
    },
    {
        'Title': "Harry Potter and the Prisoner of Azkaban",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://prod-giuntialpunto-static.giunti.stormreply.com/images/I/51Dfqo6jR5L._SL500_.jpg"
    },
    {
        'Title': "Harry Potter and the Goblet of Fire",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://kbimages1-a.akamaihd.net/7490f8c3-a8cc-45ba-8d9e-810474b768f7/1200/1200/False/harry-potter-and-the-goblet-of-fire-5.jpg"
    },
    {
        'Title': "Harry Potter and the Order of the Phoenix",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://m.media-amazon.com/images/I/51-SI2+aQ2L.jpg"
    },
    {
        'Title': "Harry Potter and the Half-Blood Prince",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://m.media-amazon.com/images/I/51myHyjJsyL.jpg"
    },
    {
        'Title': "Harry Potter and the Deathly Hallows",
        'Author': "J. K. Rowling",
        'Publisher': "Bloomsbury Publishing",
        "cover": "https://m.media-amazon.com/images/I/511DhzIj4cL.jpg"
    }
]

export default function main() {
    return (
        <Container>
            {TestDB.map(book => <Card book={book} key={book.Title} />)}
        </Container>
    )
}