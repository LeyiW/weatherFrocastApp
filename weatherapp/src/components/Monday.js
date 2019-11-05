import React, {Component} from 'react'

class Monday extends Component {
    render(){
        return(
            <div>
                <h2>FirstDay</h2>
                1: <img src={this.props.wc1}/> time: {this.props.t1} <br/>
                2: <img src={this.props.wc2}/> time: {this.props.t2} <br/>
                3: <img src={this.props.wc3}/> time: {this.props.t3} <br/>
                4: <img src={this.props.wc4}/> time: {this.props.t4} <br/>
                5: <img src={this.props.wc5}/> time: {this.props.t5} <br/>
                6: <img src={this.props.wc6}/> time: {this.props.t6} <br/>
                7: <img src={this.props.wc7}/> time: {this.props.t7} <br/>
                8: <img src={this.props.wc8}/> time: {this.props.t8} <br/>
            </div>
        )  
    }  
}
export default Monday