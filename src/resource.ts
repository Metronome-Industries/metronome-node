// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Metronome } from './index';

export abstract class APIResource {
  protected _client: Metronome;

  constructor(client: Metronome) {
    this._client = client;
  }
}
