
import DataUsageIcon from '@material-ui/icons/DataUsage';
import './cal_css.css';
import React, { Component, Fragment } from "react";
import Weather from './Weather';


class Nav extends Component {

    render(){
        return(
            <Fragment> 
                <DataUsageIcon 
                fontSize="large" 
                htmlColor="#f50057" 
                className="rotate"
                onClick={() => this.props.handleClickData()} 
                ></DataUsageIcon>

                {/* <Weather /> */}
            </Fragment>
        )
    }

  
}
    
export default Nav;
