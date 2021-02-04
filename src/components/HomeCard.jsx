import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'reactstrap';

const HomeCard = (props) => {

  const styleCard = {
      width: '30%',
      height:  '200px',
      backgroundColor: 'black',
      borderRadius: '5px',
      border: "solid",
      borderWidth: "1px",
      borderColor: 'white',
      textAlign: 'center',
      margin: '10px',
      color: 'white'
  }

  return (
    <div style={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-evenly', margin: '200px'}}>
      <Jumbotron fluid style={styleCard}>
        <Container style={{color: "white", alignItems: 'center'}} tag={Link} to="/music" fluid>
          <h1 className="display-3">MUSIC</h1>
          <p className="lead">Listen our music here</p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid style={styleCard}>
        <Container style={{color: "white", alignItems: 'center'}} tag={Link} to="/contact" fluid>
          <h1 className="display-3">CONTACT</h1>
          <p className="lead">Contact us</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeCard;