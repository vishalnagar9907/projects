import { Card } from "react-bootstrap";
import './styles.css'
import { Link } from "react-router-dom";
const CarList = ({carDetail})=>{
    return (
        <div className="products">
      <Card>
        <Link to={`car-detail/${carDetail.id}`} >
        <Card.Img variant="top" src={carDetail.image} alt={carDetail.class} />
        </Link>
        <Card.Body>
          <Card.Title>{carDetail.class}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {carDetail.price.split(".")[0]}</span>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
    )

}

export default CarList;