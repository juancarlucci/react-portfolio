// import React from 'react';
import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';


// export default class Card extends React.Component {
class Card2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          style={{ display: "flex", alignItems: "center" }}
          title={this.props.title}
          avatar={this.props.logo}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
          actAsExpander={true}
          overlay={<CardTitle subtitle={this.props.skills} />}
        >
          <img src={this.props.img} alt={this.props.title} />
        </CardMedia>
        <CardText expandable={true}>
          {this.props.desc}
        </CardText>
        <CardText expandable={true}>
          {this.props.features}
        </CardText>
        <CardActions>
          <FlatButton label="Live" target="_blank" href={this.props.site} />
          <FlatButton label="Code" target="_blank" href={this.props.code} />
        </CardActions>
      </Card>
    );
  }
}

export default Card2;
