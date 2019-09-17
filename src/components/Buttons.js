import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nextPage, previousPage } from '../actions'

/** @jsx jsx */
import { jsx, css } from '@emotion/core'

class Buttons extends Component { 
    render() {
        const {
            currentPage,
            totalPages,
        } = this.props 

        return (
            <div css={buttonContainer}>
                <button css={currentPage === 1 ? inactive : button} onClick={() => this.props.previousPage()}>Previous</button>
                <button css={totalPages === currentPage ? inactive : button} onClick={() => this.props.nextPage()}>Next</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.pagination.currentPage,
        itemsPerPage: state.pagination.itemsPerPage,
        totalPages: state.pagination.totalPages
    }
}

export default connect(mapStateToProps, { nextPage, previousPage })(Buttons)


// Style
const buttonContainer = css({
    width: '50%',
    textAlign: 'center',
    margin: '0 auto',
    padding: '20px 0'
})

const lightYellow = css({
    backgroundColor: '#f7ef99'
})

const button = css({
    cursor: 'pointer',
    padding: '10px',
    width: 'calc(100% / 2)',
    color: '#1c1f22',
    border: '2px solid #1c1f22',
    backgroundColor: '#ffdf1d',
    ':hover,:focus,:active': lightYellow
})

const inactive= css({
    cursor: 'default',
    padding: '10px',
    width: 'calc(100% / 2)',
    color: '#1c1f22',
    border: '2px solid #1c1f22',
    backgroundColor: '#c8c8c8'
})
