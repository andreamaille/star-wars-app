import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveItems, nextPage, previousPage } from '../actions'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'


class Buttons extends Component { 
    render() {
        return (
            <div css={buttonContainer}>
                {this.props.currentPage === 1 ? null : 
                    <button css={button} onClick={() => this.props.previousPage()}>Previous</button>
                }
                
                <button css={button} onClick={() => this.props.nextPage()}>Next</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        spaceships: state.spaceships,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage
    }
}

export default connect(
    mapStateToProps,
    {
        retrieveItems,
        nextPage,
        previousPage,
    }
)(Buttons)




const buttonContainer = css({
    width: '50%',
    textAlign: 'center',
    margin: '0 auto',
    padding: '20px 0'
})

const button = css({
    cursor: 'pointer',
    padding: '10px',
    width: 'calc(100% / 2)',
    color: '#1c1f22',
    border: '2px solid #1c1f22',
    backgroundColor: '#ffdf1d'
})