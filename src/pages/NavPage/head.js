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
            <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
              <MDBContainer fluid>
            <MDBNavbarBrand href='/QUICK_FINDER/'>Quick Finder</MDBNavbarBrand>
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
                <MDBNavbarItem className='active'>
                  <MDBNavbarLink aria-current='page' href='/QUICK_FINDER/'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>

                  <MDBNavbarLink href='/QUICK_FINDER/#'>Setting</MDBNavbarLink>
                </MDBNavbarItem>
              
               <MDBNavbarItem className="justify-item-center">
               <form className='d-flex input-group w-auto'>
          <input type='search'  id="searchInput" className='form-control' placeholder='Search Here...' aria-label='Search' onKeyUp={()=>setSearch_input(document.getElementById("searchInput").value)}/>
          <Link
            to={{
            pathname: "/QUICK_FINDER/search/?"+"item="+search_input}}                          
            class="btn btn-outiline-white" type='button'
            >
            Search
        </Link>
        </form>

               </MDBNavbarItem>                
              </MDBNavbarNav>

                <MDBNavbarNav className='justify-content-end'>
                <MDBNavbarItem>
                <MDBNavbarLink href='/QUICK_FINDER/dashboard'>
                <MDBIcon fa icon='user'></MDBIcon>                  
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
            <MDBNavbarBrand href='/QUICK_FINDER/'>Quick Finder</MDBNavbarBrand>
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
                <MDBNavbarItem className='active'>
                  <MDBNavbarLink aria-current='page' href='/QUICK_FINDER/'>
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/QUICK_FINDER/Sell'>Sell</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>

                  <MDBNavbarLink href='/QUICK_FINDER/#'>About Us</MDBNavbarLink>
                </MDBNavbarItem>
              
              

              

              </MDBNavbarNav>
              <MDBNavbarNav className='justify-content-end w-1'  style={{maxWidth:'600px'}}>

              <MDBNavbarItem >
               <form className='d-flex input-group w-auto' >
          <input type='search'  id="searchInput" style={{width:'300px'}} className='form-control' placeholder='Search Here...' aria-label='Search' onKeyUp={()=>setSearch_input(document.getElementById("searchInput").value)}/>
          <Link
            to={{
            pathname: "/QUICK_FINDER/search/?"+"item="+search_input}}                          
            class="btn btn-outiline-white" type='button'
            >
            Search
        </Link>
        </form>

               </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <span>
                    <MDBIcon fa icon='heart'></MDBIcon>
                  </span>
                </MDBNavbarLink>
               </MDBNavbarItem>
                
                <MDBNavbarItem>
                <MDBNavbarLink href='#'>
                  <MDBBadge pill color='danger'>1</MDBBadge>
                  <span>
                    <MDBIcon fa icon='shopping-cart'></MDBIcon>
                  </span>
                </MDBNavbarLink>
               </MDBNavbarItem>


                <MDBNavbarItem>
                <MDBNavbarLink href='/QUICK_FINDER/dashboard'>
                  <AccountButton/>
                  <MDBIcon fa icon='user'></MDBIcon>                  
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
// class Head extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn:false,
//     };
//     this.isLoggedIn();
//     this.isLoggedIn = this.isLoggedIn.bind(this);
//   }
//   isLoggedIn(){
//     if(sessionStorage.username){
//       this.setState({isLoggedIn:true});
//     }else
//     {
//       this.setState({isLoggedIn:false});
//     } 
//   }
  
//   render() {
//     if(this.isLoggedIn){
//       return (<>
//       <div id="title">Quick Finder</div>
//       <ul class="nav justify-content-center">
//         <li class="nav-item">
//           <Link class="nav-link" to="/QUICK_FINDER/">Home</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/QUICK_FINDER/Sell">Sell</Link>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Setting</a>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/QUICK_FINDER/usersells">Sell History</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/QUICK_FINDER/userbuys">Buy History</Link>
//         </li>
//         <li class="nav-item">
//           <Link class="nav-link" to="/QUICK_FINDER/profile">Profile</Link>
//         </li>
  
      
//       </ul>
//               </>);
//          }else{
//       return (<>
//      <MDBNavbar expand='lg' dark bgColor='dark'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarColor02'
//           aria-controls='navbarColor02'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavColorSecond(!showNavColorSecond)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
//           <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem className='active'>
//               <MDBNavbarLink aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>About</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
  
//       {/* <div id="title">Quick Finder</div>
//   <ul class="nav justify-content-center">
//   <li class="nav-item">
//     <Link class="nav-link" to="/QUICK_FINDER/">Home</Link>
//   </li>
//   <li class="nav-item">
//     <Link class="nav-link" to="/QUICK_FINDER/Sell">Sell</Link>
//   </li>
//   <li class="nav-item">
//     <Link class="nav-link" to="/QUICK_FINDER/About">About Us</Link>
//   </li>
//   <li class="nav-item">
//     <a class="nav-link" href="#">Setting</a>
//   </li>
//   <li class="nav-item">
//     <Link class="nav-link" to="/QUICK_FINDER/login">Account</Link>
//   </li>

// </ul> */}
//         </>
//       );
//     }
//     }
//   }
// export default Head;
