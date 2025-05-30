// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Invoices extends APIResource {
  /**
   * Regenerate a voided contract invoice
   *
   * @example
   * ```ts
   * const response = await client.v1.invoices.regenerate({
   *   id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
   * });
   * ```
   */
  regenerate(
    body: InvoiceRegenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRegenerateResponse> {
    return this._client.post('/v1/invoices/regenerate', { body, ...options });
  }

  /**
   * Void an invoice
   *
   * @example
   * ```ts
   * const response = await client.v1.invoices.void({
   *   id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
   * });
   * ```
   */
  void(body: InvoiceVoidParams, options?: Core.RequestOptions): Core.APIPromise<InvoiceVoidResponse> {
    return this._client.post('/v1/invoices/void', { body, ...options });
  }
}

export interface InvoiceRegenerateResponse {
  data?: InvoiceRegenerateResponse.Data;
}

export namespace InvoiceRegenerateResponse {
  export interface Data {
    /**
     * The new invoice id
     */
    id: string;
  }
}

export interface InvoiceVoidResponse {
  data?: InvoiceVoidResponse.Data;
}

export namespace InvoiceVoidResponse {
  export interface Data {
    id: string;
  }
}

export interface InvoiceRegenerateParams {
  /**
   * The invoice id to regenerate
   */
  id: string;
}

export interface InvoiceVoidParams {
  /**
   * The invoice id to void
   */
  id: string;
}

export declare namespace Invoices {
  export {
    type InvoiceRegenerateResponse as InvoiceRegenerateResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceRegenerateParams as InvoiceRegenerateParams,
    type InvoiceVoidParams as InvoiceVoidParams,
  };
}
