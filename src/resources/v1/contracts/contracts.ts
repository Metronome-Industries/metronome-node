// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as NamedSchedulesAPI from './named-schedules';
import {
  NamedScheduleRetrieveParams,
  NamedScheduleRetrieveResponse,
  NamedScheduleUpdateParams,
  NamedSchedules,
} from './named-schedules';
import * as ProductsAPI from './products';
import {
  ProductArchiveParams,
  ProductArchiveResponse,
  ProductCreateParams,
  ProductCreateResponse,
  ProductListItemState,
  ProductListParams,
  ProductListResponse,
  ProductListResponsesCursorPage,
  ProductRetrieveParams,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
  QuantityConversion,
  QuantityRounding,
} from './products';
import * as InvoicesAPI from '../customers/invoices';
import * as RateCardsAPI from './rate-cards/rate-cards';
import {
  RateCardArchiveParams,
  RateCardArchiveResponse,
  RateCardCreateParams,
  RateCardCreateResponse,
  RateCardListParams,
  RateCardListResponse,
  RateCardListResponsesCursorPage,
  RateCardRetrieveParams,
  RateCardRetrieveRateScheduleParams,
  RateCardRetrieveRateScheduleResponse,
  RateCardRetrieveResponse,
  RateCardUpdateParams,
  RateCardUpdateResponse,
  RateCards,
} from './rate-cards/rate-cards';

