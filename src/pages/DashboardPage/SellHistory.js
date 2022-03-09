import React, { Component } from "react";
import ItemBuyBar from "../../HomeComponents/itembuy_bar";
import ItemSellBar from "../../HomeComponents/itemsell_bar";
import "../../HomeComponents/item_list.css";
import BackendUrl from "../../urls";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      isLoaded: false,
    };
  }
  async componentDidMount() {
    var currentuser = sessionStorage.getItem("username");
    console.log("cuurent user: " + currentuser);
    if (currentuser != null) {
      var userdata = {
        Id: currentuser,
      };

      var type = this.props.type;
      var pattern = "user" + "sell" + "product";
      var url = BackendUrl + "/backend/" + pattern;

      try {
        const response = await fetch(url, {
          method: "post",
          body: JSON.stringify({ userdata }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.value === null) {
          this.setState({
            items: null,
            isLoaded: true,
          });
        } else {
          console.log(data);
          this.setState({
            items: data,
            isLoaded: true,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    var isLoaded = this.state.isLoaded;
    console.log(this.props.type);
    if (!isLoaded) {
      return (
        <div
          class="container m-2 p-3"
          style={{
            boxShadow: "0 5px 10px rgb(0,0,0,0.16)",
            height: "auto",
            width: "auto",
            padding: "0px",
            backgroundColor: "white",
          }}
        >
          <div
            class="spinner-border text-muted"
            style={{
              width: "3rem",
              height: "3rem",
              marginLeft: "45%",
              marginTop: "10%",
            }}
          ></div>
        </div>
      );
    } else if(this.state.items){
      return (
        <>
            <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Product Name</th>
          <th scope='col'>status</th>
          <th scope='col'>Time</th>
          <th scope='col'>Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
      
      this.state.items.map(function (item) {
              return (
                <>
          <tr>
          <th scope='row'>{item.ProductId}</th>
          <td>{item.Time}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
                </>
              );
            })} 

      </MDBTableBody>

    </MDBTable>
 
          {/* <div className="itembarr border-0 mx-auto  text-center bg-dark text-white ">
            <div className="itemcomp">Product Id</div>
            <div className="itemcomp">ProductName</div>
            <div className="itemcomp ">Status</div>

            <div className="itemcomp">Time</div>
            <div className="itemcomp">Details</div>
          </div>
          <div className="itemlist">
            {this.state.items.map(function (item) {
              return <ItemSellBar item={item} />;
            })} */}
          {/* </div> */}
        </>
      );
    } 
  }
}
export default ItemList;