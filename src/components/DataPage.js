import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from '@devexpress/dx-react-chart';
import { connectProps } from '@devexpress/dx-react-core';
import { format } from 'd3-format';
 
// const data = [
//   { region: 'Exercise', val: 1 },
//   { region: 'Meeting', val: 2 },
//   { region: 'Shoping', val: 3 },
//   { region: 'Holiday', val: 1 },
//   { region: 'Family', val: 0 },
//   { region: 'Work', val: 4 },
// ];
  
export default class DataPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: {},
      data: this.props.userData,
      results: [
                { type: '🏃‍♀️ exercising 💪 ', val: 0 },
                { type: '🤝 meeting people', val: 0 },
                { type: '🛒 shopping', val: 0 },
                { type: '🏖️ on holiday', val: 0 },
                { type: '👪 with the family', val: 0 },
                { type: '👔 work 😔', val: 0 },
      ],
    };
  }


  sumData (data) {
    for (let i = 0; i < data.length; i++) {
  
      if (data[i].category_id == 1)
      { this.state.results[0].val ++}
      else if (data[i].category_id == 2)
      { this.state.results[1].val ++}
      else if (data[i].category_id == 3)
      { this.state.results[2].val ++}
      else if (data[i].category_id == 4)
      { this.state.results[3].val ++}
      else if (data[i].category_id == 5)
      { this.state.results[4].val ++}
      else if (data[i].category_id == 6)
      { this.state.results[5].val ++}
      else
      return
    }
    return
}
 
  message(){
    return "Last weeks time was mostly spent " + `${this.state.message.type}`
  }

  componentDidMount(){
    this.setState({
        message: this.state.results.reduce(function (prev, current) 
        {return (prev.val > current.val) ? prev : current})  
    })
  }




  render() {
    const { results } = this.state;
 

    return (
      <Paper>
        <Chart data={results}>  
        <Legend/>
          <PieSeries
            valueField="val"
            argumentField="type"
            innerRadius={0.5}
          />
          <Title
            text={this.message()}
          />
          <Animation/>
          {/* <EventTracker/>
          <Tooltip/> */}
          {  this.sumData(this.state.data) } 
        </Chart>
        
      </Paper>
    );
  }
}




// import * as React from 'react';
// import Paper from '@material-ui/core/Paper';
// import {
//   Chart,
//   PieSeries,
//   Title,
//   Tooltip,
//   Legend,
// } from '@devexpress/dx-react-chart-material-ui';

// import { Animation } from '@devexpress/dx-react-chart';
// import { EventTracker } from '@devexpress/dx-react-chart';
// import { connectProps } from '@devexpress/dx-react-core';
// import { format } from 'd3-format';
 
// const data = [
//   { region: 'Exercise', val: 1 },
//   { region: 'Meeting', val: 2 },
//   { region: 'Shoping', val: 3 },
//   { region: 'Holiday', val: 1 },
//   { region: 'Family', val: 0 },
//   { region: 'Work', val: 4 },
// ];

 
 
 
// export default class DataPage extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//       target: null
//     };
//   }

 

//   render() {
//     const { data: chartData } = this.state;

//     return (
//       <Paper>
//         <Chart data={chartData}>  
//         <Legend/>
//           <PieSeries
//             valueField="val"
//             argumentField="region"
//             innerRadius={0.4}
//           />
//           <Title
//             text="Your weekly metrics"
//           />
//           <Animation/>
//           <EventTracker/>
          
//           <Tooltip/>
//         </Chart>
        
//       </Paper>
//     );
//   }
// }
