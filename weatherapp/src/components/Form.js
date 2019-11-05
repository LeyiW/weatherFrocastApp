import React from 'react';
class Form extends React.Component{
    render(){
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="boston"/>
                <input type="text" name="countury" placeholder="us"/>
                <button>Search</button>
            </form>
        )
    }
}

export default Form;