import React from 'react';
import Manusia from './components/object'
// import logo from './logo.svg';
// import Terserah from './components/button'
// import {Button , InputComp} from './components/button'
// import ClassComp from './components/latihan'
// import './App.css';
// import Bebas from './components/childrenProps'
import CountWord from './components/countWords'
// let buah = ['Apel' , 'Mangga']

import Todo from './todo'
import Daftar from './components/daftarPage'
import Header from './components/header'
import { Route , Link } from 'react-router-dom'
import Count from './components/count';


function Home () {
  return(
    <div>
      <h1> Ini Home {Manusia.nama} {Manusia.iniFunction()}  </h1>
      <Link to='/a'><input type='button' value='pindah ke halaman todo'/></Link>
    </div>
  )
}


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
        <Header/>
        <Route path='/a' component={Todo} />
        <Route path='/daftar' component={Daftar} />
        <Route path='/redux' component={Count} />
        <Route path='/' component={Home} exact />
        <Route path='/count' component={CountWord} />
      </div>
    );
  }
}

export default App;
