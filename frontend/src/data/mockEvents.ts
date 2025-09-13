export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price?: string;
  imageColor: string;
  featured?: boolean;
}

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Festival de Jazz no Parque',
    description: 'Uma noite mágica com os melhores artistas de jazz da cidade em um ambiente ao ar livre.',
    date: 'Sáb, 15 Set',
    time: '19:00',
    location: 'Parque Ibirapuera',
    category: 'Música',
    price: 'R$ 45',
    imageColor: '#6366f1',
    featured: true
  },
  {
    id: '2',
    title: 'Workshop de Culinária Italiana',
    description: 'Aprenda a preparar autêntica pasta italiana com chef renomado.',
    date: 'Dom, 16 Set',
    time: '14:00',
    location: 'Escola Gastronômica Central',
    category: 'Gastronomia',
    price: 'R$ 120',
    imageColor: '#10b981',
    featured: true
  },
  {
    id: '3',
    title: 'Exposição de Arte Contemporânea',
    description: 'Descobra as obras mais inovadoras de artistas emergentes brasileiros.',
    date: 'Seg, 17 Set',
    time: '10:00',
    location: 'Galeria de Arte Moderna',
    category: 'Arte',
    imageColor: '#8b5cf6',
    featured: true
  },
  {
    id: '4',
    title: 'Show de Stand-up Comedy',
    description: 'Uma noite de muito humor com os melhores comediantes da cidade.',
    date: 'Ter, 18 Set',
    time: '20:30',
    location: 'Teatro Comedy Club',
    category: 'Comédia',
    price: 'R$ 35',
    imageColor: '#f59e0b'
  },
  {
    id: '5',
    title: 'Corrida Beneficente 5K',
    description: 'Participe desta corrida solidária em prol de instituições de caridade locais.',
    date: 'Sáb, 22 Set',
    time: '07:00',
    location: 'Parque Villa-Lobos',
    category: 'Esporte',
    price: 'R$ 25',
    imageColor: '#ef4444'
  },
  {
    id: '6',
    title: 'Festival de Comida de Rua',
    description: 'Saboreie o melhor da gastronomia de rua com food trucks de toda a cidade.',
    date: 'Dom, 23 Set',
    time: '11:00',
    location: 'Praça da Sé',
    category: 'Gastronomia',
    imageColor: '#f97316'
  },
  {
    id: '7',
    title: 'Concerto Sinfônico',
    description: 'A Orquestra Sinfônica apresenta clássicos da música erudita mundial.',
    date: 'Sex, 21 Set',
    time: '20:00',
    location: 'Theatro Municipal',
    category: 'Música',
    price: 'R$ 80',
    imageColor: '#3b82f6'
  },
  {
    id: '8',
    title: 'Feira de Artesanato Local',
    description: 'Conheça o trabalho de artesãos locais e leve para casa peças únicas.',
    date: 'Sáb, 29 Set',
    time: '09:00',
    location: 'Mercado Municipal',
    category: 'Artesanato',
    imageColor: '#06b6d4'
  },
  {
    id: '9',
    title: 'Palestra: Inovação e Tecnologia',
    description: 'Especialistas discutem o futuro da tecnologia e seu impacto na sociedade.',
    date: 'Qua, 19 Set',
    time: '19:30',
    location: 'Centro de Convenções',
    category: 'Tecnologia',
    price: 'Gratuito',
    imageColor: '#8b5cf6'
  },
  {
    id: '10',
    title: 'Aula de Dança Salsa',
    description: 'Aprenda os passos básicos da salsa com instrutores profissionais.',
    date: 'Qui, 20 Set',
    time: '19:00',
    location: 'Estúdio Dança Vida',
    category: 'Dança',
    price: 'R$ 40',
    imageColor: '#ec4899'
  },
  {
    id: '11',
    title: 'Cinema ao Ar Livre',
    description: 'Sessão especial de cinema clássico sob as estrelas.',
    date: 'Sex, 28 Set',
    time: '20:00',
    location: 'Parque da Água Branca',
    category: 'Cinema',
    imageColor: '#14b8a6'
  },
  {
    id: '12',
    title: 'Mercado de Antiguidades',
    description: 'Encontre tesouros únicos e peças históricas de colecionadores.',
    date: 'Dom, 30 Set',
    time: '08:00',
    location: 'Praça Benedito Calixto',
    category: 'Antiguidades',
    price: 'R$ 10',
    imageColor: '#92400e'
  }
];

export const eventCategories = [
  {
    title: 'Eventos em Destaque',
    events: mockEvents.filter(event => event.featured),
    showAll: true
  },
  {
    title: 'Música & Shows',
    events: mockEvents.filter(event => event.category === 'Música' || event.category === 'Comédia'),
    showAll: false
  },
  {
    title: 'Gastronomia',
    events: mockEvents.filter(event => event.category === 'Gastronomia'),
    showAll: false
  },
  {
    title: 'Arte & Cultura',
    events: mockEvents.filter(event => event.category === 'Arte' || event.category === 'Cinema' || event.category === 'Artesanato'),
    showAll: false
  },
  {
    title: 'Atividades & Workshops',
    events: mockEvents.filter(event => event.category === 'Dança' || event.category === 'Tecnologia' || event.category === 'Esporte'),
    showAll: false
  }
];