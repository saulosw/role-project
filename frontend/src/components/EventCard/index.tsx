import { IoLocationOutline, IoTimeOutline, IoCalendarOutline, IoPeopleOutline } from 'react-icons/io5';
import * as S from './styles';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendeeCount?: number;
  price?: string;
  imageColor?: string;
  categoryIcon?: string;
  onClick?: () => void;
}

function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  attendeeCount = 0,
  price,
  imageColor = '#ff6b35',
  categoryIcon,
  onClick
}: EventCardProps) {
  return (
    <S.Card onClick={onClick}>
      <S.ImagePlaceholder imageColor={imageColor}>
        {categoryIcon && <S.CategoryIconLarge>{categoryIcon}</S.CategoryIconLarge>}
        <S.Category className="event-category">{category}</S.Category>
        {price && <S.Price className="event-price">{price}</S.Price>}
      </S.ImagePlaceholder>

      <S.Content>
        <S.Title className="event-title">{title}</S.Title>
        <S.Description>{description}</S.Description>

        <S.Details>
          <S.Detail>
            <IoCalendarOutline className="detail-icon" />
            <span>{date}</span>
          </S.Detail>

          <S.Detail>
            <IoTimeOutline className="detail-icon" />
            <span>{time}</span>
          </S.Detail>

          <S.Detail>
            <IoLocationOutline className="detail-icon" />
            <span>{location}</span>
          </S.Detail>

          <S.Detail>
            <IoPeopleOutline className="detail-icon" />
            <span>{attendeeCount} {attendeeCount === 1 ? 'participante' : 'participantes'}</span>
          </S.Detail>
        </S.Details>

        <S.CTAButton>Ver Detalhes</S.CTAButton>
      </S.Content>
    </S.Card>
  );
}

export default EventCard;
