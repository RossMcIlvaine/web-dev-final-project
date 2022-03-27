import React from "react";
import '../../Common/css/register.css';

const AuthForm = ({ user, reg, onChange, onSubmit }) => {
  if(reg) { // display register form
    return (
        <div>
            <h1 className="header">
                Create an Account
            </h1>
            <div className="register">
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                <label>Username</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="username-input"
                    value={user.username}
                    onChange={onChange}
                    name="username"
                    required
                />
                </div>
                <div className="form-group">
                <label>First Name</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="first-name-input"
                    value={user.firstName}
                    onChange={onChange}
                    name="firstName"
                />
                </div>
                <div className="form-group">
                <label>Last Name</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="last-name-input"
                    value={user.lastName}
                    onChange={onChange}
                    name="lastName"
                />
                </div>{" "}
                <div className="form-group">
                <label>Email</label>
                <br />
                <input
                    type="email"
                    className="form-control"
                    id="email-input"
                    value={user.email}
                    onChange={onChange}
                    name="email"
                />
                </div>{" "}
                <div className="form-group">
                <label>Password</label>
                <br />
                <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    value={user.password}
                    onChange={onChange}
                    name="password"
                    min="0"
                    required
                />
                </div>
                <br />
                <hr />
                <div className="form-group">
                <button type="submit" className="registerButton" onSubmit={onSubmit}>
                    Submit
                </button>
                <p class="registerSubtext">Already have an account?</p>
                </div>
            </form>
            </div>
        </div>
      );
  }
  else { // otherwise display login form
    return (
        <div>
            <h1 class="header">
                Sign In to Your Account
            </h1>
            <div className="login">
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="form-group">
                <label>Username</label>
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="username-input"
                    value={user.username}
                    onChange={onChange}
                    name="username"
                    required
                />
                </div>{" "}
                <div className="form-group">
                <label>Password</label>
                <br />
                <input
                    type="password"
                    className="form-control"
                    id="password-input"
                    value={user.password}
                    onChange={onChange}
                    name="password"
                    min="0"
                    required
                />
                </div>
                <br/>
                <hr />
                <div className="form-group">
                <button type="submit" className="registerButton" onSubmit={onSubmit}>
                    Submit
                </button>
                <p class="registerSubtext">Don't have an account?</p>
                </div>
            </form>
            </div>
        </div>
      );
  }
};

export default AuthForm;