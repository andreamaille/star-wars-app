import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, selectCharacter, retrieveItems, nextPage, previousPage } from '../actions'
import CharacterView from './CharacterView'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

class ListCharacters extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    renderList() {
        const indexOfLastItem = this.props.currentPage * this.props.itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - this.props.itemsPerPage;
        const currentItems = this.props.characters.slice(indexOfFirstItem, indexOfLastItem);

        return currentItems.map((character) => {
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
                <button onClick={() => this.props.previousPage()}>Previous</button>
                <button onClick={() => this.props.nextPage()}>Next</button>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage
    }
}

export default connect(
    mapStateToProps,
    {   fetchCharacters, 
        selectCharacter,
        retrieveItems,
        nextPage,
        previousPage
    }
    )(ListCharacters)