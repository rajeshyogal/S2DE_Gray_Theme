import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Header from './components/Header'
import Footer from './components/Footer'
//import { StyleSheet } from 'react-bootstrap';
import { WelcomeMessage } from './components/WelcomeMessage'
import { UserNavBar } from './components/UserNabBar';
import { DataUpload } from './components/DataUpload';

import './custom.css'

class App extends React.Component {

    render() {
        return (

            <div style={{backgroundColor:"white"}}>
                <Header />
                <div id="content" style={{  }}>
                    <WelcomeMessage />
                    <UserNavBar />
                    <DataUpload />
                </div>
                <Footer />
            </div>
           
        );
    }
}

export default App;

//const styles = StyleSheet.create({

//});

//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//        <Route exact path='/' component={Home} />
//        <Route path='/counter' component={Counter} />
//        <Route path='/fetch-data' component={FetchData} />
//      </Layout>
//    );
//  }
//}
