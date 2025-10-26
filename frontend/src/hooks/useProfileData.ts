import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserProfileData {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface UseProfileDataReturn {
  userData: UserProfileData | null;
  isLoading: boolean;
  error: string | null;
  navigate: ReturnType<typeof useNavigate>;
}

export const useProfileData = (): UseProfileDataReturn => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async () => {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      navigate('/login');
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/user/profile', {
        headers: {
          'x-user-id': userId,
        },
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setUserData(result.user);
        setError(null);
      } else {
        setError(result.message || 'Usuário não encontrado');
      }
    } catch (error) {
      setError('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return { userData, isLoading, error, navigate };
};
