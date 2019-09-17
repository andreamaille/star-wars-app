import { connect } from 'react-redux'
import { fetchCharacters, selectCharacter } from '../actions'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'


const CharacterView = ({character}) => {
    return (
        <div css={mainContent}>
            <p css={title} tabIndex='3'>Character Details for {character.name}</p>
            <ul css={characterStats}>
                <li css={statItem} tabIndex='4'>
                    <span role='img' aria-label='eye emoji'>👁</span>
                    Eye Color: {character.eye_color}
                </li>
                <li css={statItem} tabIndex='5'>
                    <span role='img' aria-label='stars emoji'>✨</span>
                    Gender: {character.gender}
                </li>
                <li css={statItem} tabIndex='6'>
                    <span role='img' aria-label='women getting haircut emoji'> 💇‍♀️ </span>
                    Hair Color: {character.hair_color}
                </li>
                <li css={statItem }tabIndex='7'>
                    <span role='img' aria-label='paint palette emoji'>🎨</span>
                    Skin Color: {character.skin_color}
                </li>
            </ul>
            <Link to="/" exact css={button}><p tabIndex='8'>Go back to Main List</p></Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        spaceships: state.spaceships,
        character: state.selectedCharacter
    }
}

export default connect(mapStateToProps, { fetchCharacters, selectCharacter })(CharacterView)


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

const lightYellow = css({
    backgroundColor: '#f7ef99'
})

const button = css({
    width: '25%',
    display: 'block',
    margin: '20px auto',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '10px',
    color: '#1c1f22',
    border: '2px solid #1c1f22',
    backgroundColor: '#ffdf1d',
    ':hover,:focus,:active': lightYellow
})