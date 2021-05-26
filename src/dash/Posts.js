import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PostCard from "./PostCard.js";
import axios from 'axios';

export class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {
     

        const headers = {
            'Ocp-Apim-Subscription-Key': 'dddc233cda2041c2a6256ac9337b7be2',
            'Ocp-Apim-Trace': true
        }


        

        axios
          .get(
            "https://wimf-posts-api.azure-api.net/wimf-post/v1/search-post?from=0&size=10", {headers}
          )
          .then((response) => {
              this.setState({
                  posts: response.data.posts,
                  loading: false
              })
      });
      
      

    }
    

  render() {
      if(this.state.loading){
          return <p>Loading...</p>
      }
    else{
        return (
            <Container className="mainPosts">
            <Row>
                {this.state.posts.map((post) =>{ 
                        return(
                        <Col>
                            <PostCard  title={post.title} desc={post.content} reward="10"/>
                        </Col>
                        );
                    })}
               
            </Row>
        </Container>
        );
    }
    }
}

export default Posts;