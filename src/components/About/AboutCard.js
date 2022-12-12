import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Galoyan Norik </span>
            from <span className="purple"> Moscow.</span>
            <br />I am a junior Frontend developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning languages ( Especially Chinese )
            </li>
            <li className="about-activity">
              <ImPointRight /> Design chandeliers of my own design
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Choose a job you love, and you will never have to work a day in your life."{' '}
          </p>
          <footer className="blockquote-footer">Сonfucius</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
