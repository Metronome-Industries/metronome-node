// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
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
  ProductListParams,
  ProductListResponse,
  ProductListResponsesCursorPage,
  ProductRetrieveParams,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './products';
import * as RateCardsAPI from './rate-cards/rate-cards';
import {
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
   */
  create(body: ContractCreateParams, options?: Core.RequestOptions): Core.APIPromise<ContractCreateResponse> {
    return this._client.post('/v1/contracts/create', { body, ...options });
  }

  /**
   * This is the v1 endpoint to get a contract. New clients should implement using
   * the v2 endpoint.
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
   */
  list(body: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse> {
    return this._client.post('/v1/contracts/list', { body, ...options });
  }

  /**
   * Add a manual balance entry
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
   */
  amend(body: ContractAmendParams, options?: Core.RequestOptions): Core.APIPromise<ContractAmendResponse> {
    return this._client.post('/v1/contracts/amend', { body, ...options });
  }

  /**
   * Archive a contract
   */
  archive(
    body: ContractArchiveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractArchiveResponse> {
    return this._client.post('/v1/contracts/archive', { body, ...options });
  }

  /**
   * Creates historical usage invoices for a contract
   */
  createHistoricalInvoices(
    body: ContractCreateHistoricalInvoicesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractCreateHistoricalInvoicesResponse> {
    return this._client.post('/v1/contracts/createHistoricalInvoices', { body, ...options });
  }

  /**
   * List balances (commits and credits).
   */
  listBalances(
    body: ContractListBalancesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractListBalancesResponse> {
    return this._client.post('/v1/contracts/customerBalances/list', { body, ...options });
  }

  /**
   * Get the rate schedule for the rate card on a given contract.
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
   * Create a new scheduled invoice for Professional Services terms on a contract.
   * This endpoint's availability is dependent on your client's configuration.
   */
  scheduleProServicesInvoice(
    body: ContractScheduleProServicesInvoiceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractScheduleProServicesInvoiceResponse> {
    return this._client.post('/v1/contracts/scheduleProServicesInvoice', { body, ...options });
  }

  /**
   * Set usage filter for a contract
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
   */
  updateEndDate(
    body: ContractUpdateEndDateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractUpdateEndDateResponse> {
    return this._client.post('/v1/contracts/updateEndDate', { body, ...options });
  }
}

export interface ContractCreateResponse {
  data: ContractCreateResponse.Data;
}

export namespace ContractCreateResponse {
  export interface Data {
    id: string;
  }
}

export interface ContractRetrieveResponse {
  data: ContractRetrieveResponse.Data;
}

export namespace ContractRetrieveResponse {
  export interface Data {
    id: string;

    amendments: Array<Data.Amendment>;

    current: Data.Current;

    customer_id: string;

    initial: Data.Initial;

    /**
     * RFC 3339 timestamp indicating when the contract was archived. If not returned,
     * the contract is not archived.
     */
    archived_at?: string;

    custom_fields?: Record<string, string>;

    /**
     * The billing provider configuration associated with a contract.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    /**
     * Determines which scheduled and commit charges to consolidate onto the Contract's
     * usage invoice. The charge's `timestamp` must match the usage invoice's
     * `ending_before` date for consolidation to occur. This field cannot be modified
     * after a Contract has been created. If this field is omitted, charges will appear
     * on a separate invoice from usage charges.
     */
    scheduled_charges_on_usage_invoices?: 'ALL';

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

      commits: Array<Amendment.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Amendment.Override>;

      scheduled_charges: Array<Amendment.ScheduledCharge>;

      starting_at: string;

      credits?: Array<Amendment.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Amendment.Discount>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Amendment.ProfessionalService>;

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
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

    export interface Current {
      commits: Array<Current.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Current.Override>;

      scheduled_charges: Array<Current.ScheduledCharge>;

      starting_at: string;

      transitions: Array<Current.Transition>;

      usage_statement_schedule: Current.UsageStatementSchedule;

      credits?: Array<Current.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Current.Discount>;

      ending_before?: string;

      name?: string;

      net_payment_terms_days?: number;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Current.ProfessionalService>;

      rate_card_id?: string;

      recurring_commits?: Array<Current.RecurringCommit>;

      recurring_credits?: Array<Current.RecurringCredit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Current.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;

      /**
       * Determines which scheduled and commit charges to consolidate onto the Contract's
       * usage invoice. The charge's `timestamp` must match the usage invoice's
       * `ending_before` date for consolidation to occur. This field cannot be modified
       * after a Contract has been created. If this field is omitted, charges will appear
       * on a separate invoice from usage charges.
       */
      scheduled_charges_on_usage_invoices?: 'ALL';

      threshold_billing_configuration?: Current.ThresholdBillingConfiguration;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      total_contract_value?: number;

      usage_filter?: Current.UsageFilter;
    }

    export namespace Current {
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Transition {
        from_contract_id: string;

        to_contract_id: string;

        type: 'SUPERSEDE' | 'RENEWAL';
      }

      export interface UsageStatementSchedule {
        /**
         * Contract usage statements follow a selected cadence based on this date.
         */
        billing_anchor_date: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

      export interface RecurringCommit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCommit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCommit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCommit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCommit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        invoice_amount?: RecurringCommit.InvoiceAmount;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCommit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        export interface InvoiceAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }
      }

      export interface RecurringCredit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCredit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCredit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCredit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCredit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCredit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }
      }

      export interface ResellerRoyalty {
        fraction: number;

        netsuite_reseller_id: string;

        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        starting_at: string;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        reseller_contract_value?: number;
      }

      export interface ThresholdBillingConfiguration {
        credit_balance_threshold_configuration?: ThresholdBillingConfiguration.CreditBalanceThresholdConfiguration;

        spend_threshold_configuration?: ThresholdBillingConfiguration.SpendThresholdConfiguration;
      }

      export namespace ThresholdBillingConfiguration {
        export interface CreditBalanceThresholdConfiguration {
          commit: CreditBalanceThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the amount the balance should be recharged to.
           */
          recharge_to_amount: number;

          /**
           * Specify the threshold amount for the contract. Each time the contract's balance
           * lowers to this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace CreditBalanceThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }

        export interface SpendThresholdConfiguration {
          commit: SpendThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the threshold amount for the contract. Each time the contract's usage
           * hits this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace SpendThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }
      }

      export interface UsageFilter {
        current: UsageFilter.Current | null;

        initial: UsageFilter.Initial;

        updates: Array<UsageFilter.Update>;
      }

      export namespace UsageFilter {
        export interface Current {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Initial {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Update {
          group_key: string;

          group_values: Array<string>;

          starting_at: string;
        }
      }
    }

    export interface Initial {
      commits: Array<Initial.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Initial.Override>;

      scheduled_charges: Array<Initial.ScheduledCharge>;

      starting_at: string;

      transitions: Array<Initial.Transition>;

      usage_statement_schedule: Initial.UsageStatementSchedule;

      credits?: Array<Initial.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Initial.Discount>;

      ending_before?: string;

      name?: string;

      net_payment_terms_days?: number;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Initial.ProfessionalService>;

      rate_card_id?: string;

      recurring_commits?: Array<Initial.RecurringCommit>;

      recurring_credits?: Array<Initial.RecurringCredit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Initial.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;

      /**
       * Determines which scheduled and commit charges to consolidate onto the Contract's
       * usage invoice. The charge's `timestamp` must match the usage invoice's
       * `ending_before` date for consolidation to occur. This field cannot be modified
       * after a Contract has been created. If this field is omitted, charges will appear
       * on a separate invoice from usage charges.
       */
      scheduled_charges_on_usage_invoices?: 'ALL';

      threshold_billing_configuration?: Initial.ThresholdBillingConfiguration;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      total_contract_value?: number;

      usage_filter?: Initial.UsageFilter;
    }

    export namespace Initial {
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Transition {
        from_contract_id: string;

        to_contract_id: string;

        type: 'SUPERSEDE' | 'RENEWAL';
      }

      export interface UsageStatementSchedule {
        /**
         * Contract usage statements follow a selected cadence based on this date.
         */
        billing_anchor_date: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

      export interface RecurringCommit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCommit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCommit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCommit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCommit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        invoice_amount?: RecurringCommit.InvoiceAmount;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCommit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        export interface InvoiceAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }
      }

      export interface RecurringCredit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCredit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCredit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCredit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCredit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCredit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }
      }

      export interface ResellerRoyalty {
        fraction: number;

        netsuite_reseller_id: string;

        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        starting_at: string;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        reseller_contract_value?: number;
      }

      export interface ThresholdBillingConfiguration {
        credit_balance_threshold_configuration?: ThresholdBillingConfiguration.CreditBalanceThresholdConfiguration;

        spend_threshold_configuration?: ThresholdBillingConfiguration.SpendThresholdConfiguration;
      }

      export namespace ThresholdBillingConfiguration {
        export interface CreditBalanceThresholdConfiguration {
          commit: CreditBalanceThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the amount the balance should be recharged to.
           */
          recharge_to_amount: number;

          /**
           * Specify the threshold amount for the contract. Each time the contract's balance
           * lowers to this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace CreditBalanceThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }

        export interface SpendThresholdConfiguration {
          commit: SpendThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the threshold amount for the contract. Each time the contract's usage
           * hits this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace SpendThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }
      }

      export interface UsageFilter {
        current: UsageFilter.Current | null;

        initial: UsageFilter.Initial;

        updates: Array<UsageFilter.Update>;
      }

      export namespace UsageFilter {
        export interface Current {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Initial {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Update {
          group_key: string;

          group_values: Array<string>;

          starting_at: string;
        }
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
      configuration?: Record<string, unknown>;
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

    current: Data.Current;

    customer_id: string;

    initial: Data.Initial;

    /**
     * RFC 3339 timestamp indicating when the contract was archived. If not returned,
     * the contract is not archived.
     */
    archived_at?: string;

    custom_fields?: Record<string, string>;

    /**
     * The billing provider configuration associated with a contract.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    /**
     * Determines which scheduled and commit charges to consolidate onto the Contract's
     * usage invoice. The charge's `timestamp` must match the usage invoice's
     * `ending_before` date for consolidation to occur. This field cannot be modified
     * after a Contract has been created. If this field is omitted, charges will appear
     * on a separate invoice from usage charges.
     */
    scheduled_charges_on_usage_invoices?: 'ALL';

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

      commits: Array<Amendment.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Amendment.Override>;

      scheduled_charges: Array<Amendment.ScheduledCharge>;

      starting_at: string;

      credits?: Array<Amendment.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Amendment.Discount>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Amendment.ProfessionalService>;

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
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

    export interface Current {
      commits: Array<Current.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Current.Override>;

      scheduled_charges: Array<Current.ScheduledCharge>;

      starting_at: string;

      transitions: Array<Current.Transition>;

      usage_statement_schedule: Current.UsageStatementSchedule;

      credits?: Array<Current.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Current.Discount>;

      ending_before?: string;

      name?: string;

      net_payment_terms_days?: number;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Current.ProfessionalService>;

      rate_card_id?: string;

      recurring_commits?: Array<Current.RecurringCommit>;

      recurring_credits?: Array<Current.RecurringCredit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Current.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;

      /**
       * Determines which scheduled and commit charges to consolidate onto the Contract's
       * usage invoice. The charge's `timestamp` must match the usage invoice's
       * `ending_before` date for consolidation to occur. This field cannot be modified
       * after a Contract has been created. If this field is omitted, charges will appear
       * on a separate invoice from usage charges.
       */
      scheduled_charges_on_usage_invoices?: 'ALL';

      threshold_billing_configuration?: Current.ThresholdBillingConfiguration;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      total_contract_value?: number;

      usage_filter?: Current.UsageFilter;
    }

    export namespace Current {
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Transition {
        from_contract_id: string;

        to_contract_id: string;

        type: 'SUPERSEDE' | 'RENEWAL';
      }

      export interface UsageStatementSchedule {
        /**
         * Contract usage statements follow a selected cadence based on this date.
         */
        billing_anchor_date: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

      export interface RecurringCommit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCommit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCommit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCommit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCommit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        invoice_amount?: RecurringCommit.InvoiceAmount;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCommit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        export interface InvoiceAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }
      }

      export interface RecurringCredit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCredit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCredit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCredit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCredit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCredit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }
      }

      export interface ResellerRoyalty {
        fraction: number;

        netsuite_reseller_id: string;

        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        starting_at: string;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        reseller_contract_value?: number;
      }

      export interface ThresholdBillingConfiguration {
        credit_balance_threshold_configuration?: ThresholdBillingConfiguration.CreditBalanceThresholdConfiguration;

        spend_threshold_configuration?: ThresholdBillingConfiguration.SpendThresholdConfiguration;
      }

      export namespace ThresholdBillingConfiguration {
        export interface CreditBalanceThresholdConfiguration {
          commit: CreditBalanceThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the amount the balance should be recharged to.
           */
          recharge_to_amount: number;

          /**
           * Specify the threshold amount for the contract. Each time the contract's balance
           * lowers to this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace CreditBalanceThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }

        export interface SpendThresholdConfiguration {
          commit: SpendThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the threshold amount for the contract. Each time the contract's usage
           * hits this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace SpendThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }
      }

      export interface UsageFilter {
        current: UsageFilter.Current | null;

        initial: UsageFilter.Initial;

        updates: Array<UsageFilter.Update>;
      }

      export namespace UsageFilter {
        export interface Current {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Initial {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Update {
          group_key: string;

          group_values: Array<string>;

          starting_at: string;
        }
      }
    }

    export interface Initial {
      commits: Array<Initial.Commit>;

      created_at: string;

      created_by: string;

      overrides: Array<Initial.Override>;

      scheduled_charges: Array<Initial.ScheduledCharge>;

      starting_at: string;

      transitions: Array<Initial.Transition>;

      usage_statement_schedule: Initial.UsageStatementSchedule;

      credits?: Array<Initial.Credit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      discounts?: Array<Initial.Discount>;

      ending_before?: string;

      name?: string;

      net_payment_terms_days?: number;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      professional_services?: Array<Initial.ProfessionalService>;

      rate_card_id?: string;

      recurring_commits?: Array<Initial.RecurringCommit>;

      recurring_credits?: Array<Initial.RecurringCredit>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      reseller_royalties?: Array<Initial.ResellerRoyalty>;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;

      /**
       * Determines which scheduled and commit charges to consolidate onto the Contract's
       * usage invoice. The charge's `timestamp` must match the usage invoice's
       * `ending_before` date for consolidation to occur. This field cannot be modified
       * after a Contract has been created. If this field is omitted, charges will appear
       * on a separate invoice from usage charges.
       */
      scheduled_charges_on_usage_invoices?: 'ALL';

      threshold_billing_configuration?: Initial.ThresholdBillingConfiguration;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      total_contract_value?: number;

      usage_filter?: Initial.UsageFilter;
    }

    export namespace Initial {
      export interface Commit {
        id: string;

        product: Commit.Product;

        type: 'PREPAID' | 'POSTPAID';

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        access_schedule?: Commit.AccessSchedule;

        /**
         * (DEPRECATED) Use access_schedule + invoice_schedule instead.
         */
        amount?: number;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
         * commit is not archived.
         */
        archived_at?: string;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Commit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * The contract that this commit will be billed on.
         */
        invoice_contract?: Commit.InvoiceContract;

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        invoice_schedule?: Commit.InvoiceSchedule;

        /**
         * A list of ordered events that impact the balance of a commit. For example, an
         * invoice deduction or a rollover.
         */
        ledger?: Array<
          | Commit.UnionMember0
          | Commit.UnionMember1
          | Commit.UnionMember2
          | Commit.UnionMember3
          | Commit.UnionMember4
          | Commit.UnionMember5
          | Commit.UnionMember6
          | Commit.UnionMember7
          | Commit.UnionMember8
          | Commit.UnionMember9
          | Commit.UnionMember10
          | Commit.UnionMember11
          | Commit.UnionMember12
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        rolled_over_from?: Commit.RolledOverFrom;

        rollover_fraction?: number;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Commit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits purposed with
         * this commit.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        /**
         * The contract that this commit will be billed on.
         */
        export interface InvoiceContract {
          id: string;
        }

        /**
         * The schedule that the customer will be invoiced for this commit.
         */
        export interface InvoiceSchedule {
          credit_type?: InvoiceSchedule.CreditType;

          schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
        }

        export namespace InvoiceSchedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember3 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_EXPIRATION';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CANCELED';
        }

        export interface UnionMember5 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_CREDITED';
        }

        export interface UnionMember6 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
        }

        export interface UnionMember7 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember8 {
          amount: number;

          new_contract_id: string;

          segment_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_ROLLOVER';
        }

        export interface UnionMember9 {
          amount: number;

          invoice_id: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_TRUEUP';
        }

        export interface UnionMember10 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'PREPAID_COMMIT_MANUAL';
        }

        export interface UnionMember11 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'POSTPAID_COMMIT_MANUAL';
        }

        export interface UnionMember12 {
          amount: number;

          timestamp: string;

          type: 'POSTPAID_COMMIT_EXPIRATION';
        }

        export interface RolledOverFrom {
          commit_id: string;

          contract_id: string;
        }
      }

      export interface Override {
        id: string;

        starting_at: string;

        applicable_product_tags?: Array<string>;

        credit_type?: Override.CreditType;

        ending_before?: string;

        entitled?: boolean;

        is_commit_specific?: boolean;

        /**
         * Default proration configuration. Only valid for SUBSCRIPTION rate_type. Must be
         * set to true.
         */
        is_prorated?: boolean;

        multiplier?: number;

        override_specifiers?: Array<Override.OverrideSpecifier>;

        override_tiers?: Array<Override.OverrideTier>;

        overwrite_rate?: Override.OverwriteRate;

        /**
         * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
         * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
         */
        price?: number;

        priority?: number;

        product?: Override.Product;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        rate_type?: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

        target?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<Override.Tier>;

        type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        value?: Record<string, unknown>;
      }

      export namespace Override {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface OverrideSpecifier {
          commit_ids?: Array<string>;

          presentation_group_values?: Record<string, string | null>;

          pricing_group_values?: Record<string, string>;

          product_id?: string;

          product_tags?: Array<string>;

          recurring_commit_ids?: Array<string>;

          recurring_credit_ids?: Array<string>;
        }

        export interface OverrideTier {
          multiplier: number;

          size?: number;
        }

        export interface OverwriteRate {
          rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'CUSTOM';

          credit_type?: OverwriteRate.CreditType;

          /**
           * Only set for CUSTOM rate_type. This field is interpreted by custom rate
           * processors.
           */
          custom_rate?: Record<string, unknown>;

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
          tiers?: Array<OverwriteRate.Tier>;
        }

        export namespace OverwriteRate {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface Tier {
            price: number;

            size?: number;
          }
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      export interface ScheduledCharge {
        id: string;

        product: ScheduledCharge.Product;

        schedule: ScheduledCharge.Schedule;

        archived_at?: string;

        custom_fields?: Record<string, string>;

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
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface Transition {
        from_contract_id: string;

        to_contract_id: string;

        type: 'SUPERSEDE' | 'RENEWAL';
      }

      export interface UsageStatementSchedule {
        /**
         * Contract usage statements follow a selected cadence based on this date.
         */
        billing_anchor_date: string;

        frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
      }

      export interface Credit {
        id: string;

        product: Credit.Product;

        type: 'CREDIT';

        /**
         * The schedule that the customer will gain access to the credits.
         */
        access_schedule?: Credit.AccessSchedule;

        applicable_contract_ids?: Array<string>;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        /**
         * The current balance of the credit or commit. This balance reflects the amount of
         * credit or commit that the customer has access to use at this moment - thus,
         * expired and upcoming credit or commit segments contribute 0 to the balance. The
         * balance will match the sum of all ledger entries with the exception of the case
         * where the sum of negative manual ledger entries exceeds the positive amount
         * remaining on the credit or commit - in that case, the balance will be 0. All
         * manual ledger entries associated with active credit or commit segments are
         * included in the balance, including future-dated manual ledger entries.
         */
        balance?: number;

        contract?: Credit.Contract;

        custom_fields?: Record<string, string>;

        description?: string;

        /**
         * A list of ordered events that impact the balance of a credit. For example, an
         * invoice deduction or an expiration.
         */
        ledger?: Array<
          | Credit.UnionMember0
          | Credit.UnionMember1
          | Credit.UnionMember2
          | Credit.UnionMember3
          | Credit.UnionMember4
          | Credit.UnionMember5
        >;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;

        /**
         * If multiple credits or commits are applicable, the one with the lower priority
         * will apply first.
         */
        priority?: number;

        rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * This field's availability is dependent on your client's configuration.
         */
        salesforce_opportunity_id?: string;

        /**
         * Prevents the creation of duplicates. If a request to create a commit or credit
         * is made with a uniqueness key that was previously used to create a commit or
         * credit, a new record will not be created and the request will fail with a 409
         * error.
         */
        uniqueness_key?: string;
      }

      export namespace Credit {
        export interface Product {
          id: string;

          name: string;
        }

        /**
         * The schedule that the customer will gain access to the credits.
         */
        export interface AccessSchedule {
          schedule_items: Array<AccessSchedule.ScheduleItem>;

          credit_type?: AccessSchedule.CreditType;
        }

        export namespace AccessSchedule {
          export interface ScheduleItem {
            id: string;

            amount: number;

            ending_before: string;

            starting_at: string;
          }

          export interface CreditType {
            id: string;

            name: string;
          }
        }

        export interface Contract {
          id: string;
        }

        export interface UnionMember0 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_SEGMENT_START';
        }

        export interface UnionMember1 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
        }

        export interface UnionMember2 {
          amount: number;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_EXPIRATION';
        }

        export interface UnionMember3 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CANCELED';
        }

        export interface UnionMember4 {
          amount: number;

          invoice_id: string;

          segment_id: string;

          timestamp: string;

          type: 'CREDIT_CREDITED';
        }

        export interface UnionMember5 {
          amount: number;

          reason: string;

          timestamp: string;

          type: 'CREDIT_MANUAL';
        }
      }

      export interface Discount {
        id: string;

        product: Discount.Product;

        schedule: Discount.Schedule;

        custom_fields?: Record<string, string>;

        name?: string;

        /**
         * This field's availability is dependent on your client's configuration.
         */
        netsuite_sales_order_id?: string;
      }

      export namespace Discount {
        export interface Product {
          id: string;

          name: string;
        }

        export interface Schedule {
          credit_type?: Schedule.CreditType;

          schedule_items?: Array<Schedule.ScheduleItem>;
        }

        export namespace Schedule {
          export interface CreditType {
            id: string;

            name: string;
          }

          export interface ScheduleItem {
            id: string;

            amount: number;

            invoice_id: string;

            quantity: number;

            timestamp: string;

            unit_price: number;
          }
        }
      }

      export interface ProfessionalService {
        id: string;

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

      export interface RecurringCommit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCommit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCommit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCommit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCommit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        invoice_amount?: RecurringCommit.InvoiceAmount;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCommit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }

        /**
         * The amount the customer should be billed for the commit. Not required.
         */
        export interface InvoiceAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }
      }

      export interface RecurringCredit {
        id: string;

        /**
         * The amount of commit to grant.
         */
        access_amount: RecurringCredit.AccessAmount;

        /**
         * The amount of time the created commits will be valid for
         */
        commit_duration: RecurringCredit.CommitDuration;

        /**
         * Will be passed down to the individual commits
         */
        priority: number;

        product: RecurringCredit.Product;

        /**
         * Whether the created commits will use the commit rate or list rate
         */
        rate_type: 'COMMIT_RATE' | 'LIST_RATE';

        /**
         * Determines the start time for the first commit
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

        contract?: RecurringCredit.Contract;

        /**
         * Will be passed down to the individual commits
         */
        description?: string;

        /**
         * Determines when the contract will stop creating recurring commits. Optional
         */
        ending_before?: string;

        /**
         * Displayed on invoices. Will be passed through to the individual commits
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
         * The frequency at which the recurring commits will be created. If not provided: -
         * The commits will be created on the usage invoice frequency. If provided: - The
         * period defined in the duration will correspond to this frequency. - Commits will
         * be created aligned with the recurring commit's start_date rather than the usage
         * invoice dates.
         */
        recurrence_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        /**
         * Will be passed down to the individual commits. This controls how much of an
         * individual unexpired commit will roll over upon contract transition. Must be
         * between 0 and 1.
         */
        rollover_fraction?: number;
      }

      export namespace RecurringCredit {
        /**
         * The amount of commit to grant.
         */
        export interface AccessAmount {
          credit_type_id: string;

          quantity: number;

          unit_price: number;
        }

        /**
         * The amount of time the created commits will be valid for
         */
        export interface CommitDuration {
          value: number;

          unit?: 'PERIODS';
        }

        export interface Product {
          id: string;

          name: string;
        }

        export interface Contract {
          id: string;
        }
      }

      export interface ResellerRoyalty {
        fraction: number;

        netsuite_reseller_id: string;

        reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

        starting_at: string;

        applicable_product_ids?: Array<string>;

        applicable_product_tags?: Array<string>;

        aws_account_number?: string;

        aws_offer_id?: string;

        aws_payer_reference_id?: string;

        ending_before?: string;

        gcp_account_id?: string;

        gcp_offer_id?: string;

        reseller_contract_value?: number;
      }

      export interface ThresholdBillingConfiguration {
        credit_balance_threshold_configuration?: ThresholdBillingConfiguration.CreditBalanceThresholdConfiguration;

        spend_threshold_configuration?: ThresholdBillingConfiguration.SpendThresholdConfiguration;
      }

      export namespace ThresholdBillingConfiguration {
        export interface CreditBalanceThresholdConfiguration {
          commit: CreditBalanceThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the amount the balance should be recharged to.
           */
          recharge_to_amount: number;

          /**
           * Specify the threshold amount for the contract. Each time the contract's balance
           * lowers to this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace CreditBalanceThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }

        export interface SpendThresholdConfiguration {
          commit: SpendThresholdConfiguration.Commit;

          /**
           * When set to false, the contract will not be evaluated against the
           * threshold_amount. Toggling to true will result an immediate evaluation,
           * regardless of prior state
           */
          is_enabled: boolean;

          /**
           * Specify the threshold amount for the contract. Each time the contract's usage
           * hits this amount, a threshold charge will be initiated.
           */
          threshold_amount: number;
        }

        export namespace SpendThresholdConfiguration {
          export interface Commit {
            product_id: string;

            /**
             * Which products the threshold commit applies to. If both applicable_product_ids
             * and applicable_product_tags are not provided, the commit applies to all
             * products.
             */
            applicable_product_ids?: Array<string>;

            /**
             * Which tags the threshold commit applies to. If both applicable_product_ids and
             * applicable_product_tags are not provided, the commit applies to all products.
             */
            applicable_product_tags?: Array<string>;

            description?: string;

            /**
             * Specify the name of the line item for the threshold charge. If left blank, it
             * will default to the commit product name.
             */
            name?: string;
          }
        }
      }

      export interface UsageFilter {
        current: UsageFilter.Current | null;

        initial: UsageFilter.Initial;

        updates: Array<UsageFilter.Update>;
      }

      export namespace UsageFilter {
        export interface Current {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Initial {
          group_key: string;

          group_values: Array<string>;

          starting_at?: string;
        }

        export interface Update {
          group_key: string;

          group_values: Array<string>;

          starting_at: string;
        }
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
      configuration?: Record<string, unknown>;
    }
  }
}

