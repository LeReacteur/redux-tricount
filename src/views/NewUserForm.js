import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { ButtonContainer } from '../components/ButtonContainer';
import { Input } from '../components/Input';
import { extractDataFromSubmitEvent, clearFormFromSubmitEvent } from '../utils';
import { addUser } from '../actions';

const mapStateToProps = null;

const mapDispatchToProps = {
  addUser,
};

const NewUserFormRender = ({ addUser }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const data = extractDataFromSubmitEvent(e);
        // Validate data
        if (!data.username) {
          alert('No name ?');
          return;
        }
        addUser(data.username);
        clearFormFromSubmitEvent(e);
      }}
    >
      <Card title="New User">
        <Input name="username" placeholder="User name" />
      </Card>
      <ButtonContainer>
        <Button submit>Add User</Button>
      </ButtonContainer>
    </form>
  );
};

NewUserFormRender.propTypes = {
  addUser: PropTypes.func.isRequired,
};

export const NewUserForm = connect(mapStateToProps, mapDispatchToProps)(NewUserFormRender);
