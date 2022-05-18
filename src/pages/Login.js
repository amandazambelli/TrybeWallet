import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserEmail } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateButton());
  }

  validateButton = () => {
    const { email, password } = this.state;
    const number = 5;
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (password.length > number && reg.test(email)) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleSubmit = () => {
    const { history, setEmail } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="inputEmail">
            <input
              id="inputEmail"
              data-testid="email-input"
              type="text"
              placeholder="Email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label htmlFor="inputPassword">
            <input
              id="inputPassword"
              data-testid="password-input"
              type="text"
              placeholder="Senha"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              required
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleSubmit }
            disabled={ isDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(saveUserEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
