// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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

export interface PaymentListParams extends BodyCursorPageParams {
  customer_id: string;

  invoice_id: string;

  statuses?: Array<'pending' | 'requires_intervention' | 'paid' | 'canceled'>;
}

export declare namespace Payments {
  export {
    type PaymentListResponse as PaymentListResponse,
    type PaymentListResponsesBodyCursorPage as PaymentListResponsesBodyCursorPage,
    type PaymentListParams as PaymentListParams,
  };
}
