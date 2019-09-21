import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import DefaultBox from './DefaultBox';
import { styles } from '../constants';

const contactFormStyles = {
  marginBottom: 40,
  justifyContent: `flex-end`,
  alignItems: `none`,
  height: 80,
};

const ContactForm = ({ state, setState, onPressSubmitButton }) => {
  const { name, surname, email, message } = state;
  return (
    <div>
      <DefaultBox style={contactFormStyles}>
        <TextInput
          id="name"
          label="Name"
          type="text"
          value={name}
          onChangeText={text => setState({ ...state, name: text })}
        />
        <TextInput
          id="surname"
          label="Surname"
          type="text"
          value={surname}
          onChangeText={text => setState({ ...state, surname: text })}
        />
        <TextInput
          value={email}
          id="email"
          label="E-mail"
          type="email"
          onChangeText={text => setState({ ...state, email: text })}
        />
      </DefaultBox>
      <TextInput
        value={message}
        id="message"
        label="Message"
        type="none"
        isTextArea
        onChangeText={text => setState({ ...state, message: text })}
      />
      <div style={{ textAlign: `right` }}>
        <button
          style={styles.defaultButton}
          onClick={onPressSubmitButton}
          type="submit"
          className="contact-button"
        >
          Let&apos;s talk
        </button>
      </div>
    </div>
  );
};

ContactForm.defaultProps = {
  style: {},
};

ContactForm.propTypes = {
  style: PropTypes.shape({}),
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired,
  setState: PropTypes.func.isRequired,
  onPressSubmitButton: PropTypes.func.isRequired,
};

export default ContactForm;
