import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, selectCharacter } from '../actions'
import CharacterView from './CharacterView'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

class ListCharacters extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    renderList() {
        return this.props.characters.map((character) => {
            const index = character.name.replace(/\s+/g, '')
            
            return (
                <div className="character-profile" key={character.url}>
                    <div className="character-info">
                        <Link 
                            to={`/characters/${index}`} 
                            onClick={() => this.props.selectCharacter(character)}
                        >
                            <h3>{character.name}</h3>
                        </Link>
                        <p>Birth Year: {character.birth_year}</p>
                        <p>Height: {character.height}</p>
                        <p>Mass: {character.mass}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <main>
                {this.renderList()}
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacters, selectCharacter}
    )(ListCharacters)