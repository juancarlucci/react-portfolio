import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import "./About.css";
import jc from "../../images/jc.jpg";
import igloo from "../../images/igloo.jpg";
import drawing2 from "../../images/drawing02.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <section className="about-intro">
        <h1 className="about-title">About</h1>
        <article className="about-description">
          <p className="display">
            I bring together insights from the fields of education, health and systems theory. I seek patterns in complexity. Those patterns tend to be where the challenges and solutions lie.
          </p>
          <p className="display">
            Some areas I do well in:</p>
          <ul className="about-skills">
          <li>
            Small teams: I have led small teams in educational innovation.
          </li>
          <li>
            Communication: Succesfully wrote for $100K in grants.
          </li>
          <li>
            Public speaking | Teaching: Able to communicate complex subjects to a wide range of audiences, from patients at SF General to funding partners and scientist at Bioneers.
          </li>
        </ul>
          <p className="display">
            When I am not coding and innovating with others, you can find me
            hiking and making igloos in Yosemite, or drawing and illustrating.
          </p>
          <img id="jc-img" src={jc} alt="juan carlos" />
        </article>
      </section>

      <div className="card-box2">
        <div className="card-grid2">
          <Card id="igloo-card">
            <CardMedia
              overlay={<CardTitle title="Making an Igloo in Yosemite" />}>
              <img id="igloo-image" src={igloo} alt="igloo" />
            </CardMedia>
            <CardText>
              Imagine you hiked out of Yosemite valley with two or three
              friends. It is a sunny day. Distant mountains are shrouded in
              clouds. Your packs hold all you will need for the next week. There
              is snow on the ground. Across the valley is Half Dome. You begin
              to build an igloo. You are cutting snow blocks. Each block is
              placed in a circle that slowly becomes your protective, cozy home
              for the next few days. You feel connected, free, safe and happy.
            </CardText>
            <CardActions>
              <RaisedButton
                href="https://get.google.com/albumarchive/108048564380821192433/album/AF1QipPrSdOhc5S345kL5hADnHdZpxuytxOMLW29yfG_"
                target="_blank"
                label="Eagle's Peak"
              />
            </CardActions>
          </Card>

          <Card id="drawing-card">
            <CardMedia overlay={<CardTitle title="Drawings and Photos" />}>
              <img src={drawing2} alt="" />
            </CardMedia>
            <CardText>Behance portfolio of my personal stuff.</CardText>
            <CardActions>
              <RaisedButton
                href="https://www.behance.net/copue"
                target="_blank"
                label="Behance"
              />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
