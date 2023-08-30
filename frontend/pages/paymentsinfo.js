import React,{useState} from "react";
import axios from "axios";

 

function App()
{
    const [user,setUser]=useState([]);

    async function fetchUser()
    {
        try{
             const respose= await axios.get('http://localhost:3001/payment/allpayment');
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
<h1><center>Payment assign from database</center></h1><br/><br/><br/>
            {user.map(us=>(

                

<center>
    
<li key={us.id}><br/>
<h4>Name: {us.name}</h4>
{/* <h3>Email: </h3>{us.email}
<h3>Password:</h3>{us.password}
<h2>Contact: </h2>{us.contact}
<h2>Gender: </h2>{us.gender} */}

</li></center>
            ))}
</ul>
<br/>
<a href="http://localhost:3000/managerpanel ">Back</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://localhost:3000/home">Logout</a>
</div>
);
}
export default App;