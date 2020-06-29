import React from 'react';
import { ReactTypeformEmbed } from './components';
import ReactDOM from 'react-dom';
import { Card } from 'react-bootstrap';


class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.openForm = this.openForm.bind(this);
    }

    openForm() {
        this.typeformEmbed.typeform.open();
    }

    render() {
        return (
            <div>
                <Card style={{ width: '94rem', height: '50rem' }}>
                    <Card.Body>
                        <ReactTypeformEmbed popup={false} url="https://madhumpandurangi.typeform.com/to/ZkHFoX" />
                    </Card.Body>
                </Card>


            </div >
        );
    }
}

export default Feedback;
