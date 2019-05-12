import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import './index.js';
import axios from 'axios'
import ContentArea from './content_area'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataObject: 'null',
    };
    this.componentWillMount1 = this.componentWillMount1.bind(this);
    this.playAudio = this.playAudio.bind(this);
  }
    playAudio() {
      console.log("playing");
      let x = document.getElementById('myAudio');
      x.play();
    };
componentWillMount1(){
    let app_id = 'b66ffa30';
  	let app_key= 'a137a33fbd436bd125c164188c6cf972';
  	let lang = 'en';
  	let word = document.getElementById('inpt').value;
  	let cors = 'https://cors-anywhere.herokuapp.com/';
  	let url = cors+'od-api.oxforddictionaries.com/api/v2/entries/'+lang+'/'+word;
    let config = {
      headers: {
          "app_id": app_id,
          "app_key": app_key
        }
    }
    axios(url,config)
    .then(response=>{
      console.log(response);
      this.setState({
        dataObject: response.data
      })
    })
    .then(()=> {
      setTimeout(function(){
        console.log("hello");

        let sourceTag = React.createElement('source',{id:'audioFiles',type:'audio/mpeg',src:this.state.dataObject.results[0].lexicalEntries[0].pronunciations[0].audioFile});
        let audioTag = React.createElement('audio',{id:'myAudio'},sourceTag);
        let volumetag = React.createElement('i',{className:'fa fa-volume-up',onClick: this.playAudio,'aria-hidden': "true"},audioTag);
        let keyword = React.createElement('span',{},this.state.dataObject.id,<sup>1</sup>,volumetag);
        ReactDOM.render(
          keyword, document.getElementsByClassName('text-area')[0]
        )
      }.bind(this),100);

    })
  };
    render(){
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Dictionary</span>
              </div>
              <input type="text" className="form-control" id="inpt"  aria-label="Sizing example input" placeholder="Search Phase or Word" aria-describedby="inputGroup-sizing-default" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={this.componentWillMount1}><i className="fa fa-search" ></i></button>
              </div>
          </div>
          <div className="container">
            <div className="rr disable-select">
              <button className="aba">Noun</button>
              <button className="aba">Verb</button>
            </div>
            <div className="text-area">

            </div>

          </div>
          </header>
      </div>
    );
  }
}
export default App;
