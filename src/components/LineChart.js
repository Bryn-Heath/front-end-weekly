import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import { connectProps } from '@devexpress/dx-react-core'; 
 

 const notes = ()  => {
// const data = [
//   { year: '1950', location: 2.525 },
//   { year: '1960', location: 3.018 },
//   { year: '1970', location: 3.682 },
//   { year: '1980', location: 4.440 },
//   { year: '1990', location: 5.310 },
//   { year: '2000', location: 6.127 },
//   { year: '2010', population: 6.930 },
// ];

// const data = [
//   {  location: "london", val: 2 },
//   {  location: "uk", val: 4 },
//   {  location: "wal", val: 5 }
// ];
 }

const arr = []

let part1 = []
let part2 = {}
let newObj = {}
let finishArr = []

export default class LineChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data : [],
      most: null
    };
  }


    //part of data sorting
    funcA = (dataArr) => {  dataArr.map(each => arr.push(each["location"])) 
    return arr 
    };
    getWordCntRd = (array) => {
      return array.reduce((prev, nxt) => {
        prev[nxt] = (prev[nxt] + 1) || 1;
        return prev;
      }, {});
    }
    finishObj = () =>{ 
      Object.entries(part2).forEach(([key,value]) => {
         newObj["location"] = key 
         newObj["value"] = value
     
         // newObj.map(each => finish.push(each))
         finishArr.push(newObj)
           newObj = {}
       });   
        return finishArr
    }
     

   componentDidMount(){

      part1 = this.funcA(this.props.userData) 
      part2 = this.getWordCntRd(part1)

      this.setState({
        data : this.finishObj(),
        most: Object.keys(part2).sort(function(a,b){return part2[a]-part2[b]}).slice(-1)[0]
      })
   }
  
  

    render() {

      const { data: chartData } = this.state;
       return (
        
        <Paper>
        
          <Chart
            data={chartData}
          >

            <ArgumentScale factory={scaleBand} />

            <ArgumentAxis />
            <ValueAxis/>

            {/* <EventTracker/>
          <Tooltip/> */}

            <BarSeries
              valueField="value"
              argumentField="location"
            />
            <Title text={`You most popular location is ${this.state.most}`} />
            <Animation />
          </Chart>
        </Paper>
      );
    }

}
