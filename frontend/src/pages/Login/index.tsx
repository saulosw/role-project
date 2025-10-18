import { useState } from 'react';
import { InputAdornment, Alert } from '@mui/material';
import { MailOutline, LockOutlined, VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useLoginForm } from '../../hooks/useLoginForm';
import * as S from './styles';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, errors, isLoading, error } = useLoginForm();
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <S.AuthContainer>
      <S.LeftPanel>
        <S.BrandContainer>
          <S.BrandTitle>Rolê</S.BrandTitle>
          <S.BrandSubtitle>Bem-vindo de volta!</S.BrandSubtitle>
        </S.BrandContainer>
      </S.LeftPanel>

      <S.RightPanel>
        <S.FormContainer>
          <S.FormHeader>
            <S.FormTitle>Entrar na sua conta</S.FormTitle>
            <S.FormSubtitle>Entre para descobrir eventos incríveis na sua cidade</S.FormSubtitle>
          </S.FormHeader>

          {error && (
            <Alert severity="error" sx={{ marginBottom: '1.5rem', borderRadius: '12px' }}>
              {error}
            </Alert>
          )}

          <S.Form onSubmit={handleSubmit}>
            <S.StyledTextField
              fullWidth
              label="Email"
              placeholder="Digite seu email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutline />
                    </InputAdornment>
                  ),
                },
              }}
              {...register('email')}
            />

            <S.StyledTextField
              fullWidth
              label="Senha"
              placeholder="Digite sua senha"
              type={showPassword ? 'text' : 'password'}
              error={!!errors.password}
              helperText={errors.password?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <S.PasswordToggle onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                      </S.PasswordToggle>
                    </InputAdornment>
                  ),
                },
              }}
              {...register('password')}
            />

            <S.LinksContainer>
              <S.ForgotPasswordLink href="/forgot-password">Esqueceu sua senha?</S.ForgotPasswordLink>
            </S.LinksContainer>

            <S.SubmitButton type="submit" disabled={isLoading} variant="contained">
              {isLoading ? <S.LoadingSpinner /> : 'Entrar'}
            </S.SubmitButton>
          </S.Form>

          <S.Footer>
            <S.FooterText>
              Não tem uma conta?{' '}
              <S.SwitchButton type="button" onClick={handleSignUpClick}>
                Criar conta
              </S.SwitchButton>
            </S.FooterText>
          </S.Footer>
        </S.FormContainer>
      </S.RightPanel>
    </S.AuthContainer>
  );
}

export default Login;
