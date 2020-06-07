import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: [],
        characters2 : [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
    }

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            })
        });
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }

    render() {
        // const characters = [
        //     {
        //       name: 'Charlie',
        //       job: 'Janitor',
        //     },
        //     {
        //       name: 'Mac',
        //       job: 'Bouncer',
        //     },
        //     {
        //       name: 'Dee',
        //       job: 'Aspring actress',
        //     },
        //     {
        //       name: 'Dennis',
        //       job: 'Bartender',
        //     },
        // ]

        return (
            <div className="App">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

export default App;
