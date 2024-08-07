/**
 * @generated SignedSource<<ccb78dc06a67a52e96d7dd90a85dcdca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FilmScaffoldQuery$variables = {
  id: string;
};
export type FilmScaffoldQuery$data = {
  readonly film: {
    readonly title: string | null | undefined;
  } | null | undefined;
};
export type FilmScaffoldQuery = {
  response: FilmScaffoldQuery$data;
  variables: FilmScaffoldQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmScaffoldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilmScaffoldQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee8075213a838c56f78745ad5c3e5049",
    "id": null,
    "metadata": {},
    "name": "FilmScaffoldQuery",
    "operationKind": "query",
    "text": "query FilmScaffoldQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    title\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "32357a8689b47b6149f147c8dc3a5986";

export default node;
