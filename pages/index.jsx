import React, {Component} from 'react';
import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

import Menu from '../components/menu/Menu'

class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container className="lg-container">
                <Head>
                    <title>ReactJS with react-bootstrap</title>
                    <link rel="icon" href="/favicon-32x32.png" />
                </Head>
                <Menu></Menu>

                <Container>
                    <p>This is the Home page still.</p>
                </Container>
            </Container>
        );
    }
}

export default Home;
