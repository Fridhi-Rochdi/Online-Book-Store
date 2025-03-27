import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Login</h2>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-footer">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          <p className="signup-text">Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
        </div>
      </div>
    </div>
  );
}
