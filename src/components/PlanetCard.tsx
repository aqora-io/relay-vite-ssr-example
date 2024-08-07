import { graphql, useFragment } from "react-relay";
import { PlanetCardFragment$key } from "./__generated__/PlanetCardFragment.graphql";
import { Card } from "./Cards";

const PlanetCardFragment = graphql`
  fragment PlanetCardFragment on Planet {
    name
    diameter
    gravity
    orbitalPeriod
    rotationPeriod
    surfaceWater
    population
    climates
    terrains
  }
`;

interface Props {
  planet: PlanetCardFragment$key;
}

export const PlanetCard = ({ planet: planetFragment }: Props) => {
  const {
    name,
    diameter,
    gravity,
    orbitalPeriod,
    rotationPeriod,
    surfaceWater,
    population,
    climates,
    terrains,
  } = useFragment(PlanetCardFragment, planetFragment);
  return (
    <Card
      title={name}
      data={{
        Diameter: diameter,
        Gravity: gravity,
        "Orbital Period": orbitalPeriod,
        "Rotation Period": rotationPeriod,
        "Surface Water": surfaceWater,
        Population: population,
        Climates: climates?.join(", "),
        Terrains: terrains?.join(", "),
      }}
    />
  );
};