export interface ContractAmendResponse {
  data: ContractAmendResponse.Data;
}

export namespace ContractAmendResponse {
  export interface Data {
    id: string;
  }
}

export interface ContractArchiveResponse {
  data: ContractArchiveResponse.Data;
}

export namespace ContractArchiveResponse {
  export interface Data {
    id: string;
  }
}

export interface ContractCreateHistoricalInvoicesResponse {
  data: Array<ContractCreateHistoricalInvoicesResponse.Data>;
}

export namespace ContractCreateHistoricalInvoicesResponse {
  export interface Data {
    id: string;

    credit_type: Data.CreditType;

    customer_id: string;

    line_items: Array<Data.LineItem>;

    status: string;

    total: number;

    type: string;

    amendment_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    billable_status?: 'billable' | 'unbillable';

    contract_custom_fields?: Record<string, string>;

    contract_id?: string;

    correction_record?: Data.CorrectionRecord;

    /**
     * When the invoice was created (UTC). This field is present for correction
     * invoices only.
     */
    created_at?: string;

    custom_fields?: Record<string, unknown>;

    customer_custom_fields?: Record<string, string>;

    /**
     * End of the usage period this invoice covers (UTC)
     */
    end_timestamp?: string;

    external_invoice?: Data.ExternalInvoice | null;

