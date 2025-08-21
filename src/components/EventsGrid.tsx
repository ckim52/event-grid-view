import { useState } from "react";
import { CollaborationEvent } from "@/types/events";
import { EventCard } from "./EventCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface EventsGridProps {
  events: CollaborationEvent[];
}

export const EventsGrid = ({ events }: EventsGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events by Series and then sort by StartDate
  const filteredAndSortedEvents = [...events]
    .filter(event => 
      event.Series.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => 
      new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Collaboration Events</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Discover amazing collaboration cafés, exhibitions, and pop-up stores
        </p>
        
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search by series (e.g., Hatsune Miku, Sanrio)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedEvents.length > 0 ? (
          filteredAndSortedEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground text-lg">
              No events found matching "{searchTerm}"
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try searching for different series like "Hatsune Miku", "Sanrio", or "A3!"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};