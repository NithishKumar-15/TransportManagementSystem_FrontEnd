import { useEffect } from "react";
import style from "./adminHomePage.module.css"
import { useDispatch, useSelector } from "react-redux";
import adminReducer from "../../Store/Reducers/adminHomePageReducer";

const AdminHomePage = () => {

    const {page}=useSelector((state)=>state.adminReducer)

    const dispatch=useDispatch()

    useEffect(()=>{
        
    },[])

    return (
        <>
            <div className={`${style.adminHomePage} container-fluid d-flex flex-column`}>
                <div className="d-flex justify-content-between p-3">
                    <h4>User Name: Kumar</h4>
                    <h4>User: Admin</h4>
                </div>

                <div className="w-50 mx-auto">
                    <div className="row w-100">
                        <a className="col-lg btn btn-primary" onClick={()=>dispatch({type:'AssignVehicleRoute'})}>Assign vehicle route</a>
                        <a className="col-lg btn btn-danger" onClick={()=>dispatch({type:'AddNewUserDriver'})}>Add New user Driver</a>
                        <a className="col-lg btn btn-success" onClick={()=>dispatch({type:'VehicleKilometerDetails'})}>Vehicle Kilometer Details</a>
                    </div>
                </div>

                {
                    page==='setVehicleRoute' &&
                    <>
                    <div className={`w-50 h-50 bg-white m-auto rounded d-flex flex-column`}>
                    <h4 className="text-center">MS Travels</h4>

                    <div className={`w-50 h-50 m-auto`}>
                        <h5 className="text-center mb-3">Change the Vehicle Route</h5>

                        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                            <option value={''}>Select the vehicle</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                            <option value={''}>Assign A Route</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <button className="btn btn-primary d-block mx-auto">Submit</button>
                    </div>
                </div>
                    </>
                }

                {
                    page==='AddNewUserDriver' &&
                    <>
                    <div className={`w-50 h-50 bg-white m-auto rounded d-flex flex-column`}>
                    <div className="w-50 h-50 m-auto">
                        <h5 className="text-center mb-3">Add User Driver</h5>
                        <form>
                            <input type="text" className="form-control mb-3" placeholder="Enter Driver Email"></input>

                            <input type="password" className="form-control mb-3" placeholder="Set Driver Password"></input>

                            <button className="btn btn-primary d-block mx-auto">Submit</button>
                        </form>
                    </div>
                    </div>
                    </>
                }

                {
                    page==='VehicleKilometerDetails' &&
                    <>
                    <div className="w-25 mx-auto mt-4">
                    <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                            <option value={''}>Select the vehicle</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="w-50 m-auto">
                    
                    {/* <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Starting Kilometer</th>
                                <th>Ending Kilometer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15/03/2024</td>
                                <td>323434324</td>
                                <td>3253253465</td>
                            </tr>
                            <tr>
                                <td>15/03/2024</td>
                                <td>323434324</td>
                                <td>3253253465</td>
                            </tr>
                            <tr>
                                <td>15/03/2024</td>
                                <td>323434324</td>
                                <td>3253253465</td>
                            </tr>
                            <tr>
                                <td>15/03/2024</td>
                                <td>323434324</td>
                                <td>3253253465</td>
                            </tr>
                            <tr>
                                <td>15/03/2024</td>
                                <td>323434324</td>
                                <td>3253253465</td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
                    </>
                }
                
            </div>
        </>
    )
}

export default AdminHomePage;