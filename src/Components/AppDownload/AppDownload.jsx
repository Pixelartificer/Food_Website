import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const appDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
        <p>For Better Experiance Download <br/> Tomato App</p>
        <div className='appDownlaodPlatform'>
            <img src={assets.play_store} alt={assets.play_store} />
            <img src={assets.app_store} alt={assets.app_store} />
        </div>
    </div>
  )
}

export default appDownload