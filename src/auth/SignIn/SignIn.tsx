import React, { useEffect, FormEvent } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { loginUser as loginUserAction } from '../../store/auth/AuthActions';
import { IAppState } from '../../store';

import useFormFields from '../../hooks/useFormFields';
import Grid from '../../common/Grid';
import { Card, CardContent } from '../../common/Card';
import { SubmitButton } from '../../common/Button';
import {
  Title,
  Paragraph,
  Label,
  ButtonText,
} from '../../common/Typography';

interface ISignInOwnProps extends RouteComponentProps {}

interface ISignInStateToProps {
  isAuthenticated: boolean;
}

interface ISignInDispatchToProps {
  loginUser: (payload: { email: string, password: string }) => void;
}

const SignIn: React.FC<ISignInOwnProps & ISignInDispatchToProps & ISignInStateToProps> = ({
  loginUser,
  isAuthenticated,
  history,
}) => {
  const [fields, setFields] = useFormFields({ email: '', password: '' });

  const { email, password } = fields;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated, history]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    loginUser({ email, password });
  };

  const isValid = () => (!(email.length > 2 && password.length > 2));

  return (
    <Grid row classes="flex-center">
      <Grid xs={12} sm={10} md={8} lg={4}>
        <Card>
          <CardContent>
            <Title>Welcome!</Title>
            <Paragraph>
              Please sign in here below or &nbsp;
              <Link to="/sign-up">Create Account</Link>
            </Paragraph>
          </CardContent>
          <CardContent>
            <form className="form flex flex-column" onSubmit={(e) => handleSubmit(e)} autoComplete="off">
              <label htmlFor="email">
                <Label>Email</Label>
              </label>
              <input
                id="email"
                value={email}
                onChange={setFields}
              />
              <label htmlFor="password">
                <Label>Password</Label>
              </label>
              <input
                id="password"
                value={password}
                type="password"
                onChange={setFields}
              />
              <SubmitButton
                disabled={isValid()}
                color="blue"
              >
                <ButtonText>Sign In</ButtonText>
              </SubmitButton>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStateToProps: MapStateToProps<
  ISignInStateToProps,
  ISignInOwnProps,
  IAppState
> = (state: IAppState, ownProps: ISignInOwnProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  ...ownProps,
});

const mapDispatchToProps: MapDispatchToProps<
  ISignInDispatchToProps,
  ISignInOwnProps
> = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  loginUser: ({ email, password }) => dispatch(loginUserAction({ email, password })),
});

export default connect<
  ISignInStateToProps,
  ISignInDispatchToProps,
  ISignInOwnProps,
  IAppState
>(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
