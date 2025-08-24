import { useState, useMemo } from "react";
import { CollaborationEvent } from "@/types/events";
import { EventCard } from "./EventCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, CalendarIcon, X } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

interface EventsGridProps {
  events: CollaborationEvent[];
}

export const EventsGrid = ({ events }: EventsGridProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  // Get unique locations for filter
  const uniqueLocations = useMemo(() => {
    const locations = [...new Set(events.map(event => event.Location))];
    return locations.sort();
  }, [events]);

  // Filter events by title, location and date range, then sort by StartDate with Live events prioritized
  const filteredAndSortedEvents = [...events]
    .filter(event => {
      // Title filter
      const titleMatch = event.EnglishTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.JapaneseTitle.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Location filter
      const locationMatch = selectedLocation === "all" || event.Location === selectedLocation;
      
      // Date range filter
      const eventStart = new Date(event.StartDate);
      const eventEnd = new Date(event.EndDate);
      
      let dateMatch = true;
      if (dateRange?.from && dateRange?.to) {
        // Event must overlap with selected date range
        dateMatch = eventStart <= dateRange.to && eventEnd >= dateRange.from;
      } else if (dateRange?.from) {
        // Event must end after or on start date
        dateMatch = eventEnd >= dateRange.from;
      } else if (dateRange?.to) {
        // Event must start before or on end date
        dateMatch = eventStart <= dateRange.to;
      }
      
      return titleMatch && locationMatch && dateMatch;
    })
    .sort((a, b) => {
      // Helper function to check if event is live/ongoing
      const isLive = (event: CollaborationEvent) => {
        if (!event.StartDate || !event.EndDate) return false;
        const now = new Date();
        const start = new Date(event.StartDate);
        const end = new Date(event.EndDate);
        return now >= start && now <= end;
      };

      const aIsLive = isLive(a);
      const bIsLive = isLive(b);

      // Prioritize live events first
      if (aIsLive && !bIsLive) return -1;
      if (!aIsLive && bIsLive) return 1;

      // Then sort by StartDate
      return new Date(a.StartDate).getTime() - new Date(b.StartDate).getTime();
    });

  const clearDateFilters = () => {
    setDateRange(undefined);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Collaboration Events</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Discover amazing collaboration cafés, exhibitions, and pop-up stores
        </p>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Title Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search by title (e.g., Tokyo Revengers, Sanrio)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="max-w-md mx-auto flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="All locations" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All locations</SelectItem>
                  {uniqueLocations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[280px] justify-start text-left font-normal text-sm",
                      !dateRange && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        `${format(dateRange.from, "MMM d")} - ${format(dateRange.to, "MMM d, yyyy")}`
                      ) : (
                        format(dateRange.from, "MMM d, yyyy")
                      )
                    ) : (
                      "Pick a date range"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="center">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    numberOfMonths={2}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>

              {/* Clear Date Filter */}
              {dateRange && (
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