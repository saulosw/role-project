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

export const mockEvents: Event[] = [];

export const eventCategories = [
  {
    title: 'Eventos em Destaque',
    events: [],
    showAll: true
  },
  {
    title: 'Música & Shows',
    events: [],
    showAll: false
  },
  {
    title: 'Gastronomia',
    events: [],
    showAll: false
  },
  {
    title: 'Arte & Cultura',
    events: [],
    showAll: false
  },
  {
    title: 'Atividades & Workshops',
    events: [],
    showAll: false
  }
];