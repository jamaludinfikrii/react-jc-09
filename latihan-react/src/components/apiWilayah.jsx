import React, { Component } from 'react'
import {Input} from 'reactstrap'

class Wilayah extends Component {
    render() {
        return (
            <div className='container'>
                <h1>API Wilayah Indonesia</h1>
                <div className='row justify-content-center'>
                    <div className='col-md-4'>
                        <Input type='select' >
                            <option>Pilih Provinsi</option>
                        </Input>
                    </div>

                    <div className='col-md-4'>
                        <Input type='select' >
                            <option>Pilih Kabupaten</option>
                        </Input>
                    </div>
                </div>
            </div>
        )
    }
}
export default Wilayah
