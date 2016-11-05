import { stringify } from 'querystring';
import React from 'react';

export default class TitleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.handleSubmit();
        }
    }

    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleSubmit() {
        location.search = stringify({ title: this.state.title });
    }

    render() {
        return (
            <div>
                <input type='text'
                    placeholder='Enter title Here'
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp} />
                <button onClick={this.handleSubmit}>
                    Create
        </button>
            </div>
        );
    }
}
