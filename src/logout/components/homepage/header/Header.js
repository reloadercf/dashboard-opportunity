import React from 'react'
import android from '../../../../assets/images/header/android.png'
import ios from '../../../../assets/images/header/aple.png'
import './header_style.css'



export default () => {
  return (
        <div class="cover">
          <div class="header contenedor">
            <img src={android} />
            <img src={ios}/>
          </div>
        </div>
  )
}
