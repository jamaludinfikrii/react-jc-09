import React from 'react';
// import logo from './logo.svg';
// import Terserah from './components/button'
// import {Button , InputComp} from './components/button'
// import ClassComp from './components/latihan'
// import './App.css';
// import Bebas from './components/childrenProps'

// let buah = ['Apel' , 'Mangga']



class App extends React.Component{
  state = {
    todo : ['Makan'],
    // angka : 1
  }
  
  componentWillMount(){
    // Ke trigger Sebelum render Pertama
    console.log('Ini WillMount')
  }
  componentDidMount(){
    // Ke trigger Setelah Render Pertama
    console.log('Ini DidMount')

  }
  componentWillUpdate(){
    // Ke trigger setelah ada perubahan state, sebelum re -render
    console.log('Ini WillUpdate')

  }
  componentDidUpdate(){
    // Ke trigger setelah ada perubahan state, setelah re -render
    console.log('Ini DidUpdate')

  }
  

  onBtnAddClick = () => {
    // console.log(this.refs.a.placeholder)
    var input = [this.refs.a.value];
    this.setState({todo : input })

    // this.setState({todo : [this.refs.todo.value]})
  }
  render(){
    console.log('Ini Render')
    return (

      <div>
        <h1>{this.state.todo[0]}</h1>
        <input type='text' placeholder='Masukan Todo' ref='a' />
        <input type='button' value='Add' onClick={this.onBtnAddClick} />

        {/* <h1>Hello World </h1>
        <Button/>
        <InputComp/>
        <ClassComp a={buah}/>
        {this.props.nama}
        <Bebas>
          Ini Children
        </Bebas> */}

        
      </div>
    );
  }
}

export default App;
