import React from 'react'
import { connect } from 'react-redux'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'

const style = css({
    backgroundColor: 'lightblue',
    width: '400px',
    height: '500px',
    position: 'absolute'
})


const CharacterView = ({ character }) => {

    if (!character) {
        return null
    }
    
    return (
        <div className="character-details" css={style}>
            <p>Character Details for {character.name}</p>
            <ul>
                <li>Eye Color: {character.eye_color}</li>
                <li>Gender: {character.gender}</li>
                <li>Hair Color: {character.hair_color}</li>
                <li>Skin Color: {character.skin_color}</li>
            </ul>
            <Link
                to="/" exact
            >
                Go back to Catalogue
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps)(CharacterView)