import { useState } from "react";
import { CollaborationEvent } from "@/types/events";
import { EventCard } from "./EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface EventsGridProps {
  events: CollaborationEvent[];
}

export const EventsGrid = ({ events }: EventsGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();

  // Filter events by Series and date range, then sort by StartDate
  const filteredAndSortedEvents = [...events]
    .filter(event => {
      // Series filter
      const seriesMatch = event.Series.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Date range filter
      const eventStart = new Date(event.StartDate);
      const eventEnd = new Date(event.EndDate);
      
      let dateMatch = true;
      if (startDate && endDate) {
        // Event must overlap with selected date range
        dateMatch = eventStart <= endDate && eventEnd >= startDate;
      } else if (startDate) {
        // Event must end after or on start date
        dateMatch = eventEnd >= startDate;
      } else if (endDate) {
        // Event must start before or on end date
        dateMatch = eventStart <= endDate;
      }
      
      return seriesMatch && dateMatch;
    })
    .sort((a, b) => 
      new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime()
    );

  const clearDateFilters = () => {
    setStartDate(undefined);
    setEndDate(undefined);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Collaboration Events</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Discover amazing collaboration cafés, exhibitions, and pop-up stores
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Series Search */}
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

          {/* Date Range Filters */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Date Range:</span>
              
              {/* Start Date Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[140px] justify-start text-left font-normal text-sm",
                      !startDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "MMM d") : "Start date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              <span className="text-muted-foreground">to</span>

              {/* End Date Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[140px] justify-start text-left font-normal text-sm",
                      !endDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "MMM d") : "End date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              {/* Clear Date Filters */}
              {(startDate || endDate) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearDateFilters}
                  className="h-8 px-2"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
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
              No events found matching your filters
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search terms or date range
            </p>
          </div>
        )}
      </div>
    </div>
  );
};