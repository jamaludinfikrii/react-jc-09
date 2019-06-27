import React, { Component } from 'react'
import {Input} from 'reactstrap'
import Axios from 'axios';

const url = 'https://x.rajaapi.com/MeP7c5neRZPPYYYeRvsoXaByj8v52nAfAvwm2BYhRdf4soquXNE7729t1F/m/wilayah'

class Wilayah extends Component {
    state = {
        provinsi : [],
        kabupaten : [],
        loadingKabupaten : true,
    }
    componentDidMount(){
        Axios.get(url + '/provinsi')
        .then((res) => {
            console.log(res.data.data)
            this.setState({provinsi : res.data.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderDataProvinsi = () => {
        var jsx = this.state.provinsi.map((val) => {
            return (
                <option value={val.id}> {val.name} </option>
            )
        })

        return jsx
    }

    handleOnClickKabupaten = () => {
        var id = this.refs.provinsi.refs.provinsiInner.value
        if(id > 0){
            Axios.get(url + '/kabupaten?idpropinsi=' + id)
            .then((res) => {
                this.setState({kabupaten : res.data.data , loadingKabupaten : false})
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    renderDataKabupaten = () => {
        if(this.state.loadingKabupaten === true){
            return (
                <option> loading ... </option>
            )
        }
        var jsx = this.state.kabupaten.map((val) => {
            return (
                <option> {val.name} </option>
            )
        })
        return jsx
    }
    onChangeProvinsi = () => {
        this.setState({loadingKabupaten : true})
    }

    render() {
        if(this.state.provinsi.length === 0){
            return (
                <h1> Loading ... </h1>
            )
        }
        return (
            <div className='container'>
                <h1>API Wilayah Indonesia</h1>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <Input ref='provinsi' onChange={this.onChangeProvinsi} innerRef='provinsiInner' type='select' >
                            <option value={0}>Pilih Provinsi</option>
                            {this.renderDataProvinsi()}
                        </Input>
                    </div>

                    <div className='col-md-4'>
                        <Input onClick={this.handleOnClickKabupaten} type='select' >
                            <option>Pilih Kabupaten</option>
                            {this.renderDataKabupaten()}
                        </Input>
                    </div>
                </div>
            </div>
        )
    }
}
export default Wilayah
