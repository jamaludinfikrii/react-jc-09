import React from 'react'
import { Table  } from 'reactstrap'
    // COMPONENT
    // EXPORT IMPORT
    // PROPS
    // STATE
    // LIFECYCLE

class Todo extends React.Component{
    state = {
        data : [],
        selectedEdit : null
    }

    onBtnAddClick = () => {
        // Get Value
        var todo = this.refs.terserah.value
        var waktu = this.refs.date.value
        console.log(todo)
        console.log(waktu)
        var arr = this.state.data
        var obj = {
            todo,
            waktu : waktu
        }
        arr.push(obj)
        this.setState({data : arr})

        // Value disimpan di state
    }
    onBtnEdit = (a) => {
        this.setState({selectedEdit : a})
    }
    onBtnDelete = (index) => {
        var arr = this.state.data
        arr.splice(index , 1)
        this.setState({data : arr})
    }

    onBtnSave = (index) => {
        var arr = this.state.data
        arr[index].todo = this.refs.todoEdit.value
        arr[index].waktu = this.refs.tanggalEdit.value
        this.setState({data : arr, selectedEdit : null})

    }

    printDataTodo = () => {
        var functionMap = (val,index) => {
            if(this.state.selectedEdit == index){
                return(
                <tr key={index}>
                    <td>{index +1}</td>
                    <td><input type='text' ref='todoEdit' className='form-control' defaultValue={val.todo} /></td>
                    <td><input type='date' ref='tanggalEdit' className='form-control' defaultValue={val.waktu} /></td>
                    <td> <input type='button' className='btn btn-success' onClick={() =>  this.onBtnSave(index)} value='Save' /> </td>
                    <td> <input type='button' className='btn btn-info' onClick={() => this.setState({selectedEdit : null})} value='Cancel' /> </td>                        
                </tr>
                )
            }
            return(
                <tr key={index}>
                    <td>{index +1}</td>
                    <td>{val.todo}</td>
                    <td>{val.waktu}</td>
                    <td> <input type='button' className='btn btn-primary' onClick={() =>  this.onBtnEdit(index)} value='Edit' /> </td>
                    <td> <input type='button' className='btn btn-danger' onClick={() => this.onBtnDelete(index)} value='Delete' /> </td>                        
                </tr>
            )
        }
        var jsx = this.state.data.map(functionMap)
        // console.log(jsx)

        return jsx
    }

    render(){
        return(
            <div className='container'>
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