import React from 'react'
import Header from './Header'
import ListCharacters from './ListCharacters'
import CharacterView from './CharacterView'
import { BrowserRouter, Route, Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div css={wrapper}>
                    <Header />
                    <Route path="/" exact component={ListCharacters} />
                    <Route path="/characters/:name" exact component={CharacterView} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App


const wrapper = css({
    margin: '0 auto',
    width: '85%'
})
