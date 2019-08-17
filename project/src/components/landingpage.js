import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
      
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/data/256x256/2017/07/13/888380_business_512x512.png"
              alt="avatar"
              className="avatar-img"
              />
              <h1 style={{color: 'white'}}>Ment2Be</h1>
            <div className="banner-text">
            <Grid className="demo-grid-1">
            
        <Cell col={4}> 
        <p> Learn </p>
        <img
              src="https://cdn.vocab.com/images/home/science-1e3sd67.png"
              alt="avatar"
              className="avatar-img"
              />
        </Cell>

        <Cell col={4}>
        <p>Build</p>
        <img
              src="https://www.databankimx.com/wp-content/uploads/2018/08/1build-2.png"
              alt="avatar"
              className="avatar-img"
              />
        </Cell>

        <Cell col={4}>
        <p>Teach</p>
        <img
              src="https://i.pinimg.com/originals/2e/7a/a7/2e7aa73140ddacbc317fc9a2e5357ed6.gif"
              alt="avatar"
              className="avatar-img"
              />
        </Cell>
       </Grid>
          <p></p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;