export class Contracts extends APIResource {
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  rateCards: RateCardsAPI.RateCards = new RateCardsAPI.RateCards(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * Create a new contract
   *
   * @example
   * ```ts
   * const contract = await client.v1.contracts.create({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   starting_at: '2020-01-01T00:00:00.000Z',
   *   billing_provider_configuration: {
   *     billing_provider: 'stripe',
   *     delivery_method: 'direct_to_billing_provider',
   *   },
   *   rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  create(body: ContractCreateParams, options?: Core.RequestOptions): Core.APIPromise<ContractCreateResponse> {
    return this._client.post('/v1/contracts/create', { body, ...options });
  }

  /**
   * This is the v1 endpoint to get a contract. New clients should implement using
   * the v2 endpoint.
   *
   * @example
   * ```ts
   * const contract = await client.v1.contracts.retrieve({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   * });
   * ```
   */
  retrieve(
    body: ContractRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveResponse> {
    return this._client.post('/v1/contracts/get', { body, ...options });
  }

  /**
   * This is the v1 endpoint to list all contracts for a customer. New clients should
   * implement using the v2 endpoint.
   *
   * @example
   * ```ts
   * const contracts = await client.v1.contracts.list({
   *   customer_id: '9b85c1c1-5238-4f2a-a409-61412905e1e1',
   * });
   * ```
   */
  list(body: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse> {
    return this._client.post('/v1/contracts/list', { body, ...options });
  }

  /**
   * Add a manual balance entry
   *
   * @example
   * ```ts
   * await client.v1.contracts.addManualBalanceEntry({
   *   id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *   amount: -1000,
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   reason: 'Reason for entry',
   *   segment_id: '66368e29-3f97-4d15-a6e9-120897f0070a',
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  addManualBalanceEntry(
    body: ContractAddManualBalanceEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/v1/contracts/addManualBalanceLedgerEntry', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Amendments will be replaced by Contract editing. New clients should implement
   * using the editContract endpoint. Read more about the migration to contract
   * editing [here](https://docs.metronome.com/migrate-amendments-to-edits/) and
   * reach out to your Metronome representative for more details. Once contract
   * editing is enabled, access to this endpoint will be removed.
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.amend({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   starting_at: '2020-01-01T00:00:00.000Z',
   * });
   * ```
   */
  amend(body: ContractAmendParams, options?: Core.RequestOptions): Core.APIPromise<ContractAmendResponse> {
    return this._client.post('/v1/contracts/amend', { body, ...options });
  }

  /**
   * Archive a contract
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.archive({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   void_invoices: true,
   * });
   * ```
   */
  archive(
    body: ContractArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractArchiveResponse> {
    return this._client.post('/v1/contracts/archive', { body, ...options });
  }

  /**
   * Creates historical usage invoices for a contract
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.createHistoricalInvoices({
   *     invoices: [
   *       {
   *         customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *         contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *         credit_type_id:
   *           '2714e483-4ff1-48e4-9e25-ac732e8f24f2',
   *         inclusive_start_date: '2020-01-01T00:00:00.000Z',
   *         exclusive_end_date: '2020-02-01T00:00:00.000Z',
   *         issue_date: '2020-02-01T00:00:00.000Z',
   *         usage_line_items: [
   *           {
   *             product_id:
   *               'f14d6729-6a44-4b13-9908-9387f1918790',
   *             inclusive_start_date:
   *               '2020-01-01T00:00:00.000Z',
   *             exclusive_end_date: '2020-02-01T00:00:00.000Z',
   *             quantity: 100,
   *           },
   *         ],
   *       },
   *     ],
   *     preview: false,
   *   });
   * ```
   */
  createHistoricalInvoices(
    body: ContractCreateHistoricalInvoicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractCreateHistoricalInvoicesResponse> {
    return this._client.post('/v1/contracts/createHistoricalInvoices', { body, ...options });
  }

  /**
   * List balances (commits and credits).
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.listBalances({
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   id: '6162d87b-e5db-4a33-b7f2-76ce6ead4e85',
   *   include_ledgers: true,
   * });
   * ```
   */
  listBalances(
    body: ContractListBalancesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractListBalancesResponse> {
    return this._client.post('/v1/contracts/customerBalances/list', { body, ...options });
  }

  /**
   * Get the rate schedule for the rate card on a given contract.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.retrieveRateSchedule({
   *     contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *     customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *     at: '2020-01-01T00:00:00.000Z',
   *     selectors: [
   *       {
   *         product_id: 'd6300dbb-882e-4d2d-8dec-5125d16b65d0',
   *         partial_pricing_group_values: {
   *           region: 'us-west-2',
   *           cloud: 'aws',
   *         },
   *       },
   *     ],
   *   });
   * ```
   */
  retrieveRateSchedule(
    params: ContractRetrieveRateScheduleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveRateScheduleResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/v1/contracts/getContractRateSchedule', {
      query: { limit, next_page },
      body,
      ...options,
    });
  }

  /**
   * Fetch the quantity and price for a subscription over time. End-point does not
   * return future scheduled changes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.retrieveSubscriptionQuantityHistory(
   *     {
   *       contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *       customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *       subscription_id:
   *         '1a824d53-bde6-4d82-96d7-6347ff227d5c',
   *     },
   *   );
   * ```
   */
  retrieveSubscriptionQuantityHistory(
    body: ContractRetrieveSubscriptionQuantityHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveSubscriptionQuantityHistoryResponse> {
    return this._client.post('/v1/contracts/getSubscriptionQuantityHistory', { body, ...options });
  }

  /**
   * Create a new scheduled invoice for Professional Services terms on a contract.
   * This endpoint's availability is dependent on your client's configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.contracts.scheduleProServicesInvoice({
   *     contract_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     customer_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     issued_at: '2019-12-27T18:11:19.117Z',
   *     line_items: [
   *       {
   *         professional_service_id:
   *           '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       },
   *     ],
   *   });
   * ```
   */
  scheduleProServicesInvoice(
    body: ContractScheduleProServicesInvoiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractScheduleProServicesInvoiceResponse> {
    return this._client.post('/v1/contracts/scheduleProServicesInvoice', { body, ...options });
  }

  /**
   * Set usage filter for a contract
   *
   * @example
   * ```ts
   * await client.v1.contracts.setUsageFilter({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   group_key: 'business_subscription_id',
   *   group_values: ['ID-1', 'ID-2'],
   *   starting_at: '2020-01-01T00:00:00.000Z',
   * });
   * ```
   */
  setUsageFilter(body: ContractSetUsageFilterParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/v1/contracts/setUsageFilter', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update the end date of a contract
   *
   * @example
   * ```ts
   * const response = await client.v1.contracts.updateEndDate({
   *   contract_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   *   customer_id: '13117714-3f05-48e5-a6e9-a66093f13b4d',
   *   ending_before: '2020-01-01T00:00:00.000Z',
   * });
   * ```
   */
  updateEndDate(
    body: ContractUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractUpdateEndDateResponse> {
    return this._client.post('/v1/contracts/updateEndDate', { body, ...options });
  }
}

export interface ContractCreateResponse {
  data: Shared.ID;
}

export interface ContractRetrieveResponse {
  data: ContractRetrieveResponse.Data;
}

export namespace ContractRetrieveResponse {
  export interface Data {
    id: string;

    amendments: Array<Data.Amendment>;

    current: Shared.ContractWithoutAmendments;

    customer_id: string;

    initial: Shared.ContractWithoutAmendments;

    /**
     * RFC 3339 timestamp indicating when the contract was archived. If not returned,
     * the contract is not archived.
     */
    archived_at?: string;

    custom_fields?: { [key: string]: string };

    /**
     * The billing provider configuration associated with a contract.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    prepaid_balance_threshold_configuration?: Data.PrepaidBalanceThresholdConfiguration;

    /**
     * Priority of the contract.
     */
    priority?: number;

    /**
     * Determines which scheduled and commit charges to consolidate onto the Contract's
     * usage invoice. The charge's `timestamp` must match the usage invoice's
     * `ending_before` date for consolidation to occur. This field cannot be modified
     * after a Contract has been created. If this field is omitted, charges will appear
     * on a separate invoice from usage charges.
     */
    scheduled_charges_on_usage_invoices?: 'ALL';

    spend_threshold_configuration?: Data.SpendThresholdConfiguration;

    /**
     * List of subscriptions on the contract.
     */
    subscriptions?: Array<Data.Subscription>;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Data {
    export interface Amendment {
      id: string;

      commits: Array<Shared.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Shared.Override>;

      scheduled_charges: Array<Shared.ScheduledCharge>;

      starting_at: string;

      credits?: Array<Shared.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Shared.Discount>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Shared.ProService>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Amendment.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace Amendment {
      export interface ResellerRoyalty {
        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string | null;

        fraction?: number;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        netsuite_reseller_id?: string;

        reseller_contract_value?: number;

        starting_at?: string;
      }
    }

    /**
     * The billing provider configuration associated with a contract.
     */
    export interface CustomerBillingProviderConfiguration {
      billing_provider:
        | 'aws_marketplace'
        | 'stripe'
        | 'netsuite'
        | 'custom'
        | 'azure_marketplace'
        | 'quickbooks_online'
        | 'workday'
        | 'gcp_marketplace';

      delivery_method: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

      id?: string;

      /**
       * Configuration for the billing provider. The structure of this object is specific
       * to the billing provider.
       */
      configuration?: { [key: string]: unknown };
    }

    export interface PrepaidBalanceThresholdConfiguration {
      commit: PrepaidBalanceThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
       */
      is_enabled: boolean;

      payment_gate_config: PrepaidBalanceThresholdConfiguration.PaymentGateConfig;

      /**
       * Specify the amount the balance should be recharged to.
       */
      recharge_to_amount: number;

      /**
       * Specify the threshold amount for the contract. Each time the contract's prepaid
       * balance lowers to this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;

      /**
       * If provided, the threshold, recharge-to amount, and the resulting threshold
       * commit amount will be in terms of this credit type instead of the fiat currency.
       */
      custom_credit_type_id?: string;
    }

    export namespace PrepaidBalanceThresholdConfiguration {
      export interface Commit {
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
        product_id: string;

        /**
         * Which products the threshold commit applies to. If applicable_product_ids,
         * applicable_product_tags or specifiers are not provided, the commit applies to
         * all products.
         */
        applicable_product_ids?: Array<string>;

        /**
         * Which tags the threshold commit applies to. If applicable_product_ids,
         * applicable_product_tags or specifiers are not provided, the commit applies to
         * all products.
         */
        applicable_product_tags?: Array<string>;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;

        /**
         * List of filters that determine what kind of customer usage draws down a commit
         * or credit. A customer's usage needs to meet the condition of at least one of the
         * specifiers to contribute to a commit's or credit's drawdown. This field cannot
         * be used together with `applicable_product_ids` or `applicable_product_tags`.
         */
        specifiers?: Array<Commit.Specifier>;
      }

      export namespace Commit {
        export interface Specifier {
          presentation_group_values?: { [key: string]: string };

          pricing_group_values?: { [key: string]: string };

          /**
           * If provided, the specifier will only apply to the product with the specified ID.
           */
          product_id?: string;

          /**
           * If provided, the specifier will only apply to products with all the specified
           * tags.
           */
          product_tags?: Array<string>;
        }
      }

      export interface PaymentGateConfig {
        /**
         * Gate access to the commit balance based on successful collection of payment.
         * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
         * facilitate payment using your own payment integration. Select NONE if you do not
         * wish to payment gate the commit balance.
         */
        payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;

        /**
         * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
         * not wish Metronome to calculate tax on your behalf. Leaving this field blank
         * will default to NONE.
         */
        tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        export interface PrecalculatedTaxConfig {
          /**
           * Amount of tax to be applied. This should be in the same currency and
           * denomination as the commit's invoice schedule
           */
          tax_amount: number;

          /**
           * Name of the tax to be applied. This may be used in an invoice line item
           * description.
           */
          tax_name?: string;
        }

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';

          /**
           * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
           * your payment type.
           */
          invoice_metadata?: { [key: string]: string };
        }
      }
    }

    export interface SpendThresholdConfiguration {
      commit: SpendThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
       */
      is_enabled: boolean;

      payment_gate_config: SpendThresholdConfiguration.PaymentGateConfig;

      /**
       * Specify the threshold amount for the contract. Each time the contract's usage
       * hits this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;
    }

    export namespace SpendThresholdConfiguration {
      export interface Commit {
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
        product_id: string;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;
      }

      export interface PaymentGateConfig {
        /**
         * Gate access to the commit balance based on successful collection of payment.
         * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
         * facilitate payment using your own payment integration. Select NONE if you do not
         * wish to payment gate the commit balance.
         */
        payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;

        /**
         * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
         * not wish Metronome to calculate tax on your behalf. Leaving this field blank
         * will default to NONE.
         */
        tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        export interface PrecalculatedTaxConfig {
          /**
           * Amount of tax to be applied. This should be in the same currency and
           * denomination as the commit's invoice schedule
           */
          tax_amount: number;

          /**
           * Name of the tax to be applied. This may be used in an invoice line item
           * description.
           */
          tax_name?: string;
        }

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';

          /**
           * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
           * your payment type.
           */
          invoice_metadata?: { [key: string]: string };
        }
      }
    }

    export interface Subscription {
      collection_schedule: 'ADVANCE' | 'ARREARS';

      proration: Subscription.Proration;

      /**
       * List of quantity schedule items for the subscription. Only includes the current
       * quantity and future quantity changes.
       */
      quantity_schedule: Array<Subscription.QuantitySchedule>;

      starting_at: string;

      subscription_rate: Subscription.SubscriptionRate;

      id?: string;

      custom_fields?: { [key: string]: string };

      description?: string;

      ending_before?: string;

      fiat_credit_type_id?: string;

      name?: string;
    }

    export namespace Subscription {
      export interface Proration {
        invoice_behavior: 'BILL_IMMEDIATELY' | 'BILL_ON_NEXT_COLLECTION_DATE';

        is_prorated: boolean;
      }

      export interface QuantitySchedule {
        quantity: number;

        starting_at: string;

        ending_before?: string;
      }

      export interface SubscriptionRate {
        billing_frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        product: SubscriptionRate.Product;
      }

      export namespace SubscriptionRate {
        export interface Product {
          id: string;

          name: string;
        }
      }
    }
  }
}

export interface ContractListResponse {
  data: Array<ContractListResponse.Data>;
}

export namespace ContractListResponse {
  export interface Data {
    id: string;

    amendments: Array<Data.Amendment>;

    current: Shared.ContractWithoutAmendments;

    customer_id: string;

    initial: Shared.ContractWithoutAmendments;

    /**
     * RFC 3339 timestamp indicating when the contract was archived. If not returned,
     * the contract is not archived.
     */
    archived_at?: string;

    custom_fields?: { [key: string]: string };

    /**
     * The billing provider configuration associated with a contract.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    prepaid_balance_threshold_configuration?: Data.PrepaidBalanceThresholdConfiguration;

    /**
     * Priority of the contract.
     */
    priority?: number;

    /**
     * Determines which scheduled and commit charges to consolidate onto the Contract's
     * usage invoice. The charge's `timestamp` must match the usage invoice's
     * `ending_before` date for consolidation to occur. This field cannot be modified
     * after a Contract has been created. If this field is omitted, charges will appear
     * on a separate invoice from usage charges.
     */
    scheduled_charges_on_usage_invoices?: 'ALL';

    spend_threshold_configuration?: Data.SpendThresholdConfiguration;

    /**
     * List of subscriptions on the contract.
     */
    subscriptions?: Array<Data.Subscription>;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Data {
    export interface Amendment {
      id: string;

      commits: Array<Shared.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Shared.Override>;

      scheduled_charges: Array<Shared.ScheduledCharge>;

      starting_at: string;

      credits?: Array<Shared.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Shared.Discount>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Shared.ProService>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Amendment.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace Amendment {
      export interface ResellerRoyalty {
        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string | null;

        fraction?: number;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        netsuite_reseller_id?: string;

        reseller_contract_value?: number;

        starting_at?: string;
      }
    }

    /**
     * The billing provider configuration associated with a contract.
     */
    export interface CustomerBillingProviderConfiguration {
      billing_provider:
        | 'aws_marketplace'
        | 'stripe'
        | 'netsuite'
        | 'custom'
        | 'azure_marketplace'
        | 'quickbooks_online'
        | 'workday'
        | 'gcp_marketplace';

      delivery_method: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

      id?: string;

      /**
       * Configuration for the billing provider. The structure of this object is specific
       * to the billing provider.
       */
      configuration?: { [key: string]: unknown };
    }

    export interface PrepaidBalanceThresholdConfiguration {
      commit: PrepaidBalanceThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
       */
      is_enabled: boolean;

      payment_gate_config: PrepaidBalanceThresholdConfiguration.PaymentGateConfig;

      /**
       * Specify the amount the balance should be recharged to.
       */
      recharge_to_amount: number;

      /**
       * Specify the threshold amount for the contract. Each time the contract's prepaid
       * balance lowers to this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;

      /**
       * If provided, the threshold, recharge-to amount, and the resulting threshold
       * commit amount will be in terms of this credit type instead of the fiat currency.
       */
      custom_credit_type_id?: string;
    }

    export namespace PrepaidBalanceThresholdConfiguration {
      export interface Commit {
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
        product_id: string;

        /**
         * Which products the threshold commit applies to. If applicable_product_ids,
         * applicable_product_tags or specifiers are not provided, the commit applies to
         * all products.
         */
        applicable_product_ids?: Array<string>;

        /**
         * Which tags the threshold commit applies to. If applicable_product_ids,
         * applicable_product_tags or specifiers are not provided, the commit applies to
         * all products.
         */
        applicable_product_tags?: Array<string>;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;

        /**
         * List of filters that determine what kind of customer usage draws down a commit
         * or credit. A customer's usage needs to meet the condition of at least one of the
         * specifiers to contribute to a commit's or credit's drawdown. This field cannot
         * be used together with `applicable_product_ids` or `applicable_product_tags`.
         */
        specifiers?: Array<Commit.Specifier>;
      }

      export namespace Commit {
        export interface Specifier {
          presentation_group_values?: { [key: string]: string };

          pricing_group_values?: { [key: string]: string };

          /**
           * If provided, the specifier will only apply to the product with the specified ID.
           */
          product_id?: string;

          /**
           * If provided, the specifier will only apply to products with all the specified
           * tags.
           */
          product_tags?: Array<string>;
        }
      }

      export interface PaymentGateConfig {
        /**
         * Gate access to the commit balance based on successful collection of payment.
         * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
         * facilitate payment using your own payment integration. Select NONE if you do not
         * wish to payment gate the commit balance.
         */
        payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;

        /**
         * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
         * not wish Metronome to calculate tax on your behalf. Leaving this field blank
         * will default to NONE.
         */
        tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        export interface PrecalculatedTaxConfig {
          /**
           * Amount of tax to be applied. This should be in the same currency and
           * denomination as the commit's invoice schedule
           */
          tax_amount: number;

          /**
           * Name of the tax to be applied. This may be used in an invoice line item
           * description.
           */
          tax_name?: string;
        }

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';

          /**
           * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
           * your payment type.
           */
          invoice_metadata?: { [key: string]: string };
        }
      }
    }

    export interface SpendThresholdConfiguration {
      commit: SpendThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
       */
      is_enabled: boolean;

      payment_gate_config: SpendThresholdConfiguration.PaymentGateConfig;

      /**
       * Specify the threshold amount for the contract. Each time the contract's usage
       * hits this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;
    }

    export namespace SpendThresholdConfiguration {
      export interface Commit {
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
        product_id: string;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;
      }

      export interface PaymentGateConfig {
        /**
         * Gate access to the commit balance based on successful collection of payment.
         * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
         * facilitate payment using your own payment integration. Select NONE if you do not
         * wish to payment gate the commit balance.
         */
        payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;

        /**
         * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
         * not wish Metronome to calculate tax on your behalf. Leaving this field blank
         * will default to NONE.
         */
        tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using PRECALCULATED as your tax type.
         */
        export interface PrecalculatedTaxConfig {
          /**
           * Amount of tax to be applied. This should be in the same currency and
           * denomination as the commit's invoice schedule
           */
          tax_amount: number;

          /**
           * Name of the tax to be applied. This may be used in an invoice line item
           * description.
           */
          tax_name?: string;
        }

        /**
         * Only applicable if using STRIPE as your payment gate type.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';

          /**
           * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
           * your payment type.
           */
          invoice_metadata?: { [key: string]: string };
        }
      }
    }

    export interface Subscription {
      collection_schedule: 'ADVANCE' | 'ARREARS';

      proration: Subscription.Proration;

      /**
       * List of quantity schedule items for the subscription. Only includes the current
       * quantity and future quantity changes.
       */
      quantity_schedule: Array<Subscription.QuantitySchedule>;

      starting_at: string;

      subscription_rate: Subscription.SubscriptionRate;

      id?: string;

      custom_fields?: { [key: string]: string };

      description?: string;

      ending_before?: string;

      fiat_credit_type_id?: string;

      name?: string;
    }

    export namespace Subscription {
      export interface Proration {
        invoice_behavior: 'BILL_IMMEDIATELY' | 'BILL_ON_NEXT_COLLECTION_DATE';

        is_prorated: boolean;
      }

      export interface QuantitySchedule {
        quantity: number;

        starting_at: string;

        ending_before?: string;
      }

      export interface SubscriptionRate {
        billing_frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        product: SubscriptionRate.Product;
      }

      export namespace SubscriptionRate {
        export interface Product {
          id: string;

          name: string;
        }
      }
    }
  }
}

export interface ContractAmendResponse {
  data: Shared.ID;
}

export interface ContractArchiveResponse {
  data: Shared.ID;
}

export interface ContractCreateHistoricalInvoicesResponse {
  data: Array<InvoicesAPI.Invoice>;
}

export interface ContractListBalancesResponse {
  data: Array<Shared.Commit | Shared.Credit>;

  next_page: string | null;
}

export interface ContractRetrieveRateScheduleResponse {
  data: Array<ContractRetrieveRateScheduleResponse.Data>;

  next_page?: string | null;
}

export namespace ContractRetrieveRateScheduleResponse {
  export interface Data {
    entitled: boolean;

    list_rate: Shared.Rate;

    product_custom_fields: { [key: string]: string };

    product_id: string;

    product_name: string;

    product_tags: Array<string>;

    rate_card_id: string;

    starting_at: string;

    billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    commit_rate?: Data.CommitRate;

    ending_before?: string;

    override_rate?: Shared.Rate;

    pricing_group_values?: { [key: string]: string };
  }

  export namespace Data {
    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    export interface CommitRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

      /**
       * Commit rate price. For FLAT rate_type, this must be >=0.
       */
      price?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<Shared.Tier>;
    }
  }
}

export interface ContractRetrieveSubscriptionQuantityHistoryResponse {
  data: ContractRetrieveSubscriptionQuantityHistoryResponse.Data;
}

export namespace ContractRetrieveSubscriptionQuantityHistoryResponse {
  export interface Data {
    fiat_credit_type_id?: string;

    history?: Array<Data.History>;

    subscription_id?: string;
  }

  export namespace Data {
    export interface History {
      data: Array<History.Data>;

      starting_at: string;
    }

    export namespace History {
      export interface Data {
        quantity: number;

        total: number;

        unit_price: number;
      }
    }
  }
}

export interface ContractScheduleProServicesInvoiceResponse {
  data: Array<InvoicesAPI.Invoice>;
}

export interface ContractUpdateEndDateResponse {
  data: Shared.ID;
}

export interface ContractCreateParams {
  customer_id: string;

  /**
   * inclusive contract start time
   */
  starting_at: string;

  /**
   * The billing provider configuration associated with a contract. Provide either an
   * ID or the provider and delivery method.
   */
  billing_provider_configuration?: ContractCreateParams.BillingProviderConfiguration;

  commits?: Array<ContractCreateParams.Commit>;

  credits?: Array<ContractCreateParams.Credit>;

  custom_fields?: { [key: string]: string };

  /**
   * This field's availability is dependent on your client's configuration.
   */
  discounts?: Array<ContractCreateParams.Discount>;

  /**
   * exclusive contract end time
   */
  ending_before?: string;

  hierarchy_configuration?: ContractCreateParams.HierarchyConfiguration;

  /**
   * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
   * prices automatically. EXPLICIT prioritization requires specifying priorities for
   * each multiplier; the one with the lowest priority value will be prioritized
   * first. If tiered overrides are used, prioritization must be explicit.
   */
  multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

  name?: string;

  net_payment_terms_days?: number;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_sales_order_id?: string;

  overrides?: Array<ContractCreateParams.Override>;

  prepaid_balance_threshold_configuration?: ContractCreateParams.PrepaidBalanceThresholdConfiguration;

  /**
   * Priority of the contract.
   */
  priority?: number;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  professional_services?: Array<ContractCreateParams.ProfessionalService>;

  /**
   * Selects the rate card linked to the specified alias as of the contract's start
   * date.
   */
  rate_card_alias?: string;

  rate_card_id?: string;

  recurring_commits?: Array<ContractCreateParams.RecurringCommit>;

  recurring_credits?: Array<ContractCreateParams.RecurringCredit>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  reseller_royalties?: Array<ContractCreateParams.ResellerRoyalty>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;

  scheduled_charges?: Array<ContractCreateParams.ScheduledCharge>;

  /**
   * Determines which scheduled and commit charges to consolidate onto the Contract's
   * usage invoice. The charge's `timestamp` must match the usage invoice's
   * `ending_before` date for consolidation to occur. This field cannot be modified
   * after a Contract has been created. If this field is omitted, charges will appear
   * on a separate invoice from usage charges.
   */
  scheduled_charges_on_usage_invoices?: 'ALL';

  spend_threshold_configuration?: ContractCreateParams.SpendThresholdConfiguration;

  /**
   * Optional list of
   * [subscriptions](https://docs.metronome.com/manage-product-access/create-subscription/)
   * to add to the contract.
   */
  subscriptions?: Array<ContractCreateParams.Subscription>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  total_contract_value?: number;

  transition?: ContractCreateParams.Transition;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string;

  usage_filter?: Shared.BaseUsageFilter;

  usage_statement_schedule?: ContractCreateParams.UsageStatementSchedule;
}

export namespace ContractCreateParams {
  /**
   * The billing provider configuration associated with a contract. Provide either an
   * ID or the provider and delivery method.
   */
  export interface BillingProviderConfiguration {
    /**
     * Do not specify if using billing_provider_configuration_id.
     */
    billing_provider?: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace' | 'stripe' | 'netsuite';

    /**
     * The Metronome ID of the billing provider configuration. Use when a customer has
     * multiple configurations with the same billing provider and delivery method.
     * Otherwise, specify the billing_provider and delivery_method.
     */
    billing_provider_configuration_id?: string;

    /**
     * Do not specify if using billing_provider_configuration_id.
     */
    delivery_method?: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';
  }

  export interface Commit {
    product_id: string;

    type: 'PREPAID' | 'POSTPAID';

    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    access_schedule?: Commit.AccessSchedule;

    /**
     * (DEPRECATED) Use access_schedule and invoice_schedule instead.
     */
    amount?: number;

    /**
     * Which products the commit applies to. If applicable_product_ids,
     * applicable_product_tags or specifiers are not provided, the commit applies to
     * all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the commit applies to. If applicable_product_ids,
     * applicable_product_tags or specifiers are not provided, the commit applies to
     * all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: { [key: string]: string };

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

    /**
     * Optional configuration for commit hierarchy access control
     */
    hierarchy_configuration?: Commit.HierarchyConfiguration;

    /**
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    invoice_schedule?: Commit.InvoiceSchedule;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * optionally payment gate this commit
     */
    payment_gate_config?: Commit.PaymentGateConfig;

    /**
     * If multiple commits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<Commit.Specifier>;

    /**
     * A temporary ID for the commit that can be used to reference the commit for
     * commit specific overrides.
     */
    temporary_id?: string;
  }

  export namespace Commit {
    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed
       */
      credit_type_id?: string;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        amount: number;

        /**
         * RFC 3339 timestamp (exclusive)
         */
        ending_before: string;

        /**
         * RFC 3339 timestamp (inclusive)
         */
        starting_at: string;
      }
    }

    /**
     * Optional configuration for commit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    /**
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    export interface InvoiceSchedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: InvoiceSchedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
    }

    export namespace InvoiceSchedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }

    /**
     * optionally payment gate this commit
     */
    export interface PaymentGateConfig {
      /**
       * Gate access to the commit balance based on successful collection of payment.
       * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
       * facilitate payment using your own payment integration. Select NONE if you do not
       * wish to payment gate the commit balance.
       */
      payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;

      /**
       * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
       * not wish Metronome to calculate tax on your behalf. Leaving this field blank
       * will default to NONE.
       */
      tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      export interface PrecalculatedTaxConfig {
        /**
         * Amount of tax to be applied. This should be in the same currency and
         * denomination as the commit's invoice schedule
         */
        tax_amount: number;

        /**
         * Name of the tax to be applied. This may be used in an invoice line item
         * description.
         */
        tax_name?: string;
      }

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';

        /**
         * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
         * your payment type.
         */
        invoice_metadata?: { [key: string]: string };

        /**
         * If true, the payment will be made assuming the customer is present (i.e. on
         * session).
         *
         * If false, the payment will be made assuming the customer is not present (i.e.
         * off session). For cardholders from a country with an e-mandate requirement (e.g.
         * India), the payment may be declined.
         *
         * If left blank, will default to false.
         */
        on_session_payment?: boolean;
      }
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }
  }

  export interface Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    access_schedule: Credit.AccessSchedule;

    product_id: string;

    /**
     * Which products the credit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the credit applies to all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the credit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the credit applies to all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: { [key: string]: string };

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

    /**
     * Optional configuration for credit hierarchy access control
     */
    hierarchy_configuration?: Credit.HierarchyConfiguration;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * If multiple credits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<Credit.Specifier>;
  }

  export namespace Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed
       */
      credit_type_id?: string;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        amount: number;

        /**
         * RFC 3339 timestamp (exclusive)
         */
        ending_before: string;

        /**
         * RFC 3339 timestamp (inclusive)
         */
        starting_at: string;
      }
    }

    /**
     * Optional configuration for credit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

    custom_fields?: { [key: string]: string };

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export namespace Discount {
    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    export interface Schedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: Schedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }
  }

  export interface HierarchyConfiguration {
    parent: HierarchyConfiguration.Parent;
  }

  export namespace HierarchyConfiguration {
    export interface Parent {
      contract_id: string;

      customer_id: string;
    }
  }

  export interface Override {
    /**
     * RFC 3339 timestamp indicating when the override will start applying (inclusive)
     */
    starting_at: string;

    /**
     * tags identifying products whose rates are being overridden. Cannot be used in
     * conjunction with override_specifiers.
     */
    applicable_product_tags?: Array<string>;

    /**
     * RFC 3339 timestamp indicating when the override will stop applying (exclusive)
     */
    ending_before?: string;

    entitled?: boolean;

    /**
     * Indicates whether the override should only apply to commits. Defaults to
     * `false`. If `true`, you can specify relevant commits in `override_specifiers` by
     * passing `commit_ids`. if you do not specify `commit_ids`, then the override will
     * apply when consuming any prepaid or postpaid commit.
     */
    is_commit_specific?: boolean;

    /**
     * Required for MULTIPLIER type. Must be >=0.
     */
    multiplier?: number;

    /**
     * Cannot be used in conjunction with product_id or applicable_product_tags. If
     * provided, the override will apply to all products with the specified specifiers.
     */
    override_specifiers?: Array<Override.OverrideSpecifier>;

    /**
     * Required for OVERWRITE type.
     */
    overwrite_rate?: Override.OverwriteRate;

    /**
     * Required for EXPLICIT multiplier prioritization scheme and all TIERED overrides.
     * Under EXPLICIT prioritization, overwrites are prioritized first, and then tiered
     * and multiplier overrides are prioritized by their priority value (lowest first).
     * Must be > 0.
     */
    priority?: number;

    /**
     * ID of the product whose rate is being overridden. Cannot be used in conjunction
     * with override_specifiers.
     */
    product_id?: string;

    /**
     * Indicates whether the override applies to commit rates or list rates. Can only
     * be used for overrides that have `is_commit_specific` set to `true`. Defaults to
     * `"LIST_RATE"`.
     */
    target?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Required for TIERED type. Must have at least one tier.
     */
    tiers?: Array<Override.Tier>;

    /**
     * Overwrites are prioritized over multipliers and tiered overrides.
     */
    type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
  }

