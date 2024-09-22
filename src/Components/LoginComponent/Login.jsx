import style from "./login.module.css"
const Login=()=>{
    return(
        <>
        <div className={`${style.loginpage} container-fluid d-flex flex-column`}>
            <div className={`${style.backgroundimage} m-auto d-flex flex-column container`}>
                <div className={`w-25 h-50 m-auto bg-white p-4 border rounded`}>
                    <form>
                        <h5 className='text-center'>User Login</h5>
                        <input type='email' className='form-control  my-3' id='loginemail'placeholder='Email'/>

                        <input type='password' className='form-control' id='loginpassword' placeholder='Password'/>

                        <button className='mt-3 btn btn-primary mx-auto  d-block'>Login</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export {Login};