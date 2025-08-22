import { EventsGrid } from "@/components/EventsGrid";
import { CollaborationEvent } from "@/types/events";

const COLLABORATION_EVENTS: CollaborationEvent[] = [
  {
    "JapaneseTitle": "可愛い嘘のカワウソ × サンリオ ストア in 全国4ヵ所 8月29日より開催!",
    "EnglishTitle": "Cute False Otter x Sanrio Store in 4 locations nationwide Starting August 29th!",
    "Type": "Pop-up Store",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-29",
    "EndDate": "2025-09-23",
    "Address": "【東京】池袋PARCO 本館6F 0% IKEBUKURO\n【大阪】天王寺ミオ 本館6F ポップアップスペース\n【愛知】ハンズ名古屋店 8階\n【神奈川】新江ノ島水族館",
    "OfficialURL": "https://kawaiiuso-info.jp/p25/sanrio_pus/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "Sanrio"
  },
  {
    "JapaneseTitle": "CCさくら「さくら&知世のティーパーティ」in 東名阪 9月12日より開催!",
    "EnglishTitle": "CC Sakura \"Sakura & Chiyo's Tea Party\" in Tokyo, Nagoya and Osaka from September 12th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-12",
    "EndDate": "2025-10-27",
    "Address": "東京・atari CAFE&DINING 池袋PARCO店、大阪・Collabo_Index SHINSAIBASHI店、愛知・kawara CAFE&KITCHEN 名古屋PARCO店",
    "OfficialURL": "https://collabo.sld-inc.com/ccsakura?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12465"
  },
  {
    "JapaneseTitle": "センチメンタルサーカス × グラッテ in 池袋/名古屋/梅田 9月6日より開催!",
    "EnglishTitle": "Sentimental Circus x Gratte in Ikebukuro/Nagoya/Umeda Starting September 6th!",
    "Type": "news",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-06",
    "EndDate": "2025-10-13",
    "Address": "【東京】アニメイト池袋本店\n【愛知】アニメイト名古屋\n【大阪】アニメイト梅田",
    "OfficialURL": "https://www.animate.co.jp/gratte/24154/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12465"
  },
  {
    "JapaneseTitle": "東京リベンジャーズ カフェ in 東京/大阪 9月2日よりコラボ開催!",
    "EnglishTitle": "Tokyo Revengers Cafe in Tokyo/Osaka Collaboration will be held from September 2nd!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-02",
    "EndDate": "2025-09-29",
    "Address": "【東京】プリンセスカフェ池袋館\n【大阪】コミュニティフードホール大阪日本橋",
    "OfficialURL": "https://www.pripricafe.com/event/cafe/revengers_college.html",
    "KeyHighlights": null,
    "Series": "12464"
  },
  {
    "JapaneseTitle": "ペルソナ5 カフェ in 東京 / 大阪 8月19日よりコラボ開催!",
    "EnglishTitle": "Persona 5 Cafe in Tokyo/Osaka Collaboration will be held from August 19th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-19",
    "EndDate": "2025-09-10",
    "Address": "AMOCAFE池袋1号店\nAMOCAFEなんばマルイ店",
    "OfficialURL": "https://amocafe-reserve.jp/p5r-x-cafe/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "Tokyo 7th シスターズ × グラッテ in アニメイト 9月13日よりコラボ開催!",
    "EnglishTitle": "Tokyo 7th Sisters x Gratte in Animate Collaboration will be held from September 13th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-13",
    "EndDate": "2025-09-28",
    "Address": "アニメイト (池袋本店、秋葉原ANNEX、渋谷、名古屋、大阪日本橋)",
    "OfficialURL": "https://www.animate.co.jp/gratte/20100/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12464"
  },
  {
    "JapaneseTitle": "ガールズバンドクライ × カラオケの鉄人5店舗 8月21日よりコラボ開催!",
    "EnglishTitle": "Girls Band Cry x 5 Karaoke Tetsujin stores collaborate from August 21st!",
    "Type": "news",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-21",
    "EndDate": "2025-09-28",
    "Address": "カラオケの鉄人 池袋東口店、カラオケの鉄人コラボミックス 福岡天神店、大阪なんば店、名古屋名駅店、松山銀天街店",
    "OfficialURL": "https://event.amnibus.com/girlsbandcry-karatetsu/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "夏のおそ松さんフェア in アニメイト3店舗 & 通販 8月23日より開催!",
    "EnglishTitle": "Summer Osomatsu-san Fair in Animate 3 stores & mail order will be held from August 23rd!",
    "Type": "Pop-up Store",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-23",
    "EndDate": "2025-09-25",
    "Address": "アニメイト池袋本店、大阪日本橋店、名古屋店",
    "OfficialURL": "https://www.animate-onlineshop.jp/contents/fair_event/detail.php?id=113592&?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "刀剣乱舞 10周年カフェ 第3弾 in アニメイトカフェ3店舗 9月4日より開催!",
    "EnglishTitle": "Touken Ranbu 10th Anniversary Cafe 3rd Edition in 3 Animate Cafes will be held from September 4th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-04",
    "EndDate": "2025-10-14",
    "Address": "アニメイトカフェ池袋店、天王寺店、名古屋店",
    "OfficialURL": "https://www.animatecafe.jp/event/ac000624?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12465"
  },
  {
    "JapaneseTitle": "アイドルマスター「デレマス」カフェ in 池袋/名古屋 9月11日より開催!",
    "EnglishTitle": "The Idolmaster \"Deremas\" Cafe in Ikebukuro/Nagoya Starting September 11th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-09-11",
    "EndDate": "2025-09-30",
    "Address": "アニメイトカフェ 池袋3号店/名古屋2号店",
    "OfficialURL": "https://www.animatecafe.jp/event/ac000677?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12464"
  },
  {
    "JapaneseTitle": "アイドルマスター SideM × RAKU CAFE 池袋/心斎橋 8月25日よりコラボ!",
    "EnglishTitle": "The Idolmaster SideM x RAKU CAFE Ikebukuro/Shinsaibashi Collaboration from August 25th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-25",
    "EndDate": "2025-09-10",
    "Address": "RAKU CAFE池袋、心斎橋",
    "OfficialURL": "https://rakuspa.com/rakucafe/sidem.pdf?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "初音ミク「マジカルミライ2025」カフェ in 池袋 8月13日より開催!",
    "EnglishTitle": "Hatsune Miku's \"Magical Mirai 2025\" Cafe in Ikebukuro Starting August 13th!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-13",
    "EndDate": "2025-09-07",
    "Address": "E-DINER池袋",
    "OfficialURL": "https://edith.co.jp/lp/magicalmirai2025_E-DINER/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "ポムポムプリン ストア in 池袋 8月12日より開催!",
    "EnglishTitle": "Pom Pom Purin Store in Ikebukuro Starting August 12th!",
    "Type": "Pop-up Store",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-12",
    "EndDate": "2025-08-25",
    "Address": "JR池袋駅南改札外イベントスペース",
    "OfficialURL": "https://juice-news.jp/event/pom_pus/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "吸血鬼すぐ死ぬ展 連載10周年記念パーティ!! in 池袋 8月14日より開催!",
    "EnglishTitle": "Vampire Die Instantly Exhibition: 10th anniversary party!! in Ikebukuro will be held from August 14th!",
    "Type": "Original art exhibitions and exhibitions",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-14",
    "EndDate": "2025-08-24",
    "Address": "東武百貨店 池袋店",
    "OfficialURL": "https://sugushinu10th.fundom-event.com/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "鬼灯の冷徹 × AmoCrepe池袋店/なんば出張店 8月13日よりコラボ開催!",
    "EnglishTitle": "Hozuki no Reitetsu x AmoCrepe Ikebukuro store/Namba business trip store Collaboration will be held from August 13th!",
    "Type": "news",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-13",
    "EndDate": "2025-09-03",
    "Address": "AmoCrepe池袋店、出張店なんばマルイ店",
    "OfficialURL": "https://amocafe.shopinfo.jp/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
  },
  {
    "JapaneseTitle": "ジャンケットバンク コラボカフェ in キャラウムカフェ 8月23日より開催!",
    "EnglishTitle": "Janket Bank Collaboration Cafe in Caraum Cafe will be held from August 23rd!",
    "Type": "Collaboration cafe",
    "Location": "Ikebukuro",
    "StartDate": "2025-08-23",
    "EndDate": "2025-09-15",
    "Address": "キャラウムカフェ",
    "OfficialURL": "https://www.medicos-e.net/newsdetail/junketbank_5_cafe/?utm_source=collabo_cafe_dot_com&utm_medium=collabo_cafe_dot_com&utm_campaign=collabo_cafe_dot_com&utm_id=collabo_cafe_dot_com",
    "KeyHighlights": null,
    "Series": "12463"
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
