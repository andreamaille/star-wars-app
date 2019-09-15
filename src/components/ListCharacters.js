import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCharacters, selectCharacter, fetchSpaceships, getPagination, totalPages } from '../actions'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import Preloader from './Preloader.js'
import Buttons from './Buttons.js'

class ListCharacters extends Component {
    componentDidMount() {
        if (!this.props.characters.length) {
            this.props.fetchCharacters()
            this.props.fetchSpaceships()
        }
    }

    spliceArray = (array, element, index) => {
        array.splice(index * 8 - 1, 0, element)
        return array
    }

    combineArray = (array1, array2) => {
        return array1.reduce(this.spliceArray, array2.slice())
    }

    renderList() {
        const {
            characters, 
            spaceships, 
            currentPage, 
            itemsPerPage
        } = this.props 

        const completeList = this.combineArray(spaceships, characters)

        this.props.totalPages(completeList)

        //Pagination
        const indexOfLastItem = currentPage * itemsPerPage 
        const indexOfFirstItem = indexOfLastItem - itemsPerPage 
        const currentItems = completeList.slice(indexOfFirstItem, indexOfLastItem)


        return currentItems.map((item) => {
            const key = item.name.replace(/\s+/g, '')

            if (!item.birth_year) {
                return (
                    <div css={listItem} key={item.model}>
                        <h2 css={title}>🚀🚀 {item.name} 🚀🚀</h2>
                    </div>
                )

            } else {
                return (
                    <div  key={item.url}>
                        <div css={listItem} className="character-info">
                            <Link
                                to={`/${key}`}
                                css={characterName}
                                onClick={() => this.props.selectCharacter(item)}
                            >
                                <h3>{item.name}</h3>
                            </Link>
                            <ul css={characterStats}>
                                <li css={statItem}>🎂 Birth Year: {item.birth_year}</li>
                                <li css={statItem}>⚡️ Height: {item.height}</li>
                                <li css={statItem}>⚖️ Mass: {item.mass}</li>
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
                {!this.props.characters.length || !this.props.spaceships.length ? <Preloader /> :
                    <div css={mainContent} >
                        <div>{this.renderList()}</div>
                        <Buttons />
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        spaceships: state.spaceships,
        currentPage: state.currentPagination.currentPage,
        itemsPerPage: state.currentPagination.itemsPerPage
    }
}

export default connect(
    mapStateToProps,
    {   fetchCharacters, 
        selectCharacter,
        fetchSpaceships,
        getPagination,
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
