import React from 'react';
import CharacterCard from './components/CharacterCard'
import characters from "./characters.json"
import Header from './components/header'

class App extends React.Component {

  state = {
    characters,
    score: 0,
    picked: []
  }

  componentWillMount() {
    this.shuffleCards()
  }

  shuffleCards = () => {
    let shuffle = this.state.characters
    for (let i = shuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
    }
    this.setState({
      characters: shuffle
    })
  };

  handleIncrement = (selected) => {
    const name = selected.target.id
    if (this.state.picked.includes(name)) {
      this.setState({ score: 0});
    }
    else {
      this.state.picked.push(name)
      this.setState({ score: this.state.score + 1 });
      this.shuffleCards()
    }
  };

  render () {
    return (
      <>
      <Header 
        score = {this.state.score} 
        picked={this.state.picked}
      />
      {
          this.state.characters.map(character => (
            <CharacterCard
              image = {character.image}
              id = {character.name}
              onClick={this.handleIncrement}
            />        
          ))
        }
      </>
    );
  }
}

export default App;

