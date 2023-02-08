import React , {useState , useEffect} from 'react';
import Valid from './Valid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toastefuy'
import styles from './Style/Login.module.css'
import { Link } from 'react-router-dom';




const Login = () => {

            
const [data , setData] = useState({

    email:"",
    password:"",

})


const [errors , setErrors ] = useState({});
const [touched , setTouched] = useState({});



useEffect( () => {
    setErrors(Valid(data , 'Login'))
},[data , touched])


const changeHandler = event => {
    if (event.target.name === 'isAccepted') {
        setData({...data, [event.target.name] : event.target.checked })
    } else {
        setData({...data, [event.target.name] : event.target.value })
    } 
    console.log(data)
}

const focusHandler = event =>{
    setTouched({...touched, [event.target.name] : true })
}


const submitHandler = event => {
    event.preventDefault();
    notify()
    if (!Object.keys(errors).length) {
       notify("your signup is successfuly" , 'success')
    } else {
        notify("Invalid data!" , 'error')
        setTouched({

            email: true,
            password: true,

        })
    }

}



    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>

                <div className={styles.formField}>
                    <label> Email </label>
                    <input 
                    className={ (errors.email &&  touched.email ) ? styles.uncompoleted : styles.formInput}
                    type='email' 
                    name='email' 
                    value={data.email} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} 
                    
                    />

                    {errors.email &&   touched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label> Password </label>
                    <input 
                    className={(errors.password &&  touched.password ) ? styles.uncompoleted : styles.formInput}
                    type='password' 
                    name='password' 
                    value={data.password} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} 
                    
                    />
                    {errors.password &&   touched.password && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                <Link to='/signup'>SignUp</Link>
                <button type='submit'>Login</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );

};

export default Login;