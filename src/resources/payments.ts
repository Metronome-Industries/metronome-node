// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { BodyCursorPage, type BodyCursorPageParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Payments extends APIResource {
  /**
   * Fetch all payment attempts for the given invoice.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const paymentListResponse of client.payments.list(
   *   {
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     invoice_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *     statuses: ['pending', 'requires_intervention'],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    body: PaymentListParams,
    options?: RequestOptions,
  ): PagePromise<PaymentListResponsesBodyCursorPage, PaymentListResponse> {
    return this._client.getAPIList('/v1/payments/list', BodyCursorPage<PaymentListResponse>, {
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Trigger a new attempt by canceling any existing attempts for this invoice and
   * creating a new Payment. This will trigger another attempt to charge the
   * Customer's configured Payment Gateway. Payment can only be attempted if all of
   * the following are true:
   *
   * - The Metronome Invoice is finalized
   * - PLG Invoicing is configured for the Customer
   * - You cannot attempt payments for invoices that have already been `paid` or
   *   `voided`.
   *
   * Attempting to payment on an ineligible Invoice or Customer will result in a
   * `400` response.
   *
   * @example
   * ```ts
   * const response = await client.payments.attempt({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   invoice_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   * });
   * ```
   */
  attempt(body: PaymentAttemptParams, options?: RequestOptions): APIPromise<PaymentAttemptResponse> {
    return this._client.post('/v1/payments/attempt', { body, ...options });
  }

  /**
   * Cancel an existing payment attempt for an invoice.
   *
   * @example
   * ```ts
   * const response = await client.payments.cancel({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   invoice_id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   * });
   * ```
   */
  cancel(body: PaymentCancelParams, options?: RequestOptions): APIPromise<PaymentCancelResponse> {
    return this._client.post('/v1/payments/cancel', { body, ...options });
  }
}

export type PaymentListResponsesBodyCursorPage = BodyCursorPage<PaymentListResponse>;

export interface PaymentListResponse {
  id: string;

  amount?: number;

  amount_paid?: number;

  contract_id?: string;

  created_at?: string;

  customer_id?: string;

  error_message?: string;

  fiat_credit_type?: Shared.CreditTypeData;

  invoice_id?: string;

  payment_gateway?: PaymentListResponse.PaymentGateway;

  status?: 'pending' | 'requires_intervention' | 'paid' | 'canceled';

  updated_at?: string;
}

export namespace PaymentListResponse {
  export interface PaymentGateway {
    stripe: PaymentGateway.Stripe;

    type: 'stripe';
  }

  export namespace PaymentGateway {
    export interface Stripe {
      payment_intent_id: string;

      error?: Stripe.Error;
    }

    export namespace Stripe {
      export interface Error {
        code?: string;

        decline_code?: string;

        type?: string;
      }
    }
  }
}

export interface PaymentAttemptResponse {
  data: PaymentAttemptResponse.Data;
}

export namespace PaymentAttemptResponse {
  export interface Data {
    id: string;

    amount?: number;

    amount_paid?: number;

    contract_id?: string;

    created_at?: string;

    customer_id?: string;

    error_message?: string;

    fiat_credit_type?: Shared.CreditTypeData;

    invoice_id?: string;

    payment_gateway?: Data.PaymentGateway;

    status?: 'pending' | 'requires_intervention' | 'paid' | 'canceled';

    updated_at?: string;
  }

  export namespace Data {
    export interface PaymentGateway {
      stripe: PaymentGateway.Stripe;

      type: 'stripe';
    }

    export namespace PaymentGateway {
      export interface Stripe {
        payment_intent_id: string;

        error?: Stripe.Error;
      }

      export namespace Stripe {
        export interface Error {
          code?: string;

          decline_code?: string;

          type?: string;
        }
      }
    }
  }
}

export interface PaymentCancelResponse {
  data: PaymentCancelResponse.Data;
}

export namespace PaymentCancelResponse {
  export interface Data {
    id: string;

    amount?: number;

    amount_paid?: number;

    contract_id?: string;

    created_at?: string;

    customer_id?: string;

    error_message?: string;

    fiat_credit_type?: Shared.CreditTypeData;

    invoice_id?: string;

    payment_gateway?: Data.PaymentGateway;

    status?: 'pending' | 'requires_intervention' | 'paid' | 'canceled';

    updated_at?: string;
  }

  export namespace Data {
    export interface PaymentGateway {
      stripe: PaymentGateway.Stripe;

      type: 'stripe';
    }

    export namespace PaymentGateway {
      export interface Stripe {
        payment_intent_id: string;

        error?: Stripe.Error;
      }

      export namespace Stripe {
        export interface Error {
          code?: string;

          decline_code?: string;

          type?: string;
        }
      }
    }
  }
}

export interface PaymentListParams extends BodyCursorPageParams {
  customer_id: string;

  invoice_id: string;

  statuses?: Array<'pending' | 'requires_intervention' | 'paid' | 'canceled'>;
}

export interface PaymentAttemptParams {
  customer_id: string;

  invoice_id: string;
}

export interface PaymentCancelParams {
  customer_id: string;

  invoice_id: string;
}

export declare namespace Payments {
  export {
    type PaymentListResponse as PaymentListResponse,
    type PaymentAttemptResponse as PaymentAttemptResponse,
    type PaymentCancelResponse as PaymentCancelResponse,
    type PaymentListResponsesBodyCursorPage as PaymentListResponsesBodyCursorPage,
    type PaymentListParams as PaymentListParams,
    type PaymentAttemptParams as PaymentAttemptParams,
    type PaymentCancelParams as PaymentCancelParams,
  };
}
