/**
 * @generated SignedSource<<639e38c971b9ef69056a23a1eee58e01>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonCardFragment$data = {
  readonly birthYear: string | null | undefined;
  readonly gender: string | null | undefined;
  readonly height: number | null | undefined;
  readonly homeworld: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly mass: number | null | undefined;
  readonly name: string | null | undefined;
  readonly species: {
    readonly name: string | null | undefined;
  } | null | undefined;
  readonly " $fragmentType": "PersonCardFragment";
};
export type PersonCardFragment$key = {
  readonly " $data"?: PersonCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonCardFragment">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonCardFragment",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "birthYear",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gender",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "mass",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Planet",
      "kind": "LinkedField",
      "name": "homeworld",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Species",
      "kind": "LinkedField",
      "name": "species",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};
})();

(node as any).hash = "1d575ce4b3881e49472c68d028d66103";

export default node;
