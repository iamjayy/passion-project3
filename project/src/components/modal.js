import React, { Component } from 'react';
import {Dialog, Button, DialogActions, DialogContent, DialogTitle } from 'react-mdl';


class Modal extends Component {

  
    render() {
      return (
        <div>
          <Button colored onClick={this.handleOpenDialog} raised ripple>Show Modal</Button>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>Allow this site to collect usage data to improve your experience?</DialogTitle>
            <DialogContent>
              <p>Allowing us to collect data will let us get you the information you want faster.</p>
            </DialogContent>
            <DialogActions fullWidth>
              <Button type='button'>Agree</Button>
              <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  export default Modal