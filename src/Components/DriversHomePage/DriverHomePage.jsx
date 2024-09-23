import { useState } from "react";
import style from "./driverHomePage.module.css"
const DriverHomePage=()=>{

    const [formName,setFormName]=useState('Vehicle');

    function submitForm(e){
        e.preventDefault();
        if(formName==='Vehicle'){
            setFormName('Date')
        }else if(formName==='Date'){
            setFormName('Kilometer')
        }else if(formName==='Kilometer'){
            setFormName('Vehicle')
        }
    }

    return(
        <>
        <div className={`${style.driverhomepage} container-fluid d-flex flex-column`}>
        <div className="d-flex justify-content-between p-3">
            <h4>User Name: Nithish</h4>
            <h4>User: Driver</h4>
        </div>

        <div className={`${style.driverform} bg-white m-auto d-flex flex-column rounded`}>
            <h4 className="text-center">MS Travels</h4>
            <div className="w-75 h-50 m-auto">
            <form onSubmit={submitForm}>
            {formName==='Vehicle'&&<>
                <select class="form-select mb-3" aria-label="Default select example">
                <option selected hidden>Select Vehicle</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
                <h6 className="text-center fs-4">or</h6>
            <select class="form-select mb-3" aria-label="Default select example">
                <option selected hidden>Select The Route</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            </>}

            {
                formName==='Date'&&<input type="date" className="form-control mb-3"></input>
            }

            {
                formName==='Kilometer' && 
                <>
                <input type="text" className="form-control mb-3" placeholder="Starting kilometer"></input>
                <h6 className="text-center fs-4">And</h6>
                <input type="text" className="form-control mb-3" placeholder="Ending kilometer"></input>
                </>
            }
            <button className="btn btn-primary d-block mx-auto">Submit</button>
            </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default DriverHomePage;