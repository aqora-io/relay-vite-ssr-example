/**
 * @generated SignedSource<<3105c5ac10225c3275142d4718c1363d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PlanetCardFragment$data = {
  readonly climates: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly diameter: number | null | undefined;
  readonly gravity: string | null | undefined;
  readonly name: string | null | undefined;
  readonly orbitalPeriod: number | null | undefined;
  readonly population: number | null | undefined;
  readonly rotationPeriod: number | null | undefined;
  readonly surfaceWater: number | null | undefined;
  readonly terrains: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly " $fragmentType": "PlanetCardFragment";
};
export type PlanetCardFragment$key = {
  readonly " $data"?: PlanetCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PlanetCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PlanetCardFragment",
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

(node as any).hash = "94a446e55ada7e0dbc186e139b294559";

export default node;