  export namespace Override {
    export interface OverrideSpecifier {
      billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to the
       * specified commits. If not provided, the override will apply to all commits.
       */
      commit_ids?: Array<string>;

      /**
       * A map of group names to values. The override will only apply to line items with
       * the specified presentation group values.
       */
      presentation_group_values?: { [key: string]: string };

      /**
       * A map of pricing group names to values. The override will only apply to products
       * with the specified pricing group values.
       */
      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the override will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the override will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to commits
       * created by the specified recurring commit ids.
       */
      recurring_commit_ids?: Array<string>;

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to credits
       * created by the specified recurring credit ids.
       */
      recurring_credit_ids?: Array<string>;
    }

    /**
     * Required for OVERWRITE type.
     */
    export interface OverwriteRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

      credit_type_id?: string;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: { [key: string]: unknown };

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
       * set to true.
       */
      is_prorated?: boolean;

      /**
       * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
       * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
       */
      price?: number;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<Shared.Tier>;
    }

    export interface Tier {
      multiplier: number;

      size?: number;
    }
  }

  export interface PrepaidBalanceThresholdConfiguration {
    commit: PrepaidBalanceThresholdConfiguration.Commit;

    /**
     * When set to false, the contract will not be evaluated against the
     * threshold_amount. Toggling to true will result an immediate evaluation,
     * regardless of prior state.
     */
    is_enabled: boolean;

    payment_gate_config: PrepaidBalanceThresholdConfiguration.PaymentGateConfig;

    /**
     * Specify the amount the balance should be recharged to.
     */
    recharge_to_amount: number;

    /**
     * Specify the threshold amount for the contract. Each time the contract's prepaid
     * balance lowers to this amount, a threshold charge will be initiated.
     */
    threshold_amount: number;

    /**
     * If provided, the threshold, recharge-to amount, and the resulting threshold
     * commit amount will be in terms of this credit type instead of the fiat currency.
     */
    custom_credit_type_id?: string;
  }

  export namespace PrepaidBalanceThresholdConfiguration {
    export interface Commit {
      /**
       * The commit product that will be used to generate the line item for commit
       * payment.
       */
      product_id: string;

      /**
       * Which products the threshold commit applies to. If applicable_product_ids,
       * applicable_product_tags or specifiers are not provided, the commit applies to
       * all products.
       */
      applicable_product_ids?: Array<string>;

      /**
       * Which tags the threshold commit applies to. If applicable_product_ids,
       * applicable_product_tags or specifiers are not provided, the commit applies to
       * all products.
       */
      applicable_product_tags?: Array<string>;

      description?: string;

      /**
       * Specify the name of the line item for the threshold charge. If left blank, it
       * will default to the commit product name.
       */
      name?: string;

      /**
       * List of filters that determine what kind of customer usage draws down a commit
       * or credit. A customer's usage needs to meet the condition of at least one of the
       * specifiers to contribute to a commit's or credit's drawdown. This field cannot
       * be used together with `applicable_product_ids` or `applicable_product_tags`.
       */
      specifiers?: Array<Commit.Specifier>;
    }

    export namespace Commit {
      export interface Specifier {
        presentation_group_values?: { [key: string]: string };

        pricing_group_values?: { [key: string]: string };

        /**
         * If provided, the specifier will only apply to the product with the specified ID.
         */
        product_id?: string;

        /**
         * If provided, the specifier will only apply to products with all the specified
         * tags.
         */
        product_tags?: Array<string>;
      }
    }

    export interface PaymentGateConfig {
      /**
       * Gate access to the commit balance based on successful collection of payment.
       * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
       * facilitate payment using your own payment integration. Select NONE if you do not
       * wish to payment gate the commit balance.
       */
      payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;

      /**
       * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
       * not wish Metronome to calculate tax on your behalf. Leaving this field blank
       * will default to NONE.
       */
      tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      export interface PrecalculatedTaxConfig {
        /**
         * Amount of tax to be applied. This should be in the same currency and
         * denomination as the commit's invoice schedule
         */
        tax_amount: number;

        /**
         * Name of the tax to be applied. This may be used in an invoice line item
         * description.
         */
        tax_name?: string;
      }

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';

        /**
         * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
         * your payment type.
         */
        invoice_metadata?: { [key: string]: string };
      }
    }
  }

  export interface ProfessionalService {
    /**
     * Maximum amount for the term.
     */
    max_amount: number;

    product_id: string;

    /**
     * Quantity for the charge. Will be multiplied by unit_price to determine the
     * amount.
     */
    quantity: number;

    /**
     * Unit price for the charge. Will be multiplied by quantity to determine the
     * amount and must be specified.
     */
    unit_price: number;

    custom_fields?: { [key: string]: string };

    description?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export interface RecurringCommit {
    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCommit.AccessAmount;

    /**
     * Defines the length of the access schedule for each created commit/credit. The
     * value represents the number of units. Unit defaults to "PERIODS", where the
     * length of a period is determined by the recurrence_frequency.
     */
    commit_duration: RecurringCommit.CommitDuration;

    /**
     * Will be passed down to the individual commits
     */
    priority: number;

    product_id: string;

    /**
     * determines the start time for the first commit
     */
    starting_at: string;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_ids?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_tags?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    description?: string;

    /**
     * Determines when the contract will stop creating recurring commits. optional
     */
    ending_before?: string;

    /**
     * Optional configuration for recurring commit/credit hierarchy access control
     */
    hierarchy_configuration?: RecurringCommit.HierarchyConfiguration;

    /**
     * The amount the customer should be billed for the commit. Not required.
     */
    invoice_amount?: RecurringCommit.InvoiceAmount;

    /**
     * displayed on invoices. will be passed through to the individual commits
     */
    name?: string;

    /**
     * Will be passed down to the individual commits
     */
    netsuite_sales_order_id?: string;

    /**
     * Determines whether the first and last commit will be prorated. If not provided,
     * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
     */
    proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

    /**
     * Whether the created commits will use the commit rate or list rate
     */
    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * The frequency at which the recurring commits will be created. If not provided: -
     * The commits will be created on the usage invoice frequency. If provided: - The
     * period defined in the duration will correspond to this frequency. - Commits will
     * be created aligned with the recurring commit's starting_at rather than the usage
     * invoice dates.
     */
    recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * Will be passed down to the individual commits. This controls how much of an
     * individual unexpired commit will roll over upon contract transition. Must be
     * between 0 and 1.
     */
    rollover_fraction?: number;

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<RecurringCommit.Specifier>;

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    subscription_config?: RecurringCommit.SubscriptionConfig;

    /**
     * A temporary ID that can be used to reference the recurring commit for commit
     * specific overrides.
     */
    temporary_id?: string;
  }

  export namespace RecurringCommit {
    /**
     * The amount of commit to grant.
     */
    export interface AccessAmount {
      credit_type_id: string;

      unit_price: number;

      /**
       * This field is required unless a subscription is attached via
       * `subscription_config`.
       */
      quantity?: number;
    }

    /**
     * Defines the length of the access schedule for each created commit/credit. The
     * value represents the number of units. Unit defaults to "PERIODS", where the
     * length of a period is determined by the recurrence_frequency.
     */
    export interface CommitDuration {
      value: number;

      unit?: 'PERIODS';
    }

    /**
     * Optional configuration for recurring commit/credit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    /**
     * The amount the customer should be billed for the commit. Not required.
     */
    export interface InvoiceAmount {
      credit_type_id: string;

      quantity: number;

      unit_price: number;
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    export interface SubscriptionConfig {
      apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

      /**
       * ID of the subscription to configure on the recurring commit/credit.
       */
      subscription_id: string;

      /**
       * If set to POOLED, allocation added per seat is pooled across the account.
       */
      allocation?: 'POOLED';
    }

    export namespace SubscriptionConfig {
      export interface ApplySeatIncreaseConfig {
        /**
         * Indicates whether a mid-period seat increase should be prorated.
         */
        is_prorated: boolean;
      }
    }
  }

  export interface RecurringCredit {
    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCredit.AccessAmount;

    /**
     * Defines the length of the access schedule for each created commit/credit. The
     * value represents the number of units. Unit defaults to "PERIODS", where the
     * length of a period is determined by the recurrence_frequency.
     */
    commit_duration: RecurringCredit.CommitDuration;

    /**
     * Will be passed down to the individual commits
     */
    priority: number;

    product_id: string;

    /**
     * determines the start time for the first commit
     */
    starting_at: string;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_ids?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_tags?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    description?: string;

    /**
     * Determines when the contract will stop creating recurring commits. optional
     */
    ending_before?: string;

    /**
     * Optional configuration for recurring commit/credit hierarchy access control
     */
    hierarchy_configuration?: RecurringCredit.HierarchyConfiguration;

    /**
     * displayed on invoices. will be passed through to the individual commits
     */
    name?: string;

    /**
     * Will be passed down to the individual commits
     */
    netsuite_sales_order_id?: string;

    /**
     * Determines whether the first and last commit will be prorated. If not provided,
     * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
     */
    proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

    /**
     * Whether the created commits will use the commit rate or list rate
     */
    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * The frequency at which the recurring commits will be created. If not provided: -
     * The commits will be created on the usage invoice frequency. If provided: - The
     * period defined in the duration will correspond to this frequency. - Commits will
     * be created aligned with the recurring commit's starting_at rather than the usage
     * invoice dates.
     */
    recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * Will be passed down to the individual commits. This controls how much of an
     * individual unexpired commit will roll over upon contract transition. Must be
     * between 0 and 1.
     */
    rollover_fraction?: number;

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<RecurringCredit.Specifier>;

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    subscription_config?: RecurringCredit.SubscriptionConfig;

    /**
     * A temporary ID that can be used to reference the recurring commit for commit
     * specific overrides.
     */
    temporary_id?: string;
  }

  export namespace RecurringCredit {
    /**
     * The amount of commit to grant.
     */
    export interface AccessAmount {
      credit_type_id: string;

      unit_price: number;

      /**
       * This field is required unless a subscription is attached via
       * `subscription_config`.
       */
      quantity?: number;
    }

    /**
     * Defines the length of the access schedule for each created commit/credit. The
     * value represents the number of units. Unit defaults to "PERIODS", where the
     * length of a period is determined by the recurrence_frequency.
     */
    export interface CommitDuration {
      value: number;

      unit?: 'PERIODS';
    }

    /**
     * Optional configuration for recurring commit/credit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    export interface SubscriptionConfig {
      apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

      /**
       * ID of the subscription to configure on the recurring commit/credit.
       */
      subscription_id: string;

      /**
       * If set to POOLED, allocation added per seat is pooled across the account.
       */
      allocation?: 'POOLED';
    }

    export namespace SubscriptionConfig {
      export interface ApplySeatIncreaseConfig {
        /**
         * Indicates whether a mid-period seat increase should be prorated.
         */
        is_prorated: boolean;
      }
    }
  }

  export interface ResellerRoyalty {
    fraction: number;

    netsuite_reseller_id: string;

    reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

    starting_at: string;

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_tags?: Array<string>;

    aws_options?: ResellerRoyalty.AwsOptions;

    ending_before?: string;

    gcp_options?: ResellerRoyalty.GcpOptions;

    reseller_contract_value?: number;
  }

  export namespace ResellerRoyalty {
    export interface AwsOptions {
      aws_account_number?: string;

      aws_offer_id?: string;

      aws_payer_reference_id?: string;
    }

    export interface GcpOptions {
      gcp_account_id?: string;

      gcp_offer_id?: string;
    }
  }

  export interface ScheduledCharge {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: ScheduledCharge.Schedule;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export namespace ScheduledCharge {
    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    export interface Schedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: Schedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }
  }

  export interface SpendThresholdConfiguration {
    commit: SpendThresholdConfiguration.Commit;

    /**
     * When set to false, the contract will not be evaluated against the
     * threshold_amount. Toggling to true will result an immediate evaluation,
     * regardless of prior state.
     */
    is_enabled: boolean;

    payment_gate_config: SpendThresholdConfiguration.PaymentGateConfig;

    /**
     * Specify the threshold amount for the contract. Each time the contract's usage
     * hits this amount, a threshold charge will be initiated.
     */
    threshold_amount: number;
  }

  export namespace SpendThresholdConfiguration {
    export interface Commit {
      /**
       * The commit product that will be used to generate the line item for commit
       * payment.
       */
      product_id: string;

      description?: string;

      /**
       * Specify the name of the line item for the threshold charge. If left blank, it
       * will default to the commit product name.
       */
      name?: string;
    }

    export interface PaymentGateConfig {
      /**
       * Gate access to the commit balance based on successful collection of payment.
       * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
       * facilitate payment using your own payment integration. Select NONE if you do not
       * wish to payment gate the commit balance.
       */
      payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;

      /**
       * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
       * not wish Metronome to calculate tax on your behalf. Leaving this field blank
       * will default to NONE.
       */
      tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      export interface PrecalculatedTaxConfig {
        /**
         * Amount of tax to be applied. This should be in the same currency and
         * denomination as the commit's invoice schedule
         */
        tax_amount: number;

        /**
         * Name of the tax to be applied. This may be used in an invoice line item
         * description.
         */
        tax_name?: string;
      }

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';

        /**
         * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
         * your payment type.
         */
        invoice_metadata?: { [key: string]: string };
      }
    }
  }

  export interface Subscription {
    collection_schedule: 'ADVANCE' | 'ARREARS';

    /**
     * The initial quantity for the subscription. It must be non-negative value.
     */
    initial_quantity: number;

    proration: Subscription.Proration;

    subscription_rate: Subscription.SubscriptionRate;

    custom_fields?: { [key: string]: string };

    description?: string;

    /**
     * Exclusive end time for the subscription. If not provided, subscription inherits
     * contract end date.
     */
    ending_before?: string;

    name?: string;

    /**
     * Inclusive start time for the subscription. If not provided, defaults to contract
     * start date
     */
    starting_at?: string;

    /**
     * A temporary ID used to reference the subscription in recurring commit/credit
     * subscription configs created within the same payload.
     */
    temporary_id?: string;
  }

  export namespace Subscription {
    export interface Proration {
      /**
       * Indicates how mid-period quantity adjustments are invoiced.
       * **BILL_IMMEDIATELY**: Only available when collection schedule is `ADVANCE`. The
       * quantity increase will be billed immediately on the scheduled date.
       * **BILL_ON_NEXT_COLLECTION_DATE**: The quantity increase will be billed for
       * in-arrears at the end of the period.
       */
      invoice_behavior?: 'BILL_IMMEDIATELY' | 'BILL_ON_NEXT_COLLECTION_DATE';

      /**
       * Indicates if the partial period will be prorated or charged a full amount.
       */
      is_prorated?: boolean;
    }

    export interface SubscriptionRate {
      /**
       * Frequency to bill subscription with. Together with product_id, must match
       * existing rate on the rate card.
       */
      billing_frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

      /**
       * Must be subscription type product
       */
      product_id: string;
    }
  }

  export interface Transition {
    from_contract_id: string;

    /**
     * This field's available values may vary based on your client's configuration.
     */
    type: 'SUPERSEDE' | 'RENEWAL';

    future_invoice_behavior?: Transition.FutureInvoiceBehavior;
  }

  export namespace Transition {
    export interface FutureInvoiceBehavior {
      /**
       * Controls whether future trueup invoices are billed or removed. Default behavior
       * is AS_IS if not specified.
       */
      trueup?: 'REMOVE' | 'AS_IS' | null;
    }
  }

  export interface UsageStatementSchedule {
    frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * Required when using CUSTOM_DATE. This option lets you set a historical billing
     * anchor date, aligning future billing cycles with a chosen cadence. For example,
     * if a contract starts on 2024-09-15 and you set the anchor date to 2024-09-10
     * with a MONTHLY frequency, the first usage statement will cover 09-15 to 10-10.
     * Subsequent statements will follow the 10th of each month.
     */
    billing_anchor_date?: string;

    /**
     * If not provided, defaults to the first day of the month.
     */
    day?: 'FIRST_OF_MONTH' | 'CONTRACT_START' | 'CUSTOM_DATE';

    /**
     * The date Metronome should start generating usage invoices. If unspecified,
     * contract start date will be used. This is useful to set if you want to import
     * historical invoices via our 'Create Historical Invoices' API rather than having
     * Metronome automatically generate them.
     */
    invoice_generation_starting_at?: string;
  }
}

