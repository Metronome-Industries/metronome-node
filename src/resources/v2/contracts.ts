// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Contracts extends APIResource {
  /**
   * Get a specific contract. New clients should use this endpoint rather than the v1
   * endpoint.
   */
  retrieve(
    body: ContractRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractRetrieveResponse> {
    return this._client.post('/v2/contracts/get', { body, ...options });
  }

  /**
   * List all contracts for a customer. New clients should use this endpoint rather
   * than the v1 endpoint.
   */
  list(body: ContractListParams, options?: Core.RequestOptions): Core.APIPromise<ContractListResponse> {
    return this._client.post('/v2/contracts/list', { body, ...options });
  }

  /**
   * Edit a contract. Contract editing must be enabled to use this endpoint.
   */
  edit(body: ContractEditParams, options?: Core.RequestOptions): Core.APIPromise<ContractEditResponse> {
    return this._client.post('/v2/contracts/edit', { body, ...options });
  }

  /**
   * Edit a customer or contract commit. Contract commits can only be edited using
   * this endpoint if contract editing is enabled.
   */
  editCommit(
    body: ContractEditCommitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractEditCommitResponse> {
    return this._client.post('/v2/contracts/commits/edit', { body, ...options });
  }

  /**
   * Edit a customer or contract credit. Contract credits can only be edited using
   * this endpoint if contract editing is enabled.
   */
  editCredit(
    body: ContractEditCreditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractEditCreditResponse> {
    return this._client.post('/v2/contracts/credits/edit', { body, ...options });
  }

  /**
   * Get the edit history of a specific contract. Contract editing must be enabled to
   * use this endpoint.
   */
  getEditHistory(
    body: ContractGetEditHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ContractGetEditHistoryResponse> {
    return this._client.post('/v2/contracts/getEditHistory', { body, ...options });
  }
}

export interface ContractRetrieveResponse {
  data: ContractRetrieveResponse.Data;
}

export namespace ContractRetrieveResponse {
  export interface Data {
    id: string;

    commits: Array<Data.Commit>;

    created_at: string;

    created_by: string;

    customer_id: string;

    overrides: Array<Data.Override>;

    scheduled_charges: Array<Shared.ScheduledCharge>;

    starting_at: string;

    transitions: Array<Data.Transition>;

    usage_filter: Array<Data.UsageFilter>;

    usage_statement_schedule: Data.UsageStatementSchedule;

    archived_at?: string;

    credit_balance_threshold_configuration?: Data.CreditBalanceThresholdConfiguration;

    credits?: Array<Data.Credit>;

    custom_fields?: Record<string, string>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    discounts?: Array<Shared.Discount>;

    ending_before?: string;

    /**
     * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
     * prices automatically. EXPLICIT prioritization requires specifying priorities for
     * each multiplier; the one with the lowest priority value will be prioritized
     * first.
     */
    multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

    name?: string;

    net_payment_terms_days?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    professional_services?: Array<Shared.ProService>;

    rate_card_id?: string;

    recurring_commits?: Array<Data.RecurringCommit>;

    recurring_credits?: Array<Data.RecurringCredit>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    reseller_royalties?: Array<Data.ResellerRoyalty>;

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

    spend_threshold_configuration?: Data.SpendThresholdConfiguration;

    total_contract_value?: number;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Data {
    export interface Commit {
      id: string;

      product: Commit.Product;

      type: 'PREPAID' | 'POSTPAID';

      /**
       * The schedule that the customer will gain access to the credits purposed with
       * this commit.
       */
      access_schedule?: Shared.ScheduleDuration;

      applicable_contract_ids?: Array<string>;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

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
      invoice_schedule?: Shared.SchedulePointInTime;

      /**
       * A list of ordered events that impact the balance of a commit. For example, an
       * invoice deduction or a rollover.
       */
      ledger?: Array<
        | Commit.PrepaidCommitSegmentStartLedgerEntry
        | Commit.PrepaidCommitAutomatedInvoiceDeductionLedgerEntry
        | Commit.PrepaidCommitRolloverLedgerEntry
        | Commit.PrepaidCommitExpirationLedgerEntry
        | Commit.PrepaidCommitCanceledLedgerEntry
        | Commit.PrepaidCommitCreditedLedgerEntry
        | Commit.PostpaidCommitInitialBalanceLedgerEntry
        | Commit.PostpaidCommitAutomatedInvoiceDeductionLedgerEntry
        | Commit.PostpaidCommitRolloverLedgerEntry
        | Commit.PostpaidCommitTrueupLedgerEntry
        | Commit.PrepaidCommitManualLedgerEntry
        | Commit.PostpaidCommitManualLedgerEntry
        | Commit.PostpaidCommitExpirationLedgerEntry
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
    }

    export namespace Commit {
      export interface Product {
        id: string;

        name: string;
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

      export interface PrepaidCommitSegmentStartLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_SEGMENT_START';
      }

      export interface PrepaidCommitAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface PrepaidCommitRolloverLedgerEntry {
        amount: number;

        new_contract_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_ROLLOVER';
      }

      export interface PrepaidCommitExpirationLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_EXPIRATION';
      }

      export interface PrepaidCommitCanceledLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_CANCELED';
      }

      export interface PrepaidCommitCreditedLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_CREDITED';
      }

      export interface PostpaidCommitInitialBalanceLedgerEntry {
        amount: number;

        timestamp: string;

        type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
      }

      export interface PostpaidCommitAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface PostpaidCommitRolloverLedgerEntry {
        amount: number;

        new_contract_id: string;

        segment_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_ROLLOVER';
      }

      export interface PostpaidCommitTrueupLedgerEntry {
        amount: number;

        invoice_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_TRUEUP';
      }

      export interface PrepaidCommitManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_MANUAL';
      }

      export interface PostpaidCommitManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_MANUAL';
      }

      export interface PostpaidCommitExpirationLedgerEntry {
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

      ending_before?: string;

      entitled?: boolean;

      is_commit_specific?: boolean;

      multiplier?: number;

      override_specifiers?: Array<Override.OverrideSpecifier>;

      override_tiers?: Array<Override.OverrideTier>;

      overwrite_rate?: Override.OverwriteRate;

      priority?: number;

      product?: Override.Product;

      target?: 'COMMIT_RATE' | 'LIST_RATE';

      type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
    }

    export namespace Override {
      export interface OverrideSpecifier {
        billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

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

        credit_type?: Shared.CreditTypeData;

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
        tiers?: Array<Shared.Tier>;
      }

      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface Transition {
      from_contract_id: string;

      to_contract_id: string;

      type: 'SUPERSEDE' | 'RENEWAL';
    }

    export interface UsageFilter {
      group_key: string;

      group_values: Array<string>;

      /**
       * This will match contract starting_at value if usage filter is active from the
       * beginning of the contract.
       */
      starting_at: string;

      /**
       * This will match contract ending_before value if usage filter is active until the
       * end of the contract. It will be undefined if the contract is open-ended.
       */
      ending_before?: string;
    }

    export interface UsageStatementSchedule {
      /**
       * Contract usage statements follow a selected cadence based on this date.
       */
      billing_anchor_date: string;

      frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
    }

    export interface CreditBalanceThresholdConfiguration {
      commit: CreditBalanceThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
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
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
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

    export interface Credit {
      id: string;

      product: Credit.Product;

      type: 'CREDIT';

      /**
       * The schedule that the customer will gain access to the credits.
       */
      access_schedule?: Shared.ScheduleDuration;

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
        | Credit.CreditSegmentStartLedgerEntry
        | Credit.CreditAutomatedInvoiceDeductionLedgerEntry
        | Credit.CreditExpirationLedgerEntry
        | Credit.CreditCanceledLedgerEntry
        | Credit.CreditCreditedLedgerEntry
        | Credit.CreditManualLedgerEntry
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

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace Credit {
      export interface Product {
        id: string;

        name: string;
      }

      export interface Contract {
        id: string;
      }

      export interface CreditSegmentStartLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_SEGMENT_START';
      }

      export interface CreditAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface CreditExpirationLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_EXPIRATION';
      }

      export interface CreditCanceledLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_CANCELED';
      }

      export interface CreditCreditedLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_CREDITED';
      }

      export interface CreditManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'CREDIT_MANUAL';
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
      reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      segments: Array<ResellerRoyalty.Segment>;
    }

    export namespace ResellerRoyalty {
      export interface Segment {
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
         * Only applicable if using Stripe as your payment gateway through Metronome.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using Stripe as your payment gateway through Metronome.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';
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

    commits: Array<Data.Commit>;

    created_at: string;

    created_by: string;

    customer_id: string;

    overrides: Array<Data.Override>;

    scheduled_charges: Array<Shared.ScheduledCharge>;

    starting_at: string;

    transitions: Array<Data.Transition>;

    usage_filter: Array<Data.UsageFilter>;

    usage_statement_schedule: Data.UsageStatementSchedule;

    archived_at?: string;

    credit_balance_threshold_configuration?: Data.CreditBalanceThresholdConfiguration;

    credits?: Array<Data.Credit>;

    custom_fields?: Record<string, string>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    customer_billing_provider_configuration?: Data.CustomerBillingProviderConfiguration;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    discounts?: Array<Shared.Discount>;

    ending_before?: string;

    /**
     * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
     * prices automatically. EXPLICIT prioritization requires specifying priorities for
     * each multiplier; the one with the lowest priority value will be prioritized
     * first.
     */
    multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

    name?: string;

    net_payment_terms_days?: number;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    professional_services?: Array<Shared.ProService>;

    rate_card_id?: string;

    recurring_commits?: Array<Data.RecurringCommit>;

    recurring_credits?: Array<Data.RecurringCredit>;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    reseller_royalties?: Array<Data.ResellerRoyalty>;

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

    spend_threshold_configuration?: Data.SpendThresholdConfiguration;

    total_contract_value?: number;

    /**
     * Prevents the creation of duplicates. If a request to create a record is made
     * with a previously used uniqueness key, a new record will not be created and the
     * request will fail with a 409 error.
     */
    uniqueness_key?: string;
  }

  export namespace Data {
    export interface Commit {
      id: string;

      product: Commit.Product;

      type: 'PREPAID' | 'POSTPAID';

      /**
       * The schedule that the customer will gain access to the credits purposed with
       * this commit.
       */
      access_schedule?: Shared.ScheduleDuration;

      applicable_contract_ids?: Array<string>;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

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
      invoice_schedule?: Shared.SchedulePointInTime;

      /**
       * A list of ordered events that impact the balance of a commit. For example, an
       * invoice deduction or a rollover.
       */
      ledger?: Array<
        | Commit.PrepaidCommitSegmentStartLedgerEntry
        | Commit.PrepaidCommitAutomatedInvoiceDeductionLedgerEntry
        | Commit.PrepaidCommitRolloverLedgerEntry
        | Commit.PrepaidCommitExpirationLedgerEntry
        | Commit.PrepaidCommitCanceledLedgerEntry
        | Commit.PrepaidCommitCreditedLedgerEntry
        | Commit.PostpaidCommitInitialBalanceLedgerEntry
        | Commit.PostpaidCommitAutomatedInvoiceDeductionLedgerEntry
        | Commit.PostpaidCommitRolloverLedgerEntry
        | Commit.PostpaidCommitTrueupLedgerEntry
        | Commit.PrepaidCommitManualLedgerEntry
        | Commit.PostpaidCommitManualLedgerEntry
        | Commit.PostpaidCommitExpirationLedgerEntry
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
    }

    export namespace Commit {
      export interface Product {
        id: string;

        name: string;
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

      export interface PrepaidCommitSegmentStartLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_SEGMENT_START';
      }

      export interface PrepaidCommitAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface PrepaidCommitRolloverLedgerEntry {
        amount: number;

        new_contract_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_ROLLOVER';
      }

      export interface PrepaidCommitExpirationLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_EXPIRATION';
      }

      export interface PrepaidCommitCanceledLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_CANCELED';
      }

      export interface PrepaidCommitCreditedLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_CREDITED';
      }

      export interface PostpaidCommitInitialBalanceLedgerEntry {
        amount: number;

        timestamp: string;

        type: 'POSTPAID_COMMIT_INITIAL_BALANCE';
      }

      export interface PostpaidCommitAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface PostpaidCommitRolloverLedgerEntry {
        amount: number;

        new_contract_id: string;

        segment_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_ROLLOVER';
      }

      export interface PostpaidCommitTrueupLedgerEntry {
        amount: number;

        invoice_id: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_TRUEUP';
      }

      export interface PrepaidCommitManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'PREPAID_COMMIT_MANUAL';
      }

      export interface PostpaidCommitManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'POSTPAID_COMMIT_MANUAL';
      }

      export interface PostpaidCommitExpirationLedgerEntry {
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

      ending_before?: string;

      entitled?: boolean;

      is_commit_specific?: boolean;

      multiplier?: number;

      override_specifiers?: Array<Override.OverrideSpecifier>;

      override_tiers?: Array<Override.OverrideTier>;

      overwrite_rate?: Override.OverwriteRate;

      priority?: number;

      product?: Override.Product;

      target?: 'COMMIT_RATE' | 'LIST_RATE';

      type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
    }

    export namespace Override {
      export interface OverrideSpecifier {
        billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

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

        credit_type?: Shared.CreditTypeData;

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
        tiers?: Array<Shared.Tier>;
      }

      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface Transition {
      from_contract_id: string;

      to_contract_id: string;

      type: 'SUPERSEDE' | 'RENEWAL';
    }

    export interface UsageFilter {
      group_key: string;

      group_values: Array<string>;

      /**
       * This will match contract starting_at value if usage filter is active from the
       * beginning of the contract.
       */
      starting_at: string;

      /**
       * This will match contract ending_before value if usage filter is active until the
       * end of the contract. It will be undefined if the contract is open-ended.
       */
      ending_before?: string;
    }

    export interface UsageStatementSchedule {
      /**
       * Contract usage statements follow a selected cadence based on this date.
       */
      billing_anchor_date: string;

      frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
    }

    export interface CreditBalanceThresholdConfiguration {
      commit: CreditBalanceThresholdConfiguration.Commit;

      /**
       * When set to false, the contract will not be evaluated against the
       * threshold_amount. Toggling to true will result an immediate evaluation,
       * regardless of prior state.
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
        /**
         * The commit product that will be used to generate the line item for commit
         * payment.
         */
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

    export interface Credit {
      id: string;

      product: Credit.Product;

      type: 'CREDIT';

      /**
       * The schedule that the customer will gain access to the credits.
       */
      access_schedule?: Shared.ScheduleDuration;

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
        | Credit.CreditSegmentStartLedgerEntry
        | Credit.CreditAutomatedInvoiceDeductionLedgerEntry
        | Credit.CreditExpirationLedgerEntry
        | Credit.CreditCanceledLedgerEntry
        | Credit.CreditCreditedLedgerEntry
        | Credit.CreditManualLedgerEntry
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

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace Credit {
      export interface Product {
        id: string;

        name: string;
      }

      export interface Contract {
        id: string;
      }

      export interface CreditSegmentStartLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_SEGMENT_START';
      }

      export interface CreditAutomatedInvoiceDeductionLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_AUTOMATED_INVOICE_DEDUCTION';
      }

      export interface CreditExpirationLedgerEntry {
        amount: number;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_EXPIRATION';
      }

      export interface CreditCanceledLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_CANCELED';
      }

      export interface CreditCreditedLedgerEntry {
        amount: number;

        invoice_id: string;

        segment_id: string;

        timestamp: string;

        type: 'CREDIT_CREDITED';
      }

      export interface CreditManualLedgerEntry {
        amount: number;

        reason: string;

        timestamp: string;

        type: 'CREDIT_MANUAL';
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
      reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      segments: Array<ResellerRoyalty.Segment>;
    }

    export namespace ResellerRoyalty {
      export interface Segment {
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
         * Only applicable if using Stripe as your payment gateway through Metronome.
         */
        stripe_config?: PaymentGateConfig.StripeConfig;
      }

      export namespace PaymentGateConfig {
        /**
         * Only applicable if using Stripe as your payment gateway through Metronome.
         */
        export interface StripeConfig {
          /**
           * If left blank, will default to INVOICE
           */
          payment_type: 'INVOICE' | 'PAYMENT_INTENT';
        }
      }
    }
  }
}

