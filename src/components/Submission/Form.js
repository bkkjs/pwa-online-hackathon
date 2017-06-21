import React from 'react';
import './Submission.css';

import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { inputField, textareaField } from '../../utils/form';

const  validate = values => {
  const errors = {};
  const requiredFields = ['teamName','appName','appDetail'];
  if (values.leaderboardMessage && !values.leaderboardMessage.length > 15) {
    errors.githubRepoUrl = 'Maximum 15 characters'
  }
  requiredFields.map((field) => {
    if (!values[field] || values[field].length === 0) {
      errors[field] = 'Required';
    }
    return null;
  })
  return errors;
};

class Form extends React.Component {
  render() {
    const { invalid, submitFailed, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field required readOnly component={inputField} name="teamName" label="Team Name" />
        <Field required component={inputField} name="appName" label="Web Application Name" />
        <Field required component={textareaField} name="appDetail" label="Web Application Details">
          <p className="sub-text">Please describe what your application does and how you use PWA and Firebase in your application.</p>
        </Field>
        <Field required component={inputField} maxLength="15" name="leaderboardMessage" label="Leaderboard Message">
          <p className="sub-text">This short message (max. 15 characters) will appear in Leaderboard to show the world that you have finished. Be as creative as you like!</p>
        </Field>
        <p className="control">
          <button disabled={submitFailed && invalid} className="button is-primary is-fullwidth" type="submit">Submit</button>
        </p>
      </form>
    );
  }
}

export default connect((state) => {
  const loggedIn = !!state.dashboard.user;
  const initialValues = loggedIn ? {
      teamName: state.dashboard.user.teamName,
      applicationId: state.dashboard.user.applicationId,
    } : null;
  return {
    initialValues,
  };
}, {
})(reduxForm({
  form: 'submission',
  validate,
})(Form));
