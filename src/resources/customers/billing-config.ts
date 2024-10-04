// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as BillingConfigAPI from './billing-config';

export class BillingConfig extends APIResource {
  /**
   * Set the billing configuration for a given customer.
   */
  create(params: BillingConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { customer_id, billing_provider_type, ...body } = params;
    return this._client.post(`/customers/${customer_id}/billing-config/${billing_provider_type}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch the billing configuration for the given customer.
   */
  retrieve(
    params: BillingConfigRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingConfigRetrieveResponse> {
    const { customer_id, billing_provider_type } = params;
    return this._client.get(`/customers/${customer_id}/billing-config/${billing_provider_type}`, options);
  }

  /**
   * Delete the billing configuration for a given customer. Note: this is unsupported
   * for Azure and AWS Marketplace customers.
   */
  delete(params: BillingConfigDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { customer_id, billing_provider_type } = params;
    return this._client.delete(`/customers/${customer_id}/billing-config/${billing_provider_type}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface BillingConfigRetrieveResponse {
  data: BillingConfigRetrieveResponse.Data;
}

export namespace BillingConfigRetrieveResponse {
  export interface Data {
    /**
     * Contract expiration date for the customer. The expected format is RFC 3339 and
     * can be retrieved from AWS's GetEntitlements API. (See
     * https://docs.aws.amazon.com/marketplaceentitlement/latest/APIReference/API_GetEntitlements.html.)
     */
    aws_expiration_date?: string;

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
     * 3339 and can be retrieved from Azure's Get Subscription API. (See
     * https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription.)
     */
    azure_expiration_date?: string;

    azure_plan_id?: string;

    /**
     * Subscription term start/end date for the customer. The expected format is RFC
     * 3339 and can be retrieved from Azure's Get Subscription API. (See
     * https://learn.microsoft.com/en-us/partner-center/marketplace/partner-center-portal/pc-saas-fulfillment-subscription-api#get-subscription.)
     */
    azure_start_date?: string;

    azure_subscription_status?: 'Subscribed' | 'Unsubscribed' | 'Suspended' | 'PendingFulfillmentStart';

    billing_provider_customer_id?: string;

    stripe_collection_method?: 'charge_automatically' | 'send_invoice';
  }
}

export interface BillingConfigCreateParams {
  /**
   * Path param:
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
    | 'gcp_marketplace';

  /**
   * Body param: The customer ID in the billing provider's system. For Azure, this is
   * the subscription ID.
   */
  billing_provider_customer_id: string;

  /**
   * Body param:
   */
  aws_product_code?: string;

  /**
   * Body param:
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
   * Body param:
   */
  stripe_collection_method?: 'charge_automatically' | 'send_invoice';
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
    | 'gcp_marketplace';
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
    | 'gcp_marketplace';
}

export namespace BillingConfig {
  export import BillingConfigRetrieveResponse = BillingConfigAPI.BillingConfigRetrieveResponse;
  export import BillingConfigCreateParams = BillingConfigAPI.BillingConfigCreateParams;
  export import BillingConfigRetrieveParams = BillingConfigAPI.BillingConfigRetrieveParams;
  export import BillingConfigDeleteParams = BillingConfigAPI.BillingConfigDeleteParams;
}
