import React, {Component} from 'react';

class App extends Component {

  state = {
    characters:characters,
    pickedChars:[],
    topScore:0,
    alertMessage: ""
  }

  handlePicked = event => {
    const name = event.target.attributes.getNameItem ("name"). value;
    this.shuffleCharacters()
    this.checkGuess(name, this.updateTopScore)
  }


}
export default App;
