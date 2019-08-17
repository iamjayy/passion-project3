import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Modal from './modal'



class PostPage extends Component {
  render() {
    return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/data/256x256/2017/07/13/888372_man_512x512.png) center / cover'}} >React Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
          <Button colored>View Profile</Button>
            <Button colored>Contact</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/data/256x256/2017/07/13/888372_man_512x512.png) center / cover'}} >React Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
          <Button colored>View Profile</Button>
            <Button colored>Contact</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.shareicon.net/data/256x256/2017/07/13/888372_man_512x512.png) center / cover'}} >React Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>View Profile</Button>
            <Button colored>Contact</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>

    );
  }
}

export default PostPage;