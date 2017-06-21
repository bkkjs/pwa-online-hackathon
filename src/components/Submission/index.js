import React from 'react';
import './Submission.css';

import Form from './Form';
import { connect } from 'react-redux';
import { actions } from '../../redux/reducers/dashboard';
import { withRouter } from "react-router-dom";


class Submission extends React.Component {
  render() {
    return (
    <div>
      <section className="hero is-primary resource-hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1">
              &lt;Submission /&gt;
            </h1>
            <h2 className="subtitle is-4">
              ส่งรายละเอียด Web Application
            </h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-4 is-offset-4">
              <div className="content">
                <Form onSubmit={(data) => {
                  this.props.submitForm(data).then(() => this.props.history.push('/dashboard'));
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
}

export default connect((state) => ({}), {
  submitForm: actions.submitForm,
})(withRouter(Submission));