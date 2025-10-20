export interface EventDetails {
    eventId?: string;
    title: string;
    description: string;
    category: string;
    location: string;
    event_date: string;
    durationHours: string;
    organizerId: string;
    attendee_count?: number;
}

export interface EventResponse {
    id: string;
    title: string;
    description: string;
    category: string;
    location: string;
    event_date: string;
    duration_hours: string;
    organizer_id: string;
    attendee_count: number;}