    invoice_adjustments?: Array<Data.InvoiceAdjustment>;

    /**
     * When the invoice was issued (UTC)
     */
    issued_at?: string;

    net_payment_terms_days?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    plan_custom_fields?: Record<string, string>;

    plan_id?: string;

    plan_name?: string;

    /**
     * only present for beta contract invoices with reseller royalties
     */
    reseller_royalty?: Data.ResellerRoyalty;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    salesforce_opportunity_id?: string;

    /**
     * Beginning of the usage period this invoice covers (UTC)
     */
    start_timestamp?: string;

    subtotal?: number;
  }

  export namespace Data {
    export interface CreditType {
      id: string;

      name: string;
    }

    export interface LineItem {
      credit_type: LineItem.CreditType;

      name: string;

      total: number;

      /**
       * only present for beta contract invoices
       */
      applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

      /**
       * only present for beta contract invoices
       */
      commit_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      commit_id?: string;

      /**
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      commit_netsuite_item_id?: string;

      /**
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      commit_netsuite_sales_order_id?: string;

      /**
       * only present for beta contract invoices
       */
      commit_segment_id?: string;

      /**
       * only present for beta contract invoices
       */
      commit_type?: string;

      custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      ending_before?: string;

      group_key?: string;

      group_value?: string | null;

