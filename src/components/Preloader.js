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
                timeout={3000} //3 secs
            />
        </div>
    )
}

export default Preloader


const preloader = css({
    width: '40%',
    margin: '0 auto'
})