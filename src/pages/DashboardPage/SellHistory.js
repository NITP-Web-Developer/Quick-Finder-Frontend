import React,{useState} from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import BackendUrl from "../../urls";
export default function SellHistory() {

    var currentuser = sessionStorage.getItem("username");
    console.log("cuurent user: " + currentuser);
    if (currentuser != null) {
      var userdata = {
        Id: currentuser,
      };

      var type = this.props.type;
      var pattern = "user" + type + "product";
      var url = BackendUrl + "/backend/" + pattern;

      try {
        const response = fetch(url, {
          method: "post",
          body: JSON.stringify({ userdata }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = response.json();

        if (data.value === null) {
          this.setState({
            items: null,
            isLoaded: true,
          });
        } else {
          this.setState({
            items: data,
            isLoaded: true,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <MDBTable>
      <MDBTableHead light>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Buyer Name</th>
          <th scope='col'>Buyer Address</th>
          <th scope='col'>Delivered Time</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}