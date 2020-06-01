import React from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap'


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

            <Container>
                <p>This is the Store page still.</p>
            </Container>
        </Container>
        );
    }
}

export default Store;