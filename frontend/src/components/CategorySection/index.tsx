import EventCard from '../EventCard';
import { getCategoryStyle } from '../../utils/categoryIcons';
import * as S from './styles';

interface EventData {
  id: string;
  title: string;
  description: string;
  category: string;
  event_date: string;
  duration_hours: number;
  location: string;
}

interface CategorySectionProps {
  category: string;
  events: EventData[];
  onEventClick: (eventId: string) => void;
}

function CategorySection({ category, events, onEventClick }: CategorySectionProps) {
  const categoryStyle = getCategoryStyle(category);

  if (events.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.SectionHeader>
        <S.CategoryIconWrapper gradient={categoryStyle.gradient}>
          <S.CategoryIcon>{categoryStyle.icon}</S.CategoryIcon>
        </S.CategoryIconWrapper>
        <S.SectionTitle>{categoryStyle.name}</S.SectionTitle>
      </S.SectionHeader>

      <S.EventsContainer>
        <S.EventsScroll>
          {events.map((event) => {
            const formattedDate = new Date(event.event_date).toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            });
            const formattedTime = `${event.duration_hours}h`;

            return (
              <S.EventCardWrapper key={event.id}>
                <EventCard
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  date={formattedDate}
                  time={formattedTime}
                  location={event.location}
                  category={categoryStyle.name}
                  categoryIcon={categoryStyle.icon}
                  imageColor={categoryStyle.gradient}
                  onClick={() => onEventClick(event.id)}
                />
              </S.EventCardWrapper>
            );
          })}
        </S.EventsScroll>
      </S.EventsContainer>
    </S.Section>
  );
}

export default CategorySection;
