import react, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Body(){

    const[name,setName]=useState('')
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')

    function registerUser(){
      
        function registerUser(event){
            event.preventDefault()

            var newUser={
                name:name,
                username:username,
                password:password

            }

            localStorage.setItem('users',JSON.stringify(newUser))
        }

    }

    return <div>

        <div className='row-justify-content-center'>

        <div className='col-md-6'>

        <img src="" alt =""/>
        </div>

         <div className='col-md-4'>

            <h1>Register</h1>
            <form onSubmit={registerUser}/>

    <form action="">

<input type="text" placeholder='name' className='form-control' value={name}
onChange={(e)=>{setName(e.target.value)}}
/>
<input type="text" placeholder='username' className='form-control' value={username}
onChange={(e)=>{setUsername(e.target.value)}}
/>
<input type="text" placeholder='password' className='form-control'value={password}
onChange={(e)=>{setPassword(e.target.value)}}
/>

<input type="submit" className='btn btn-primary' value='SIGN UP'/>

    </form>


                    </div>
            </div>
    </div>
}

export default Body