import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

export default class Subscribe extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
    }

    _handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(this.state.email);
        this.setState({ result: result })
    };

    handleChange = event => {
        this.setState({ email: event.target.value })
    }
    render() {
        return this.state.result === "success " ? (
            <div>SUCCESS</div>
        ) : this.state.result === "error" ? (
            <div>ERROR</div>
        ) : (


            <form name="subscribeForm" method="POST" id="subscribe-form" className="subscribe-form" onSubmit={this._handleSubmit} >

                <div className="form-row">
                    <label>
                        <span className="screen-reader-text">Email address</span>
                        <input className="subscribe-email" type="email" name="email" placeholder="Enter your email here" onChange={this.handleChange} />
                    </label>
                </div>
                <button className="button" type="submit">
                    Subscribe
                </button>
            </form>



        )
    }
}