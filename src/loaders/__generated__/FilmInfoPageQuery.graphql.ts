/**
 * @generated SignedSource<<ef991f9d098d1e88dd75cdab997663e5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FilmInfoPageQuery$variables = {
  id: string;
};
export type FilmInfoPageQuery$data = {
  readonly film: {
    readonly director: string | null | undefined;
    readonly episodeID: number | null | undefined;
    readonly producers: ReadonlyArray<string | null | undefined> | null | undefined;
    readonly releaseDate: string | null | undefined;
    readonly title: string | null | undefined;
  } | null | undefined;
};
export type FilmInfoPageQuery = {
  response: FilmInfoPageQuery$data;
  variables: FilmInfoPageQuery$variables;
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "producers",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmInfoPageQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
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
    "name": "FilmInfoPageQuery",
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
    "cacheID": "34dc57cd4ba6bbc29a952a9a8b2be5aa",
    "id": null,
    "metadata": {},
    "name": "FilmInfoPageQuery",
    "operationKind": "query",
    "text": "query FilmInfoPageQuery(\n  $id: ID!\n) {\n  film(id: $id) {\n    title\n    episodeID\n    director\n    releaseDate\n    producers\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0f492a518c4f05cb8808653f8fe0913f";

export default node;
