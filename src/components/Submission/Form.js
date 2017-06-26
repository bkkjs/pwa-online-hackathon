import React from 'react';
import './Submission.css';

import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { inputField, textareaField } from '../../utils/form';

const  validate = values => {
  const errors = {};
  const requiredFields = ['teamName','appName','appDetail'];
  if (values.leaderboardMessage && values.leaderboardMessage.length > 20) {
    errors.leaderboardMessage = 'Maximum 20 characters'
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
    const { invalid, submitFailed, handleSubmit, appIcon } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field required readOnly component={inputField} name="teamName" label="Team Name" />
        <Field required component={inputField} name="appName" label="Web Application Name">
          <p className="sub-text">Retrieved from manifest.json file.</p>
          {
            appIcon && appIcon.length > 0 && <img src={appIcon} style={{ maxWidth: '50px' }} alt="app icon" />
          }
        </Field>
        <Field required component={textareaField} name="appDetail" label="Web Application Details">
          <p className="sub-text">Please describe what your application does and how you use PWA and Firebase in your application.</p>
        </Field>
        <Field required component={inputField} name="leaderboardMessage" label="Leaderboard Message">
          <p className="sub-text">This short message (max. 20 characters) will appear in Leaderboard to show the world that you have finished. Be as creative as you like!</p>
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
      appName: state.dashboard.user.appName,
    } : null;
  return {
    initialValues,
    appIcon: loggedIn && state.dashboard.user.appIcon,
  };
}, {
})(reduxForm({
  form: 'submission',
  validate,
})(Form));
