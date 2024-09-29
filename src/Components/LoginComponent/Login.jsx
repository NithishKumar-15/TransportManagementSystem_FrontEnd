import { useEffect, useRef, useState } from "react";
import style from "./login.module.css";
import instance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [toggle, setToggle] = useState("Driver");
    const [message, setMessage] = useState("");

    const email = useRef("");
    const password = useRef("");
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("token", null);
    }, [])

    const LoginFrom = async (e) => {
        try {
            e.preventDefault();

            if (email.current.value != "" && password.current.value != "") {
                setMessage("");
                    const data = {
                        email: email.current.value,
                        password: password.current.value,
                        role: toggle
                    }
                    
                    const respons = await instance.post("/Login", data);
                    console.log(respons.data);

                    if (respons.data.message === "Login Successful") {

                        localStorage.setItem("token", respons.data.token);
                        localStorage.setItem("userName", respons.data.adminData.UserName);
                        localStorage.setItem("role", respons.data.adminData.Role)

                        if(respons.data.adminData.Role==="Admin"){
                            navigate("/AdminHomePage");
                        }else if(respons.data.adminData.Role==="Driver"){
                            navigate("/DriveHomePage");
                        }
                        
                    } else if (respons.data.message === "User Not Found") {
                        setMessage(respons.data.message + " Please check User Name and password");
                    }

            } else {
                setMessage("Please Enter the all required details");
            }

        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>
            <div className={`${style.loginpage} container-fluid d-flex flex-column`}>

                {toggle === "Driver" &&
                    <>
                        <div className={`form-check form-switch ${style.flexSwitchCheckDefault}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => setToggle("Admin")} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${toggle} Login`}</label>
                        </div>

                    </>
                }

                {
                    toggle === "Admin" &&
                    <>
                        <div className={`form-check form-switch ${style.flexSwitchCheckDefault}`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked onClick={() => setToggle("Driver")} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${toggle} Login`}</label>
                        </div>
                    </>
                }

                <div className={`${style.backgroundimage} m-auto d-flex flex-column container`}>
                    <div className={`w-25 h-57 m-auto bg-white p-4 border rounded`}>
                        <form onSubmit={LoginFrom}>
                            <h5 className='text-center'>User Login</h5>
                            <input type='email' className='form-control  my-3' id='loginemail' placeholder='Email' ref={email} />

                            <input type='password' className='form-control' id='loginpassword' placeholder='Password' ref={password} />

                            {toggle === "Driver" && <button className='mt-2 btn btn-primary mx-auto  d-block'>Driver Login</button>}
                            {toggle === "Admin" && <button className='mt-2 btn btn-primary mx-auto  d-block'>Admin Login</button>}

                            {message != "" && <label className="d-block mt-2 text-center text-danger" style={{ fontSize: "12px" }}>{message}</label>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Login };