export interface ContractRetrieveParams {
  contract_id: string;

  customer_id: string;

  /**
   * Include the balance of credits and commits in the response. Setting this flag
   * may cause the query to be slower.
   */
  include_balance?: boolean;

  /**
   * Include commit ledgers in the response. Setting this flag may cause the query to
   * be slower.
   */
  include_ledgers?: boolean;
}

export interface ContractListParams {
  customer_id: string;

  /**
   * Optional RFC 3339 timestamp. If provided, the response will include only
   * contracts effective on the provided date. This cannot be provided if the
   * starting_at filter is provided.
   */
  covering_date?: string;

  /**
   * Include archived contracts in the response
   */
  include_archived?: boolean;

  /**
   * Include the balance of credits and commits in the response. Setting this flag
   * may cause the query to be slower.
   */
  include_balance?: boolean;

  /**
   * Include commit ledgers in the response. Setting this flag may cause the query to
   * be slower.
   */
  include_ledgers?: boolean;

  /**
   * Optional RFC 3339 timestamp. If provided, the response will include only
   * contracts where effective_at is on or after the provided date. This cannot be
   * provided if the covering_date filter is provided.
   */
  starting_at?: string;
}

export interface ContractAddManualBalanceEntryParams {
  /**
   * ID of the balance (commit or credit) to update.
   */
  id: string;

