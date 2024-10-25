// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as InvoicesAPI from './invoices';

export class Invoices extends APIResource {
  /**
   * Regenerate a voided contract invoice
   */
  regenerate(
    body: InvoiceRegenerateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceRegenerateResponse> {
    return this._client.post('/invoices/regenerate', { body, ...options });
  }

  /**
   * Void an invoice
   */
  void(body: InvoiceVoidParams, options?: Core.RequestOptions): Core.APIPromise<InvoiceVoidResponse> {
    return this._client.post('/invoices/void', { body, ...options });
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

export namespace Invoices {
  export type InvoiceRegenerateResponse = InvoicesAPI.InvoiceRegenerateResponse;
  export type InvoiceVoidResponse = InvoicesAPI.InvoiceVoidResponse;
  export type InvoiceRegenerateParams = InvoicesAPI.InvoiceRegenerateParams;
  export type InvoiceVoidParams = InvoicesAPI.InvoiceVoidParams;
}
