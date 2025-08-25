import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CollaborationEvent } from "@/types/events";

interface EventCardProps {
  event: CollaborationEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  const formatDateRange = (startDate: string | null, endDate: string | null) => {
    if (!startDate || !endDate) return 'TBD';
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const startFormatted = start.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
    
    const endFormatted = end.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    return `${startFormatted} - ${endFormatted}`;
  };

  const isOngoing = () => {
    if (!event.StartDate || !event.EndDate) return false;
    const now = new Date();
    const start = new Date(event.StartDate);
    const end = new Date(event.EndDate);
    return now >= start && now <= end;
  };

  const isUpcoming = () => {
    if (!event.StartDate) return false;
    const now = new Date();
    const start = new Date(event.StartDate);
    return now < start;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex gap-2 flex-wrap">
            {isOngoing() && (
              <Badge className="bg-green-500 text-white shrink-0">Live</Badge>
            )}
            {event.Series && (
              <Badge variant="secondary" className="shrink-0">{event.Series}</Badge>
            )}
          </div>
        </div>
        
        <CardTitle className="line-clamp-2 text-lg leading-tight mb-2">
          {event.EnglishTitle}
        </CardTitle>
        
        <CardDescription 
          className="text-sm text-muted-foreground font-medium line-clamp-1 mb-3"
          title={event.JapaneseTitle}
        >
          {event.JapaneseTitle}
        </CardDescription>
        
        {event.ThumbnailURL && (
          <div className="w-full">
            <img 
              src={event.ThumbnailURL} 
              alt={event.EnglishTitle}
              className="w-full h-40 object-cover rounded-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between pt-0">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">{event.Location}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.Address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline cursor-pointer line-clamp-1 block truncate"
              title={event.Address}
            >
              {event.Address}
            </a>
            {event.KeyHighlights && (
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                {event.KeyHighlights}
              </p>
            )}
          </div>

          <div className="text-sm space-y-1">
            <span className="font-medium text-foreground">Duration:</span>
            <p className="text-muted-foreground">{formatDateRange(event.StartDate, event.EndDate)}</p>
          </div>

          <div className="flex justify-start">
            <Badge variant={isOngoing() ? "default" : isUpcoming() ? "secondary" : "outline"} className="text-xs">
              {event.Type}
            </Badge>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-border">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => window.open(event.CollaboURL, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Official Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};