      /**
       * only present for beta contract invoices
       */
      is_prorated?: boolean;

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      list_price?: LineItem.ListPrice;

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
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      netsuite_item_id?: string;

      /**
       * only present for beta contract invoices
       */
      postpaid_commit?: LineItem.PostpaidCommit;

      /**
       * if presentation groups are used, this will contain the values used to break down
       * the line item
       */
      presentation_group_values?: Record<string, string | null>;

      /**
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      product_custom_fields?: Record<string, string>;

      product_id?: string;

      product_type?: string;

      /**
       * only present for beta contract invoices
       */
      professional_service_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      professional_service_id?: string;

      quantity?: number;

      reseller_type?: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      scheduled_charge_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      scheduled_charge_id?: string;

      /**
       * only present for beta contract invoices
       */
      starting_at?: string;

      sub_line_items?: Array<LineItem.SubLineItem>;

      tier?: LineItem.Tier;

      /**
       * only present for beta contract invoices
       */
      unit_price?: number;
    }

    export namespace LineItem {
      export interface CreditType {
        id: string;

        name: string;
      }

      /**
       * only present for beta contract invoices
       */
      export interface AppliedCommitOrCredit {
        id: string;

        type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
      }

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      export interface ListPrice {
        rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        credit_type?: ListPrice.CreditType;

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        custom_rate?: Record<string, unknown>;

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
         * if pricing groups are used, this will contain the values used to calculate the
         * price
         */
        pricing_group_values?: Record<string, string>;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<ListPrice.Tier>;

        /**
         * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
         * using list prices rather than the standard rates for this product on the
         * contract.
         */
        use_list_prices?: boolean;
      }

