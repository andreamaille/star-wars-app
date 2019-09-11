import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters } from '../actions'

class ListCharacters extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
    }

    renderList() {
        return this.props.characters.map((character, index) => {
            return (
                <div className="character-profile" key={index}>
                    <div className="character-info">
                        <h3>{character.name}</h3>
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
                yo
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
    { fetchCharacters }
    )(ListCharacters)