export interface ContractEditResponse {
  data: Shared.ID;
}

export interface ContractEditCommitResponse {
  data: Shared.ID;
}

export interface ContractEditCreditResponse {
  data: Shared.ID;
}

export interface ContractGetEditHistoryResponse {
  data: Array<ContractGetEditHistoryResponse.Data>;
}

export namespace ContractGetEditHistoryResponse {
  export interface Data {
    id: string;

    add_commits?: Array<Data.AddCommit>;

    add_credits?: Array<Data.AddCredit>;

    add_discounts?: Array<Shared.Discount>;

    add_overrides?: Array<Data.AddOverride>;

    add_pro_services?: Array<Shared.ProService>;

    add_recurring_commits?: Array<Data.AddRecurringCommit>;

    add_recurring_credits?: Array<Data.AddRecurringCredit>;

    add_reseller_royalties?: Array<Data.AddResellerRoyalty>;

    add_scheduled_charges?: Array<Data.AddScheduledCharge>;

    add_subscriptions?: Array<Data.AddSubscription>;

    add_usage_filters?: Array<Data.AddUsageFilter>;

    archive_commits?: Array<Data.ArchiveCommit>;

    archive_credits?: Array<Data.ArchiveCredit>;

    archive_scheduled_charges?: Array<Data.ArchiveScheduledCharge>;

