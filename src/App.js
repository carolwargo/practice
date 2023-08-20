import React from 'react';
import JSXVariables from './components/JSXVariables';
import Display from './components/Display/Display';
import List from './components/List';
import Greeting from './components/Greeting';
import Counter from './components/EventHandling.js/Counter';
import Form from './components/Form/index.js';
import Thermostat from './components/Thermostat';
import OmdbContainer from './components/Search/OmdbContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Section from './components/Section/Section';
import PortfolioContainer from './components/Portfolio/PortfolioContainer';
import BucketList from './components/BucketList/BucketList';
import HelloDiv from './components/HelloDiv';

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
export default function App() {
    return (
        <React.StrictMode>
            <br></br>
            <br></br>
            <HelloDiv/>
            <br></br>
            <br></br>
            <br></br>
            <JSXVariables />
            <br></br>
            <br></br>
            <br></br>
            <Display />
            <br></br>
            <br></br>
            <br></br>
            <List />
            <br></br>
            <br></br>
            <br></br>
            <Greeting />
            <br></br>
            <br></br>
            <br></br>
            <Counter />
            <br></br>
            <br></br>
            <br></br>
            <Form />
            <br></br>
            <br></br>
            <br></br>
            <Thermostat />
            <br></br>
            <br></br>
            <br></br>
            <OmdbContainer/>
            <br></br>
            <br></br>
            <br></br>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <Header />
            <br></br>
            <br></br>
            <br></br>
            <Section />
            <br></br>
            <br></br>
            <br></br>
            <PortfolioContainer />
            <br></br>
            <br></br>
            <br></br>
            <BucketList />
        </React.StrictMode>
    );
}
