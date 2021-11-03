import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Topbar from "../components/Topbar";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from "react-bootstrap";

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
          <Topbar/>
            <Container fluid="md" style={{marginTop: '30px'}}>
                <Row>
                    <main>
                      {children}
                    </main>
                </Row>
            </Container>
        </Fragment>
        );
    }
}

export default AdminLayout;
