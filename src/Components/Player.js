import { Card } from "react-bootstrap"

const Player=({el})=>{
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        {el.city}
        </Card.Text>
       
      </Card.Body>
    </Card>
           
    )
}

export default Player