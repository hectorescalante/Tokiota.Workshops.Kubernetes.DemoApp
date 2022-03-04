import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { characters: [], loading: true };
  }

  componentDidMount() {
    this.populateCharacterData();
  }

  static rendercharactersTable(characters) {
    return (
      <table className='table' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character =>
            <tr key={character.id}>
              <td>{character.id}</td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.status}</td>
              <td><img src={character.image} alt={character.name} width="120" height="100" /></td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.rendercharactersTable(this.state.characters);

    return (
      <div>
        <h1 id="tabelLabel" >Rick and Morty </h1>
        <h2>Characters</h2>
        {contents}
      </div>
    );
  }

  async populateCharacterData() {
    const response = await fetch('characters');
    const data = await response.json();
    this.setState({ characters: data, loading: false });
  }
}
