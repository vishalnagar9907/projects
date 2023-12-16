import CarList from "./components/CarList";

import './styles.css';
import { CarState } from "../contextApi/Context";

const BuyCars = () => {
   

    
    const {
        state: { products },
    } = CarState();
   
    return (
        <>
            <div className="car_list_container">
                 <div className="car_container">
                    {products.map((carDetail) => {
                        return (

                            <CarList key={carDetail.id} carDetail={carDetail} />

                        )
                    })
                    }



                </div>
                
                
            </div>
        </>
    )
}

export default BuyCars;