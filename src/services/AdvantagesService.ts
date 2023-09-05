import IAdvantage from "@/models/Advantage";

export default function AdventageService(): IAdvantage[] {
  const Adventage: IAdvantage[] = [
    {
      urlBackgroundImage: "/adventages/nature.webp",
      title: "UNPARALLELED ACCESS TO NATURE",
      description:
        "Our progressive design offers immediate and uninterrupted access to nature within a two-minute walk – through its diverse open spaces, suspended on multiple levels. Equitable access to pristine views of the surrounding natural landscape, mountains and sky  for all  avoiding urban sprawl thanks to a reduced infrastructure footprint.",
    },
    {
      urlBackgroundImage: "/adventages/aire.webp",
      title: "CLEAN AIR FOR EVERYONE",
      description:
        "The city will be zero-carbon, due to the elimination of unecessary infrastructure, cars and roads. It will operate on 100% renewable energy, including the operations of its industries. The integration of nature and open spaces throughout will serve an important role in enhancing air quality.",
    },
    {
      urlBackgroundImage: "/adventages/time.webp",
      title: "MORE TIME TO SPEND WITH LOVED ONES",
      description:
        "All daily essentials will be accessible within a five-minute walk and an efficient public transport network will offer a rapid end-to-end journey. Automated services will be powered by artificial intelligence. Amenities in close proximity will mean residents see family and friends often through spontaneous encounters.",
    },
    {
      urlBackgroundImage: "/adventages/all-year-round.webp",
      title: "A PERFECT CLIMATE ALL-YEAR-ROUND",
      description:
        "To ensure the establishment of microclimatic spaces, the environment has been carefully designed to allow for an optimal balance of sunlight, shade and natural ventilation. Furthermore, the green open spaces throughout the city will further enhance the comfort for those living, working and visiting here.",
    },
  ];
  return Adventage;
}
