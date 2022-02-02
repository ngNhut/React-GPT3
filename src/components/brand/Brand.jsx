import React from 'react'
import './Brand.css'
import {
    google,
    shopify,
    dropbox,
    slack,
    atlatsian
} from '../../asset/export'
const Brand = () => {
    return (
        <div className='Brand'>
            <div>
                <img src={google} alt="" />
            </div>
            <div>
                <img src={shopify} alt="" />
            </div>
            <div>
                <img src={dropbox} alt="" />
            </div>
            <div>
                <img src={slack} alt="" />
            </div>
            <div>
                <img src={atlatsian} alt="" />
            </div>
        </div>
    )
}

export default Brand
