// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BillingConfig extends APIResource {
  /**
   * Set the billing configuration for a given customer. This is a Plans (deprecated)
   * endpoint. New clients should implement using Contracts.
   *
   * @example
   * ```ts
   * await client.v1.customers.billingConfig.create({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   billing_provider_type: 'stripe',
   *   billing_provider_customer_id: 'cus_AJ6y20bjkOOayM',
   *   stripe_collection_method: 'charge_automatically',
   * });
   * ```
   */
  create(params: BillingConfigCreateParams, options?: RequestOptions): APIPromise<void> {
    const { customer_id, billing_provider_type, ...body } = params;
    return this._client.post(path`/v1/customers/${customer_id}/billing-config/${billing_provider_type}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Fetch the billing configuration for the given customer. This is a Plans
   * (deprecated) endpoint. New clients should implement using Contracts.
   *
   * @example
   * ```ts
   * const billingConfig =
   *   await client.v1.customers.billingConfig.retrieve({
   *     customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     billing_provider_type: 'stripe',
   *   });
   * ```
   */
  retrieve(
    params: BillingConfigRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BillingConfigRetrieveResponse> {
    const { customer_id, billing_provider_type } = params;
    return this._client.get(
      path`/v1/customers/${customer_id}/billing-config/${billing_provider_type}`,
      options,
    );
  }

  /**
   * Delete the billing configuration for a given customer. Note: this is unsupported
   * for Azure and AWS Marketplace customers. This is a Plans (deprecated) endpoint.
   * New clients should implement using Contracts.
   *
   * @example
   * ```ts
   * await client.v1.customers.billingConfig.delete({
   *   customer_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   billing_provider_type: 'stripe',
   * });
   * ```
   */
  delete(params: BillingConfigDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { customer_id, billing_provider_type } = params;
    return this._client.delete(path`/v1/customers/${customer_id}/billing-config/${billing_provider_type}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface BillingConfigRetrieveResponse {
  data: BillingConfigRetrieveResponse.Data;
}

export namespace BillingConfigRetrieveResponse {
  export interface Data {
    aws_customer_account_id?: string;

    aws_customer_id?: string;

    /**
     * Contract expiration date for the customer. The expected format is RFC 3339 and
     * can be retrieved from
     * [AWS's GetEntitlements API](https://docs.aws.amazon.com/marketplaceentitlement/latest/APIReference/API_GetEntitlements.html).
     */
    aws_expiration_date?: string;

    /**
     * True if the aws_product_code is a SAAS subscription product, false otherwise.
     */
    aws_is_subscription_product?: boolean;

    aws_product_code?: string;

    aws_region?:
      | 'af-south-1'
      | 'ap-east-1'
      | 'ap-northeast-1'
      | 'ap-northeast-2'
      | 'ap-northeast-3'
      | 'ap-south-1'
      | 'ap-southeast-1'
      | 'ap-southeast-2'
      | 'ca-central-1'
      | 'cn-north-1'
      | 'cn-northwest-1'
      | 'eu-central-1'
      | 'eu-north-1'
      | 'eu-south-1'
      | 'eu-west-1'
      | 'eu-west-2'
      | 'eu-west-3'
      | 'me-south-1'
      | 'sa-east-1'
      | 'us-east-1'
      | 'us-east-2'
      | 'us-gov-east-1'
      | 'us-gov-west-1'
      | 'us-west-1'
      | 'us-west-2';

    /**
     * Subscription term start/end date for the customer. The expected format is RFC
     * 3339 and can be retrieved from
     * [Azure's Get Subscription API](https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription).
     */
    azure_expiration_date?: string;

    azure_plan_id?: string;

    /**
     * Subscription term start/end date for the customer. The expected format is RFC
     * 3339 and can be retrieved from
     * [Azure's Get Subscription API](https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription).
     */
    azure_start_date?: string;

    azure_subscription_status?: 'Subscribed' | 'Unsubscribed' | 'Suspended' | 'PendingFulfillmentStart';

    billing_provider_customer_id?: string;

    /**
     * The collection method for the customer's invoices. NOTE:
     * `auto_charge_payment_intent` and `manually_charge_payment_intent` are in beta.
     */
    stripe_collection_method?:
      | 'charge_automatically'
      | 'send_invoice'
      | 'auto_charge_payment_intent'
      | 'manually_charge_payment_intent';
  }
}

export interface BillingConfigCreateParams {
  /**
   * Path param
   */
  customer_id: string;

  /**
   * Path param: The billing provider (e.g. stripe)
   */
  billing_provider_type:
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
   * Body param: The customer ID in the billing provider's system. For Azure, this is
   * the subscription ID.
   */
  billing_provider_customer_id: string;

  /**
   * Body param
   */
  aws_customer_account_id?: string;

  /**
   * Body param
   */
  aws_customer_id?: string;

  /**
   * Body param
   */
  aws_product_code?: string;

  /**
   * Body param
   */
  aws_region?:
    | 'af-south-1'
    | 'ap-east-1'
    | 'ap-northeast-1'
    | 'ap-northeast-2'
    | 'ap-northeast-3'
    | 'ap-south-1'
    | 'ap-southeast-1'
    | 'ap-southeast-2'
    | 'ca-central-1'
    | 'cn-north-1'
    | 'cn-northwest-1'
    | 'eu-central-1'
    | 'eu-north-1'
    | 'eu-south-1'
    | 'eu-west-1'
    | 'eu-west-2'
    | 'eu-west-3'
    | 'me-south-1'
    | 'sa-east-1'
    | 'us-east-1'
    | 'us-east-2'
    | 'us-gov-east-1'
    | 'us-gov-west-1'
    | 'us-west-1'
    | 'us-west-2';

  /**
   * Body param: The collection method for the customer's invoices. NOTE:
   * `auto_charge_payment_intent` and `manually_charge_payment_intent` are in beta.
   */
  stripe_collection_method?:
    | 'charge_automatically'
    | 'send_invoice'
    | 'auto_charge_payment_intent'
    | 'manually_charge_payment_intent';
}

export interface BillingConfigRetrieveParams {
  customer_id: string;

  /**
   * The billing provider (e.g. stripe)
   */
  billing_provider_type:
    | 'aws_marketplace'
    | 'stripe'
    | 'netsuite'
    | 'custom'
    | 'azure_marketplace'
    | 'quickbooks_online'
    | 'workday'
    | 'gcp_marketplace'
    | 'metronome';
}

export interface BillingConfigDeleteParams {
  customer_id: string;

  /**
   * The billing provider (e.g. stripe)
   */
  billing_provider_type:
    | 'aws_marketplace'
    | 'stripe'
    | 'netsuite'
    | 'custom'
    | 'azure_marketplace'
    | 'quickbooks_online'
    | 'workday'
    | 'gcp_marketplace'
    | 'metronome';
}

export declare namespace BillingConfig {
  export {
    type BillingConfigRetrieveResponse as BillingConfigRetrieveResponse,
    type BillingConfigCreateParams as BillingConfigCreateParams,
    type BillingConfigRetrieveParams as BillingConfigRetrieveParams,
    type BillingConfigDeleteParams as BillingConfigDeleteParams,
  };
}