  /**
   * Amount to add to the segment. A negative number will draw down from the balance.
   */
  amount: number;

  /**
   * ID of the customer whose balance is to be updated.
   */
  customer_id: string;

  /**
   * Reason for the manual adjustment. This will be displayed in the ledger.
   */
  reason: string;

  /**
   * ID of the segment to update.
   */
  segment_id: string;

  /**
   * ID of the contract to update. Leave blank to update a customer level balance.
   */
  contract_id?: string;

  /**
   * RFC 3339 timestamp indicating when the manual adjustment takes place. If not
   * provided, it will default to the start of the segment.
   */
  timestamp?: string;
}

export interface ContractAmendParams {
  /**
   * ID of the contract to amend
   */
  contract_id: string;

  /**
   * ID of the customer whose contract is to be amended
   */
  customer_id: string;

  /**
   * inclusive start time for the amendment
   */
  starting_at: string;

  commits?: Array<ContractAmendParams.Commit>;

  credits?: Array<ContractAmendParams.Credit>;

  custom_fields?: { [key: string]: string };

  /**
   * This field's availability is dependent on your client's configuration.
   */
  discounts?: Array<ContractAmendParams.Discount>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_sales_order_id?: string;

  overrides?: Array<ContractAmendParams.Override>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  professional_services?: Array<ContractAmendParams.ProfessionalService>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  reseller_royalties?: Array<ContractAmendParams.ResellerRoyalty>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;

