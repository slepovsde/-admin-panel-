import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Topbar from "../components/Topbar";
import Sidebar from '../components/sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";
import Footer from '../components/footer/Footer';

class AdminLayout extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    static propTypes = {
        children: PropTypes.node,
    };

    render()
    {
        const {children} = this.props;
        return (
        <Fragment>
            <Sidebar/>
          <Topbar/>
            <Container fluid="md" style={{marginTop: '30px'}}>
                <Row>
                    <main>
                      {children}
                    </main>
                </Row>
            </Container>
            <Footer/>
        </Fragment>
        );
    }
}

export default AdminLayout;
