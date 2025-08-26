// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Invoices extends APIResource {
  /**
   * This endpoint regenerates a voided invoice and recalculates the invoice based on
   * up-to-date rates, available balances, and other fees regardless of the billing
   * period.
   *
   * Use this endpoint to:
   *
   * - Recalculate an invoice with updated rate terms, available balance, and fees to
   *   correct billing disputes or discrepancies
   *
   * Key response fields: The regenerated invoice id, which is distinct from the
   * previously voided invoice.
   *
   * Usage guidelines:\
   * If an invoice is attached to a contract with a billing provider on it, the regenerated
   * invoice will be distributed based on the configuration.
   *
   * @example
   * ```ts
   * const response = await client.v1.invoices.regenerate({
   *   id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
   * });
   * ```
   */
  regenerate(body: InvoiceRegenerateParams, options?: RequestOptions): APIPromise<InvoiceRegenerateResponse> {
    return this._client.post('/v1/invoices/regenerate', { body, ...options });
  }

  /**
   * Permanently cancels an invoice by setting its status to voided, preventing
   * collection and removing it from customer billing. Use this to correct billing
   * errors, cancel incorrect charges, or handle disputed invoices that should not be
   * collected. Returns the voided invoice ID with the status change applied
   * immediately to stop any payment processing.
   *
   * @example
   * ```ts
   * const response = await client.v1.invoices.void({
   *   id: '6a37bb88-8538-48c5-b37b-a41c836328bd',
   * });
   * ```
   */
  void(body: InvoiceVoidParams, options?: RequestOptions): APIPromise<InvoiceVoidResponse> {
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
