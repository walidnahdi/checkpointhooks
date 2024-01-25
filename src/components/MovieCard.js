import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactStars from 'react-stars';


const MoviesCard = ({movie}) => {
    return (
    <div>
        <Card style={{ width: '22rem', display:'block',justifyContent:'center',marginLeft:'580px',marginTop:'20px',marginBottom:'15px' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title style={{color:'red'}}>{movie.name}</Card.Title>
        <ReactStars
         count={5}
         size={15}
         activecolor2={'#ffd700'}
         value={movie.rating}
         edit={false} />
        <Card.Text style={{color:'blue'}}>
          {movie.date}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{color:'#8A2BE2'}}>{movie.type}</ListGroup.Item>
        <ListGroup.Item style={{fontWeight: 'bold'}}>{movie.description}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
    );
};

export default MoviesCard;