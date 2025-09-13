import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import EventCard from '../EventCard/EventCard';
import type { Event } from '../../data/mockEvents';
import './EventSection.css';

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

  return (
    <section className="event-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {events.length > 6 && (
          <button 
            className="show-more-btn"
            onClick={handleShowMore}
          >
            {isExpanded ? 'Ver Menos' : `Ver Todos (${events.length})`}
            <IoChevronForward 
              className={`show-more-icon ${isExpanded ? 'rotated' : ''}`} 
            />
          </button>
        )}
      </div>
      
      <div className="events-grid">
        {displayedEvents.map((event, index) => (
          <div 
            key={event.id} 
            className="event-card-wrapper"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <EventCard {...event} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventSection;