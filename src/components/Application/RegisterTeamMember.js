import React from 'react';
import './Application.css';
import Form from './TeamMemberForm';
import { connect } from 'react-redux';
import { actions } from '../../redux/reducers/application';
import { LoginPage, Template, SubmittedPage } from './sharedUtils';

const RegisterTeamMember = (props) => {
  const { getApplication, loginWithGithub, loggedIn, submit, submitted, match: { params: { key } } } = props;
  if (!loggedIn) return (
    <LoginPage {...props} loginWithGithub={
      () => 
        loginWithGithub()
        .then(() => getApplication(key))
    } />
  );

  if (submitted) return (
    <SubmittedPage {...props} />
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
  submit: actions.submitTeamMember,
  getApplication: actions.getApplication,
})(RegisterTeamMember);
