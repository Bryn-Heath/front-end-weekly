import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Stack, Animation } from '@devexpress/dx-react-chart';
import { stackOffsetExpand } from 'd3-shape';

const data = [
  {
    day: 'monday', saudiArabia: 241.142, usa: 482.150, iran: 230.174, mexico: 23.640, price: 17, consumption: 570,
  }, {
    day: 'tuesday', saudiArabia: 511.334, usa: 437.343, iran: 75.097, mexico: 108.249, price: 104, consumption: 630,
  }, {
    day: 'wednesday', saudiArabia: 324.359, usa: 374.867, iran: 165.284, mexico: 141.060, russia: 516.040, price: 23.7, consumption: 590,
  }, {
    day: 'thursday', saudiArabia: 410.060, usa: 297.513, iran: 196.877, mexico: 159.630, russia: 312.821, price: 28.3, consumption: 680,
  }, {
    day: 'friday', saudiArabia: 413.505, usa: 279.225, iran: 200.318, mexico: 144.975, russia: 487.106, price: 79.6, consumption: 640,
  }, {
    day: 'saturday', saudiArabia: 516.157, usa: 437.966, iran: 142.087, mexico: 121.587, russia: 512.777, price: 52.4, consumption: 790,
  },
  {
    title: 'Watercolor Landscape',
    startDate: new Date(2020, 4, 16, 9, 30),
    endDate: new Date(2020, 4, 16, 11, 30),
    ownerId: 1,
    location: "testt",
    category: "shopetetetetping"
  }
];

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

const format = scale => scale.tickFormat(null, '%');

export default class DataPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            tickFormat={format}
          />

          <BarSeries
            name="Saudi Arabia"
            valueField="saudiArabia"
            argumentField="day"
          />
          <BarSeries
            name="USA"
            valueField="usa"
            argumentField="day"
          />
          <BarSeries
            name="Iran"
            valueField="iran"
            argumentField="day"
          />
          <BarSeries
            name="Mexico"
            valueField="mexico"
            argumentField="day"
          />
          <BarSeries
            name="Russia"
            valueField="russia"
            argumentField="day"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Oil Production" />
          <Stack
            stacks={[
              { series: ['Saudi Arabia', 'USA', 'Iran', 'Mexico', 'Russia'] },
            ]}
            offset={stackOffsetExpand}
          />
        </Chart>
      </Paper>
    );
  }
}
