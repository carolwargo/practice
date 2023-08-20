import React from 'react';
import Hello from './components/Hello';
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

// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
export default function App() {
    return (
        <React.StrictMode>
            <Hello />
            <JSXVariables />
            <Display />
            <List />
            <Greeting />
            <Counter />
            <Form />
            <Thermostat />
            <OmdbContainer/>
            <Navbar />
            <Header />
            <Section />
        </React.StrictMode>
    );
}
