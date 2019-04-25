import React from 'react';
import CharacterCard from './components/CharacterCard'
import characters from "./characters.json"

class App extends React.Component {

  state = {
    characters
  }
  render () {
    return (
      <>
      {
          this.state.characters.map(character => (
            <CharacterCard
              image = {character.image}
            />         
          ))
        }
      </>
    );
  }
}

export default App;