      export namespace ListPrice {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      /**
       * only present for beta contract invoices
       */
      export interface PostpaidCommit {
        id: string;
      }

      export interface SubLineItem {
        custom_fields: Record<string, string>;

        name: string;

        quantity: number;

        subtotal: number;

        charge_id?: string;

        credit_grant_id?: string;

        /**
         * The end date for the charge (for seats charges only).
         */
        end_date?: string;

        /**
         * the unit price for this charge, present only if the charge is not tiered and the
         * quantity is nonzero
         */
        price?: number;

        /**
         * The start date for the charge (for seats charges only).
         */
        start_date?: string;

        /**
         * when the current tier started and ends (for tiered charges only)
         */
        tier_period?: SubLineItem.TierPeriod;

        tiers?: Array<SubLineItem.Tier>;
      }

      export namespace SubLineItem {
        /**
         * when the current tier started and ends (for tiered charges only)
         */
        export interface TierPeriod {
          starting_at: string;

          ending_before?: string;
        }

        export interface Tier {
          price: number;

          quantity: number;

          /**
           * at what metric amount this tier begins
           */
          starting_at: number;

          subtotal: number;
        }
      }

      export interface Tier {
        level: number;

        starting_at: string;

        size?: string | null;
      }
    }

    export interface CorrectionRecord {
      corrected_invoice_id: string;

      memo: string;

      reason: string;

      corrected_external_invoice?: CorrectionRecord.CorrectedExternalInvoice;
    }

    export namespace CorrectionRecord {
      export interface CorrectedExternalInvoice {
        billing_provider_type:
          | 'aws_marketplace'
          | 'stripe'
          | 'netsuite'
          | 'custom'
          | 'azure_marketplace'
          | 'quickbooks_online'
          | 'workday'
          | 'gcp_marketplace';

        external_status?:
          | 'DRAFT'
          | 'FINALIZED'
          | 'PAID'
          | 'UNCOLLECTIBLE'
          | 'VOID'
          | 'DELETED'
          | 'PAYMENT_FAILED'
          | 'INVALID_REQUEST_ERROR'
          | 'SKIPPED'
          | 'SENT'
          | 'QUEUED';

        invoice_id?: string;

        issued_at_timestamp?: string;
      }
    }

    export interface ExternalInvoice {
      billing_provider_type:
        | 'aws_marketplace'
        | 'stripe'
        | 'netsuite'
        | 'custom'
        | 'azure_marketplace'
        | 'quickbooks_online'
        | 'workday'
        | 'gcp_marketplace';

      external_status?:
        | 'DRAFT'
        | 'FINALIZED'
        | 'PAID'
        | 'UNCOLLECTIBLE'
        | 'VOID'
        | 'DELETED'
        | 'PAYMENT_FAILED'
        | 'INVALID_REQUEST_ERROR'
        | 'SKIPPED'
        | 'SENT'
        | 'QUEUED';

      invoice_id?: string;

      issued_at_timestamp?: string;
    }

    export interface InvoiceAdjustment {
      credit_type: InvoiceAdjustment.CreditType;

      name: string;

      total: number;

      credit_grant_custom_fields?: Record<string, string>;

      credit_grant_id?: string;
    }

    export namespace InvoiceAdjustment {
      export interface CreditType {
        id: string;

        name: string;
      }
    }

    /**
     * only present for beta contract invoices with reseller royalties
     */
    export interface ResellerRoyalty {
      fraction: string;

      netsuite_reseller_id: string;

      reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      aws_options?: ResellerRoyalty.AwsOptions;

      gcp_options?: ResellerRoyalty.GcpOptions;
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
  }
}

export interface ContractListBalancesResponse {
  data: Array<ContractListBalancesResponse.UnionMember0 | ContractListBalancesResponse.UnionMember1>;

  next_page: string | null;
}

export namespace ContractListBalancesResponse {
  export interface UnionMember0 {
    id: string;

    product: UnionMember0.Product;

    type: 'PREPAID' | 'POSTPAID';

    /**
     * The schedule that the customer will gain access to the credits purposed with
     * this commit.
     */
    access_schedule?: UnionMember0.AccessSchedule;

    /**
     * (DEPRECATED) Use access_schedule + invoice_schedule instead.
     */
    amount?: number;

    applicable_contract_ids?: Array<string>;

    applicable_product_ids?: Array<string>;

    applicable_product_tags?: Array<string>;

    /**
     * RFC 3339 timestamp indicating when the commit was archived. If not provided, the
     * commit is not archived.
     */
    archived_at?: string;

    /**
     * The current balance of the credit or commit. This balance reflects the amount of
     * credit or commit that the customer has access to use at this moment - thus,
     * expired and upcoming credit or commit segments contribute 0 to the balance. The
     * balance will match the sum of all ledger entries with the exception of the case
     * where the sum of negative manual ledger entries exceeds the positive amount
     * remaining on the credit or commit - in that case, the balance will be 0. All
     * manual ledger entries associated with active credit or commit segments are
     * included in the balance, including future-dated manual ledger entries.
     */
    balance?: number;

    contract?: UnionMember0.Contract;

    custom_fields?: Record<string, string>;

    description?: string;

