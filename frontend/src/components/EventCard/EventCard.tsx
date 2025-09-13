import { IoLocationOutline, IoTimeOutline, IoCalendarOutline } from 'react-icons/io5';
import './EventCard.css';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  price?: string;
  imageColor?: string;
}

function EventCard({ 
  title, 
  description, 
  date, 
  time, 
  location, 
  category,
  price,
  imageColor = '#ff6b35'
}: EventCardProps) {
  return (
    <div className="event-card">
      <div className="event-image-placeholder" style={{ backgroundColor: imageColor }}>
        <div className="event-category">{category}</div>
        {price && <div className="event-price">{price}</div>}
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <p className="event-description">{description}</p>
        
        <div className="event-details">
          <div className="event-detail">
            <IoCalendarOutline className="detail-icon" />
            <span>{date}</span>
          </div>
          
          <div className="event-detail">
            <IoTimeOutline className="detail-icon" />
            <span>{time}</span>
          </div>
          
          <div className="event-detail">
            <IoLocationOutline className="detail-icon" />
            <span>{location}</span>
          </div>
        </div>
        
        <button className="event-cta">Ver Detalhes</button>
      </div>
    </div>
  );
}

export default EventCard;