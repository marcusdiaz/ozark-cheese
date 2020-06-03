import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'
import Head from 'next/head'
import Menu from "../components/menu/Menu"
import Client from 'shopify-buy'

const client = Client.buildClient({
  storefrontAccessToken: '2a6e3bfb99429c40f650581ec954bc19',
  domain: 'hemp-house-supply.myshopify.com'
}); 

class Store extends React.Component {

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
                <p>This is the Store page still.</p>
            </Container>
        </Container>
        );
    }
}

export default Store;
