import React,{useState} from "react";
import axios from "axios";

 

function App()
{
    const [user,setUser]=useState([]);

    async function fetchUser()
    {
        try{
             const respose= await axios.get('http://localhost:3001/main_manager/allmain_manager');
           setUser(respose.data);
            }
            catch(error)
            {
                console.error('The Error is:',error);
            }
    }

 

 

fetchUser();

 

return(
<div className="bg-powder_blue text-white">
<ul>
<h1><center>Profile</center></h1><br/>
            {user.map(us=>(
<center>
<li key={us.id}><br/>
<p>Name: {us.name}</p>

 {/* <h3>Email: </h3>{us.email}
<h3>Password:</h3>{us.password}
<h2>Contact: </h2>{us.contact}
<h2>Gender: </h2>{us.gender} */} <br/><br/><br/><br/>
<a href="http://localhost:3000/2ndmanagerpanel ">2nd managers info</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:3000/volunteersinfo ">Volunteers info</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:3000/paymentsinfo ">Payment assign</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<a href="http://localhost:3000/home ">Logout</a>

</li></center>





            ))}
</ul>
</div>
);
}
export default App;