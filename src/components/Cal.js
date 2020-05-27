import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
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
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Grid from '@material-ui/core/Grid';
import Room from '@material-ui/icons/Room';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


import './cal_css.css';

   
// used for form build
const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {

   
  const onNoteFieldChange = (nextValue) => {
    onFieldChange({ note: nextValue})
  };

  const onLocationFieldChange = (nextValue) => {
    onFieldChange({ location: nextValue })
  };

  const onCategoryFieldChange = (nextValue) => {
    onFieldChange({ category_id: nextValue })
  };
 

const list = [
{text: "Exercise",  id: 1},
{text: "Meeting", id: 2},
{text: "Shopping", id: 3},
{text: "Holiday" , id: 4},
{text: "Family" , id: 5},
{text: "Work", id: 6},
   
]
  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
        text="Notes"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.note}
        onValueChange={onNoteFieldChange}
        placeholder="Notes"
      />

        <AppointmentForm.Label
          text="Location"
          type="title"
        />
        <AppointmentForm.TextEditor
          value={appointmentData.location}
          onValueChange={onLocationFieldChange}
          placeholder="Location"
        />


        <AppointmentForm.Label
          text="Category"
          type="title"
        />
   
            
        <AppointmentForm.Select
           value={appointmentData.category_id}
           availableOptions={list}
           type="outlinedSelect" 
           onValueChange={onCategoryFieldChange} 
         /> 
         
      

    </AppointmentForm.BasicLayout>

  );
};
const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.TextEditor {...props} />;
};
const messages = {
  moreInformationLabel: '',
};
//used for form build 
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
  <AppointmentTooltip.Content 
    {...restProps} 
    appointmentData={appointmentData}>
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
  
 
 
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.userData,
    };
    this.commitChanges = this.commitChanges.bind(this);
  }
 
    // commitChanges = ({ added,deleted }) => {
     
    //   if (added) this.addEvent(added) 
     
    //   else  this.deleteEvent(deleted)
    // }


  addEvent = (newEvent) => {
    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json" 
      },
      body: JSON.stringify({
        ...newEvent,
        owner_id: this.props.user.id
      }),
    })
      .then(res => res.json())
      // .then(createdEvent => {
      //   this.setState({ data: [...this.state.data, newEvent] })
      // })
  }

  // // changeEvent = (changedEvent) => {
  // //   fetch("http://localhost:3000/appointments"+changedEvent.id, {
  // //     method: "PATCH",
  // //     headers: {
  // //       "Content-Type": "application/json", 
  // //       "Accept": "application/json" 
  // //     },
  // //     body: JSON.stringify({
  // //       ...changedEvent,
  // //       owner_id: this.props.user.id
  // //     }),
  // //   })
  // //     .then(res => res.json())
  // //     .then(fixedEvent => {
  // //       this.setState({ data: [...this.state.data, changedEvent] })
  // //     })
  // // }

  deleteEvent = (deletedEvent) => {
    console.log( deletedEvent )
      fetch("http://localhost:3000/appointments/"+deletedEvent,{
        method: "DELETE",
      })
    }
  
   
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
         this.addEvent(added);
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
        this.deleteEvent(deleted);
      }
      return { data };
    });
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
          <ViewState />
          <EditingState 
            onCommitChanges={this.commitChanges}
          />
          <WeekView
            startDayHour={5.5}
            endDayHour={20.5}
          />
          <IntegratedEditing />
          <MonthView />
          <DayView />
          <Toolbar />
          <TodayButton />
          <ViewSwitcher />
          <DateNavigator />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip
            
            showCloseButton
            showOpenButton
            showDeleteButton
          />
             
          <AppointmentForm 
              basicLayoutComponent={BasicLayout}
              textEditorComponent={TextEditor}
              messages={messages} 
              categories={this.props.categories}
          />

         
        
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
 