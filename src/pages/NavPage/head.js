import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./head.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink,
  MDBBadge
} from 'mdb-react-ui-kit';
import AccountButton from "./AccountButton"
const Head =() =>{
  const [showNavColor, setShowNavColor] = useState(false);
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const [showNavColorThird, setShowNavColorThird] = useState(false);
  const [search_input,setSearch_input]=useState("");
  const [isLoggedIn,setIsLoggedIn]=useState();
  useEffect(() => {setIsLoggedIn(sessionStorage.username); }, [sessionStorage.userName]);  
  
  if(isLoggedIn==undefined){
    return (<>
            <MDBNavbar expand='lg'  light style={{backgroundColor: '#e3f2fd' }}>
              <MDBContainer fluid>
            <MDBNavbarBrand href='/'>Quick Finder</MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarColor02'
              aria-controls='navbarColor02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"books",}} style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Books</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"furniture"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Furniture</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"mobiles"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Mobile</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"vehicle"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Vehicle</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>


              </MDBNavbarNav>

                <MDBNavbarNav className='justify-content-end'>
                <MDBNavbarItem >
               <form className='d-flex input-group w-auto' >
                 <input type='search'  id="searchInput" style={{width:'400px'}} className='form-control' placeholder='Search Here...' aria-label='Search' onKeyUp={()=>setSearch_input(document.getElementById("searchInput").value)}/>
                <Link  to={{ pathname: "/search/?"+"item="+search_input}}                          
                class="btn btn-outiline-blue" type='button' style={{color:'white',backgroundColor:'rgb(127, 102, 173)',borderBottomLeftRadius:'0px',borderTopLeftRadius:'0px'}}>
                <MDBIcon fa icon="search" />
                </Link>
                </form>
               </MDBNavbarItem>                

                <MDBNavbarItem>
                <MDBNavbarLink href='/login'>
                  Login
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>

          </MDBContainer>
        </MDBNavbar>


    </>);
  }else{
  return (
        <>

            <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
              <MDBContainer fluid >
            <MDBNavbarBrand href='/'>Quick Finder</MDBNavbarBrand>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarColor02'
              aria-controls='navbarColor02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon='bars' fa />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02' >
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"books"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Books</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"furniture"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Furniture</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"mobiles"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Mobile</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <Link to={{ pathname: "/category/?"+"category="+"vehicle"}}  style={{textDecoration:'none'}}>
              <MDBNavbarLink href='/#'>Vehicle</MDBNavbarLink>
              </Link>
              </MDBNavbarItem>
             
              

              

              </MDBNavbarNav>
              <MDBNavbarNav className='justify-content-end w-1' >

              <MDBNavbarItem >
               <form className='d-flex input-group w-auto' >
                 <input type='search'  id="searchInput" style={{width:'400px'}} className='form-control' placeholder='Search Here...' aria-label='Search' onKeyUp={()=>setSearch_input(document.getElementById("searchInput").value)}/>
                <Link  to={{ pathname: "/search/?"+"item="+search_input}}                          
               class="btn btn-outiline-blue" type='button' style={{color:'white',backgroundColor:'rgb(127, 102, 173)',borderBottomLeftRadius:'0px',borderTopLeftRadius:'0px'}}>
               <MDBIcon fa icon="search" />
                 </Link>
              </form>

               </MDBNavbarItem>
              {/* <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <span>
                    <MDBIcon fa icon='heart'></MDBIcon>
                  </span>
                </MDBNavbarLink>
               </MDBNavbarItem>
                 */}
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <MDBBadge pill color='danger'>1</MDBBadge>
                  <span>
                    <MDBIcon fa icon='shopping-cart' size="lg"></MDBIcon>
                  </span>
                </MDBNavbarLink>
               </MDBNavbarItem>


               <MDBNavbarItem>
                <MDBNavbarLink href='/login'>
                  Account
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>


            </MDBCollapse>

          </MDBContainer>
        </MDBNavbar>
        </>
  );
  }
}
export default Head;
