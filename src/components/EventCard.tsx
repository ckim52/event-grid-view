import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { CollaborationEvent } from "@/types/events";

interface EventCardProps {
  event: CollaborationEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  const formatDateRange = (startDate: string, endDate: string) => {
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
    const now = new Date();
    const start = new Date(event.StartDate);
    const end = new Date(event.EndDate);
    return now >= start && now <= end;
  };

  const isUpcoming = () => {
    const now = new Date();
    const start = new Date(event.StartDate);
    return now < start;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          {isOngoing() && (
            <Badge className="bg-green-500 text-white">Live</Badge>
          )}
        </div>
        
        <CardTitle className="line-clamp-2 text-lg leading-tight">
          {event.EnglishTitle}
        </CardTitle>
        
        <CardDescription className="text-sm text-muted-foreground font-medium">
          {event.JapaneseTitle}
        </CardDescription>
        
        {event.ThumbnailURL && (
          <div className="mt-3">
            <img 
              src={event.ThumbnailURL} 
              alt={event.EnglishTitle}
              className="w-full h-32 object-cover rounded-md"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-foreground">{event.Location}</p>
            <p className="text-xs text-muted-foreground">{event.Address}</p>
          </div>

          <div className="text-sm">
            <span className="font-medium">Duration:</span> {formatDateRange(event.StartDate, event.EndDate)}
          </div>

          <div className="flex flex-col gap-2">
            <Badge variant={isOngoing() ? "default" : isUpcoming() ? "secondary" : "outline"} className="text-xs w-fit">
              {event.Type}
            </Badge>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => window.open(event.OfficialURL, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Official Page
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};