    remove_overrides?: Array<Data.RemoveOverride>;

    timestamp?: string;

    update_commits?: Array<Data.UpdateCommit>;

    update_contract_end_date?: string;

    update_credits?: Array<Data.UpdateCredit>;

    update_discounts?: Array<Data.UpdateDiscount>;

    update_refund_invoices?: Array<Data.UpdateRefundInvoice>;

    update_scheduled_charges?: Array<Data.UpdateScheduledCharge>;

    update_subscriptions?: Array<Data.UpdateSubscription>;
  }

  export namespace Data {
    export interface AddCommit {
      id: string;

      product: AddCommit.Product;

      type: 'PREPAID' | 'POSTPAID';

      /**
       * The schedule that the customer will gain access to the credits purposed with
       * this commit.
       */
      access_schedule?: Shared.ScheduleDuration;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

      description?: string;

      /**
       * The schedule that the customer will be invoiced for this commit.
       */
      invoice_schedule?: Shared.SchedulePointInTime;

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

      rollover_fraction?: number;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace AddCommit {
      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface AddCredit {
      id: string;

      product: AddCredit.Product;

      type: 'CREDIT';

      /**
       * The schedule that the customer will gain access to the credits.
       */
      access_schedule?: Shared.ScheduleDuration;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

      description?: string;

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

      /**
       * This field's availability is dependent on your client's configuration.
       */
      salesforce_opportunity_id?: string;
    }

    export namespace AddCredit {
      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface AddOverride {
      id: string;

      starting_at: string;

      applicable_product_tags?: Array<string>;

      ending_before?: string;

      entitled?: boolean;

      is_commit_specific?: boolean;

      multiplier?: number;

      override_specifiers?: Array<AddOverride.OverrideSpecifier>;

      override_tiers?: Array<AddOverride.OverrideTier>;

      overwrite_rate?: AddOverride.OverwriteRate;

      priority?: number;

      product?: AddOverride.Product;

      target?: 'COMMIT_RATE' | 'LIST_RATE';

      type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
    }

    export namespace AddOverride {
      export interface OverrideSpecifier {
        billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

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

        credit_type?: Shared.CreditTypeData;

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
        tiers?: Array<Shared.Tier>;
      }

      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface AddRecurringCommit {
      id: string;

      /**
       * The amount of commit to grant.
       */
      access_amount: AddRecurringCommit.AccessAmount;

      /**
       * The amount of time the created commits will be valid for
       */
      commit_duration: AddRecurringCommit.CommitDuration;

      /**
       * Will be passed down to the individual commits
       */
      priority: number;

      product: AddRecurringCommit.Product;

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

      contract?: AddRecurringCommit.Contract;

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
      invoice_amount?: AddRecurringCommit.InvoiceAmount;

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

    export namespace AddRecurringCommit {
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

    export interface AddRecurringCredit {
      id: string;

      /**
       * The amount of commit to grant.
       */
      access_amount: AddRecurringCredit.AccessAmount;

      /**
       * The amount of time the created commits will be valid for
       */
      commit_duration: AddRecurringCredit.CommitDuration;

      /**
       * Will be passed down to the individual commits
       */
      priority: number;

      product: AddRecurringCredit.Product;

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

      contract?: AddRecurringCredit.Contract;

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

    export namespace AddRecurringCredit {
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

    export interface AddResellerRoyalty {
      reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

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

    export interface AddScheduledCharge {
      id: string;

      product: AddScheduledCharge.Product;

      schedule: Shared.SchedulePointInTime;

      /**
       * displayed on invoices
       */
      name?: string;

      /**
       * This field's availability is dependent on your client's configuration.
       */
      netsuite_sales_order_id?: string;
    }

    export namespace AddScheduledCharge {
      export interface Product {
        id: string;

        name: string;
      }
    }

    export interface AddSubscription {
      collection_schedule: 'ADVANCE' | 'ARREARS';

      proration: AddSubscription.Proration;

      quantity_schedule: Array<AddSubscription.QuantitySchedule>;

      starting_at: string;

      subscription_rate: AddSubscription.SubscriptionRate;

      id?: string;

      custom_fields?: Record<string, string>;

      description?: string;

      ending_before?: string;

      fiat_credit_type_id?: string;

      name?: string;
    }

    export namespace AddSubscription {
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

    export interface AddUsageFilter {
      group_key: string;

      group_values: Array<string>;

      /**
       * This will match contract starting_at value if usage filter is active from the
       * beginning of the contract.
       */
      starting_at: string;

      /**
       * This will match contract ending_before value if usage filter is active until the
       * end of the contract. It will be undefined if the contract is open-ended.
       */
      ending_before?: string;
    }

    export interface ArchiveCommit {
      id: string;
    }

    export interface ArchiveCredit {
      id: string;
    }

    export interface ArchiveScheduledCharge {
      id: string;
    }

    export interface RemoveOverride {
      id: string;
    }

    export interface UpdateCommit {
      id: string;

      access_schedule?: UpdateCommit.AccessSchedule;

      /**
       * Which products the commit applies to. If both applicable_product_ids and
       * applicable_product_tags are not provided, the commit applies to all products.
       */
      applicable_product_ids?: Array<string> | null;

      /**
       * Which tags the commit applies to. If both applicable_product_ids and
       * applicable_product_tags are not provided, the commit applies to all products.
       */
      applicable_product_tags?: Array<string> | null;

      invoice_schedule?: UpdateCommit.InvoiceSchedule;

      name?: string;

      netsuite_sales_order_id?: string | null;

      product_id?: string;

      rollover_fraction?: number | null;
    }

    export namespace UpdateCommit {
      export interface AccessSchedule {
        add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

        remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

        update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
      }

      export namespace AccessSchedule {
        export interface AddScheduleItem {
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

        export interface RemoveScheduleItem {
          id: string;
        }

        export interface UpdateScheduleItem {
          id: string;

          amount?: number;

          /**
           * RFC 3339 timestamp (exclusive)
           */
          ending_before?: string;

          /**
           * RFC 3339 timestamp (inclusive)
           */
          starting_at?: string;
        }
      }

      export interface InvoiceSchedule {
        add_schedule_items?: Array<InvoiceSchedule.AddScheduleItem>;

        remove_schedule_items?: Array<InvoiceSchedule.RemoveScheduleItem>;

        update_schedule_items?: Array<InvoiceSchedule.UpdateScheduleItem>;
      }

      export namespace InvoiceSchedule {
        export interface AddScheduleItem {
          timestamp: string;

          amount?: number;

          quantity?: number;

          unit_price?: number;
        }

        export interface RemoveScheduleItem {
          id: string;
        }

        export interface UpdateScheduleItem {
          id: string;

          amount?: number;

          quantity?: number;

          timestamp?: string;

          unit_price?: number;
        }
      }
    }

    export interface UpdateCredit {
      id: string;

      access_schedule?: UpdateCredit.AccessSchedule;

      name?: string;

      netsuite_sales_order_id?: string | null;

      rollover_fraction?: number | null;
    }

    export namespace UpdateCredit {
      export interface AccessSchedule {
        add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

        remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

        update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
      }

      export namespace AccessSchedule {
        export interface AddScheduleItem {
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

        export interface RemoveScheduleItem {
          id: string;
        }

        export interface UpdateScheduleItem {
          id: string;

          amount?: number;

          /**
           * RFC 3339 timestamp (exclusive)
           */
          ending_before?: string;

          /**
           * RFC 3339 timestamp (inclusive)
           */
          starting_at?: string;
        }
      }
    }

    export interface UpdateDiscount {
      id: string;

      custom_fields?: Record<string, string>;

      name?: string;

      netsuite_sales_order_id?: string;

      /**
       * Must provide either schedule_items or recurring_schedule.
       */
      schedule?: UpdateDiscount.Schedule;
    }

    export namespace UpdateDiscount {
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

          frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'WEEKLY';

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

    export interface UpdateRefundInvoice {
      date: string;

      invoice_id: string;
    }

    export interface UpdateScheduledCharge {
      id: string;

      invoice_schedule?: UpdateScheduledCharge.InvoiceSchedule;

      name?: string;

      netsuite_sales_order_id?: string | null;
    }

    export namespace UpdateScheduledCharge {
      export interface InvoiceSchedule {
        add_schedule_items?: Array<InvoiceSchedule.AddScheduleItem>;

        remove_schedule_items?: Array<InvoiceSchedule.RemoveScheduleItem>;

        update_schedule_items?: Array<InvoiceSchedule.UpdateScheduleItem>;
      }

      export namespace InvoiceSchedule {
        export interface AddScheduleItem {
          timestamp: string;

          amount?: number;

          quantity?: number;

          unit_price?: number;
        }

        export interface RemoveScheduleItem {
          id: string;
        }

        export interface UpdateScheduleItem {
          id: string;

          amount?: number;

          quantity?: number;

          timestamp?: string;

          unit_price?: number;
        }
      }
    }

    export interface UpdateSubscription {
      id: string;

      ending_before?: string;

      quantity_updates?: Array<UpdateSubscription.QuantityUpdate>;
    }

    export namespace UpdateSubscription {
      export interface QuantityUpdate {
        quantity: number;

        starting_at: string;
      }
    }
  }
}

export interface ContractRetrieveParams {
  contract_id: string;

  customer_id: string;

  /**
   * Optional RFC 3339 timestamp. Return the contract as of this date. Cannot be used
   * with include_ledgers parameter.
   */
  as_of_date?: string;

  /**
   * Include the balance of credits and commits in the response. Setting this flag
   * may cause the query to be slower.
   */
  include_balance?: boolean;

  /**
   * Include commit/credit ledgers in the response. Setting this flag may cause the
   * query to be slower. Cannot be used with as_of_date parameter.
   */
  include_ledgers?: boolean;
}

export interface ContractListParams {
  customer_id: string;

  /**
   * Optional RFC 3339 timestamp. Only include contracts active on the provided date.
   * This cannot be provided if starting_at filter is provided.
   */
  covering_date?: string;

  /**
   * Include archived contracts in the response.
   */
  include_archived?: boolean;

  /**
   * Include the balance of credits and commits in the response. Setting this flag
   * may cause the response to be slower.
   */
  include_balance?: boolean;

  /**
   * Include commit/credit ledgers in the response. Setting this flag may cause the
   * response to be slower.
   */
  include_ledgers?: boolean;

  /**
   * Optional RFC 3339 timestamp. Only include contracts that started on or after
   * this date. This cannot be provided if covering_date filter is provided.
   */
  starting_at?: string;
}

export interface ContractEditParams {
  /**
   * ID of the contract being edited
   */
  contract_id: string;

  /**
   * ID of the customer whose contract is being edited
   */
  customer_id: string;

  add_commits?: Array<ContractEditParams.AddCommit>;

  add_credits?: Array<ContractEditParams.AddCredit>;

  add_discounts?: Array<ContractEditParams.AddDiscount>;

  add_overrides?: Array<ContractEditParams.AddOverride>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  add_professional_services?: Array<ContractEditParams.AddProfessionalService>;

  add_recurring_commits?: Array<ContractEditParams.AddRecurringCommit>;

  add_recurring_credits?: Array<ContractEditParams.AddRecurringCredit>;

  add_reseller_royalties?: Array<ContractEditParams.AddResellerRoyalty>;

  add_scheduled_charges?: Array<ContractEditParams.AddScheduledCharge>;

  add_spend_threshold_configuration?: ContractEditParams.AddSpendThresholdConfiguration;

  /**
   * IDs of commits to archive
   */
  archive_commits?: Array<ContractEditParams.ArchiveCommit>;

  /**
   * IDs of credits to archive
   */
  archive_credits?: Array<ContractEditParams.ArchiveCredit>;

  /**
   * IDs of scheduled charges to archive
   */
  archive_scheduled_charges?: Array<ContractEditParams.ArchiveScheduledCharge>;

  /**
   * IDs of overrides to remove
   */
  remove_overrides?: Array<ContractEditParams.RemoveOverride>;

  update_commits?: Array<ContractEditParams.UpdateCommit>;

  update_credits?: Array<ContractEditParams.UpdateCredit>;

  update_scheduled_charges?: Array<ContractEditParams.UpdateScheduledCharge>;

  update_spend_threshold_configuration?: ContractEditParams.UpdateSpendThresholdConfiguration;
}

export namespace ContractEditParams {
  export interface AddCommit {
    product_id: string;

    type: 'PREPAID' | 'POSTPAID';

    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    access_schedule?: AddCommit.AccessSchedule;

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
    invoice_schedule?: AddCommit.InvoiceSchedule;

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
    payment_gate_config?: AddCommit.PaymentGateConfig;

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

  export namespace AddCommit {
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

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'WEEKLY';

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
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';
      }
    }
  }

  export interface AddCredit {
    /**
     * Schedule for distributing the credit to the customer.
     */
    access_schedule: AddCredit.AccessSchedule;

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

  export namespace AddCredit {
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

  export interface AddDiscount {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: AddDiscount.Schedule;

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

  export namespace AddDiscount {
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

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'WEEKLY';

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

  export interface AddOverride {
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
     * Indicates whether the override should only apply to commits. Defaults to
     * `false`. If `true`, you can specify relevant commits in `override_specifiers` by
     * passing `commit_ids`.
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
    override_specifiers?: Array<AddOverride.OverrideSpecifier>;

    /**
     * Required for OVERWRITE type.
     */
    overwrite_rate?: AddOverride.OverwriteRate;

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
     * Indicates whether the override applies to commit rates or list rates. Can only
     * be used for overrides that have `is_commit_specific` set to `true`. Defaults to
     * `"LIST_RATE"`.
     */
    target?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Required for TIERED type. Must have at least one tier.
     */
    tiers?: Array<AddOverride.Tier>;

    /**
     * Overwrites are prioritized over multipliers and tiered overrides.
     */
    type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
  }

  export namespace AddOverride {
    export interface OverrideSpecifier {
      /**
       * If provided, the override will only apply to the specified commits. Can only be
       * used for commit specific overrides. If not provided, the override will apply to
       * all commits.
       */
      commit_ids?: Array<string>;

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
       * presentation_group_values. If provided, the override will only apply to commits
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
      tiers?: Array<Shared.Tier>;
    }

    export interface Tier {
      multiplier: number;

      size?: number;
    }
  }

  export interface AddProfessionalService {
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

  export interface AddRecurringCommit {
    /**
     * The amount of commit to grant.
     */
    access_amount: AddRecurringCommit.AccessAmount;

    /**
     * The amount of time the created commits will be valid for.
     */
    commit_duration: AddRecurringCommit.CommitDuration;

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
    invoice_amount?: AddRecurringCommit.InvoiceAmount;

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

  export namespace AddRecurringCommit {
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

  export interface AddRecurringCredit {
    /**
     * The amount of commit to grant.
     */
    access_amount: AddRecurringCredit.AccessAmount;

    /**
     * The amount of time the created commits will be valid for.
     */
    commit_duration: AddRecurringCredit.CommitDuration;

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

  export namespace AddRecurringCredit {
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

  export interface AddResellerRoyalty {
    reseller_type: 'AWS' | 'AWS_PRO_SERVICE' | 'GCP' | 'GCP_PRO_SERVICE';

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_ids?: Array<string>;

    /**
     * Must provide at least one of applicable_product_ids or applicable_product_tags.
     */
    applicable_product_tags?: Array<string>;

    aws_options?: AddResellerRoyalty.AwsOptions;

    /**
     * Use null to indicate that the existing end timestamp should be removed.
     */
    ending_before?: string | null;

    fraction?: number;

    gcp_options?: AddResellerRoyalty.GcpOptions;

    netsuite_reseller_id?: string;

    reseller_contract_value?: number;

    starting_at?: string;
  }

  export namespace AddResellerRoyalty {
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

  export interface AddScheduledCharge {
    product_id: string;

    /**
     * Must provide either schedule_items or recurring_schedule.
     */
    schedule: AddScheduledCharge.Schedule;

    /**
     * displayed on invoices
     */
    name?: string;

    /**
     * This field's availability is dependent on your client's configuration.
     */
    netsuite_sales_order_id?: string;
  }

  export namespace AddScheduledCharge {
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

        frequency: 'MONTHLY' | 'QUARTERLY' | 'SEMI_ANNUAL' | 'ANNUAL' | 'WEEKLY';

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

  export interface AddSpendThresholdConfiguration {
    commit: AddSpendThresholdConfiguration.Commit;

    /**
     * When set to false, the contract will not be evaluated against the
     * threshold_amount. Toggling to true will result an immediate evaluation,
     * regardless of prior state.
     */
    is_enabled: boolean;

    payment_gate_config: AddSpendThresholdConfiguration.PaymentGateConfig;

    /**
     * Specify the threshold amount for the contract. Each time the contract's usage
     * hits this amount, a threshold charge will be initiated.
     */
    threshold_amount: number;
  }

  export namespace AddSpendThresholdConfiguration {
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
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';
      }
    }
  }

  export interface ArchiveCommit {
    id: string;
  }

  export interface ArchiveCredit {
    id: string;
  }

  export interface ArchiveScheduledCharge {
    id: string;
  }

  export interface RemoveOverride {
    id: string;
  }

  export interface UpdateCommit {
    commit_id: string;

    access_schedule?: UpdateCommit.AccessSchedule;

    /**
     * Which products the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_ids?: Array<string> | null;

    /**
     * Which tags the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_tags?: Array<string> | null;

    invoice_schedule?: UpdateCommit.InvoiceSchedule;

    netsuite_sales_order_id?: string | null;

    product_id?: string;

    rollover_fraction?: number | null;
  }

  export namespace UpdateCommit {
    export interface AccessSchedule {
      add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

      remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

      update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
    }

    export namespace AccessSchedule {
      export interface AddScheduleItem {
        amount: number;

        ending_before: string;

        starting_at: string;
      }

      export interface RemoveScheduleItem {
        id: string;
      }

      export interface UpdateScheduleItem {
        id: string;

        amount?: number;

        ending_before?: string;

        starting_at?: string;
      }
    }

    export interface InvoiceSchedule {
      add_schedule_items?: Array<InvoiceSchedule.AddScheduleItem>;

      remove_schedule_items?: Array<InvoiceSchedule.RemoveScheduleItem>;

      update_schedule_items?: Array<InvoiceSchedule.UpdateScheduleItem>;
    }

    export namespace InvoiceSchedule {
      export interface AddScheduleItem {
        timestamp: string;

        amount?: number;

        quantity?: number;

        unit_price?: number;
      }

      export interface RemoveScheduleItem {
        id: string;
      }

      export interface UpdateScheduleItem {
        id: string;

        amount?: number;

        quantity?: number;

        timestamp?: string;

        unit_price?: number;
      }
    }
  }

  export interface UpdateCredit {
    credit_id: string;

    access_schedule?: UpdateCredit.AccessSchedule;

    /**
     * Which products the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_ids?: Array<string> | null;

    /**
     * Which tags the commit applies to. If both applicable_product_ids and
     * applicable_product_tags are not provided, the commit applies to all products.
     */
    applicable_product_tags?: Array<string> | null;

    netsuite_sales_order_id?: string | null;

    product_id?: string;
  }

  export namespace UpdateCredit {
    export interface AccessSchedule {
      add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

      remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

      update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
    }

    export namespace AccessSchedule {
      export interface AddScheduleItem {
        amount: number;

        ending_before: string;

        starting_at: string;
      }

      export interface RemoveScheduleItem {
        id: string;
      }

      export interface UpdateScheduleItem {
        id: string;

        amount?: number;

        ending_before?: string;

        starting_at?: string;
      }
    }
  }

  export interface UpdateScheduledCharge {
    scheduled_charge_id: string;

    invoice_schedule?: UpdateScheduledCharge.InvoiceSchedule;

    netsuite_sales_order_id?: string | null;
  }

  export namespace UpdateScheduledCharge {
    export interface InvoiceSchedule {
      add_schedule_items?: Array<InvoiceSchedule.AddScheduleItem>;

      remove_schedule_items?: Array<InvoiceSchedule.RemoveScheduleItem>;

      update_schedule_items?: Array<InvoiceSchedule.UpdateScheduleItem>;
    }

    export namespace InvoiceSchedule {
      export interface AddScheduleItem {
        timestamp: string;

        amount?: number;

        quantity?: number;

        unit_price?: number;
      }

      export interface RemoveScheduleItem {
        id: string;
      }

      export interface UpdateScheduleItem {
        id: string;

        amount?: number;

        quantity?: number;

        timestamp?: string;

        unit_price?: number;
      }
    }
  }

  export interface UpdateSpendThresholdConfiguration {
    commit?: UpdateSpendThresholdConfiguration.Commit;

    /**
     * When set to false, the contract will not be evaluated against the
     * threshold_amount. Toggling to true will result an immediate evaluation,
     * regardless of prior state.
     */
    is_enabled?: boolean;

    payment_gate_config?: UpdateSpendThresholdConfiguration.PaymentGateConfig;

    /**
     * Specify the threshold amount for the contract. Each time the contract's usage
     * hits this amount, a threshold charge will be initiated.
     */
    threshold_amount?: number;
  }

  export namespace UpdateSpendThresholdConfiguration {
    export interface Commit {
      description?: string | null;

      /**
       * Specify the name of the line item for the threshold charge. If left blank, it
       * will default to the commit product name.
       */
      name?: string | null;

      product_id?: string;
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
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      stripe_config?: PaymentGateConfig.StripeConfig;
    }

    export namespace PaymentGateConfig {
      /**
       * Only applicable if using Stripe as your payment gateway through Metronome.
       */
      export interface StripeConfig {
        /**
         * If left blank, will default to INVOICE
         */
        payment_type: 'INVOICE' | 'PAYMENT_INTENT';
      }
    }
  }
}

export interface ContractEditCommitParams {
  /**
   * ID of the commit to edit
   */
  commit_id: string;

  /**
   * ID of the customer whose commit is being edited
   */
  customer_id: string;

  access_schedule?: ContractEditCommitParams.AccessSchedule;

  /**
   * Which products the commit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the commit applies to all products.
   */
  applicable_product_ids?: Array<string> | null;

  /**
   * Which tags the commit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the commit applies to all products.
   */
  applicable_product_tags?: Array<string> | null;

  /**
   * ID of contract to use for invoicing
   */
  invoice_contract_id?: string;

  invoice_schedule?: ContractEditCommitParams.InvoiceSchedule;

  product_id?: string;
}

export namespace ContractEditCommitParams {
  export interface AccessSchedule {
    add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

    remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

    update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
  }

  export namespace AccessSchedule {
    export interface AddScheduleItem {
      amount: number;

      ending_before: string;

      starting_at: string;
    }

    export interface RemoveScheduleItem {
      id: string;
    }

    export interface UpdateScheduleItem {
      id: string;

      amount?: number;

      ending_before?: string;

      starting_at?: string;
    }
  }

  export interface InvoiceSchedule {
    add_schedule_items?: Array<InvoiceSchedule.AddScheduleItem>;

    remove_schedule_items?: Array<InvoiceSchedule.RemoveScheduleItem>;

    update_schedule_items?: Array<InvoiceSchedule.UpdateScheduleItem>;
  }

  export namespace InvoiceSchedule {
    export interface AddScheduleItem {
      timestamp: string;

      amount?: number;

      quantity?: number;

      unit_price?: number;
    }

    export interface RemoveScheduleItem {
      id: string;
    }

    export interface UpdateScheduleItem {
      id: string;

      amount?: number;

      quantity?: number;

      timestamp?: string;

      unit_price?: number;
    }
  }
}

export interface ContractEditCreditParams {
  /**
   * ID of the credit to edit
   */
  credit_id: string;

  /**
   * ID of the customer whose credit is being edited
   */
  customer_id: string;

  access_schedule?: ContractEditCreditParams.AccessSchedule;

  /**
   * Which products the credit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the credit applies to all products.
   */
  applicable_product_ids?: Array<string> | null;

  /**
   * Which tags the credit applies to. If both applicable_product_ids and
   * applicable_product_tags are not provided, the credit applies to all products.
   */
  applicable_product_tags?: Array<string> | null;

  product_id?: string;
}

export namespace ContractEditCreditParams {
  export interface AccessSchedule {
    add_schedule_items?: Array<AccessSchedule.AddScheduleItem>;

    remove_schedule_items?: Array<AccessSchedule.RemoveScheduleItem>;

    update_schedule_items?: Array<AccessSchedule.UpdateScheduleItem>;
  }

  export namespace AccessSchedule {
    export interface AddScheduleItem {
      amount: number;

      ending_before: string;

      starting_at: string;
    }

    export interface RemoveScheduleItem {
      id: string;
    }

    export interface UpdateScheduleItem {
      id: string;

      amount?: number;

      ending_before?: string;

      starting_at?: string;
    }
  }
}

export interface ContractGetEditHistoryParams {
  contract_id: string;

  customer_id: string;
}

export declare namespace Contracts {
  export {
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractEditResponse as ContractEditResponse,
    type ContractEditCommitResponse as ContractEditCommitResponse,
    type ContractEditCreditResponse as ContractEditCreditResponse,
    type ContractGetEditHistoryResponse as ContractGetEditHistoryResponse,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractEditParams as ContractEditParams,
    type ContractEditCommitParams as ContractEditCommitParams,
    type ContractEditCreditParams as ContractEditCreditParams,
    type ContractGetEditHistoryParams as ContractGetEditHistoryParams,
  };
}
