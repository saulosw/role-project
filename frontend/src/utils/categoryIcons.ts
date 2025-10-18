export interface CategoryStyle {
  icon: string;
  gradient: string;
  name: string;
}

export const getCategoryStyle = (category: string): CategoryStyle => {
  const categories: Record<string, CategoryStyle> = {
    festa: {
      icon: '🎉',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      name: 'Festa',
    },
    show: {
      icon: '🎵',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      name: 'Show/Concerto',
    },
    workshop: {
      icon: '📚',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      name: 'Workshop/Palestra',
    },
    esportes: {
      icon: '⚽',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      name: 'Esportes',
    },
    teatro: {
      icon: '🎭',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      name: 'Teatro/Cinema',
    },
    networking: {
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      name: 'Networking',
    },
    conferencia: {
      icon: '🎤',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      name: 'Conferência',
    },
    feira: {
      icon: '🏪',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      name: 'Feira/Exposição',
    },
    gastronomia: {
      icon: '🍽️',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
      name: 'Gastronomia',
    },
    beneficente: {
      icon: '💝',
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      name: 'Beneficente',
    },
    arte: {
      icon: '🎨',
      gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      name: 'Arte/Cultura',
    },
    gaming: {
      icon: '🎮',
      gradient: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
      name: 'Gaming/E-sports',
    },
  };

  return (
    categories[category] || {
      icon: '📅',
      gradient: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
      name: 'Evento',
    }
  );
};
