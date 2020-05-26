import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  MonthView,
  DateNavigator,
  DayView,
  ViewSwitcher,
  TodayButton,
  AppointmentForm,
} from '@devexpress/dx-react-scheduler-material-ui';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import './cal_css.css';
 
import Form from './Form'

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  firstRoom: {
    background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
  },
  header: {
    height: '260px',
    backgroundSize: 'cover',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
});

//needs styles above
const Content = withStyles(style, { name: 'Content' })(({
  children, appointmentData, classes, ...restProps
}) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <Grid item xs={2} className={classes.textCenter}>
        <Room className={classes.icon} />
      </Grid>
      <Grid item xs={10}>
        <span>Location - {appointmentData.location}</span>
        <br></br>
        <span>Info - {appointmentData.note}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
));
  
export default class Cal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // firstData: this.props.userData,
      data: this.props.userData
    };
  }

  commitChanges = (something) => {
    debugger
  }

  addEvent = (newEvent) => {

  }

  changeEvent = (changedEvent) => {

  }

  deleteEvent = (deletedEvent) => {
    
  }
  
  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
          firstDayOfWeek={1}
          // height={900} 
        >
          <ViewState
          
          />
          <EditingState 
            onCommitChanges={this.commitChanges}
          />
          <WeekView
            startDayHour={5.5}
            endDayHour={20.5}
          />
          <MonthView />
          <DayView />
          <Toolbar />
          <TodayButton />
          <ViewSwitcher />
          <DateNavigator />
          <Appointments />
          <AppointmentTooltip
            contentComponent={Content}
            showCloseButton
          />
          <AppointmentForm />
          {/* <div class="right">
            <Fab
              color="secondary"
              onClick={() => {
                this.setState({ editingFormVisible: true });
              }} 
            >
              <AddIcon />
            </Fab>
          </div> */}
 
        </Scheduler>
      </Paper>
    );
  }
}
 