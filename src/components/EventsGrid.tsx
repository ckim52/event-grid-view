import { CollaborationEvent } from "@/types/events";
import { EventCard } from "./EventCard";

interface EventsGridProps {
  events: CollaborationEvent[];
}

export const EventsGrid = ({ events }: EventsGridProps) => {
  // Sort events by StartDate
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Collaboration Events</h1>
        <p className="text-xl text-muted-foreground">
          Discover amazing collaboration cafés, exhibitions, and pop-up stores
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};