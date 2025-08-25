import { EventsGrid } from "@/components/EventsGrid";
import { CollaborationEvent } from "@/types/events";
import { useEffect, useState } from "react";
import akihabaraEvents from "@/data/akihabara-events.json";
import ikebukuroEvents from "@/data/ikebukuro-events.json";
import shinjukuEvents from "@/data/shinjuku-events.json";

const Index = () => {
  const [events, setEvents] = useState<CollaborationEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = () => {
      console.log('Loading events from imported data...');
      try {
        console.log('Events loaded:', {
          akihabara: akihabaraEvents.length,
          ikebukuro: ikebukuroEvents.length,
          shinjuku: shinjukuEvents.length
        });

        const allEvents = [...akihabaraEvents, ...ikebukuroEvents, ...shinjukuEvents];
        console.log('Total events:', allEvents.length);
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
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground text-lg">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <EventsGrid events={events} />
    </div>
  );
};

export default Index;
