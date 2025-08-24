import { EventsGrid } from "@/components/EventsGrid";
import { CollaborationEvent } from "@/types/events";
import { useEffect, useState } from "react";

const Index = () => {
  const [events, setEvents] = useState<CollaborationEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const [akihabaraResponse, ikebukuroResponse, shinjukuResponse] = await Promise.all([
          fetch('/src/data/akihabara-events.json'),
          fetch('/src/data/ikebukuro-events.json'),
          fetch('/src/data/shinjuku-events.json')
        ]);

        const [akihabaraEvents, ikebukuroEvents, shinjukuEvents] = await Promise.all([
          akihabaraResponse.json(),
          ikebukuroResponse.json(),
          shinjukuResponse.json()
        ]);

        const allEvents = [...akihabaraEvents, ...ikebukuroEvents, ...shinjukuEvents];
        setEvents(allEvents);
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-lg">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <EventsGrid events={events} />
    </div>
  );
};

export default Index;