    /**
     * The contract that this commit will be billed on.
     */
    invoice_contract?: UnionMember0.InvoiceContract;

    /**
     * The schedule that the customer will be invoiced for this commit.
     */
    invoice_schedule?: UnionMember0.InvoiceSchedule;

    /**
     * A list of ordered events that impact the balance of a commit. For example, an
     * invoice deduction or a rollover.
     */
    ledger?: Array<
      | UnionMember0.UnionMember0
      | UnionMember0.UnionMember1
      | UnionMember0.UnionMember2
      | UnionMember0.UnionMember3
      | UnionMember0.UnionMember4
      | UnionMember0.UnionMember5
      | UnionMember0.UnionMember6
      | UnionMember0.UnionMember7
      | UnionMember0.UnionMember8
      | UnionMember0.UnionMember9
      | UnionMember0.UnionMember10
      | UnionMember0.UnionMember11
      | UnionMember0.UnionMember12
    >;

    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * If multiple credits or commits are applicable, the one with the lower priority
     * will apply first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    rolled_over_from?: UnionMember0.RolledOverFrom;

    rollover_fraction?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    salesforce_opportunity_id?: string;

    /**
     * Prevents the creation of duplicates. If a request to create a commit or credit
     * is made with a uniqueness key that was previously used to create a commit or
     * credit, a new record will not be created and the request will fail with a 409
     * error.
     */
    uniqueness_key?: string;
  }

  export namespace UnionMember0 {
    export interface Product {
      id: string;

      name: string;
    }

    /**
     * The schedule that the customer will gain access to the credits purposed with
     * this commit.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      credit_type?: AccessSchedule.CreditType;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        id: string;

        amount: number;

        ending_before: string;

        starting_at: string;
      }

      export interface CreditType {
        id: string;

        name: string;
      }
    }

    export interface Contract {
      id: string;
    }

    /**
     * The contract that this commit will be billed on.
     */
    export interface InvoiceContract {
      id: string;
    }

    /**
     * The schedule that the customer will be invoiced for this commit.
     */
    export interface InvoiceSchedule {
      credit_type?: InvoiceSchedule.CreditType;

      schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
    }

    export namespace InvoiceSchedule {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface ScheduleItem {
        id: string;

        amount: number;

        invoice_id: string;

        quantity: number;

        timestamp: string;

        unit_price: number;
      }
    }

    export interface UnionMember0 {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_SEGMENT_START';
    }

    export interface UnionMember1 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
    }

    export interface UnionMember2 {
      amount: number;

      new_contract_id: string;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_ROLLOVER';
    }

    export interface UnionMember3 {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_EXPIRATION';
    }

    export interface UnionMember4 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_CANCELED';
    }

    export interface UnionMember5 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_CREDITED';
    }

    export interface UnionMember6 {
      amount: number;

      timestamp: string;

      type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
    }

    export interface UnionMember7 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
    }

    export interface UnionMember8 {
      amount: number;

      new_contract_id: string;

      segment_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_ROLLOVER';
    }

    export interface UnionMember9 {
      amount: number;

      invoice_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_TRUEUP';
    }

    export interface UnionMember10 {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_MANUAL';
    }

    export interface UnionMember11 {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_MANUAL';
    }

    export interface UnionMember12 {
      amount: number;

      timestamp: string;

      type: 'POSTPAID_COMMIT_EXPIRATION';
    }

    export interface RolledOverFrom {
      commit_id: string;

      contract_id: string;
    }
  }

  export interface UnionMember1 {
    id: string;

    product: UnionMember1.Product;

    type: 'CREDIT';

    /**
     * The schedule that the customer will gain access to the credits.
     */
    access_schedule?: UnionMember1.AccessSchedule;

    applicable_contract_ids?: Array<string>;

    applicable_product_ids?: Array<string>;

    applicable_product_tags?: Array<string>;

    /**
     * The current balance of the credit or commit. This balance reflects the amount of
     * credit or commit that the customer has access to use at this moment - thus,
     * expired and upcoming credit or commit segments contribute 0 to the balance. The
     * balance will match the sum of all ledger entries with the exception of the case
     * where the sum of negative manual ledger entries exceeds the positive amount
     * remaining on the credit or commit - in that case, the balance will be 0. All
     * manual ledger entries associated with active credit or commit segments are
     * included in the balance, including future-dated manual ledger entries.
     */
    balance?: number;

    contract?: UnionMember1.Contract;

    custom_fields?: Record<string, string>;

    description?: string;

    /**
     * A list of ordered events that impact the balance of a credit. For example, an
     * invoice deduction or an expiration.
     */
    ledger?: Array<
      | UnionMember1.UnionMember0
      | UnionMember1.UnionMember1
      | UnionMember1.UnionMember2
      | UnionMember1.UnionMember3
      | UnionMember1.UnionMember4
      | UnionMember1.UnionMember5
    >;

    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * If multiple credits or commits are applicable, the one with the lower priority
     * will apply first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * This field's availability is dependent on your client's configuration.
     */
    salesforce_opportunity_id?: string;

    /**
     * Prevents the creation of duplicates. If a request to create a commit or credit
     * is made with a uniqueness key that was previously used to create a commit or
     * credit, a new record will not be created and the request will fail with a 409
     * error.
     */
    uniqueness_key?: string;
  }

  export namespace UnionMember1 {
    export interface Product {
      id: string;

      name: string;
    }

    /**
     * The schedule that the customer will gain access to the credits.
     */
    export interface AccessSchedule {
      schedule_items: Array<AccessSchedule.ScheduleItem>;

      credit_type?: AccessSchedule.CreditType;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        id: string;

        amount: number;

        ending_before: string;

        starting_at: string;
      }

      export interface CreditType {
        id: string;

        name: string;
      }
    }

    export interface Contract {
      id: string;
    }

    export interface UnionMember0 {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_SEGMENT_START';
    }

    export interface UnionMember1 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
    }

    export interface UnionMember2 {
      amount: number;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_EXPIRATION';
    }

    export interface UnionMember3 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_CANCELED';
    }

    export interface UnionMember4 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'CREDIT_CREDITED';
    }

    export interface UnionMember5 {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'CREDIT_MANUAL';
    }
  }
}

export interface ContractRetrieveRateScheduleResponse {
  data: Array<ContractRetrieveRateScheduleResponse.Data>;

  next_page?: string | null;
}

export namespace ContractRetrieveRateScheduleResponse {
  export interface Data {
    entitled: boolean;

    list_rate: Data.ListRate;

    product_custom_fields: Record<string, string>;

    product_id: string;

    product_name: string;

    product_tags: Array<string>;

    rate_card_id: string;

    starting_at: string;

    /**
     * A distinct rate on the rate card. You can choose to use this rate rather than
     * list rate when consuming a credit or commit.
     */
    commit_rate?: Data.CommitRate;

    ending_before?: string;

    override_rate?: Data.OverrideRate;

    pricing_group_values?: Record<string, string>;
  }

  export namespace Data {
    export interface ListRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      credit_type?: ListRate.CreditType;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: Record<string, unknown>;

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
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<ListRate.Tier>;

      /**
       * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
       * using list prices rather than the standard rates for this product on the
       * contract.
       */
      use_list_prices?: boolean;
    }

    export namespace ListRate {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface Tier {
        price: number;

