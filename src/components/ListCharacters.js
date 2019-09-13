import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, selectCharacter, retrieveItems, nextPage, previousPage, fetchSpaceships } from '../actions'
import CharacterView from './CharacterView'
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

class ListCharacters extends Component {
    componentDidMount() {
        this.props.fetchCharacters()
        this.props.fetchSpaceships()
    }

    splicer(array, element, index) {
        array.splice(index * 8 - 1, 0, element)
        return array
    }

    weave(array1, array2) {
        return array1.reduce(this.splicer, array2.slice())
    }

    renderList() {
        const {
            characters, 
            spaceships, 
            currentPage, 
            itemsPerPage
        } = this.props 

        let completeList = this.weave(spaceships, characters)

        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const currentItems = completeList.slice(indexOfFirstItem, indexOfLastItem)

        return currentItems.map((item, index) => {
            const key = item.name.replace(/\s+/g, '')
            
            if (!item.birth_year) {
                return (
                    <div className="spaceship" key={item.model}>
                        <h2>{item.name}</h2>
                    </div>
                )
            } else {
                return (
                    <div className="character-profile" key={item.url}>
                        <div className="character-info">
                            <Link
                                to={`/characters/${key}`}
                                onClick={() => this.props.selectCharacter(item)}
                            >
                                <h3>{item.name}</h3>
                            </Link>
                            <p>Birth Year: {item.birth_year}</p>
                            <p>Height: {item.height}</p>
                            <p>Mass: {item.mass}</p>
                        </div>
                    </div>
                )
            }
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
        spaceships: state.spaceships,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage
    }
}

export default connect(
    mapStateToProps,
    {   fetchCharacters, 
        selectCharacter,
        fetchSpaceships,
        retrieveItems,
        nextPage,
        previousPage, 
    }
    )(ListCharacters)