import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchCharacters, selectCharacter, fetchSpaceships, totalPages } from '../actions'
import Preloader from './Preloader.js'
import Buttons from './Buttons.js'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

class ListCharacters extends Component {
    componentDidMount() {
        if (!this.props.characters.length) {
            this.props.fetchCharacters()
            this.props.fetchSpaceships()
        }
    }

    spliceArray = (array, curVal, index) => {
        array.splice(index * 8 - 1, 0, curVal)
        return array
    }

    combineArray = (array1, array2) => {
        return array1.reduce(this.spliceArray, array2.slice())
    }

    renderList = () => {
        const {
            characters,
            spaceships,
            firstItem, 
            lastItem
        } = this.props

        // get a combined list of characters where spaceship is every 8th list item
        const getSpaceshipsAndCharacters = this.combineArray(spaceships, characters)

        // call action to update total number of pages in redux based on combined array
        this.props.totalPages(getSpaceshipsAndCharacters)

        const currentItems = getSpaceshipsAndCharacters.slice(firstItem, lastItem)

        return currentItems.map((item) => {
            // unique key for url route
            const key = item.name.replace(/\s+/g, '_')

            if (!item.birth_year) {
                // rendering for spaceships 
                return (
                    <div css={listItem} key={item.model}>
                        <h2 css={title}>
                            <span role='img' aria-label='spaceship emoji'>🚀🚀</span>
                            {item.name} 
                            <span role='img' aria-label='spaceship emoji'>🚀🚀</span>
                        </h2>
                    </div>
                )
            } else {
                // rendering for characters
                return (
                    <div key={key}>
                        <div css={listItem}>
                            <Link
                                to={`/${key}`}
                                css={characterName}
                                onClick={() => this.props.selectCharacter(item)}
                            >
                                <h3>{item.name}</h3>
                            </Link>
                            <ul css={characterStats}>
                                <li css={statItem}>
                                    <span role='img' aria-label='birthday cake emoji'>🎂</span>
                                    Birth Year: {item.birth_year}
                                </li>
                                <li css={statItem}>
                                    <span role='img' aria-label='thunderbolt emoji'>⚡️</span>
                                    Height: {item.height}
                                </li>
                                <li css={statItem}>
                                    <span role='img' aria-label='balance scale emoji'>⚖️</span>
                                    Mass: {item.mass}
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div>
                {!this.props.characters.length ? <Preloader /> :
                    <main css={mainContent}>
                        <section>
                            {this.renderList()}
                            <Buttons />
                        </section>
                    </main>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        spaceships: state.spaceships,
        currentPage: state.pagination.currentPage,
        itemsPerPage: state.pagination.itemsPerPage,
        firstItem: state.pagination.firstItem,
        lastItem: state.pagination.lastItem
    }
}

export default connect(
    mapStateToProps,
    {   fetchCharacters, 
        selectCharacter,
        fetchSpaceships,
        totalPages
    }
    )(ListCharacters)


// Style
const mainContent = css({
    margin: '25px 0',
    width: '100%',
    backgroundColor: '#1c1f22',
    border: '3px solid #000000',
    fontFamily: 'Ariel, sans-serif'
})

const listItem = css({
    width: '85%',
    margin: '0 auto',
    padding: '25px',
    borderBottom: '2px solid #000000'
})

const characterName = css({
    fontSize: '25px',
    margin: '0',
    color: '#ffdf1d',
    textDecoration: 'none'
})

const characterStats = css({
    margin: '0',
    padding: '0',
    listStyleType: 'none',
    display: 'flex'
})

const statItem = css({
    width: 'calc(100% / 3)',
    margin: '0',
    padding: '0',
    listStyleType: 'none'
})

const title = css({
    textAlign: 'center',
    fontSize: '30px'
})
