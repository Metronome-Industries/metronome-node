// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as TopLevelAPI from './top-level';

export type IngestParams = Array<IngestParams.Body>;

export namespace IngestParams {
  export interface Body {
    customer_id: string;

    event_type: string;

    /**
     * RFC 3339 formatted
     */
    timestamp: string;

    transaction_id: string;

    properties?: Record<string, unknown>;
  }
}

export namespace TopLevel {
  export import IngestParams = TopLevelAPI.IngestParams;
}
