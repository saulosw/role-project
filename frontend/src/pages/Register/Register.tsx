import { useState, useEffect } from 'react';
import { IoEyeOutline, IoEyeOffOutline, IoMailOutline, IoLockClosedOutline, IoPersonOutline, IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import './Register.css';

interface PasswordRequirement {
  id: string;
  text: string;
  regex: RegExp;
  met: boolean;
}

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirement[]>([
    { id: 'length', text: 'Mínimo 8 caracteres', regex: /.{8,}/, met: false },
    { id: 'uppercase', text: 'Uma letra maiúscula', regex: /[A-Z]/, met: false },
    { id: 'lowercase', text: 'Uma letra minúscula', regex: /[a-z]/, met: false },
    { id: 'number', text: 'Um número', regex: /\d/, met: false },
    { id: 'special', text: 'Um caractere especial', regex: /[!@#$%^&*(),.?":{}|<>]/, met: false }
  ]);

  useEffect(() => {
    const updatedRequirements = passwordRequirements.map(req => ({
      ...req,
      met: req.regex.test(formData.password)
    }));
    setPasswordRequirements(updatedRequirements);
  }, [formData.password]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isPasswordValid = passwordRequirements.every(req => req.met);
  const doPasswordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordValid || !doPasswordsMatch) return;

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
        window.location.href = '/login';
      } else {
        console.error(data.message || 'Erro ao registrar usuário');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro ao conectar com o servidor');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginClick = () => {
    window.location.href = '/login';
  };

  return (
    <div className="auth-container register">
      <div className="auth-left-panel">
        <div className="auth-form-container">
          <div className="auth-header">
            <h2>Criar sua conta</h2>
            <p>Junte-se à comunidade e descubra eventos incríveis</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <div className="input-wrapper">
                <IoPersonOutline className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <IoMailOutline className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Crie uma senha segura"
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
              
              {formData.password && (
                <div className="password-requirements">
                  <p className="requirements-title">Requisitos da senha:</p>
                  <div className="requirements-list">
                    {passwordRequirements.map(req => (
                      <div 
                        key={req.id} 
                        className={`requirement-item ${req.met ? 'met' : 'unmet'}`}
                      >
                        {req.met ? (
                          <IoCheckmarkCircle className="requirement-icon success" />
                        ) : (
                          <IoCloseCircle className="requirement-icon error" />
                        )}
                        <span className="requirement-text">{req.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <div className="input-wrapper">
                <IoLockClosedOutline className="input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirme sua senha"
                  required
                  className={`form-input ${formData.confirmPassword && !doPasswordsMatch ? 'error' : ''}`}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
              
              {formData.confirmPassword && !doPasswordsMatch && (
                <div className="field-error">
                  <IoCloseCircle className="error-icon" />
                  <span>As senhas não coincidem</span>
                </div>
              )}
              
              {formData.confirmPassword && doPasswordsMatch && (
                <div className="field-success">
                  <IoCheckmarkCircle className="success-icon" />
                  <span>Senhas coincidem</span>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className={`auth-submit ${isLoading ? 'loading' : ''} ${(!isPasswordValid || !doPasswordsMatch) ? 'disabled' : ''}`}
              disabled={isLoading || !isPasswordValid || !doPasswordsMatch}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                'Criar conta'
              )}
            </button>
          </form>
          
          <div className="auth-footer">
            <p>
              Já tem uma conta?{' '}
              <button 
                type="button" 
                className="auth-switch"
                onClick={handleLoginClick}
              >
                Entrar
              </button>
            </p>
          </div>
        </div>
      </div>
      
      <div className="auth-right-panel">
        <div className="auth-brand">
          <h1>Rolê</h1>
          <p>Sua jornada de descobertas começa aqui!</p>
        </div>
      </div>
    </div>
  );
}

export default Register;