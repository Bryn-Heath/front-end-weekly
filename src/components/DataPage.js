import React, { Component } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import './dataa.css';

class DataPage extends Component {

    render(){
        return(
            <div>
                {/* <p class="para" >This page displays statistics calculated from all of your data.</p> */}
                <br></br>
                <PieChart userData={this.props.userData} />
                <br></br>
                <LineChart userData={this.props.userData} />
        
            </div>
        )
    }

  
}
    
export default DataPage;
