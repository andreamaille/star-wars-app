import React from 'react'
import Header from './Header'
import ListCharacters from './ListCharacters'
import CharacterView from './CharacterView'
import { BrowserRouter, Route } from 'react-router-dom'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div css={wrapper}>
                    <Header />
                    <Route exact path="/" component={ListCharacters} />
                    <Route path="/characters/:name" component={CharacterView} />
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
