import React from 'react'
import { connect } from 'react-redux'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'


const CharacterView = ({ character }) => {
    return (
        <div css={mainContent}>
            <p css={title}>Character Details for {character.name}</p>
            <ul css={characterStats}>
                <li css={statItem}>👁 Eye Color: {character.eye_color}</li>
                <li css={statItem}>✨ Gender: {character.gender}</li>
                <li css={statItem}>💇‍♀️ Hair Color: {character.hair_color}</li>
                <li css={statItem}>🎨 Skin Color: {character.skin_color}</li>
            </ul>
            <Link
                to="/" exact
            >
                <p css={button}>Go back to Main List</p>
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


// Style
const title = css({
    textAlign: 'center',
    fontSize: '30px',
    color: '#ffdf1d'
})

const characterStats = css({
    margin: '0',
    padding: '0',
    listStyleType: 'none',
})

const statItem = css({
    textAlign: 'center',
    margin: '5px 0'
})

const mainContent = css({
    margin: '25px 0',
    padding: '50px 0',
    width: '100%',
    backgroundColor: '#1c1f22',
    border: '3px solid #000000',
    fontFamily: 'Ariel, sans-serif'
})

const button = css({
    width: '25%',
    display: 'block',
    margin: '20px auto',
    textAlign: 'center',
    padding: '10px',
    color: '#1c1f22',
    border: '2px solid #1c1f22',
    backgroundColor: '#ffdf1d'
})