        size?: number;
      }
    }

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
      tiers?: Array<CommitRate.Tier>;
    }

    export namespace CommitRate {
      export interface Tier {
        price: number;

        size?: number;
      }
    }

    export interface OverrideRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

      credit_type?: OverrideRate.CreditType;

      /**
       * Only set for CUSTOM rate_type. This field is interpreted by custom rate
       * processors.
       */
      custom_rate?: Record<string, unknown>;

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
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      /**
       * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
       */
      quantity?: number;

      /**
       * Only set for TIERED rate_type.
       */
      tiers?: Array<OverrideRate.Tier>;

      /**
       * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
       * using list prices rather than the standard rates for this product on the
       * contract.
       */
      use_list_prices?: boolean;
    }

    export namespace OverrideRate {
      export interface CreditType {
        id: string;

        name: string;
      }

      export interface Tier {
        price: number;

        size?: number;
      }
    }
  }
}

export interface ContractScheduleProServicesInvoiceResponse {
  data: Array<ContractScheduleProServicesInvoiceResponse.Data>;
}

export namespace ContractScheduleProServicesInvoiceResponse {
  export interface Data {
    id: string;

    credit_type: Data.CreditType;

    customer_id: string;

    line_items: Array<Data.LineItem>;

    status: string;

    total: number;

    type: string;

    amendment_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    billable_status?: 'billable' | 'unbillable';

    contract_custom_fields?: Record<string, string>;

    contract_id?: string;

    correction_record?: Data.CorrectionRecord;

    /**
     * When the invoice was created (UTC). This field is present for correction
     * invoices only.
     */
    created_at?: string;

    custom_fields?: Record<string, unknown>;

    customer_custom_fields?: Record<string, string>;

    /**
     * End of the usage period this invoice covers (UTC)
     */
    end_timestamp?: string;

    external_invoice?: Data.ExternalInvoice | null;

    invoice_adjustments?: Array<Data.InvoiceAdjustment>;

    /**
     * When the invoice was issued (UTC)
     */
    issued_at?: string;

    net_payment_terms_days?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    plan_custom_fields?: Record<string, string>;

    plan_id?: string;

    plan_name?: string;

    /**
     * only present for beta contract invoices with reseller royalties
     */
    reseller_royalty?: Data.ResellerRoyalty;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    salesforce_opportunity_id?: string;

    /**
     * Beginning of the usage period this invoice covers (UTC)
     */
    start_timestamp?: string;

    subtotal?: number;
  }

  export namespace Data {
    export interface CreditType {
      id: string;

      name: string;
    }

    export interface LineItem {
      credit_type: LineItem.CreditType;

      name: string;

      total: number;

      /**
       * only present for beta contract invoices
       */
      applied_commit_or_credit?: LineItem.AppliedCommitOrCredit;

      /**
       * only present for beta contract invoices
       */
      commit_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      commit_id?: string;

      /**
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      commit_netsuite_item_id?: string;

      /**
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      commit_netsuite_sales_order_id?: string;

      /**
       * only present for beta contract invoices
       */
      commit_segment_id?: string;

      /**
       * only present for beta contract invoices
       */
      commit_type?: string;

      custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      ending_before?: string;

      group_key?: string;

      group_value?: string | null;

      /**
       * only present for beta contract invoices
       */
      is_prorated?: boolean;

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      list_price?: LineItem.ListPrice;

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
       * only present for beta contract invoices. This field's availability is dependent
       * on your client's configuration.
       */
      netsuite_item_id?: string;

      /**
       * only present for beta contract invoices
       */
      postpaid_commit?: LineItem.PostpaidCommit;

      /**
       * if presentation groups are used, this will contain the values used to break down
       * the line item
       */
      presentation_group_values?: Record<string, string | null>;

      /**
       * if pricing groups are used, this will contain the values used to calculate the
       * price
       */
      pricing_group_values?: Record<string, string>;

      product_custom_fields?: Record<string, string>;

      product_id?: string;

      product_type?: string;

      /**
       * only present for beta contract invoices
       */
      professional_service_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      professional_service_id?: string;

      quantity?: number;

      reseller_type?: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      scheduled_charge_custom_fields?: Record<string, string>;

      /**
       * only present for beta contract invoices
       */
      scheduled_charge_id?: string;

      /**
       * only present for beta contract invoices
       */
      starting_at?: string;

      sub_line_items?: Array<LineItem.SubLineItem>;

      tier?: LineItem.Tier;

      /**
       * only present for beta contract invoices
       */
      unit_price?: number;
    }

    export namespace LineItem {
      export interface CreditType {
        id: string;

        name: string;
      }

      /**
       * only present for beta contract invoices
       */
      export interface AppliedCommitOrCredit {
        id: string;

        type: 'PREPAID' | 'POSTPAID' | 'CREDIT';
      }

      /**
       * Only present for contract invoices and when the include_list_prices query
       * parameter is set to true. This will include the list rate for the charge if
       * applicable. Only present for usage and subscription line items.
       */
      export interface ListPrice {
        rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

        credit_type?: ListPrice.CreditType;

        /**
         * Only set for CUSTOM rate_type. This field is interpreted by custom rate
         * processors.
         */
        custom_rate?: Record<string, unknown>;

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
         * if pricing groups are used, this will contain the values used to calculate the
         * price
         */
        pricing_group_values?: Record<string, string>;

        /**
         * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
         */
        quantity?: number;

        /**
         * Only set for TIERED rate_type.
         */
        tiers?: Array<ListPrice.Tier>;

        /**
         * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
         * using list prices rather than the standard rates for this product on the
         * contract.
         */
        use_list_prices?: boolean;
      }

      export namespace ListPrice {
        export interface CreditType {
          id: string;

          name: string;
        }

        export interface Tier {
          price: number;

          size?: number;
        }
      }

      /**
       * only present for beta contract invoices
       */
      export interface PostpaidCommit {
        id: string;
      }

      export interface SubLineItem {
        custom_fields: Record<string, string>;

        name: string;

        quantity: number;

        subtotal: number;

        charge_id?: string;

        credit_grant_id?: string;

        /**
         * The end date for the charge (for seats charges only).
         */
        end_date?: string;

        /**
         * the unit price for this charge, present only if the charge is not tiered and the
         * quantity is nonzero
         */
        price?: number;

        /**
         * The start date for the charge (for seats charges only).
         */
        start_date?: string;

        /**
         * when the current tier started and ends (for tiered charges only)
         */
        tier_period?: SubLineItem.TierPeriod;

        tiers?: Array<SubLineItem.Tier>;
      }

      export namespace SubLineItem {
        /**
         * when the current tier started and ends (for tiered charges only)
         */
        export interface TierPeriod {
          starting_at: string;

          ending_before?: string;
        }

        export interface Tier {
          price: number;

          quantity: number;

          /**
           * at what metric amount this tier begins
           */
          starting_at: number;

          subtotal: number;
        }
      }

      export interface Tier {
        level: number;

        starting_at: string;

        size?: string | null;
      }
    }

    export interface CorrectionRecord {
      corrected_invoice_id: string;

      memo: string;

      reason: string;

      corrected_external_invoice?: CorrectionRecord.CorrectedExternalInvoice;
    }

    export namespace CorrectionRecord {
      export interface CorrectedExternalInvoice {
        billing_provider_type:
          | 'aws_marketplace'
          | 'stripe'
          | 'netsuite'
          | 'custom'
          | 'azure_marketplace'
          | 'quickbooks_online'
          | 'workday'
          | 'gcp_marketplace';

