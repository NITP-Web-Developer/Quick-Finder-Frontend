import React from 'react';
import ReactDOM from 'react-dom';
import BackendUrl from "../../urls";
import Layout1 from "../MainPage/Layouts/Layout1";
import Layout2 from "../MainPage/Layouts/Layout2";
import Layout3 from "../MainPage/Layouts/Layout3";
import Layout4 from "../MainPage/Layouts/Layout4";

import { Link, Redirect } from "react-router-dom";

class SearchPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          first: [],
          getting: [{}],
          searchSuggestions: [],
          search_input: "",
        };
        this.filter();
        this.getDetails("");
        this.filter = this.filter.bind(this);
        this.search = this.search.bind(this);
        this.searchSuggestions = this.searchSuggestions.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.getSuggestions = this.getSuggestions.bind(this);
      }
      getDetails(search_input) {
        var obj = {};
        obj.search_input = search_input;
        console.log(obj.search_input);
        fetch(`${BackendUrl}/getDetails`, {
          method: "post",
          body: JSON.stringify({ obj }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            var meslen = json.mes.length;
            // this.setState({getting:json.mes});
            this.setState({ getting: json.mes });
          });
        return;
      }
      getSuggestions(search_input) {
        this.setState({search_input:search_input})
        if (search_input != "") {
          var obj = {};
          obj.search_input = search_input;
          console.log(obj.search_input);
          // fetch(`${BackendUrl}/filter`, {
          //   method: "post",
          //   body: JSON.stringify({ obj }),
          //   headers: {
          //     Accept: "application/json",
          //     "Content-Type": "application/json",
          //   },
          // })
            // .then((res) => res.json())
            // .then((json) => {
            //   console.log(json.mes.length);
            //   var meslen = json.mes.length;
            //   // this.setState({getting:json.mes});
            //   this.setState({ searchSuggestions: json.mes });
            // });
        } else {
          this.setState({ searchSuggestions: [] });
        }
        return;
      }
    
      filter() {
        fetch(`${BackendUrl}/filter`, {
          method: "post",
          body: JSON.stringify({}),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((json) => {
            this.setState({ first: json.mes });
          });
        return;
      }
      search() {
        this.setState({ searchSuggestions: [] });
        this.getDetails(document.getElementById("searchInput").value);
        document.getElementById("searchInput").value = "";
        return;
      }
      searchSuggestions() {
        this.getSuggestions(document.getElementById("searchInput").value);
        return;
      }
      searchano(ani) {
        this.getDetails(ani);
        return;
      }
    
        

    render(){
        return (<>
        <Layout1
          layout_num={1}
          search_input={this.state.search_input}
          getting={this.state.getting}
        />
        <Layout2
          layout_num={3}
          search_input={this.state.search_input}
          getting={this.state.getting}
        />
        <Layout3
          layout_num={6}
          search_input={this.state.search_input}
          getting={this.state.getting}
        />
        <Layout4
          layout_num={11}
          search_input={this.state.search_input}
          getting={this.state.getting}
        />

        </>);
    }

}
export default SearchPage;