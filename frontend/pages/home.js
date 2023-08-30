// import React from 'react';
// import axios from "axios";

// const HomePage = () => {
//   // Your component logic here
//   return (
//     <div>
        
// 			<h1><a href="http://localhost:3000/home"><center>Seller <span>Buddy</span></center></a></h1><br/>
			
		
      
//         <br/><br/>
//       <li><center><a href="https://www.aiub.edu ">For More Information</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000/about ">About US</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000/login ">Login</a></center></li><br/>
      
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000/blog ">Blog</a>
//     </div>
    
//   );
// };

// export default HomePage;




import React from 'react';
import axios from 'axios';

const HomePage = () => {
  // Your component logic here
  return (

    <div>
      <h1>
        <a href="http://localhost:3000/home">
          <center>Seller <span>Buddy</span></center>
        </a>
      </h1>
      <br />
      {/* Use the image directly */}
      
      <br />
      <br />
      <li>
        <center>
          <a href="https://www.aiub.edu">For More Information</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://localhost:3000/about">About US</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="http://localhost:3000/login">Login</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://localhost:3000/blog">Blog</a>
        </center>
        <br/>
        <br/>
        <br/>
        <center><img src="pc.jpg" alt="Your Alt Text" className="mx-auto" /></center>
      </li><br/>
      <br />
      
    </div>
  );
};

export default HomePage;

