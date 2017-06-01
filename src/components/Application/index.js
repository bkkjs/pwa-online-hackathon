import React from 'react';
import './Application.css';
import Form from './Form';
import { connect } from 'react-redux';
import { actions } from '../../redux/reducers/application';
import { LoginPage, Template, Instructions } from './sharedUtils';

const Application = (props) => {
  const { application, loggedIn, submit, submitted } = props;
  if (!loggedIn) return (
    <LoginPage {...props} />
  );

  if (submitted) return (
    <Template>
      <h2 className="title has-text-centered">
        Your application has been submitted!
      </h2>
      {
        application.teamCount === 2 &&
        <p className="wide-paragraph has-text-centered">
          Plase forward following link to another team member
        </p>
      }
      {
        application.teamCount > 2 &&
        <p className="wide-paragraph has-text-centered">
          Plase forward following registration link to the other {application.teamCount - 1} team members.
        </p>
      }
      {
        application.teamCount > 1 &&
        <p className="wide-paragraph has-text-centered small">
          <input className="input has-text-centered" onClick={(e) => e.target.select() } readOnly value={`https://pwa.online.hackathon.in.th/apply/${application.key}`} />
        </p>
      }
      <Instructions />
    </Template>
  );
  return (
  <Template>
    <div className="columns is-vcentered">
      <div className="column is-4 is-offset-4">
        <div className="content">
          <Form onSubmit={submit} />
        </div>
      </div>
    </div>
  </Template>
  );
};

export default connect((state) => {
  const loggedIn = state.application.loggedIn;
  return {
    githubUser: state.application.githubUser,
    loggedIn,
    loginPending: state.application.loginPending,
    submitted: state.application.submitted,
    application: state.application.application,
  };
}, {
  loginWithGithub: actions.loginWithGithub,
  submit: actions.submit,
})(Application);
