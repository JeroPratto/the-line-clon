import IAdvantage from "@/models/Advantage";

export default function AdvantagesColumnsService() {
  const advantages: IAdvantage[] = [
    {
      title: "WORLD-CLASS QUALITY OF LIFE",
      description:
        "Where the best and the brightest live. A place of unparalleled social and economic experimentation – without pollution and traffic – coupled with world-class preventative healthcare, so people will live longer.",
      urlBackgroundImage: "/adventages/ad-0.webp",
    },
    {
      title: "A PLACE TO PROTOTYPE BUSINESSES",
      description:
        "Built around humans, not technology. A cognitive city that predicts and reacts to what we need, not the other way round. Zero-gravity living will mean a higher-density footprint creates a richer human experience, and new business opportunities – plus large-scale job creation.",
      urlBackgroundImage: "/adventages/ad-1.webp",
    },
    {
      title: "ENVIRONMENTAL SOLUTION TO URBANISM",
      description:
        "Our zero-car environment is part of a 100% sustainable transport system – with zero pollution and zero wait time. Reduced commutes will create more time for leisure. Not paying for expenses like car insurance, fuel and parking will mean higher disposable incomes for citizens.",
      urlBackgroundImage: "/adventages/ad-2.webp",
    },
    {
      title: "A COMMUNITY INVENTING THE FUTURE",
      description:
        "Advanced tech planning logistics and modular construction will enable efficient delivery of THE LINE. And the community will live close to, and in harmony with, nature – with 95% of land being protected for nature. Our vertical garden city will mean you are always only two mins from nature.",
      urlBackgroundImage: "/adventages/ad-3.webp",
    },
  ];
  return advantages;
}
