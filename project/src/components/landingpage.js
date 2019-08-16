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

            <div className="banner-text">
              <h1>Learn || Build || Teach</h1>

            <hr/>

          <p>students / mentors </p>


                  {/* quote api here */}
              <div> 



              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;