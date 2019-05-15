import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import SearchArea from "./components/SearchArea.jsx";
import ContentArea from "./components/ContentArea.jsx";
import "./css/ContentArea.css";
import "./css/SearchArea.css";
class App extends React.Component {
  state = {
    dataObject: [
      {
        id: "",
        lexicalEntries: [
          {
            pronunciations: [{ audioFile: "" }],
            entries: [
              {
                senses: [
                  {
                    definitions: [],
                    examples: [{ text: "" }],
                    subsenses: [{ definitions: "" }]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  componentWillMount1 = word => {
    let app_id = "b66ffa30";
    let app_key = "a137a33fbd436bd125c164188c6cf972";
    let lang = "en";
    let cors = "https://cors-anywhere.herokuapp.com/";
    let url =
      cors +
      "od-api.oxforddictionaries.com/api/v2/entries/" +
      lang +
      "/" +
      word;
    console.log(url);
    let config = {
      headers: {
        app_id: app_id,
        app_key: app_key
      }
    };
    axios(url, config).then(response => {
      //console.log(response);
      this.setState({
        dataObject: response.data.results
      });
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchArea search={this.componentWillMount1} />
          <ContentArea data={this.state.dataObject} />
        </header>
      </div>
    );
  }
}

export default App;
