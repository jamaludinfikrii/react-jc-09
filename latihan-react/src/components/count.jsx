import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Add , Min } from './../redux/actions/countAction'

class Count extends Component {
    state ={
        count : 0
    }

    onBtnAddClick = () =>{
        this.props.Add()
    }

    onBtnMinClick = () =>{
        this.props.Min()
    }
    render() {
        console.log(this.props.count)
        return (
            <div className='container'>
                <h1> Ini Page Redux </h1>
                <div className='d-flex justify-content-center'>
                    <input type='button' className='btn btn-outline-primary' onClick={this.onBtnMinClick} value='-' />
                    <span style={{fontWeight : 'bolder' , fontSize:'30px'}} className='mr-5 ml-5'> {this.props.count} </span> 
                    <input type='button' className='btn btn-outline-primary' onClick={this.onBtnAddClick} value='+' />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        count : state.bebas.count
    }
}

export default connect(mapStateToProps , {Add,Min})(Count);
