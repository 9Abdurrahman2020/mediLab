import { useEffect, useState } from "react";
import { Row} from "react-bootstrap";
import useAuth from "../../UseContext/useAuth";
import Doctor from "../Home/Doctor/Doctor";
import './allDoctors.css';
const AllDoctors = () => {
    const [data,setData] = useState([]);
    const {doctors} = useAuth();
    useEffect( ()=>{     
    setData(doctors);
    },[doctors])
    const doctorToggleHandler = gender =>{
        if(gender == 'alldoctors'){
            setData(doctors)
            return;
        }
        const filteredDoctors = doctors.filter(doctor=>doctor.gender == gender)
        setData(filteredDoctors)
    }
    return (
        <div className="container">
            <div className="text-center my-3 btn-container">
                <button className="btn btn-warning mb-2" onClick={()=>doctorToggleHandler('alldoctors')}>All Doctors</button> <br />
                <button className="btn btn-warning mb-2" onClick={()=>doctorToggleHandler('male')}>Male Doctors</button>
                <br />
                <button className="btn btn-warning" onClick={()=>doctorToggleHandler('female')}>Female Doctors</button>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                data.map(doctor=><Doctor
                key={doctor.id}
                data={doctor}
                />)
            }
            </Row>

        </div>
    );
};

export default AllDoctors;