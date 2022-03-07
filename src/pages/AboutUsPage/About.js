import React, { useState } from 'react';
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom'
export default function About() {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
                          <Link
                        class="btn"
                        style={{
                          backgroundColor: "#1C1A1A",
                          color: "#FFF8F8",
                          fontWeight: "700",
                        }}
                        onClick={toggleShow}
                      >
                        Explore
                      </Link>

      <MDBBtn onClick={toggleShow}>Button</MDBBtn>
      <MDBCollapse show={showShow}>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
      </MDBCollapse>
    </>
  );
}
// class About extends React.Component{
//     render(){
//         return (<>

//         This is About us Page.<br />
//         Ankit Kumar<br />
//         Ripunjay<br />
//         Rishak
//         </>);
//     }

// }
// export default About;
