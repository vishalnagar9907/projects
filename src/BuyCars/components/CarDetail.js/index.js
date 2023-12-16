import { CarState } from "../../../contextApi/Context";
import {  useParams } from 'react-router';
import { useNavigate } from "react-router-dom";
import './styles.css';

const CarDetail =()=>{
    const {
        state: { products },
        dispatch
      } = CarState();

    const navigate = useNavigate();

    let {id}=useParams();

    const carDetail = products.find((product)=>product.id === id);

    const handleOnClick = ()=>{
        dispatch({
            type: "REMOVE_CAR",
            payload: {id},
          })

          navigate('/');

    }

    return(
        <div>
            <div className="car_detail_container">
            <div className="image_container">
            <img src={carDetail.image} alt={carDetail.class} width='400' height='300'  />
            <div>{carDetail.title}</div>
            <div>INR {carDetail.price}</div>
            </div>
            </div>
            <div className="card_container">
                <div className="detail_card">
                    <div className="title">Car Overview</div>
                    <div className="label_container">
                        <div className="label">
                        Registration Year:
                        </div>
                        <div className="value">
                            {carDetail.year || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        RTO:
                        </div>
                        <div className="value">
                            {carDetail.rto || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Fuel Type:
                        </div>
                        <div className="value">
                            {carDetail.fuel_type || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Seats:
                        </div>
                        <div className="value">
                            {carDetail.seat || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Kms Driven:
                        </div>
                        <div className="value">
                            {carDetail.kms_driven || '-'}
                        </div>
                    </div>

                </div>
                <div className="detail_card">
                    <div className="title">Specifications</div>
                    <div className="label_container">
                        <div className="label">
                        Mileage (kmpl):
                        </div>
                        <div className="value">
                            {carDetail.mileage || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Max Power (bhp):
                        </div>
                        <div className="value">
                            {carDetail.max_power || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Engine (cc):
                        </div>
                        <div className="value">
                            {carDetail.engine || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Torque (Nm):
                        </div>
                        <div className="value">
                            {carDetail.torque || '-'}
                        </div>
                    </div>
                    <div className="label_container">
                        <div className="label">
                        Color:
                        </div>
                        <div className="value">
                            {carDetail.color || '-'}
                        </div>
                    </div>

                </div>
            </div>
            <div className="button_container">
            <button onClick={handleOnClick} className="primary_button" >Edit</button>
            <button onClick={handleOnClick} className="secondary_button">Remove Car</button>
            </div>
        </div>
    )
}

export default CarDetail;