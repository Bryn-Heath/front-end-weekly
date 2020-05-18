
import Typography from '@material-ui/core/Typography';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import './cal_css.css';
import React, { Component } from "react";

class Nav extends Component {

    render(){
        return(
            <DataUsageIcon 
            fontSize="large" 
            htmlColor="#B240E0" 
            className="rotate"
            onClick={() => this.props.handleClickData()} 
            ></DataUsageIcon>
        )
    }

  
}
    
export default Nav;