  scheduled_charges?: Array<ContractAmendParams.ScheduledCharge>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  total_contract_value?: number;
}

export namespace ContractAmendParams {
  export interface Commit {
    product_id: string;

    type: 'PREPAID' | 'POSTPAID';

    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    access_schedule?: Commit.AccessSchedule;

    /**
     * (DEPRECATED) Use access_schedule and invoice_schedule instead.
     */
    amount?: number;

    /**
     * Which products the commit applies to. If applicable_product_ids,
     * applicable_product_tags or specifiers are not provided, the commit applies to
     * all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the commit applies to. If applicable_product_ids,
     * applicable_product_tags or specifiers are not provided, the commit applies to
     * all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: { [key: string]: string };

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

    /**
     * Optional configuration for commit hierarchy access control
     */
    hierarchy_configuration?: Commit.HierarchyConfiguration;

    /**
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    invoice_schedule?: Commit.InvoiceSchedule;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * optionally payment gate this commit
     */
    payment_gate_config?: Commit.PaymentGateConfig;

    /**
     * If multiple commits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<Commit.Specifier>;

    /**
     * A temporary ID for the commit that can be used to reference the commit for
     * commit specific overrides.
     */
    temporary_id?: string;
  }

  export namespace Commit {
    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed
       */
      credit_type_id?: string;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        amount: number;

        /**
         * RFC 3339 timestamp (exclusive)
         */
        ending_before: string;

