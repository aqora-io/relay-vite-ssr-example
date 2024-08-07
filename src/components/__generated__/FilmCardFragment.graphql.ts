/**
 * @generated SignedSource<<36c29f74e2a89b2a63991d8da3e7518a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmCardFragment$data = {
  readonly director: string | null | undefined;
  readonly episodeID: number | null | undefined;
  readonly id: string;
  readonly producers: ReadonlyArray<string | null | undefined> | null | undefined;
  readonly releaseDate: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "FilmCardFragment";
};
export type FilmCardFragment$key = {
  readonly " $data"?: FilmCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "episodeID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "director",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "producers",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "7ede44289be7fd76cd2aca4acdc34938";

export default node;
