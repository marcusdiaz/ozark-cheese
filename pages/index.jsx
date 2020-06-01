import React, {Component} from 'react';
import Head from 'next/head'


class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Container className="md-container">
                <Head>
                    <title>ReactJS with react-bootstrap</title>
                    <link rel="icon" href="/favicon-32x32.png" />
                </Head>

                <Container>
                    <p>This is the Home page still.</p>
                </Container>
            </Container>
        );
    }
}

export default Home;
