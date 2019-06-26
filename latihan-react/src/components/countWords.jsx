import React, { Component } from 'react'
import {Input} from 'reactstrap'
import { connect } from 'react-redux'
import  { CountWord }  from './../redux/actions/wordAction'

class CountWords extends Component {
    state = {
        text : null,
        count : 0
    }

    handleOnChangeTextArea = () => {
        var textArea = this.refs.input.refs.inputInner.value
        var words = textArea.split(' ')
        var hasilFilter = words.filter((val) => {
            return val !== ""
        })
        this.props.CountWord(hasilFilter.length)
    }
    render() {
        return (
            <div className='container'>
                <h1>Count Words App With Redux</h1>
                <center>

                    <Input onChange={this.handleOnChangeTextArea} 
                    type='textarea' ref='input' innerRef='inputInner' 
                    placeholder='enter words' />

                    {/* <h1> { this.state.count <= 5 
                         ?
                         this.state.count + ' Words' 
                         :
                          this.state.count > 5 
                         ?
                         'Ini Lebih dari Lima'  
                         :
                         null }</h1> */}
                    <h1> {this.props.count} </h1>

                </center>
            </div>
        )
    }
}
// param state merujuk ke index.js di folder reducers

const mapStateToProps = (state) => {
    return {
        count : state.word.count
    }
}

export default connect(mapStateToProps , {CountWord})(CountWords);
