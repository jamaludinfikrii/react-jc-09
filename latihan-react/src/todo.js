import React from 'react'
import { Table , Input } from 'reactstrap'

class Todo extends React.Component{
    state = {
        data : []
    }

    onBtnAddClick = () => {
        // Get Value
        var todo = this.refs.terserah.value
        var waktu = this.refs.date.value
        var arr = []
        var obj = {
            todo,
            waktu : waktu
        }
        arr.push(obj)
        this.setState({data : this.state.data.concat(arr)})

        // Value disimpan di state
    }

    printDataTodo = () => {
        var jsx = this.state.data.map((val,index) => {
            return(
                <tr>
                    <td>{index +1}</td>
                    <td>{val.todo}</td>
                    <td>{val.waktu}</td>
                    <td> <input type='button' className='btn btn-primary' value='Edit' /> </td>
                    <td> <input type='button' className='btn btn-danger' value='Delete' /> </td>                        
                </tr>
            )
        })

        return jsx
    }

    render(){
        return(
            <div>
                <h1> CRUD Todo App </h1>
                <Table> 
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Todo</td>
                            <td>Waktu</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.printDataTodo()}
                    </tbody>    
                </Table>  

                <div className='row'>
                    <div className='col-md-4'> 
                        <input ref='terserah' className='form-control' type='text' placeholder='masukan Todo' />
                    </div>
                    <div className='col-md-4'>
                        <input ref='date' className='form-control' type='date' />
                    </div>
                    <div className='col-md-4'>
                        <input className='form-control btn-success' onClick={this.onBtnAddClick} type='button' value='add' />
                    </div>
                </div> 
            </div>
        )
    }
}

export default Todo