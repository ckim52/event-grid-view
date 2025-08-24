export interface CollaborationEvent {
  EnglishTitle: string;
  JapaneseTitle: string;
  Type: string;
  Location: string;
  StartDate: string | null;
  EndDate: string | null;
  Address: string;
  CollaboURL: string;
  ThumbnailURL?: string;
  Series?: string | null;
  GoogleMapsURL?: string | null;
  KeyHighlights?: string | null;
}