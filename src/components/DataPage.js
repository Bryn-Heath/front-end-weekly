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
 
const data = [
  { region: 'Exercise', val: 1 },
  { region: 'Meeting', val: 2 },
  { region: 'Shoping', val: 3 },
  { region: 'Holiday', val: 1 },
  { region: 'Family', val: 0 },
  { region: 'Work', val: 4 },
];

 
 
 
export default class DataPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.userData
    };
  }

 

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>  
        <Legend/>
          <PieSeries
            valueField="val"
            argumentField="category"
            innerRadius={0.4}
          />
          <Title
            text="Your weekly metrics"
          />
          <Animation/>
          <EventTracker/>
          
          <Tooltip/>
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
