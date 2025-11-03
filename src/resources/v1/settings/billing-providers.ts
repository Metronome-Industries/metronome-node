// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BillingProviders extends APIResource {
  /**
   * Set up account-level configuration for a billing provider. Once configured,
   * individual contracts across customers can be mapped to this configuration using
   * the returned delivery_method_id.
   *
   * @example
   * ```ts
   * const billingProvider =
   *   await client.v1.settings.billingProviders.create({
   *     billing_provider: 'aws_marketplace',
   *     configuration: {
   *       aws_external_id:
   *         '47b4f6b7-e297-42e8-b175-331d933b402c',
   *       aws_iam_role_arn: 'arn:aws:iam::test',
   *     },
   *     delivery_method: 'direct_to_billing_provider',
   *   });
   * ```
   */
  create(
    body: BillingProviderCreateParams,
    options?: RequestOptions,
  ): APIPromise<BillingProviderCreateResponse> {
    return this._client.post('/v1/setUpBillingProvider', { body, ...options });
  }

  /**
   * Lists all configured billing providers and their delivery method configurations
   * for your account. Returns provider details, delivery method IDs, and
   * configuration settings needed for mapping individual customer contracts to
   * billing integrations.
   *
   * @example
   * ```ts
   * const billingProviders =
   *   await client.v1.settings.billingProviders.list({
   *     next_page: 'af26878a-de62-4a0d-9b77-3936f7c2b6d6',
   *   });
   * ```
   */
  list(
    body: BillingProviderListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingProviderListResponse> {
    return this._client.post('/v1/listConfiguredBillingProviders', { body, ...options });
  }
}

export interface BillingProviderCreateResponse {
  data: BillingProviderCreateResponse.Data;
}

export namespace BillingProviderCreateResponse {
  export interface Data {
    delivery_method_id: string;
  }
}

export interface BillingProviderListResponse {
  data: Array<BillingProviderListResponse.Data>;

  next_page?: string | null;
}

export namespace BillingProviderListResponse {
  export interface Data {
    /**
     * The billing provider set for this configuration.
     */
    billing_provider:
      | 'aws_marketplace'
      | 'stripe'
      | 'netsuite'
      | 'custom'
      | 'azure_marketplace'
      | 'quickbooks_online'
      | 'workday'
      | 'gcp_marketplace'
      | 'metronome';

    /**
     * The method to use for delivering invoices to this customer.
     */
    delivery_method: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

    /**
     * Configuration for the delivery method. The structure of this object is specific
     * to the delivery method. Some configuration may be omitted for security reasons.
     */
    delivery_method_configuration: { [key: string]: unknown };

    /**
     * ID of the delivery method to use for this customer.
     */
    delivery_method_id: string;
  }
}

export interface BillingProviderCreateParams {
  /**
   * The billing provider set for this configuration.
   */
  billing_provider: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace';

  /**
   * Account-level configuration for the billing provider. The structure of this
   * object is specific to the billing provider and delivery provider combination.
   * See examples below.
   */
  configuration: { [key: string]: unknown };

  /**
   * The method to use for delivering invoices for this configuration.
   */
  delivery_method: 'direct_to_billing_provider' | 'aws_sqs' | 'aws_sns';
}

export interface BillingProviderListParams {
  /**
   * The cursor to the next page of results
   */
  next_page?: string | null;
}

export declare namespace BillingProviders {
  export {
    type BillingProviderCreateResponse as BillingProviderCreateResponse,
    type BillingProviderListResponse as BillingProviderListResponse,
    type BillingProviderCreateParams as BillingProviderCreateParams,
    type BillingProviderListParams as BillingProviderListParams,
  };
}
