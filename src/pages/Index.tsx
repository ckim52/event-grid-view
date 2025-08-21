import { EventsGrid } from "@/components/EventsGrid";
import { CollaborationEvent } from "@/types/events";

const COLLABORATION_EVENTS: CollaborationEvent[] = [
  {
    "JapaneseTitle": "初音ミク「マジカルミライ2025」カフェ",
    "EnglishTitle": "Hatsune Miku \"Magical Mirai 2025\" Café",
    "Type": "Collabo Café",
    "Location": "E-DINER Ikebukuro",
    "StartDate": "2025-08-13",
    "EndDate": "2025-09-07",
    "Address": "1 Chome-20-1 Higashiikebukuro, Toshima City, Tokyo 170-0013",
    "OfficialURL": "https://edith.co.jp/lp/magicalmirai2025_E-DINER/",
    "KeyHighlights": "Themed dishes, exclusive merchandise, random coasters with each order.",
    "Series": "Hatsune Miku / Magical Mirai"
  },
  {
    "JapaneseTitle": "ポムポムプリン ストア",
    "EnglishTitle": "Pompompurin Store",
    "Type": "Pop-up Store",
    "Location": "JR Ikebukuro Station South Ticket Gate Event Space",
    "StartDate": "2025-08-12",
    "EndDate": "2025-08-25",
    "Address": "1 Chome-11-1 Minamiikebukuro, Toshima City, Tokyo 171-0022",
    "OfficialURL": "https://www.sanrio.co.jp/spots/?categories=54&chara=3353",
    "KeyHighlights": "Event‑exclusive Pompompurin merchandise; free die‑cut sticker with purchase over ¥2200.",
    "Series": "Sanrio / Pompompurin"
  },
  {
    "JapaneseTitle": "吸血鬼すぐ死ぬ展 連載10周年記念",
    "EnglishTitle": "Vampire Dies in No Time Exhibition 10th Anniversary",
    "Type": "Exhibition",
    "Location": "Tobu Department Store Ikebukuro",
    "StartDate": "2025-08-14",
    "EndDate": "2025-08-24",
    "Address": "1 Chome-1-25 Nishiikebukuro, Toshima City, Tokyo 171-0021",
    "OfficialURL": "https://collabo-cafe.com/events/tag/ikebukuro/",
    "KeyHighlights": "Original art, manuscript reproductions, character displays.",
    "Series": "Vampire Dies in No Time"
  },
  {
    "JapaneseTitle": "鬼灯の冷徹 × AmoCrepe",
    "EnglishTitle": "Hozuki's Coolheadedness × AmoCrepe",
    "Type": "Collabo",
    "Location": "AmoCrepe Ikebukuro Store",
    "StartDate": "2025-08-13",
    "EndDate": "2025-09-03",
    "Address": "1-23-12 Higashiikebukuro, Toshima-ku, Tokyo 170-0013",
    "OfficialURL": "https://x.com/AmoCrepe/status/1951206277108879488",
    "KeyHighlights": "Themed crepes, limited-edition goods, coasters with menu items.",
    "Series": "Hozuki's Coolheadedness"
  },
  {
    "JapaneseTitle": "ジャンケットバンク コラボカフェ",
    "EnglishTitle": "Junket Bank Collaboration Café",
    "Type": "Collabo Café",
    "Location": "Charaum Café, Marubiru Ikebukuro",
    "StartDate": "2025-08-23",
    "EndDate": "2025-09-15",
    "Address": "1 Chome-11-1 Minamiikebukuro, Toshima City, Tokyo 171-0022",
    "OfficialURL": "https://www.medicos-e.net/newsdetail/junketbank_5_cafe/",
    "KeyHighlights": "Collaboration menu items, exclusive merchandise.",
    "Series": "Junket Bank"
  },
  {
    "JapaneseTitle": "CITY THE ANIMATION カフェ",
    "EnglishTitle": "CITY THE ANIMATION Café",
    "Type": "Collabo Café",
    "Location": "Animate Café Ikebukuro 3rd Store",
    "StartDate": "2025-08-07",
    "EndDate": "2025-09-21",
    "Address": "1 Chome-20-7 Higashiikebukuro, Toshima City, Tokyo 170-0013",
    "OfficialURL": "https://city-the-animation.theme-cafe.jp/",
    "KeyHighlights": "Anime-themed menu, limited-edition goods.",
    "Series": "CITY THE ANIMATION"
  },
  {
    "JapaneseTitle": "A3! コラボカフェ",
    "EnglishTitle": "A3! Collaboration Café",
    "Type": "Collabo Café",
    "Location": "Animate Café Ikebukuro 3rd Store",
    "StartDate": "2025-08-07",
    "EndDate": "2025-09-09",
    "Address": "1 Chome-20-7 Higashiikebukuro, Toshima City, Tokyo 170-0013",
    "OfficialURL": "https://www.animatecafe.jp/event/ac000666",
    "KeyHighlights": "Event-themed menu, illustrated goods.",
    "Series": "A3!"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EventsGrid events={COLLABORATION_EVENTS} />
    </div>
  );
};

export default Index;
