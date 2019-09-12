import React from 'react'
import Header from './Header'
import ListCharacters from './ListCharacters'
import CharacterView from './CharacterView'
import { BrowserRouter, Route, Link } from 'react-router-dom'



const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <Route path="/" exact component={ListCharacters} />
                <Route path="/characters/:name" exact component={CharacterView} />
            </div>
            </BrowserRouter>
        </div>
    )
}




export default App