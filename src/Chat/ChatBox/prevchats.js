import React from 'react'
import './prevchats.css'

class PrevChats extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            friend: ""
        }
    }

    componentDidMount() {
        this.setState({
            friend: this.props.prevchats
        })
    }

    render() {
        return (
            <div>
                <div className={this.props.prevchats === this.props.currchatid ? "selected-chat" : "chatid-cont"} onClick={() => this.props.selectPrevChat(this.props.prevchats)}>
                    <div style={{ display: "flex",width:"70%" }}>
                        <div style={{width:"100%",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <p style={{width:"100%",marginBottom:"0"}}>{this.state.friend}</p>
                        </div>
                        {
                            this.props.notif !== 0 ? <div className="notif"><p>{this.props.notif}</p></div> : null
                        }
                    </div>
                    <div className={this.props.online[this.state.friend] ? "online" : "offline"} />
                </div>
            </div>
        )
    }
}

export default PrevChats
