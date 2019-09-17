/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Header = () => {
    return (
        <header css={header} data-test='header'>
            <h1 tabIndex="1" css={h1} data-test='title'>Star Wars</h1>
            <h2 tabIndex="2" css={h2}>
                <span role='img' aria-label='stars emoji'>✨</span>
                Characters from the series
                <span role='img' aria-label='stars emoji'>✨</span>
            </h2>
        </header>
    )
}

export default Header

// Style
const header = css({
    height: '30vh',
    margin: '25px 0',
    textAlign: 'center',
    backgroundColor: '#1c1f22',
    fontFamily: 'Ariel, sans-serif',
    border: '3px solid #000000'
})

const h1 = css({
    fontSize: '80px',
    color: '#ffdf1d',
    margin: '30px 0 5px',
    padding: '0'
})

const h2 = css({
    fontSize: '25px',
    fontWeight: '300',
    color: '#ffdf1d',
    margin: '5px',
    padding: '0'
})
