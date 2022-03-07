import React from 'react';
import ReactDOM from 'react-dom'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Button } from 'semantic-ui-react'

import Carousel from 'react-bootstrap/Carousel'
class Caro extends React.Component{
    render(){
        return (
            <>

  <div class="container-fluid" style={{padding:'0px',width:'100%',height:'500px',boxShadow:'0 5px 10px rgb(0,0,0,0.16)',backgroundColor:'white'}}>
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src="https://delhi-ncr.mallsmarket.com/sites/default/files/photos/events/pacific-mall-delhi-eoss-26dec2020-31jan2021-1.jpg"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="Third slide"
    />
  
    {/* <Carousel.Caption>
      <h3>iPhone Series</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.static-zoutons.com/images/originals/blog/main-banner_-_2021-07-22T155400.462_1626951287.png"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>Home Furniture</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.static-zoutons.com/images/originals/blog/PurplleAppOffers202102_1619159412.png"
      style={{width:'100%',objectFit:'cover',height:'500px', objectPosition: "25% 10%"}}
      alt="Third slide"
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>
</div>
</>
);
    }
}
export default Caro;