import { graphql, useFragment } from "react-relay";
import { PersonCardFragment$key } from "./__generated__/PersonCardFragment.graphql";
import { Card } from "./Cards";

const PersonCardFragment = graphql`
  fragment PersonCardFragment on Person {
    name
    birthYear
    gender
    height
    mass
    homeworld {
      name
    }
    species {
      name
    }
  }
`;

interface Props {
  person: PersonCardFragment$key;
}

export const PersonCard = ({ person: personFragment }: Props) => {
  const { name, birthYear, gender, height, homeworld, species } = useFragment(
    PersonCardFragment,
    personFragment,
  );
  return (
    <Card
      title={name}
      data={{
        "Birth Year": birthYear,
        Gender: gender,
        Height: height,
        "Home World": homeworld?.name,
        Species: species?.name,
      }}
    />
  );
};
