import Card from "react-bootstrap/Card";
function Cards({title,text,pic}) {
    return (
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={pic} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Starring as {text}
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}
export default Cards