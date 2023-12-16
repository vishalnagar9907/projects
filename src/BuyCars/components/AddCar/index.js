import TextInput from "../../../commonComponents/TextInput";
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import { CarState } from "../../../contextApi/Context";
import { useNavigate } from "react-router-dom";

import './styles.css'
const AddCar =()=>{
  
    const [addCarDetail, setCarDetails] = useState({
        title:'',
        price:'',
        milage:'',
        color:'',
        model:'',
        image:'',
    })

    const navigate = useNavigate();

    const {
        dispatch,
      } = CarState();

      const handleOnSubmit =()=>{
        const carDetail = {
            ...addCarDetail,
            id: new Date().getTime(),
        }

        dispatch({
            type: "ADD_CAR",
            payload: carDetail,
          })

          navigate('/');
      }

    return(
        <>
        <div className="container">
            <h1>Add Car Details</h1>
            <Form>
                <div className="form_container">
                <TextInput type='text' placeholder="Enter Car Title" label="Enter Car Title" state={setCarDetails} stateKey='title'/>
                <TextInput type='text' placeholder="Enter Car Price" label="Price (INR)" state={setCarDetails} stateKey='price' />
                <TextInput type='text' placeholder="Enter Car Milage" label="Milage" state={setCarDetails} stateKey='milage'/>
                <TextInput type='text' placeholder="Enter Color" label="Color" state={setCarDetails} stateKey='color'/>
                <TextInput type='text' placeholder="Enter Registration Year" label="Registration Year" state={setCarDetails} stateKey='year'/>
                <TextInput type='text' placeholder="Enter Car Max Power" label="Max Power (in bph)" state={setCarDetails} stateKey='max_power'/>
                <TextInput type='text' placeholder="Enter Engine Power" label="Engin Power (in cc)" state={setCarDetails} stateKey='engine'/>
                <TextInput type='text' placeholder="Enter Torque" label="Torque (in Nm)" state={setCarDetails} stateKey='torque' />
                <TextInput type='text' placeholder="Enter Car Fuel Type" label="Fuel Type" state={setCarDetails} stateKey='fuel_type'/>
                <TextInput type='text' placeholder="Enter Number of Seats" label="Seats" state={setCarDetails} stateKey='seat'/>
                <TextInput type='text' placeholder="Enter Kms Driven" label="Kms Driven" state={setCarDetails} stateKey='kms_driven'/>
                <TextInput type='text' placeholder="Enter RTO" label="Enter RTO" state={setCarDetails} stateKey='rto'/>
                <TextInput type='file' placeholder="Enter Car Title" label="Upload Car Photo" state={setCarDetails} stateKey='image'/>
                </div>
                <Button variant="light" onClick={handleOnSubmit}> Submit</Button>
            </Form>
        </div>
        </>
    )
}

export default AddCar;
