// REACT IMPORTS
import React, { Component } from 'react';


// COMPONENT IMPORTS
import Wrapper from "./components/Wrapper/Wrapper"
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import CardBox from "./components/CardBox/CardBox";
import Card from "./components/Card/Card2";
import Footer from "./components/Footer/Footer";

// DATA IMPORT FOR CARDS / PORTFOLIO ITEMS
import cardData from './projects.js';
// STYLE IMPORTS
import './App.css';

//MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {

//SUPER PROPS
  constructor(props) {
    super(props);
    this.state = {
      cardData: cardData
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        <Wrapper>
          <Navbar />
          <Billboard />
          <Skills />
          <CardBox>

          {/* MAPS AND PASSES DATA FROM projects.js TO CARDS */}
         {this.state.cardData.map(data => (
                    <Card
                    key={data.id}
                    id={data.id}
                    logo={data.logo}
                    img={data.img}
                    alt={data.alt}
                    title={data.title}
                    subtitle={data.subtitle}
                    desc={data.desc}
                    features={data.features}
                    skills={data.skills}
                    code={data.code}
                    site={data.site}
                    />
                  ))}
          </CardBox>
          <About />
          <Footer />
        </Wrapper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
