// import powerslap from'./video.mp4'
import '../App.css'
import axios from 'axios';

import photo from '../Images/video1.jpg'
import time from '../Images/timenew.jpg'
import quality from '../Images/quality.jpg'
import data from '../Images/data.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap';
import React from 'react';
import Footer from './Footer'
// import { browserHistory } from 'react-router';
import { useHistory } from "react-router-dom";
// import { Row } from 'react-bootstrap';

function Home(){
    const history = useHistory();
    function handleClick() {
        // history.push(
        //     {
        //         pathname:"/start",
        //         // state:{detail:response.data}
        // });
        // const options = {
        //     method: 'GET',
        //     url: 'https://api.pubg.com/shards/pc-na/leaderboards/division.bro.official.console-03/squad',
        //     headers: {
             
        //       'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5ZWQzNmVlMC01NDJkLTAxMzktZjdhNC01NzUxZjM2N2FmMzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNjEzNjYyODU4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Ii0xYjJjN2NhMy01NjZlLTQ1ODYtOTk4OC1iZjBhZmM5ZTJmODMifQ.PxgiPhW--aQAKlhRaiGwriuiSir2gILZVB5tuXZtLXQ',
        //       'Accept': 'application/vnd.api+json'
        //     }
        //   };
          
         
         
        
            // var myObject = JSON.parse(newData);
            
            // console.log(newData)
          
        //   }).catch(function (error) {
        //     console.error(error);
        //   });
      
      }
    return(
        <div className="home" >
            <div style={{height:"624px",position:"relative"}}>
            <div style={{transform:'translatey(300px)'}}>
        <div className='Line1'> <h1>The Ultimate Destination</h1></div>
<div className= 'Line2'> <h1>For IT Management</h1></div>
               <div className='getStartedButton'>  <button  onClick={handleClick}>Get Started</button></div>
            </div>
            <div  className="image" style={{ backgroundImage: `url(${photo})`}}></div>
            </div>
          
            {/* <video autoPlay loop muted
            style={{
                position:"absolute",
                height:"100%",
                width:"100%",
                left:"50%",
                top:"50%",
                objectFit:"cover",
                transform:"translate(-50%, -50%)",
                zIndex:"-1"
            }}
            >
                <source src ={powerslap} type="video/mp4" />
            </video> */}
    
            <div>
<Container>
    <Row className="mobile1" style={{paddingLeft:"100px"}}>
        <Col className="mobile"  style={{display: 'flex', justifyContent: 'center'}}>
            <Col  className="inside" >
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={time} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Time</h3>
<div>
    <p>Saves time by providing an all-in-one interface that has all the need information that the IT department will need and help to better allocate the resources of the company. SummIT allows you to prioritize the needs of the organization for efficient time management.</p>
</div>
            </Col>
            <Col  className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={quality} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Quality</h3>
<div>
    <p>SummIT provides a quality framework for organization to properly manage its IT department. SummIT offers the best open-source management tool in the market. </p>
</div>
            </Col>
            <Col  className="inside">
            <div className="Highlight">
                <div className="HighlightIconInner"> 
<div>
    <img src={data} />
    {/* <p>benifit1</p> */}
</div>

                </div>
            </div>
            <h3>Forefront</h3>
<div className="benefit3">
    <p>SummIT will provide companies with the needed statistics along with displaying graphically pleasing data for asset management, licensing tracking and ticketing issue management. SummIT make decision making easier and have continuous access to the latest information.</p>
</div>
            </Col>
        </Col>
    </Row>
</Container>



            </div>
            <Footer /> 
        </div>        
    )
}
export default Home;
