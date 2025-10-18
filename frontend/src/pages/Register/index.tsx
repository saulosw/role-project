import { useState } from 'react';
import { InputAdornment, Alert } from '@mui/material';
import {
  PersonOutline,
  MailOutline,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  CheckCircle,
  Cancel,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useRegisterForm } from '../../hooks/useRegisterForm';
import * as S from './styles';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    errors,
    isLoading,
    error,
    password,
    confirmPassword,
    passwordRequirements,
    isPasswordValid,
    doPasswordsMatch,
  } = useRegisterForm();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <S.AuthContainer>
      <S.LeftPanel>
        <S.FormContainer>
          <S.FormHeader>
            <S.FormTitle>Criar sua conta</S.FormTitle>
            <S.FormSubtitle>Junte-se à comunidade e descubra eventos incríveis</S.FormSubtitle>
          </S.FormHeader>

          {error && (
            <Alert severity="error" sx={{ marginBottom: '1.5rem', borderRadius: '12px' }}>
              {error}
            </Alert>
          )}

          <S.Form onSubmit={handleSubmit}>
            <S.StyledTextField
              fullWidth
              label="Nome completo"
              placeholder="Digite seu nome completo"
              type="text"
              error={!!errors.name}
              helperText={errors.name?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline />
                    </InputAdornment>
                  ),
                },
              }}
              {...register('name')}
            />

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
              placeholder="Crie uma senha segura"
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

            {password && (
              <S.PasswordRequirementsContainer>
                <S.RequirementsTitle>Requisitos da senha:</S.RequirementsTitle>
                <S.RequirementsList>
                  {passwordRequirements.map((req) => (
                    <S.RequirementItem key={req.id} met={req.met}>
                      {req.met ? (
                        <CheckCircle sx={{ fontSize: '0.9rem', color: '#10b981' }} />
                      ) : (
                        <Cancel sx={{ fontSize: '0.9rem', color: '#e5e5e5' }} />
                      )}
                      <S.RequirementText met={req.met}>{req.text}</S.RequirementText>
                    </S.RequirementItem>
                  ))}
                </S.RequirementsList>
              </S.PasswordRequirementsContainer>
            )}

            <S.StyledTextField
              fullWidth
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              type={showConfirmPassword ? 'text' : 'password'}
              error={!!errors.confirmPassword || (confirmPassword.length > 0 && !doPasswordsMatch)}
              helperText={errors.confirmPassword?.message}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <S.PasswordToggle onClick={() => setShowConfirmPassword(!showConfirmPassword)} edge="end">
                        {showConfirmPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
                      </S.PasswordToggle>
                    </InputAdornment>
                  ),
                },
              }}
              {...register('confirmPassword')}
            />

            {confirmPassword && !doPasswordsMatch && (
              <S.FieldFeedback>
                <Cancel sx={{ fontSize: '0.9rem' }} />
                <span>As senhas não coincidem</span>
              </S.FieldFeedback>
            )}

            {confirmPassword && doPasswordsMatch && (
              <S.FieldFeedback success>
                <CheckCircle sx={{ fontSize: '0.9rem' }} />
                <span>Senhas coincidem</span>
              </S.FieldFeedback>
            )}

            <S.SubmitButton
              type="submit"
              disabled={isLoading || !isPasswordValid || !doPasswordsMatch}
              variant="contained"
            >
              {isLoading ? <S.LoadingSpinner /> : 'Criar conta'}
            </S.SubmitButton>
          </S.Form>

          <S.Footer>
            <S.FooterText>
              Já tem uma conta?{' '}
              <S.SwitchButton type="button" onClick={handleLoginClick}>
                Entrar
              </S.SwitchButton>
            </S.FooterText>
          </S.Footer>
        </S.FormContainer>
      </S.LeftPanel>

      <S.RightPanel>
        <S.BrandContainer>
          <S.BrandTitle>Rolê</S.BrandTitle>
          <S.BrandSubtitle>Sua jornada de descobertas começa aqui!</S.BrandSubtitle>
        </S.BrandContainer>
      </S.RightPanel>
    </S.AuthContainer>
  );
}

export default Register;
