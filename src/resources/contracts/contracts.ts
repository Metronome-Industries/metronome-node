// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ContractsAPI from './contracts';
import * as Shared from '../shared';
import * as NamedSchedulesAPI from './named-schedules';
import * as ProductsAPI from './products';
import * as InvoicesAPI from '../customers/invoices';
import * as RateCardsAPI from './rate-cards/rate-cards';

export class Contracts extends APIResource {
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  rateCards: RateCardsAPI.RateCards = new RateCardsAPI.RateCards(this._client);
  namedSchedules: NamedSchedulesAPI.NamedSchedules = new NamedSchedulesAPI.NamedSchedules(this._client);

  /**
   * Create a new contract
   */
  create(body: ContractCreateParams, options?: Core.RequestOptions): Core.APIPromise<ContractCreateResponse> {
    return this._client.post('/contracts/create', { body, ...options });
  }

  /**
   * Get a specific contract
   */
  retrieve(
    body: ContractRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveResponse> {
    return this._client.post('/contracts/get', { body, ...options });
  }

  /**
   * List all contracts for a customer
   */
  list(body: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse> {
    return this._client.post('/contracts/list', { body, ...options });
  }

  /**
   * Add a manual balance entry
   */
  addManualBalanceEntry(
    body: ContractAddManualBalanceEntryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/contracts/addManualBalanceLedgerEntry', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Amend a contract
   */
  amend(body: ContractAmendParams, options?: Core.RequestOptions): Core.APIPromise<ContractAmendResponse> {
    return this._client.post('/contracts/amend', { body, ...options });
  }

  /**
   * Archive a contract
   */
  archive(
    body: ContractArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractArchiveResponse> {
    return this._client.post('/contracts/archive', { body, ...options });
  }

  /**
   * Creates historical usage invoices for a contract
   */
  createHistoricalInvoices(
    body: ContractCreateHistoricalInvoicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractCreateHistoricalInvoicesResponse> {
    return this._client.post('/contracts/createHistoricalInvoices', { body, ...options });
  }

  /**
   * List balances (commits and credits).
   */
  listBalances(
    body: ContractListBalancesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractListBalancesResponse> {
    return this._client.post('/contracts/customerBalances/list', { body, ...options });
  }

  /**
   * Get the rate schedule for the rate card on a given contract.
   */
  retrieveRateSchedule(
    params: ContractRetrieveRateScheduleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveRateScheduleResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.post('/contracts/getContractRateSchedule', {
      query: { limit, next_page },
      body,
      ...options,
    });
  }

  /**
   * Create a new, scheduled invoice for Professional Services terms on a contract.
   * This endpoint's availability is dependent on your client's configuration.
   */
  scheduleProServicesInvoice(
    body: ContractScheduleProServicesInvoiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractScheduleProServicesInvoiceResponse> {
    return this._client.post('/contracts/scheduleProServicesInvoice', { body, ...options });
  }

  /**
   * Set usage filter for a contract
   */
  setUsageFilter(body: ContractSetUsageFilterParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/contracts/setUsageFilter', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update the end date of a contract
   */
  updateEndDate(
    body: ContractUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractUpdateEndDateResponse> {
    return this._client.post('/contracts/updateEndDate', { body, ...options });
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

    custom_fields?: Record<string, string>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

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
     * This field's availability is dependent on your client's configuration.
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

    custom_fields?: Record<string, string>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

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
     * This field's availability is dependent on your client's configuration.
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

    product_custom_fields: Record<string, string>;

    product_id: string;

    product_name: string;

    product_tags: Array<string>;

    rate_card_id: string;

    starting_at: string;

    /**
     * The rate that will be used to rate a product when it is paid for by a commit.
     * This feature requires opt-in before it can be used. Please contact Metronome
     * support to enable this feature.
     */
    commit_rate?: Data.CommitRate;

    ending_before?: string;

    override_rate?: Shared.Rate;

    pricing_group_values?: Record<string, string>;
  }

  export namespace Data {
    /**
     * The rate that will be used to rate a product when it is paid for by a commit.
     * This feature requires opt-in before it can be used. Please contact Metronome
     * support to enable this feature.
     */
    export interface CommitRate {
      rate_type:
        | 'FLAT'
        | 'flat'
        | 'PERCENTAGE'
        | 'percentage'
        | 'SUBSCRIPTION'
        | 'subscription'
        | 'TIERED'
        | 'tiered'
        | 'CUSTOM'
        | 'custom';

      credit_type?: Shared.CreditTypeData;

      /**
       * Commit rate proration configuration. Only valid for SUBSCRIPTION rate_type.
       */
      is_prorated?: boolean;

      /**
       * Commit rate price. For FLAT rate_type, this must be >=0. For PERCENTAGE
       * rate_type, this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0
       * and <=1.
       */
      price?: number;

      /**
       * Commit rate quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<Shared.Tier>;

      /**
       * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
       * using list prices rather than the standard rates for this product on the
       * contract.
       */
      use_list_prices?: boolean;
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
   * This field's availability is dependent on your client's configuration.
   */
  billing_provider_configuration?: ContractCreateParams.BillingProviderConfiguration;

  commits?: Array<ContractCreateParams.Commit>;

  credits?: Array<ContractCreateParams.Credit>;

  custom_fields?: Record<string, string>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  discounts?: Array<ContractCreateParams.Discount>;

  /**
   * exclusive contract end time
   */
  ending_before?: string;

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
   * This field's availability is dependent on your client's configuration.
   */
  export interface BillingProviderConfiguration {
    billing_provider?: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace' | 'stripe' | 'netsuite';

    /**
     * The Metronome ID of the billing provider configuration
     */
    billing_provider_configuration_id?: string;

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
     * Which products the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: Record<string, string>;

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

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
     * If multiple commits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;
  }

  export namespace Commit {
    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

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
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    export interface InvoiceSchedule {
      /**
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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

    custom_fields?: Record<string, string>;

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

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
  }

  export namespace Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

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
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

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
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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
     * tags identifying products whose rates are being overridden
     */
    applicable_product_tags?: Array<string>;

    /**
     * RFC 3339 timestamp indicating when the override will stop applying (exclusive)
     */
    ending_before?: string;

    entitled?: boolean;

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
     * ID of the product whose rate is being overridden
     */
    product_id?: string;

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
      /**
       * A map of group names to values. The override will only apply to line items with
       * the specified presentation group values. Can only be used for multiplier
       * overrides.
       */
      presentation_group_values?: Record<string, string>;

      /**
       * A map of pricing group names to values. The override will only apply to products
       * with the specified pricing group values.
       */
      pricing_group_values?: Record<string, string>;

      /**
       * If provided, the override will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the override will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
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
      custom_rate?: Record<string, unknown>;

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type.
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

    custom_fields?: Record<string, string>;

    description?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
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
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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
    frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';

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
    day?: 'FIRST_OF_MONTH' | 'CONTRACT_START' | 'CUSTOM_DATE' | 'custom_date';

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

  custom_fields?: Record<string, string>;

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
     * Which products the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Which tags the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_tags?: Array<string>;

    custom_fields?: Record<string, string>;

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

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
     * If multiple commits are applicable, the one with the lower priority will apply
     * first.
     */
    priority?: number;

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;
  }

  export namespace Commit {
    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

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
     * Required for "POSTPAID" commits: the true up invoice will be generated at this
     * time and only one schedule item is allowed; the total must match access_schedule
     * amount. Optional for "PREPAID" commits: if not provided, this will be a
     * "complimentary" commit with no invoice.
     */
    export interface InvoiceSchedule {
      /**
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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

    custom_fields?: Record<string, string>;

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

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
  }

  export namespace Credit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

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
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

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
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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
     * tags identifying products whose rates are being overridden
     */
    applicable_product_tags?: Array<string>;

    /**
     * RFC 3339 timestamp indicating when the override will stop applying (exclusive)
     */
    ending_before?: string;

    entitled?: boolean;

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
     * ID of the product whose rate is being overridden
     */
    product_id?: string;

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
      /**
       * A map of group names to values. The override will only apply to line items with
       * the specified presentation group values. Can only be used for multiplier
       * overrides.
       */
      presentation_group_values?: Record<string, string>;

      /**
       * A map of pricing group names to values. The override will only apply to products
       * with the specified pricing group values.
       */
      pricing_group_values?: Record<string, string>;

      /**
       * If provided, the override will only apply to the product with the specified ID.
       */
      product_id?: string;

      /**
       * If provided, the override will only apply to products with all the specified
       * tags.
       */
      product_tags?: Array<string>;
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
      custom_rate?: Record<string, unknown>;

      /**
       * Default proration configuration. Only valid for SUBSCRIPTION rate_type.
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

    custom_fields?: Record<string, string>;

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
       * Defaults to USD if not passed. Only USD is supported at this time.
       */
      credit_type_id?: string;

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

    custom_fields?: Record<string, string>;
  }

  export namespace Invoice {
    export interface UsageLineItem {
      exclusive_end_date: string;

      inclusive_start_date: string;

      product_id: string;

      presentation_group_values?: Record<string, string>;

      pricing_group_values?: Record<string, string>;

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
   * Include credits from archived contracts.
   */
  include_archived?: boolean;

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
     * List of pricing group key value pairs, rates containing the matching key / value
     * pairs will be included in the response.
     */
    partial_pricing_group_values?: Record<string, string>;

    /**
     * List of pricing group key value pairs, rates matching all of the key / value
     * pairs will be included in the response.
     */
    pricing_group_values?: Record<string, string>;

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
   * RFC 3339 timestamp indicating when the contract will end (exclusive). If not
   * provided, the contract will be updated to be open-ended.
   */
  ending_before?: string;
}

export namespace Contracts {
  export import ContractCreateResponse = ContractsAPI.ContractCreateResponse;
  export import ContractRetrieveResponse = ContractsAPI.ContractRetrieveResponse;
  export import ContractListResponse = ContractsAPI.ContractListResponse;
  export import ContractAmendResponse = ContractsAPI.ContractAmendResponse;
  export import ContractArchiveResponse = ContractsAPI.ContractArchiveResponse;
  export import ContractCreateHistoricalInvoicesResponse = ContractsAPI.ContractCreateHistoricalInvoicesResponse;
  export import ContractListBalancesResponse = ContractsAPI.ContractListBalancesResponse;
  export import ContractRetrieveRateScheduleResponse = ContractsAPI.ContractRetrieveRateScheduleResponse;
  export import ContractScheduleProServicesInvoiceResponse = ContractsAPI.ContractScheduleProServicesInvoiceResponse;
  export import ContractUpdateEndDateResponse = ContractsAPI.ContractUpdateEndDateResponse;
  export import ContractCreateParams = ContractsAPI.ContractCreateParams;
  export import ContractRetrieveParams = ContractsAPI.ContractRetrieveParams;
  export import ContractListParams = ContractsAPI.ContractListParams;
  export import ContractAddManualBalanceEntryParams = ContractsAPI.ContractAddManualBalanceEntryParams;
  export import ContractAmendParams = ContractsAPI.ContractAmendParams;
  export import ContractArchiveParams = ContractsAPI.ContractArchiveParams;
  export import ContractCreateHistoricalInvoicesParams = ContractsAPI.ContractCreateHistoricalInvoicesParams;
  export import ContractListBalancesParams = ContractsAPI.ContractListBalancesParams;
  export import ContractRetrieveRateScheduleParams = ContractsAPI.ContractRetrieveRateScheduleParams;
  export import ContractScheduleProServicesInvoiceParams = ContractsAPI.ContractScheduleProServicesInvoiceParams;
  export import ContractSetUsageFilterParams = ContractsAPI.ContractSetUsageFilterParams;
  export import ContractUpdateEndDateParams = ContractsAPI.ContractUpdateEndDateParams;
  export import Products = ProductsAPI.Products;
  export import ProductListItemState = ProductsAPI.ProductListItemState;
  export import QuantityConversion = ProductsAPI.QuantityConversion;
  export import QuantityRounding = ProductsAPI.QuantityRounding;
  export import ProductCreateResponse = ProductsAPI.ProductCreateResponse;
  export import ProductRetrieveResponse = ProductsAPI.ProductRetrieveResponse;
  export import ProductUpdateResponse = ProductsAPI.ProductUpdateResponse;
  export import ProductListResponse = ProductsAPI.ProductListResponse;
  export import ProductArchiveResponse = ProductsAPI.ProductArchiveResponse;
  export import ProductListResponsesCursorPage = ProductsAPI.ProductListResponsesCursorPage;
  export import ProductCreateParams = ProductsAPI.ProductCreateParams;
  export import ProductRetrieveParams = ProductsAPI.ProductRetrieveParams;
  export import ProductUpdateParams = ProductsAPI.ProductUpdateParams;
  export import ProductListParams = ProductsAPI.ProductListParams;
  export import ProductArchiveParams = ProductsAPI.ProductArchiveParams;
  export import RateCards = RateCardsAPI.RateCards;
  export import RateCardCreateResponse = RateCardsAPI.RateCardCreateResponse;
  export import RateCardRetrieveResponse = RateCardsAPI.RateCardRetrieveResponse;
  export import RateCardUpdateResponse = RateCardsAPI.RateCardUpdateResponse;
  export import RateCardListResponse = RateCardsAPI.RateCardListResponse;
  export import RateCardRetrieveRateScheduleResponse = RateCardsAPI.RateCardRetrieveRateScheduleResponse;
  export import RateCardListResponsesCursorPage = RateCardsAPI.RateCardListResponsesCursorPage;
  export import RateCardCreateParams = RateCardsAPI.RateCardCreateParams;
  export import RateCardRetrieveParams = RateCardsAPI.RateCardRetrieveParams;
  export import RateCardUpdateParams = RateCardsAPI.RateCardUpdateParams;
  export import RateCardListParams = RateCardsAPI.RateCardListParams;
  export import RateCardRetrieveRateScheduleParams = RateCardsAPI.RateCardRetrieveRateScheduleParams;
  export import NamedSchedules = NamedSchedulesAPI.NamedSchedules;
  export import NamedScheduleRetrieveResponse = NamedSchedulesAPI.NamedScheduleRetrieveResponse;
  export import NamedScheduleRetrieveParams = NamedSchedulesAPI.NamedScheduleRetrieveParams;
  export import NamedScheduleUpdateParams = NamedSchedulesAPI.NamedScheduleUpdateParams;
}
