import React from 'react'
// import Manusia from './object'

// EXPORT IMPORT
// COMPONENT
// STATE DAN PROPS

// PROPS Adalah Transfer data dari Parent Ke Child




//  LIFECYCLE METHOD

//  STATE MANAJEMEN

var nama = "fikri"
class Latihan extends React.Component{
    render(){
        return(
            <div>
               {this.props.a[0]} {nama}
            </div>
        )
    }
}

export default Latihan;
