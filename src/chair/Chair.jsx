import * as React from 'react';
import { Component } from 'react';
import { useTranslation } from 'react-i18next'
import useTitle from '../page-header/title/useTitle'
import Uparrow from './upArrow';
import Leftarrow from './leftArrow';
import Rightarrow from './rightArrow';
import Downarrow from './downArrow';
import Refresh from './refresh';
import { Container, Row, Col } from 'react-bootstrap';



const Chair = () => {
    const { t } = useTranslation()
    useTitle(t('Chair-Control'))

    function leftArrowHandler() {
        console.log("Left arrow clicked");
    }

    function upArrowHandler() {
        console.log("Up arrow clicked");
    }

    function rightArrowHandler() {
        console.log("Right arrow clicked");
    }

    function downArrowHandler() {
        console.log("Down arrow clicked");
    }

    function refreshHandler() {
        console.log("Refresh button clicked");
    }

    return (
        <Container fluid="False">
            <Row>
                <Col md={{ offset: 2 }}>
                    <button className="btn btn-dummy" onClick={() => upArrowHandler()}><Uparrow /></button>
                </Col>
            </Row>
            <Row>
                <Col xs="2">
                    <button className="btn btn-dummy" onClick={() => leftArrowHandler()}><Leftarrow /></button>
                </Col>
                <Col xs="2">
                    <button className="btn btn-dummy" onClick={() => refreshHandler()}><Refresh /></button>
                </Col>
                <Col xs="2">
                    <button className="btn btn-dummy" onClick={() => rightArrowHandler()}><Rightarrow /></button>
                </Col>
            </Row>
            <Row>
                <Col md={{ offset: 2 }}>
                    <button className="btn btn-dummy" onClick={() => downArrowHandler()}><Downarrow /></button>
                </Col>
            </Row>

        </Container>

    );
}

export default Chair;