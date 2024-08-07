/**
 * @generated SignedSource<<5b986ec3ce47757de1f577cfe0570ab4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CharacterCardFragment$data = {
  readonly id: string;
  readonly " $fragmentType": "CharacterCardFragment";
};
export type CharacterCardFragment$key = {
  readonly " $data"?: CharacterCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CharacterCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CharacterCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};

(node as any).hash = "ea3a5bae30097bb83cec601d771878eb";

export default node;
