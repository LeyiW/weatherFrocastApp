import React, {Component} from 'react'

class Fourth extends Component {
    render(){
        return(
            <div>
                <h2>FourthDay</h2>
                1: <img src={this.props.wc25}/> time: {this.props.t25} <br/>
                2: <img src={this.props.wc26}/> time: {this.props.t26} <br/>
                3: <img src={this.props.wc27}/> time: {this.props.t27} <br/>
                4: <img src={this.props.wc28}/> time: {this.props.t28} <br/>
                5: <img src={this.props.wc29}/> time: {this.props.t29} <br/>
                6: <img src={this.props.wc30}/> time: {this.props.t30} <br/>
                7: <img src={this.props.wc31}/> time: {this.props.t31} <br/>
                8: <img src={this.props.wc32}/> time: {this.props.t32} <br/>
            </div>
            
            
        )  
    }  
}
export default Fourth;