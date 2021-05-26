import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import info from "../img/info.jpg";


export class PostCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: info,
            title: props.title,
            desc: props.desc,
            reward: props.reward
        }
    }
  render() {


    if(this.state.desc.length > 130){
        var initialdesc = this.state.desc.substring(0, 65);
        var desc = initialdesc.concat('...');
    }
    else{
        var desc = this.state.desc;
    }
    return (
      <div>
        <Card className="animated fadeInUp card" border="dark" >
          <Card.Img
            src={this.state.img}
            className="cardImg"
            variant="top"
          />
          <Card.Body>
            <Card.Title className="titlePost">{this.state.title}</Card.Title>
            <Card.Text className="desc">{desc}</Card.Text>
            <Button
              className="float-right post-card-button buttonPost"
            >
              See more
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">Reward: {this.state.reward}$</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default PostCard;