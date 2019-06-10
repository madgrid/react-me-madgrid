import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Talk Dirty</CardTitle>
            <CardText>
              Talk Dirty is a react app that implements React(16.8) using Redux Boilerplate that uses JWT authentication. Currently ...
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/madgrid/talk-dirty" rel="noopener noreferrer" target="_blank">GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Todo List</CardTitle>
            <CardText>
              Simple todo list that highlights basic functionality using hooks by addng or deleting items, and uses flip-move ...
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/madgrid/react-todo" rel="noopener noreferrer" target="_blank">GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} >Portfolio</CardTitle>
            <CardText>
              My personal React based portfolio app using create-react-app, and testing the functionality of react-router ...
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/madgrid/react-portfolio" rel="noopener noreferrer" target="_blank">GitHub</Button>
              {/* <Button colored>Live Demo</Button> */}
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#202020', height: '176px', background: 'url(https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-symbol-512.png) center / cover' }} >MVS Explorer</CardTitle>
            <CardText>
              The explorer for viewing records and events on the Metaverse Blockchain
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/mvs-org/mvs-explorer-api" rel="noopener noreferrer" target="_blank">GitHub</Button>
              <Button colored href="https://explorer.mvs.org/" rel="noopener noreferrer" target="_blank">Live</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#202020', height: '176px', background: 'url(https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-symbol-512.png) center / cover' }} >MVS Light Wallet</CardTitle>
            <CardText>
            A wallet that does not need to download the full Metaverse blockchain
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/mvs-org/lightwallet" rel="noopener noreferrer" target="_blank">GitHub</Button>
              <Button colored href="https://www.myetpwallet.com/" rel="noopener noreferrer" target="_blank">Live</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*https://www.li-x.com/  */}
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#202020', height: '176px', background: 'url(https://cdn0.iconfinder.com/data/icons/long-shadow-web-icons/512/angular-symbol-512.png) center / cover' }} >li-x Licence Exchange</CardTitle>
            <CardText>
              Used software licence exchange platform for companies and resellers.
            </CardText>
            <CardActions border>
              {/* <Button colored href="https://github.com/mvs-org/lightwallet">GitHub</Button> */}
              <Button colored href="https://www.li-x.com/" rel="noopener noreferrer" target="_blank">Live</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return (
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          {/* <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab> */}
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
