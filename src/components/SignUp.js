import React , {useState , useEffect} from 'react';
import Valid from './Valid';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toastefuy'
import styles from './Style/SignUp.module.css'
import { Link } from 'react-router-dom';



const SignUp = () => {

const [data , setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isAccepted:false
})


const [errors , setErrors ] = useState({});
const [touched , setTouched] = useState({});



useEffect( () => {
    setErrors(Valid(data , 'Signup'))
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
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true
        })
    }

}



    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer} >
                <h2  className={styles.header} >SignUp</h2>
                <div  className={styles.formField} >
                    <label> Name </label>
                    <input 
                    className={(errors.name &&  touched.name ) ? styles.uncompoleted : styles.formInput}
                    type='text' 

                    name='name' 
                    value={data.name} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div  className={styles.formField} >
                    <label> Email </label>
                    <input 
                    className={(errors.email &&  touched.email ) ? styles.uncompoleted : styles.formInput}
                    type='email' 
                    name='email' 
                    value={data.email} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} />
                    {errors.email &&   touched.email && <span>{errors.email}</span>}
                </div>
                <div  className={styles.formField} >
                    <label> Password </label>
                    <input 
                    className={(errors.password &&  touched.password ) ? styles.uncompoleted : styles.formInput}
                    type='password' 
                    name='password' 
                    value={data.password} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} />
                    {errors.password &&   touched.password && <span>{errors.password}</span>}
                </div>
                <div  className={styles.formField} >
                    <label> Confirm Password </label>
                    <input 
                    className={(errors.confirmPassword &&  touched.confirmPassword ) ? styles.uncompoleted : styles.formInput}
                    type='password' 
                    name='confirmPassword' 
                    value={data.confirmPassword} 
                    onChange={ changeHandler }  
                    onFocus={ focusHandler} />
                    {errors.confirmPassword &&   touched.confirmPassword && <span>  {errors.confirmPassword}  </span>}
                </div>
                <div  className={styles.formField} >
                    <div className={styles.checkBoxContainer}>
                        <label> I Accepted terms of privacy policy </label>
                        <input 
                        className={(errors.isAccepted &&  touched.isAccepted ) ? styles.uncompoleted : styles.formInput}
                        type='checkbox' 
                        name='isAccepted' 
                        value={data.isAccepted} 
                        onChange={ changeHandler } 
                        onFocus={ focusHandler} />
                    </div>
                    {errors.isAccepted &&   touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={styles.formButtons}>
                <Link to='/login'>Login</Link>
                <button type='submit'>SignUp</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;