import React from 'react'
import { Link } from 'react-router-dom';
import './entry.css'




 let Entry = () => {
  
    return (
     <React.Fragment>
        <section className='p-3'>
        <div className="container entry mt-4 bg-light">
            
            <div className="card-body">
            <div className="mt-5">
                <h2 className="d-flex justify-content-center align-items-center">async</h2>
               <h1 className='d-flex justify-content-center align-items-center f2'>tic tac toe</h1>
             </div>
             <div className="text-center butt">
                <Link to="/login" className="btn btn-primary btn-lg w-100 ">Login</Link>
                <Link  to="/register"  className="rigister btn btn-warning btn-lg w-100">Register</Link>
            </div>
            </div>
 
         
            <div className="card-body">
           
            </div>
 
            
         </div>
         
        </section>
     </React.Fragment>
    )
  
}
export default Entry;