import React,{useState} from "react";
import axios from "axios";

 

function App()
{
    const [user,setUser]=useState([]);

    async function fetchUser()
    {
        try{
             const respose= await axios.get('http://localhost:3001/manager/allmanager');
           setUser(respose.data);
            }
            catch(error)
            {
                console.error('The Error is:',error);
            }
    }

 

 

fetchUser();

 

return(
<div>
<ul>
<h1><center>Others Managers info</center></h1>
            {user.map(us=>(
<center>
<li key={us.id}><br/><h3><a href="http://localhost:3000/managermoreinfo">For more info Click</a></h3>
<p>Name: {us.name}</p>

{/* <h3>Email: </h3>{us.email}
<h3>Password:</h3>{us.password}
<h2>Contact: </h2>{us.contact}
<h2>Gender: </h2>{us.gender} */}

</li></center>

            ))}
</ul>
<br/>

<a href="http://localhost:3000/managerpanel ">Back</a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:3000/home">Logout</a>

</div>
);
}
export default App;