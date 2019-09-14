import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const Header = () => {
    return (
        <header css={header}>
            <h1 css={h1}>Star Wars</h1>
            <h2 css={h2}>✨Characters from the series✨</h2>
        </header>
    )
}

export default Header

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
