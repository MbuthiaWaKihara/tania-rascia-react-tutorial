import React from 'react';
import Table from './components/Table';
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {
    state = {
        characters: []
    }

    removeCharacter = index => {   
        const {characters} = this.state;
        const filteredCharacters = characters.filter((character, i) => i !== index);
        this.setState({
            characters: filteredCharacters,
        })
        
    }

    handleSubmit = character => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }
    render() {

        return (
            <div className="container">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
                <List />
            </div>
        )
    }
}

export default App;