        /**
         * RFC 3339 timestamp (inclusive)
         */
        starting_at: string;
      }
    }

    /**
     * Optional configuration for commit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    /**
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    export interface InvoiceSchedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: InvoiceSchedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
    }

    export namespace InvoiceSchedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }

    /**
     * optionally payment gate this commit
     */
    export interface PaymentGateConfig {
      /**
       * Gate access to the commit balance based on successful collection of payment.
       * Select STRIPE for Metronome to facilitate payment via Stripe. Select EXTERNAL to
       * facilitate payment using your own payment integration. Select NONE if you do not
       * wish to payment gate the commit balance.
       */
      payment_gate_type: 'NONE' | 'STRIPE' | 'EXTERNAL';

      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      precalculated_tax_config?: PaymentGateConfig.PrecalculatedTaxConfig;

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;

      /**
       * Stripe tax is only supported for Stripe payment gateway. Select NONE if you do
       * not wish Metronome to calculate tax on your behalf. Leaving this field blank
       * will default to NONE.
       */
      tax_type?: 'NONE' | 'STRIPE' | 'ANROK' | 'PRECALCULATED';
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using PRECALCULATED as your tax type.
       */
      export interface PrecalculatedTaxConfig {
        /**
         * Amount of tax to be applied. This should be in the same currency and
         * denomination as the commit's invoice schedule
         */
        tax_amount: number;

        /**
         * Name of the tax to be applied. This may be used in an invoice line item
         * description.
         */
        tax_name?: string;
      }

      /**
       * Only applicable if using STRIPE as your payment gate type.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';

        /**
         * Metadata to be added to the Stripe invoice. Only applicable if using INVOICE as
         * your payment type.
         */
        invoice_metadata?: { [key: string]: string };

        /**
         * If true, the payment will be made assuming the customer is present (i.e. on
         * session).
         *
         * If false, the payment will be made assuming the customer is not present (i.e.
         * off session). For cardholders from a country with an e-mandate requirement (e.g.
         * India), the payment may be declined.
         *
         * If left blank, will default to false.
         */
        on_session_payment?: boolean;
      }
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }
  }

  export interface Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    access_schedule: Credit.AccessSchedule;

    product_id: string;

    /**
     * Which products the credit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the credit applies to all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the credit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the credit applies to all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: { [key: string]: string };

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

    /**
     * Optional configuration for credit hierarchy access control
     */
    hierarchy_configuration?: Credit.HierarchyConfiguration;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * If multiple credits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown. This field cannot
     * be used together with `applicable_product_ids` or `applicable_product_tags`.
     */
    specifiers?: Array<Credit.Specifier>;
  }

  export namespace Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed
       */
      credit_type_id?: string;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        amount: number;

        /**
         * RFC 3339 timestamp (exclusive)
         */
        ending_before: string;

        /**
         * RFC 3339 timestamp (inclusive)
         */
        starting_at: string;
      }
    }

    /**
     * Optional configuration for credit hierarchy access control
     */
    export interface HierarchyConfiguration {
      child_access:
        | HierarchyConfiguration.CommitHierarchyChildAccessAll
        | HierarchyConfiguration.CommitHierarchyChildAccessNone
        | HierarchyConfiguration.CommitHierarchyChildAccessContractIDs;
    }

    export namespace HierarchyConfiguration {
      export interface CommitHierarchyChildAccessAll {
        type: 'ALL';
      }

      export interface CommitHierarchyChildAccessNone {
        type: 'NONE';
      }

      export interface CommitHierarchyChildAccessContractIDs {
        contract_ids: Array<string>;

        type: 'CONTRACT_IDS';
      }
    }

    export interface Specifier {
      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the specifier will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the specifier will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
    }
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

    custom_fields?: { [key: string]: string };

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export namespace Discount {
    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    export interface Schedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: Schedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }
  }

  export interface Override {
    /**
     * RFC 3339 timestamp indicating when the override will start applying (inclusive)
     */
    starting_at: string;

    /**
     * tags identifying products whose rates are being overridden. Cannot be used in
     * conjunction with override_specifiers.
     */
    applicable_product_tags?: Array<string>;

    /**
     * RFC 3339 timestamp indicating when the override will stop applying (exclusive)
     */
    ending_before?: string;

    entitled?: boolean;

    /**
     * Indicates whether the override should only apply to commits. Defaults to
     * `false`. If `true`, you can specify relevant commits in `override_specifiers` by
     * passing `commit_ids`. if you do not specify `commit_ids`, then the override will
     * apply when consuming any prepaid or postpaid commit.
     */
    is_commit_specific?: boolean;

    /**
     * Required for MULTIPLIER type. Must be >=0.
     */
    multiplier?: number;

    /**
     * Cannot be used in conjunction with product_id or applicable_product_tags. If
     * provided, the override will apply to all products with the specified specifiers.
     */
    override_specifiers?: Array<Override.OverrideSpecifier>;

    /**
     * Required for OVERWRITE type.
     */
    overwrite_rate?: Override.OverwriteRate;

    /**
     * Required for EXPLICIT multiplier prioritization scheme and all TIERED overrides.
     * Under EXPLICIT prioritization, overwrites are prioritized first, and then tiered
     * and multiplier overrides are prioritized by their priority value (lowest first).
     * Must be > 0.
     */
    priority?: number;

    /**
     * ID of the product whose rate is being overridden. Cannot be used in conjunction
     * with override_specifiers.
     */
    product_id?: string;

    /**
     * Indicates whether the override applies to commit rates or list rates. Can only
     * be used for overrides that have `is_commit_specific` set to `true`. Defaults to
     * `"LIST_RATE"`.
     */
    target?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Required for TIERED type. Must have at least one tier.
     */
    tiers?: Array<Override.Tier>;

    /**
     * Overwrites are prioritized over multipliers and tiered overrides.
     */
    type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
  }

  export namespace Override {
    export interface OverrideSpecifier {
      billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to the
       * specified commits. If not provided, the override will apply to all commits.
       */
      commit_ids?: Array<string>;

      /**
       * A map of group names to values. The override will only apply to line items with
       * the specified presentation group values.
       */
      presentation_group_values?: { [key: string]: string };

      /**
       * A map of pricing group names to values. The override will only apply to products
       * with the specified pricing group values.
       */
      pricing_group_values?: { [key: string]: string };

      /**
       * If provided, the override will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the override will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to commits
       * created by the specified recurring commit ids.
       */
      recurring_commit_ids?: Array<string>;

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of product_id, product_tags, pricing_group_values, or
       * presentation_group_values. If provided, the override will only apply to credits
       * created by the specified recurring credit ids.
       */
      recurring_credit_ids?: Array<string>;
    }

    /**
     * Required for OVERWRITE type.
     */
    export interface OverwriteRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

      credit_type_id?: string;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: { [key: string]: unknown };

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
       * set to true.
       */
      is_prorated?: boolean;

      /**
       * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
       * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
       */
      price?: number;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<Shared.Tier>;
    }

    export interface Tier {
      multiplier: number;

      size?: number;
    }
  }

  export interface ProfessionalService {
    /**
     * Maximum amount for the term.
     */
    max_amount: number;

    product_id: string;

    /**
     * Quantity for the charge. Will be multiplied by unit_price to determine the
     * amount.
     */
    quantity: number;

    /**
     * Unit price for the charge. Will be multiplied by quantity to determine the
     * amount and must be specified.
     */
    unit_price: number;

    custom_fields?: { [key: string]: string };

    description?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export interface ResellerRoyalty {
    reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_tags?: Array<string>;

    aws_options?: ResellerRoyalty.AwsOptions;

    /**
     * Use null to indicate that the existing end timestamp should be removed.
     */
    ending_before?: string | null;

    fraction?: number;

    gcp_options?: ResellerRoyalty.GcpOptions;

    netsuite_reseller_id?: string;

    reseller_contract_value?: number;

    starting_at?: string;
  }

  export namespace ResellerRoyalty {
    export interface AwsOptions {
      aws_account_number?: string;

      aws_offer_id?: string;

      aws_payer_reference_id?: string;
    }

    export interface GcpOptions {
      gcp_account_id?: string;

      gcp_offer_id?: string;
    }
  }

  export interface ScheduledCharge {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: ScheduledCharge.Schedule;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export namespace ScheduledCharge {
    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    export interface Schedule {
      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;

      /**
       * This field is only applicable to commit invoice schedules. If true, this
       * schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;

      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      recurring_schedule?: Schedule.RecurringSchedule;

      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
      /**
       * Enter the unit price and quantity for the charge or instead only send the
       * amount. If amount is sent, the unit price is assumed to be the amount and
       * quantity is inferred to be 1.
       */
      export interface RecurringSchedule {
        amount_distribution: 'DIVIDED' | 'DIVIDED_ROUNDED' | 'EACH';

        /**
         * RFC 3339 timestamp (exclusive).
         */
        ending_before: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL';

        /**
         * RFC 3339 timestamp (inclusive).
         */
        starting_at: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }

      export interface ScheduleItem {
        /**
         * timestamp of the scheduled event
         */
        timestamp: string;

        /**
         * Amount for the charge. Can be provided instead of unit_price and quantity. If
         * amount is sent, the unit_price is assumed to be the amount and quantity is
         * inferred to be 1.
         */
        amount?: number;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount and must be specified with unit_price. If specified amount cannot be
         * provided.
         */
        quantity?: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount and must be specified with quantity. If specified amount cannot be
         * provided.
         */
        unit_price?: number;
      }
    }
  }
}

export interface ContractArchiveParams {
  /**
   * ID of the contract to archive
   */
  contract_id: string;

  /**
   * ID of the customer whose contract is to be archived
   */
  customer_id: string;

  /**
   * If false, the existing finalized invoices will remain after the contract is
   * archived.
   */
  void_invoices: boolean;
}

export interface ContractCreateHistoricalInvoicesParams {
  invoices: Array<ContractCreateHistoricalInvoicesParams.Invoice>;

  preview: boolean;
}

export namespace ContractCreateHistoricalInvoicesParams {
  export interface Invoice {
    contract_id: string;

    credit_type_id: string;

    customer_id: string;

    exclusive_end_date: string;

    inclusive_start_date: string;

    issue_date: string;

    usage_line_items: Array<Invoice.UsageLineItem>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    billable_status?: 'billable' | 'unbillable';

    breakdown_granularity?: 'HOUR' | 'DAY';

    custom_fields?: { [key: string]: string };
  }

  export namespace Invoice {
    export interface UsageLineItem {
      exclusive_end_date: string;

      inclusive_start_date: string;

      product_id: string;

      presentation_group_values?: { [key: string]: string };

      pricing_group_values?: { [key: string]: string };

      quantity?: number;

      subtotals_with_quantity?: Array<UsageLineItem.SubtotalsWithQuantity>;
    }

    export namespace UsageLineItem {
      export interface SubtotalsWithQuantity {
        exclusive_end_date: string;

        inclusive_start_date: string;

        quantity: number;
      }
    }
  }
}

export interface ContractListBalancesParams {
  customer_id: string;

  id?: string;

  /**
   * Return only balances that have access schedules that "cover" the provided date
   */
  covering_date?: string;

  /**
   * Include only balances that have any access before the provided date (exclusive)
   */
  effective_before?: string;

  /**
   * Include archived credits and credits from archived contracts.
   */
  include_archived?: boolean;

  /**
   * Include the balance of credits and commits in the response. Setting this flag
   * may cause the query to be slower.
   */
  include_balance?: boolean;

  /**
   * Include balances on the contract level.
   */
  include_contract_balances?: boolean;

  /**
   * Include ledgers in the response. Setting this flag may cause the query to be
   * slower.
   */
  include_ledgers?: boolean;

  /**
   * The maximum number of commits to return. Defaults to 25.
   */
  limit?: number;

  /**
   * The next page token from a previous response.
   */
  next_page?: string;

  /**
   * Include only balances that have any access on or after the provided date
   */
  starting_at?: string;
}

export interface ContractRetrieveRateScheduleParams {
  /**
   * Body param: ID of the contract to get the rate schedule for.
   */
  contract_id: string;

  /**
   * Body param: ID of the customer for whose contract to get the rate schedule for.
   */
  customer_id: string;

  /**
   * Query param: Max number of results that should be returned
   */
  limit?: number;

  /**
   * Query param: Cursor that indicates where the next page of results should start.
   */
  next_page?: string;

  /**
   * Body param: optional timestamp which overlaps with the returned rate schedule
   * segments. When not specified, the current timestamp will be used.
   */
  at?: string;

  /**
   * Body param: List of rate selectors, rates matching ANY of the selectors will be
   * included in the response. Passing no selectors will result in all rates being
   * returned.
   */
  selectors?: Array<ContractRetrieveRateScheduleParams.Selector>;
}

export namespace ContractRetrieveRateScheduleParams {
  export interface Selector {
    /**
     * Subscription rates matching the billing frequency will be included in the
     * response.
     */
    billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * List of pricing group key value pairs, rates containing the matching key / value
     * pairs will be included in the response.
     */
    partial_pricing_group_values?: { [key: string]: string };

    /**
     * List of pricing group key value pairs, rates matching all of the key / value
     * pairs will be included in the response.
     */
    pricing_group_values?: { [key: string]: string };

    /**
     * Rates matching the product id will be included in the response.
     */
    product_id?: string;

    /**
     * List of product tags, rates matching any of the tags will be included in the
     * response.
     */
    product_tags?: Array<string>;
  }
}

export interface ContractRetrieveSubscriptionQuantityHistoryParams {
  contract_id: string;

  customer_id: string;

  subscription_id: string;
}

export interface ContractScheduleProServicesInvoiceParams {
  contract_id: string;

  customer_id: string;

  /**
   * The date the invoice is issued
   */
  issued_at: string;

  /**
   * Each line requires an amount or both unit_price and quantity.
   */
  line_items: Array<ContractScheduleProServicesInvoiceParams.LineItem>;

  /**
   * The end date of the invoice header in Netsuite
   */
  netsuite_invoice_header_end?: string;

  /**
   * The start date of the invoice header in Netsuite
   */
  netsuite_invoice_header_start?: string;
}

export namespace ContractScheduleProServicesInvoiceParams {
  /**
   * Describes the line item for a professional service charge on an invoice.
   */
  export interface LineItem {
    professional_service_id: string;

    /**
     * If the professional_service_id was added on an amendment, this is required.
     */
    amendment_id?: string;

    /**
     * Amount for the term on the new invoice.
     */
    amount?: number;

    /**
     * For client use.
     */
    metadata?: string;

    /**
     * The end date for the billing period on the invoice.
     */
    netsuite_invoice_billing_end?: string;

    /**
     * The start date for the billing period on the invoice.
     */
    netsuite_invoice_billing_start?: string;

    /**
     * Quantity for the charge. Will be multiplied by unit_price to determine the
     * amount.
     */
    quantity?: number;

    /**
     * If specified, this overrides the unit price on the pro service term. Must also
     * provide quantity (but not amount) if providing unit_price.
     */
    unit_price?: number;
  }
}

export interface ContractSetUsageFilterParams {
  contract_id: string;

  customer_id: string;

  group_key: string;

  group_values: Array<string>;

  starting_at: string;
}

export interface ContractUpdateEndDateParams {
  /**
   * ID of the contract to update
   */
  contract_id: string;

  /**
   * ID of the customer whose contract is to be updated
   */
  customer_id: string;

  /**
   * If true, allows setting the contract end date earlier than the end_timestamp of
   * existing finalized invoices. Finalized invoices will be unchanged; if you want
   * to incorporate the new end date, you can void and regenerate finalized usage
   * invoices. Defaults to true.
   */
  allow_ending_before_finalized_invoice?: boolean;

  /**
   * RFC 3339 timestamp indicating when the contract will end (exclusive). If not
   * provided, the contract will be updated to be open-ended.
   */
  ending_before?: string;
}

Contracts.Products = Products;
Contracts.ProductListResponsesCursorPage = ProductListResponsesCursorPage;
Contracts.RateCards = RateCards;
Contracts.RateCardListResponsesCursorPage = RateCardListResponsesCursorPage;
Contracts.NamedSchedules = NamedSchedules;

export declare namespace Contracts {
  export {
    type ContractCreateResponse as ContractCreateResponse,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractAmendResponse as ContractAmendResponse,
    type ContractArchiveResponse as ContractArchiveResponse,
    type ContractCreateHistoricalInvoicesResponse as ContractCreateHistoricalInvoicesResponse,
    type ContractListBalancesResponse as ContractListBalancesResponse,
    type ContractRetrieveRateScheduleResponse as ContractRetrieveRateScheduleResponse,
    type ContractRetrieveSubscriptionQuantityHistoryResponse as ContractRetrieveSubscriptionQuantityHistoryResponse,
    type ContractScheduleProServicesInvoiceResponse as ContractScheduleProServicesInvoiceResponse,
    type ContractUpdateEndDateResponse as ContractUpdateEndDateResponse,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractAddManualBalanceEntryParams as ContractAddManualBalanceEntryParams,
    type ContractAmendParams as ContractAmendParams,
    type ContractArchiveParams as ContractArchiveParams,
    type ContractCreateHistoricalInvoicesParams as ContractCreateHistoricalInvoicesParams,
    type ContractListBalancesParams as ContractListBalancesParams,
    type ContractRetrieveRateScheduleParams as ContractRetrieveRateScheduleParams,
    type ContractRetrieveSubscriptionQuantityHistoryParams as ContractRetrieveSubscriptionQuantityHistoryParams,
    type ContractScheduleProServicesInvoiceParams as ContractScheduleProServicesInvoiceParams,
    type ContractSetUsageFilterParams as ContractSetUsageFilterParams,
    type ContractUpdateEndDateParams as ContractUpdateEndDateParams,
  };

  export {
    Products as Products,
    type ProductListItemState as ProductListItemState,
    type QuantityConversion as QuantityConversion,
    type QuantityRounding as QuantityRounding,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductArchiveResponse as ProductArchiveResponse,
    ProductListResponsesCursorPage as ProductListResponsesCursorPage,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductArchiveParams as ProductArchiveParams,
  };

  export {
    RateCards as RateCards,
    type RateCardCreateResponse as RateCardCreateResponse,
    type RateCardRetrieveResponse as RateCardRetrieveResponse,
    type RateCardUpdateResponse as RateCardUpdateResponse,
    type RateCardListResponse as RateCardListResponse,
    type RateCardArchiveResponse as RateCardArchiveResponse,
    type RateCardRetrieveRateScheduleResponse as RateCardRetrieveRateScheduleResponse,
    RateCardListResponsesCursorPage as RateCardListResponsesCursorPage,
    type RateCardCreateParams as RateCardCreateParams,
    type RateCardRetrieveParams as RateCardRetrieveParams,
    type RateCardUpdateParams as RateCardUpdateParams,
    type RateCardListParams as RateCardListParams,
    type RateCardArchiveParams as RateCardArchiveParams,
    type RateCardRetrieveRateScheduleParams as RateCardRetrieveRateScheduleParams,
  };

  export {
    NamedSchedules as NamedSchedules,
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
  };
}
