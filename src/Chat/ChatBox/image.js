import React from 'react'
import './message.css'
import ShowImage from './showimage'

class Image extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    showImage = () => {
        this.setState({
            show: true
        })
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                show:false
            })
        }
    }

    render() {
        return (
            <>
                <div className={this.props.class} onClick={this.showImage}>
                    <div className="mess-cont">
                        <p className="time">{this.props.time}</p>
                        <img width="85%" src={this.props.src} alt="sry" />
                    </div>
                </div>
                {
                    this.state.show ? <div ref={this.setWrapperRef}>
                        <ShowImage src={this.props.src} />
                    </div> : null
                }
            </>
        )
    }
}

export default Image
