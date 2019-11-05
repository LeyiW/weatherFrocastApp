import React, {Component} from 'react'

class Second extends Component {
    render(){
        return(
            <div>
                <h2>SecondDay</h2>
                1: <img src={this.props.wc9}/> time: {this.props.t9} <br/>
                2: <img src={this.props.wc10}/> time: {this.props.t10} <br/>
                3: <img src={this.props.wc11}/> time: {this.props.t11} <br/>
                4: <img src={this.props.wc12}/> time: {this.props.t12} <br/>
                5: <img src={this.props.wc13}/> time: {this.props.t13} <br/>
                6: <img src={this.props.wc14}/> time: {this.props.t14} <br/>
                7: <img src={this.props.wc15}/> time: {this.props.t15} <br/>
                8: <img src={this.props.wc16}/> time: {this.props.t16} <br/>
            </div>
            
            
        )  
    }  
}
export default Second;