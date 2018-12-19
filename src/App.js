import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: null //state content vuoto
    }
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(result => result.json())
      .then(items => this.setState({ content: items[0] }))
    //state content riempito con i contenuti della fetch
  }
  //di sopra ho tutti i dati che mi consentono di scrivere la pagina

  render() {
    if (!this.state.content) return null
    //niente fetch, niente pagina

    console.log(this.state.content)
    //metto in console la fetch, tanto per debug

    const imgThumb = this.state.content.thumbnailUrl
    const imgBig = this.state.content.url
    const title = this.state.content.title
    const albumId = this.state.content.albumId
    const id = this.state.content.id
    //ho assegnato ai valori fetchati n.05 variabili
    //da qui costruisco il contenuto della pagina

    return (
      <div className="App">
        <header className="App-header">
          <img width="150" src="https://image.freepik.com/vettori-gratuito/modello-di-logo-albero-di-natale_8188-9.jpg" />
        </header>
        <div className="App-body">
            <div class="row">
              <div class="col-md text-left">
              <img src={imgThumb} />
              </div>

              <div class="col-md">
              <h1>{albumId}</h1>
              </div>

              <div class="col-md">
              <h3>{id}</h3>
              </div>
            </div>

            <div class="row">
            <div class="col-md"><strong>{title}</strong></div>
            </div>

            <div class="row">
            <div class="col-md"><img vspace="20" src={imgBig} /></div>
            </div>
        
        </div>

<footer className="App-Footer">
<p>Francesca Roncarati<span>Buone feste!!</span></p>
</footer>

      </div>
    );
  }
}

export default App;
	