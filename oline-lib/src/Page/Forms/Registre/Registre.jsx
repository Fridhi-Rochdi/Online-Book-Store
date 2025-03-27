import "./Registre.css";

export default function Registre() {
  return (
    <div className="registre-page">
      <div className="registre-card">
        <h2>Create Account</h2>
        <form className="registre-form">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" required />
          </div>
          <button type="submit" className="registre-button">Register</button>
        </form>
        <div className="registre-footer">
          <p className="login-text">Already have an account? <a href="/login" className="login-link">Login</a></p>
        </div>
      </div>
    </div>
  );
}
