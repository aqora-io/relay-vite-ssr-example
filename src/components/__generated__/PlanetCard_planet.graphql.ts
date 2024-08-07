/**
 * @generated SignedSource<<9bd51d5657780b36e4edd5898670c58c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlanetCard_planet$data = {
  readonly climates: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly diameter: number | null | undefined;
  readonly gravity: string | null | undefined;
  readonly name: string | null | undefined;
  readonly orbitalPeriod: number | null | undefined;
  readonly population: number | null | undefined;
  readonly rotationPeriod: number | null | undefined;
  readonly surfaceWater: number | null | undefined;
  readonly terrains: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly " $fragmentType": "PlanetCard_planet";
};
export type PlanetCard_planet$key = {
  readonly " $data"?: PlanetCard_planet$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlanetCard_planet">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlanetCard_planet",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "diameter",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gravity",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "orbitalPeriod",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rotationPeriod",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "surfaceWater",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "population",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "climates",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "terrains",
      "storageKey": null
    }
  ],
  "type": "Planet",
  "abstractKey": null
};

(node as any).hash = "eab4b6961448d101bf4a3148e2c53313";

export default node;
