import { useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline, IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      console.log('Login attempt:', { email, password });
    }, 1500);
  };

  const handleSignUpClick = () => {
    window.location.href = '/register';
  };

  return (
    <div className="auth-container">
      <div className="auth-left-panel">
        <div className="auth-brand">
          <h1>Rolê</h1>
          <p>Bem-vindo de volta!</p>
        </div>
      </div>
      
      <div className="auth-right-panel">
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>Entrar na sua conta</h2>
            <p>Entre para descobrir eventos incríveis na sua cidade</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <IoMailOutline className="input-icon" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu email"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <div className="input-wrapper">
                <IoLockClosedOutline className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  required
                  className="form-input"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>
            
            <div className="auth-links">
              <a href="/forgot-password" className="forgot-password">
                Esqueceu sua senha?
              </a>
            </div>
            
            <button
              type="submit"
              className={`auth-submit ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                'Entrar'
              )}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Não tem uma conta?{' '}
              <button 
                type="button" 
                className="auth-switch"
                onClick={handleSignUpClick}
              >
                Criar conta
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;