import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Header'
import ListCharacters from './ListCharacters'
import CharacterView from './CharacterView'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const App = () => {
    return (
        <div>
            <Router>
                <div css={wrapper}>
                    <Header />
                    <Route exact path="/" component={ListCharacters}/>
                    <Route path="/:name" component={CharacterView} />
                </div>
            </Router>
        </div>
    )
}

export default App

// Style
const wrapper = css({
    margin: '0 auto',
    width: '85%'
})
