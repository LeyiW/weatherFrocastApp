import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Title from './Title.js';
import Form from './Form.js';
import Monday from './Monday.js';
import Second from './Second.js';
import Third from './Third.js';
import Fourth from './Fourth.js';
import Fifth from './Fifth.js';

const imgurl1 = "http://openweathermap.org/img/wn/";
const imgurl2 = "@2x.png";
const API_KEY = "ed62ed9bd3cea545b2c2b3945c1f9a6a";

class App extends React.Component {
  constructor() {

    super();
    this.state = {
      city : 'undifined',
      countury : 'undifined',
      error : 'undifined',
      First : 'undefined',
      Second: 'undefined',
      Third: 'undefined',
      Fourth: 'undefined',
      Fifth: 'undefined',
      wc1: 'undefined',
      t1: "undifined",
      wc2: 'undefined',
      t2: 'undifined',
      wc3: 'undefined',
      wc4: 'undefined',
      wc5: 'undefined',
      wc6: 'undefined',
      wc7: 'undefined',
      wc8: 'undefined',
      wc9: 'undefined',
      wc10: 'undefined',
      wc11: 'undefined',
      wc12: 'undefined',
      wc13: 'undefined',
      wc14: 'undefined',
      wc15: 'undefined',
      wc16: 'undefined',
      // wc17: 'undefined',
    }
    //this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const countury = e.target.elements.countury.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${countury}&APPID=${API_KEY}&units=metric`);
    const data1 = await api_call.json();
    this.setState({
      city : data1.city.name,
        countury : data1.city.country,
        First : imgurl1+data1.list[0].weather[0].icon+ imgurl2,
        Second: imgurl1+data1.list[8].weather[0].icon+ imgurl2,
        Third: imgurl1+data1.list[16].weather[0].icon+ imgurl2,
        Fourth: imgurl1+data1.list[24].weather[0].icon+ imgurl2,
        Fifth: imgurl1+data1.list[32].weather[0].icon+ imgurl2,
        FirstMaxTemp : data1.list[0].main.temp_max,
        SecondMaxTemp : data1.list[8].main.temp_max,
        ThirdMaxTemp : data1.list[16].main.temp_max,
        FourthMaxTemp : data1.list[24].main.temp_max,
        FifthMaxTemp : data1.list[32].main.temp_max,
        FirstMinTemp : data1.list[0].main.temp_min,
        SecondMinTemp : data1.list[8].main.temp_min,
        ThirdMinTemp : data1.list[16].main.temp_min,
        FourthMinTemp : data1.list[24].main.temp_min,
        FifthMinTemp : data1.list[32].main.temp_min,

        //weather condition [i] interval 3h per record
        wc1: imgurl1+data1.list[0].weather[0].icon+ imgurl2,
        wc2: imgurl1+data1.list[1].weather[0].icon+ imgurl2,
        wc3: imgurl1+data1.list[2].weather[0].icon+ imgurl2,
        wc4: imgurl1+data1.list[3].weather[0].icon+ imgurl2,
        wc5: imgurl1+data1.list[4].weather[0].icon+ imgurl2,
        wc6: imgurl1+data1.list[5].weather[0].icon+ imgurl2,
        wc7: imgurl1+data1.list[6].weather[0].icon+ imgurl2,
        wc8: imgurl1+data1.list[7].weather[0].icon+ imgurl2,
        wc9: imgurl1+data1.list[8].weather[0].icon+ imgurl2,
        wc10: imgurl1+data1.list[9].weather[0].icon+ imgurl2,
        wc11: imgurl1+data1.list[10].weather[0].icon+ imgurl2,
        wc12: imgurl1+data1.list[11].weather[0].icon+ imgurl2,
        wc13: imgurl1+data1.list[12].weather[0].icon+ imgurl2,
        wc14: imgurl1+data1.list[13].weather[0].icon+ imgurl2,
        wc15: imgurl1+data1.list[14].weather[0].icon+ imgurl2,
        wc16: imgurl1+data1.list[15].weather[0].icon+ imgurl2,
        wc17: imgurl1+data1.list[16].weather[0].icon+ imgurl2,
        wc18: imgurl1+data1.list[17].weather[0].icon+ imgurl2,
        wc19: imgurl1+data1.list[18].weather[0].icon+ imgurl2,
        wc20: imgurl1+data1.list[19].weather[0].icon+ imgurl2,
        wc21: imgurl1+data1.list[20].weather[0].icon+ imgurl2,
        wc22: imgurl1+data1.list[21].weather[0].icon+ imgurl2,
        wc23: imgurl1+data1.list[22].weather[0].icon+ imgurl2,
        wc24: imgurl1+data1.list[23].weather[0].icon+ imgurl2,
        wc25: imgurl1+data1.list[24].weather[0].icon+ imgurl2,
        wc26: imgurl1+data1.list[25].weather[0].icon+ imgurl2,
        wc27: imgurl1+data1.list[26].weather[0].icon+ imgurl2,
        wc28: imgurl1+data1.list[27].weather[0].icon+ imgurl2,
        wc29: imgurl1+data1.list[28].weather[0].icon+ imgurl2,
        wc30: imgurl1+data1.list[29].weather[0].icon+ imgurl2,
        wc31: imgurl1+data1.list[30].weather[0].icon+ imgurl2,
        wc32: imgurl1+data1.list[31].weather[0].icon+ imgurl2,
        wc33: imgurl1+data1.list[32].weather[0].icon+ imgurl2,
        wc34: imgurl1+data1.list[33].weather[0].icon+ imgurl2,
        wc35: imgurl1+data1.list[34].weather[0].icon+ imgurl2,
        wc36: imgurl1+data1.list[35].weather[0].icon+ imgurl2,
        wc37: imgurl1+data1.list[36].weather[0].icon+ imgurl2,
        wc38: imgurl1+data1.list[37].weather[0].icon+ imgurl2,
        wc39: imgurl1+data1.list[38].weather[0].icon+ imgurl2,
        wc40: imgurl1+data1.list[39].weather[0].icon+ imgurl2,

        




        t1: data1.list[0].dt_txt,
        t2: data1.list[1].dt_txt,
        t3: data1.list[2].dt_txt,
        t4: data1.list[3].dt_txt,
        t5: data1.list[4].dt_txt,
        t6: data1.list[5].dt_txt,
        t7: data1.list[6].dt_txt,
        t8: data1.list[7].dt_txt,
        t9: data1.list[8].dt_txt,
        t10: data1.list[9].dt_txt,
        t11: data1.list[10].dt_txt,
        t12: data1.list[11].dt_txt,
        t13: data1.list[12].dt_txt,
        t14: data1.list[13].dt_txt,
        t15: data1.list[14].dt_txt,
        t16: data1.list[15].dt_txt,
        t17: data1.list[16].dt_txt,
        t18: data1.list[17].dt_txt,
        t19: data1.list[18].dt_txt,
        t20: data1.list[19].dt_txt,
        t21: data1.list[20].dt_txt,
        t22: data1.list[21].dt_txt,
        t23: data1.list[22].dt_txt,
        t24: data1.list[23].dt_txt,
        t25: data1.list[24].dt_txt,
        t26: data1.list[25].dt_txt,
        t27: data1.list[26].dt_txt,
        t28: data1.list[27].dt_txt,
        t29: data1.list[28].dt_txt,
        t30: data1.list[29].dt_txt,
        t31: data1.list[30].dt_txt,
        t32: data1.list[31].dt_txt,
        t33: data1.list[32].dt_txt,
        t34: data1.list[33].dt_txt,
        t35: data1.list[34].dt_txt,
        t36: data1.list[35].dt_txt,
        t37: data1.list[36].dt_txt,
        t38: data1.list[37].dt_txt,
        t39: data1.list[38].dt_txt,
        t40: data1.list[39].dt_txt,


    })
  }

