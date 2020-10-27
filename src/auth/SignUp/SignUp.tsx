import React, { useEffect, FormEvent } from 'react';
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Link, RouteComponentProps } from 'react-router-dom';

import { IAppState } from '../../store';
import { signUpUser as signUpUserAction } from '../../store/auth/AuthActions';
import useFormFields from '../../hooks/useFormFields';

import Grid from '../../common/Grid';
import { Card, CardContent } from '../../common/Card';
import SignUpForm from './SignUpForm';
import { Title, Paragraph } from '../../common/Typography';

interface ISignUpOwnProps extends RouteComponentProps {}

interface ISignUpStateToProps {
  isAuthenticated: boolean;
}

interface ISignUpDispatchToProps {
  signUpUser: (payload: ISignUpUserPayload) => void;
}

interface ISignUpUserPayload {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC<ISignUpOwnProps & ISignUpStateToProps & ISignUpDispatchToProps> = ({
  signUpUser,
  history,
  isAuthenticated,
}) => {
  const [fields, setFields] = useFormFields({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);
  const {
    name, password, email, passwordConfirm,
  } = fields;

  const handleSignUpSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpUser({ email, password, name });
  };

  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8} lg={4}>
        <Card>
          <CardContent>
            <Title>Create Account</Title>
            <Paragraph>
              Already have an account? &nbsp;
              <Link to="/sign-in">Sign In!</Link>
            </Paragraph>
          </CardContent>
          <CardContent>
            <SignUpForm
              email={email}
              password={password}
              passwordConfirm={passwordConfirm}
              name={name}
              setFields={setFields}
              handleSubmit={handleSignUpSubmit}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps: MapStateToProps<
  ISignUpStateToProps,
  ISignUpOwnProps,
  IAppState
> = (state: IAppState, ownProps: ISignUpOwnProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  ...ownProps,
});

const mapDispatchToProps: MapDispatchToProps<
  ISignUpDispatchToProps,
  ISignUpOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  signUpUser: (payload: ISignUpUserPayload) => dispatch(signUpUserAction(payload)),
});

export default connect<
  ISignUpStateToProps,
  ISignUpDispatchToProps,
  ISignUpOwnProps,
  IAppState
>(mapStateToProps, mapDispatchToProps)(SignUp);
