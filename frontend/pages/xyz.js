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
<h1><center>All admin information to my database</center></h1>
            {user.map(us=>(

<li key={us.id}>
<h2>Name: </h2>{us.name}
{/* <h3>Email: </h3>{us.email}
<h3>Password:</h3>{us.password}
<h2>Contact: </h2>{us.contact}
<h2>Gender: </h2>{us.gender} */}
</li>
            ))}
</ul>
</div>
);
}
export default App;