  componentDidMount() {
    
    // fetch('http://api.openweathermap.org/data/2.5/forecast?q=Boston,us&APPID=ed62ed9bd3cea545b2c2b3945c1f9a6a')
    //   .then(resp => resp.json())
    //   .then(data => this.setState({
    //     city : data.city.name,
    //     countury : data.city.country,
    //     First : imgurl1+data.list[0].weather[0].icon+ imgurl2,
    //     Second: imgurl1+data.list[8].weather[0].icon+ imgurl2,
    //     Third: imgurl1+data.list[16].weather[0].icon+ imgurl2,
    //     Fourth: imgurl1+data.list[24].weather[0].icon+ imgurl2,
    //     Fifth: imgurl1+data.list[32].weather[0].icon+ imgurl2,
    //   }))
  }
  render() {
    return (
      <Router>
        <Title/>
        <Form getWeather={this.getWeather}/>
        <h2>City: {this.state.city}  Countury: {this.state.countury}</h2>
        <table>
          <tbody>
            <tr>
              <th><Link to="/First">1st</Link></th>
              <th><Link to="/Second">2nd</Link></th>
              <th><Link to="/Third">3rd</Link></th>
              <th><Link to="/Fourth">4th</Link></th>
              <th><Link to="/Fifth">5th</Link></th>
              
            </tr>
            <tr>
              <td><img src={this.state.First} alt="weather condition 1"/></td>
              <td><img src={this.state.Second} alt="weather condition 2"/></td>
              <td><img src={this.state.Third} alt="weather condition 3"/></td>
              <td><img src={this.state.Fourth} alt="weather condition 4"/></td>
              <td><img src={this.state.Fifth} alt="weather condition 5"/></td>
            </tr>
            <tr>
              <td>MaxTemp:{this.state.FirstMaxTemp}</td>
              <td>MaxTemp:{this.state.SecondMaxTemp}</td>
              <td>MaxTemp:{this.state.ThirdMaxTemp}</td>
              <td>MaxTemp:{this.state.FourthMaxTemp}</td>
              <td>MaxTemp:{this.state.FifthMaxTemp}</td>
            </tr>
            <tr>
              <td>MinTemp:{this.state.FirstMinTemp}</td>
              <td>MinTemp:{this.state.SecondMinTemp}</td>
              <td>MinTemp:{this.state.ThirdMinTemp}</td>
              <td>MinTemp:{this.state.FourthMinTemp}</td>
              <td>MinTemp:{this.state.FifthMinTemp}</td>
              
            </tr>

          </tbody>
        </table>
        


        <Switch>
          <Route path="/First">
            <Monday 
              wc1 = {this.state.wc1}
              wc2 = {this.state.wc2}
              wc3 = {this.state.wc3}
              wc4 = {this.state.wc4}
              wc5 = {this.state.wc5}
              wc6 = {this.state.wc6}
              wc7 = {this.state.wc7}
              wc8 = {this.state.wc8}
              t1 ={this.state.t1}
              t2 = {this.state.t2}
              t3 = {this.state.t3}
              t4 = {this.state.t4}
              t5 = {this.state.t5}
              t6 = {this.state.t6}
              t7 = {this.state.t7}
              t8 = {this.state.t8}

            />
          </Route>
          <Route path="/Second">
            <Second 
            wc9 = {this.state.wc9}
            wc10 = {this.state.wc10}
            wc11 = {this.state.wc11}
            wc12 = {this.state.wc12}
            wc13 = {this.state.wc13}
            wc14 = {this.state.wc14}
            wc15 = {this.state.wc15}
            wc16 = {this.state.wc16}
            t9 ={this.state.t9}
            t10 = {this.state.t10}
            t11 = {this.state.t11}
            t12 = {this.state.t12}
            t13 = {this.state.t13}
            t14 = {this.state.t14}
            t15 = {this.state.t15}
            t16 = {this.state.t16}
            />
          </Route>
          <Route path="/Third">
            <Third 
            wc17 = {this.state.wc17}
            wc18 = {this.state.wc18}
            wc19 = {this.state.wc19}
            wc20 = {this.state.wc20}
            wc21 = {this.state.wc21}
            wc22 = {this.state.wc22}
            wc23 = {this.state.wc23}
            wc24 = {this.state.wc24}
            t17 ={this.state.t17}
            t18 = {this.state.t18}
            t19 = {this.state.t19}
            t20 = {this.state.t20}
            t21 = {this.state.t21}
            t22 = {this.state.t22}
            t23 = {this.state.t23}
            t24 = {this.state.t24}
            />
          </Route>
          <Route path="/Fourth">
            <Fourth 
            wc25 = {this.state.wc25}
            wc26 = {this.state.wc26}
            wc27 = {this.state.wc27}
            wc28 = {this.state.wc28}
            wc29 = {this.state.wc29}
            wc30 = {this.state.wc30}
            wc31 = {this.state.wc31}
            wc32 = {this.state.wc32}
            t25 ={this.state.t25}
            t26 = {this.state.t26}
            t27 = {this.state.t27}
            t28 = {this.state.t28}
            t29 = {this.state.t29}
            t30 = {this.state.t30}
            t31 = {this.state.t31}
            t32 = {this.state.t32}
            />
          </Route>
          <Route path="/Fifth">
            <Fifth 
            wc33 = {this.state.wc33}
            wc34 = {this.state.wc34}
            wc35 = {this.state.wc35}
            wc36 = {this.state.wc36}
            wc37 = {this.state.wc37}
            wc38 = {this.state.wc38}
            wc39 = {this.state.wc39}
            wc40 = {this.state.wc40}
            t33 = {this.state.t33}
            t34 = {this.state.t34}
            t35 = {this.state.t35}
            t36 = {this.state.t36}
            t37 = {this.state.t37}
            t38 = {this.state.t38}
            t39 = {this.state.t39}
            t40 = {this.state.t40}
            />
          </Route>
          


        </Switch>
      </Router>
    );
  }
}


export default App;
