import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import PostPage from './posts'
import StudentsPage from './studentslist'
import MentorsPage from './mentors'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
       <div>
         <PostPage/>
       </div>
      )
    } else if(this.state.activeTab === 1) {
      
      return (
        <div>
        <StudentsPage/>
      </div>    )
    } else if(this.state.activeTab === 2) {
      return (
        <div>
        <MentorsPage/>
      </div>   )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Posts</Tab>
          <Tab>Students</Tab>
          <Tab>Mentors</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;