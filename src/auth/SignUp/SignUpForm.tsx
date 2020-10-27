import React, { FunctionComponent, ChangeEvent, FormEvent } from 'react';

import { SubmitButton } from '../../common/Button';
import { Label, ButtonText } from '../../common/Typography';

interface ISignUpFormOwnProps {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  setFields: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: FunctionComponent<ISignUpFormOwnProps> = ({
  name,
  email,
  password,
  passwordConfirm,
  setFields,
  handleSubmit,
}) => (
  <form className="form flex flex-column" autoComplete="off" onSubmit={handleSubmit}>
    <label htmlFor="name">
      <Label>Username</Label>
    </label>
    <input
      id="name"
      value={name}
      onChange={setFields}
    />
    <label htmlFor="email">
      <Label>Email</Label>
    </label>
    <input
      id="email"
      value={email}
      onChange={setFields}
    />
    <label htmlFor="psw">
      <Label>Password</Label>
    </label>
    <input
      id="password"
      value={password}
      onChange={setFields}
      type="password"
    />
    <label htmlFor="passwordConfirm">
      <Label>Confirm Password</Label>
    </label>
    <input
      id="passwordConfirm"
      value={passwordConfirm}
      onChange={setFields}
      type="password"
    />
    <SubmitButton
      disabled={password.length < 2 || password !== passwordConfirm}
      color="blue"
      className="text-right"
    >
      <ButtonText>Create Account</ButtonText>
    </SubmitButton>
  </form>
);

export default SignUpForm;
