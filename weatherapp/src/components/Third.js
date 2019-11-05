import React, {Component} from 'react'

class Third extends Component {
    render(){
        return(
            <div>
                <h2>ThirdDay</h2>
                1: <img src={this.props.wc17}/> time: {this.props.t17} <br/>
                2: <img src={this.props.wc18}/> time: {this.props.t18} <br/>
                3: <img src={this.props.wc19}/> time: {this.props.t19} <br/>
                4: <img src={this.props.wc20}/> time: {this.props.t20} <br/>
                5: <img src={this.props.wc21}/> time: {this.props.t21} <br/>
                6: <img src={this.props.wc22}/> time: {this.props.t22} <br/>
                7: <img src={this.props.wc23}/> time: {this.props.t23} <br/>
                8: <img src={this.props.wc24}/> time: {this.props.t24} <br/>
            </div>
            
            
        )  
    }  
}
export default Third;