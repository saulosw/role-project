import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import EventCard from '../EventCard';
import type { Event } from '../../data/mockEvents';
import * as S from './styles';

interface EventSectionProps {
  title: string;
  events: Event[];
  showAll?: boolean;
}

function EventSection({ title, events, showAll = false }: EventSectionProps) {
  const [visibleCount, setVisibleCount] = useState(showAll ? events.length : 6);
  const [isExpanded, setIsExpanded] = useState(showAll);

  const handleShowMore = () => {
    if (isExpanded) {
      setVisibleCount(6);
      setIsExpanded(false);
    } else {
      setVisibleCount(events.length);
      setIsExpanded(true);
    }
  };

  const displayedEvents = events.slice(0, visibleCount);

  if (events.length === 0) {
    return null;
  }

  return (
    <S.Section>
      <S.SectionHeader>
        <S.SectionTitle>{title}</S.SectionTitle>
        {events.length > 6 && (
          <S.ShowMoreButton onClick={handleShowMore}>
            {isExpanded ? 'Ver Menos' : `Ver Todos (${events.length})`}
            <S.ShowMoreIcon rotated={isExpanded}>
              <IoChevronForward />
            </S.ShowMoreIcon>
          </S.ShowMoreButton>
        )}
      </S.SectionHeader>

      <S.EventsGrid>
        {displayedEvents.map((event, index) => (
          <S.EventCardWrapper key={event.id} delay={index * 0.1}>
            <EventCard {...event} />
          </S.EventCardWrapper>
        ))}
      </S.EventsGrid>
    </S.Section>
  );
}

export default EventSection;
