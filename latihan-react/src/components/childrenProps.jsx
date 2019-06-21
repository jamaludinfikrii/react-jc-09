import React from 'react'


class ChildrenProps extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'red' , color:'white' , width:'300px'}}>
                {this.props.children}
            </div>
        )
    }

}

export default ChildrenProps