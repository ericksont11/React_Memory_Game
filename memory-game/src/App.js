import React from 'react';
import CharacterCard from './components/CharacterCard'
import characters from "./characters.json"
import Header from './components/header'

class App extends React.Component {

  state = {
    characters,
    score: 0,
    picked: [],
    feedback:[ "","Guaranteed Point!", "You're not a goldfish", "Good Start", "Keep it up",
              "You're rolling", "Still easy?", "Who was the first dwarf you picked?",
              "Are these distracting!?", "Is this too easy?", "Should I have put random"+
              "orcs instead?", "I'm rooting for you now", "Not really", "So close",
              "Tolkien fanboy", "You actually did it!", "LOSER" ]
  }

  componentWillMount() {
    this.handleRandomize()
  }

  handleRandomize = () => {
    let randomize = this.state.characters
    for (let i = randomize.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomize[i], randomize[j]] = [randomize[j], randomize[i]];
    }
    this.setState({
      characters: randomize
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
      this.handleRandomize()
    }
  };

  render () {
    return (
      <>
      <Header 
        score = {this.state.score} 
        feedback={this.state.feedback[this.state.score]}
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