        external_status?:
          | 'DRAFT'
          | 'FINALIZED'
          | 'PAID'
          | 'UNCOLLECTIBLE'
          | 'VOID'
          | 'DELETED'
          | 'PAYMENT_FAILED'
          | 'INVALID_REQUEST_ERROR'
          | 'SKIPPED'
          | 'SENT'
          | 'QUEUED';

        invoice_id?: string;

        issued_at_timestamp?: string;
      }
    }

    export interface ExternalInvoice {
      billing_provider_type:
        | 'aws_marketplace'
        | 'stripe'
        | 'netsuite'
        | 'custom'
        | 'azure_marketplace'
        | 'quickbooks_online'
        | 'workday'
        | 'gcp_marketplace';

      external_status?:
        | 'DRAFT'
        | 'FINALIZED'
        | 'PAID'
        | 'UNCOLLECTIBLE'
        | 'VOID'
        | 'DELETED'
        | 'PAYMENT_FAILED'
        | 'INVALID_REQUEST_ERROR'
        | 'SKIPPED'
        | 'SENT'
        | 'QUEUED';

      invoice_id?: string;

      issued_at_timestamp?: string;
    }

    export interface InvoiceAdjustment {
      credit_type: InvoiceAdjustment.CreditType;

      name: string;

      total: number;

      credit_grant_custom_fields?: Record<string, string>;

      credit_grant_id?: string;
    }

    export namespace InvoiceAdjustment {
      export interface CreditType {
        id: string;

        name: string;
      }
    }

    /**
     * only present for beta contract invoices with reseller royalties
     */
    export interface ResellerRoyalty {
      fraction: string;

      netsuite_reseller_id: string;

      reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      aws_options?: ResellerRoyalty.AwsOptions;

      gcp_options?: ResellerRoyalty.GcpOptions;
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
  }
}

export interface ContractUpdateEndDateResponse {
  data: ContractUpdateEndDateResponse.Data;
}

export namespace ContractUpdateEndDateResponse {
  export interface Data {
    id: string;
  }
}

export interface ContractCreateParams {
  customer_id: string;

  /**
   * inclusive contract start time
   */
  starting_at: string;

  /**
   * The billing provider configuration associated with a contract.
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

  threshold_billing_configuration?: ContractCreateParams.ThresholdBillingConfiguration;

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

  usage_filter?: ContractCreateParams.UsageFilter;

  usage_statement_schedule?: ContractCreateParams.UsageStatementSchedule;
}

export namespace ContractCreateParams {
  /**
   * The billing provider configuration associated with a contract.
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

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;

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

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';
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
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

    custom_fields?: Record<string, string>;

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
      custom_rate?: Record<string, unknown>;

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
      tiers?: Array<OverwriteRate.Tier>;
    }

    export namespace OverwriteRate {
      export interface Tier {
        price: number;

        size?: number;
      }
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

  export interface RecurringCommit {
    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCommit.AccessAmount;

    /**
     * The amount of time the created commits will be valid for.
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
     * be created aligned with the recurring commit's start_date rather than the usage
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

      quantity: number;

      unit_price: number;
    }

    /**
     * The amount of time the created commits will be valid for.
     */
    export interface CommitDuration {
      unit: 'PERIODS';

      value: number;
    }

    /**
     * The amount the customer should be billed for the commit. Not required.
     */
    export interface InvoiceAmount {
      credit_type_id: string;

      quantity: number;

      unit_price: number;
    }
  }

  export interface RecurringCredit {
    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCredit.AccessAmount;

    /**
     * The amount of time the created commits will be valid for.
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
     * be created aligned with the recurring commit's start_date rather than the usage
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

      quantity: number;

      unit_price: number;
    }

    /**
     * The amount of time the created commits will be valid for.
     */
    export interface CommitDuration {
      unit: 'PERIODS';

      value: number;
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

  export interface ThresholdBillingConfiguration {
    credit_balance_threshold_configuration?: ThresholdBillingConfiguration.CreditBalanceThresholdConfiguration;

    spend_threshold_configuration?: ThresholdBillingConfiguration.SpendThresholdConfiguration;
  }

  export namespace ThresholdBillingConfiguration {
    export interface CreditBalanceThresholdConfiguration {
      commit: CreditBalanceThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state
       */
      is_enabled: boolean;

      /**
       * Specify the amount the balance should be recharged to.
       */
      recharge_to_amount: number;

      /**
       * Specify the threshold amount for the contract. Each time the contract's balance
       * lowers to this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;
    }

    export namespace CreditBalanceThresholdConfiguration {
      export interface Commit {
        product_id: string;

        /**
         * Which products the threshold commit applies to. If both applicable_product_ids
         * and applicable_product_tags are not provided, the commit applies to all
         * products.
         */
        applicable_product_ids?: Array<string>;

        /**
         * Which tags the threshold commit applies to. If both applicable_product_ids and
         * applicable_product_tags are not provided, the commit applies to all products.
         */
        applicable_product_tags?: Array<string>;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;
      }
    }

    export interface SpendThresholdConfiguration {
      commit: SpendThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state
       */
      is_enabled: boolean;

      /**
       * Specify the threshold amount for the contract. Each time the contract's usage
       * hits this amount, a threshold charge will be initiated.
       */
      threshold_amount: number;
    }

    export namespace SpendThresholdConfiguration {
      export interface Commit {
        product_id: string;

        /**
         * Which products the threshold commit applies to. If both applicable_product_ids
         * and applicable_product_tags are not provided, the commit applies to all
         * products.
         */
        applicable_product_ids?: Array<string>;

        /**
         * Which tags the threshold commit applies to. If both applicable_product_ids and
         * applicable_product_tags are not provided, the commit applies to all products.
         */
        applicable_product_tags?: Array<string>;

        description?: string;

        /**
         * Specify the name of the line item for the threshold charge. If left blank, it
         * will default to the commit product name.
         */
        name?: string;
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

  export interface UsageFilter {
    group_key: string;

    group_values: Array<string>;

    starting_at?: string;
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

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Fraction of unused segments that will be rolled over. Must be between 0 and 1.
     */
    rollover_fraction?: number;

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

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';
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
  }

  export interface Discount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: Discount.Schedule;

    custom_fields?: Record<string, string>;

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
      custom_rate?: Record<string, unknown>;

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
      tiers?: Array<OverwriteRate.Tier>;
    }

    export namespace OverwriteRate {
      export interface Tier {
        price: number;

        size?: number;
      }
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
       * Defaults to USD (cents) if not passed.
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
    type ContractScheduleProServicesInvoiceParams as ContractScheduleProServicesInvoiceParams,
    type ContractSetUsageFilterParams as ContractSetUsageFilterParams,
    type ContractUpdateEndDateParams as ContractUpdateEndDateParams,
  };

  export {
    Products as Products,
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
    type RateCardRetrieveRateScheduleResponse as RateCardRetrieveRateScheduleResponse,
    RateCardListResponsesCursorPage as RateCardListResponsesCursorPage,
    type RateCardCreateParams as RateCardCreateParams,
    type RateCardRetrieveParams as RateCardRetrieveParams,
    type RateCardUpdateParams as RateCardUpdateParams,
    type RateCardListParams as RateCardListParams,
    type RateCardRetrieveRateScheduleParams as RateCardRetrieveRateScheduleParams,
  };

  export {
    NamedSchedules as NamedSchedules,
    type NamedScheduleRetrieveResponse as NamedScheduleRetrieveResponse,
    type NamedScheduleRetrieveParams as NamedScheduleRetrieveParams,
    type NamedScheduleUpdateParams as NamedScheduleUpdateParams,
  };
}
