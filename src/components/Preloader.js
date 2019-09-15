import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Loader from 'react-loader-spinner'

const Preloader = () => {
    return (
        <div css={preloader}>
            <Loader
                type="TailSpin"
                color="#ffdf1d"
                height={150}
                width={150}
                timeout={20000}
            />
        </div>
    )
}

export default Preloader

// Style
const preloader = css({
    textAlign: 'center'
})