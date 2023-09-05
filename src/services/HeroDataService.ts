import type IHeroData from "@/models/HeroData";

export default function HeroDataService(): IHeroData[] {
  const data: IHeroData[] = [
    {
      urlBackgroundVideo: "/the-line-hero.mp4",
      title: "THE LINE",
      description: "Meet the Placemakers",
      urlYoutubeVideo: "https://www.youtube.com/watch?v=eoDR8wgoCM8",
      urlGoToForm: "#contactForm",
    },
    {
      urlBackgroundVideo: "/the-line-second-hero.mp4",
      title: "THE LINE",
      description: "NEW WONDERS FOR THE WORLD",
      urlYoutubeVideo: "https://www.youtube.com/watch?v=eoDR8wgoCM8",
      urlGoToForm: "#contactForm",
    },
  ];
  return data;
}
