import IHowTheLine from "@/models/HowTheLine";

export default function HowTheLineService(): IHowTheLine[] {
  const data: IHowTheLine[] = [
    {
      description:
        "How would Manhattan look with the vertical urbanism being adopted for THE LINE",
      urlYoutube: "https://www.youtube.com/watch?v=YqVSY-bcvu4",
      urlImage: "/howCarousel/how-0.webp",
    },
    {
      description:
        "How would Riyadh look with the vertical urbanism being adopted for THE LINE",
      urlYoutube: "https://www.youtube.com/watch?v=jderQ9-Zor8",
      urlImage: "/howCarousel/how-1.webp",
    },
    {
      description:
        "How would Kensington look with the vertical urbanism being adopted for THE LINE",
      urlYoutube: "https://www.youtube.com/watch?v=0FeWWJbmPKo",
      urlImage: "/howCarousel/how-2.jpg",
    },
  ];
  return data;
}
