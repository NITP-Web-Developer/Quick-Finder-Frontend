import React from 'react'
import './showimage.css'

class ShowImage extends React.Component{
    render(){
        return (
            <div className="showimage">
                <img height="100%" width="100%" src={this.props.src} alt="noob"/>
            </div>
        )
    }
}

export default ShowImage