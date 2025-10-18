import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerSchema, type RegisterFormData } from '../schemas/auth.schema';

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onChange',
  });

  const password = watch('password', '');
  const confirmPassword = watch('confirmPassword', '');

  const passwordRequirements = [
    { id: 'length', text: 'Mínimo 8 caracteres', regex: /.{8,}/, met: /.{8,}/.test(password) },
    { id: 'uppercase', text: 'Uma letra maiúscula', regex: /[A-Z]/, met: /[A-Z]/.test(password) },
    { id: 'lowercase', text: 'Uma letra minúscula', regex: /[a-z]/, met: /[a-z]/.test(password) },
    { id: 'number', text: 'Um número', regex: /\d/, met: /\d/.test(password) },
    { id: 'special', text: 'Um caractere especial', regex: /[!@#$%^&*(),.?":{}|<>]/, met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];

  const isPasswordValid = passwordRequirements.every(req => req.met);
  const doPasswordsMatch = password === confirmPassword && confirmPassword.length > 0;

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/auth/signIn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        setError(result.message || 'Erro ao registrar usuário. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isLoading,
    error,
    password,
    confirmPassword,
    passwordRequirements,
    isPasswordValid,
    doPasswordsMatch,
  };
};
