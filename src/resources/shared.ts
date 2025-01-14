// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export interface BaseUsageFilter {
  group_key: string;

  group_values: Array<string>;

  starting_at?: string;
}

export interface Commit {
  id: string;

  product: Commit.Product;

  type: 'PREPAID' | 'POSTPAID';

  /**
   * The schedule that the customer will gain access to the credits purposed with
   * this commit.
   */
  access_schedule?: ScheduleDuration;

  /**
   * (DEPRECATED) Use access_schedule + invoice_schedule instead.
   */
  amount?: number;

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
  invoice_schedule?: SchedulePointInTime;

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

export interface ContractWithoutAmendments {
  commits: Array<Commit>;

  created_at: string;

  created_by: string;

  overrides: Array<Override>;

  scheduled_charges: Array<ScheduledCharge>;

  starting_at: string;

  transitions: Array<ContractWithoutAmendments.Transition>;

  usage_statement_schedule: ContractWithoutAmendments.UsageStatementSchedule;

  credits?: Array<Credit>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  discounts?: Array<Discount>;

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
  professional_services?: Array<ProService>;

  rate_card_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  reseller_royalties?: Array<ContractWithoutAmendments.ResellerRoyalty>;

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

  /**
   * This field's availability is dependent on your client's configuration.
   */
  total_contract_value?: number;

  usage_filter?: ContractWithoutAmendments.UsageFilter;
}

export namespace ContractWithoutAmendments {
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

    frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL';
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

  export interface UsageFilter {
    current: Shared.BaseUsageFilter | null;

    initial: Shared.BaseUsageFilter;

    updates: Array<UsageFilter.Update>;
  }

  export namespace UsageFilter {
    export interface Update {
      group_key: string;

      group_values: Array<string>;

      starting_at: string;
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
  access_schedule?: ScheduleDuration;

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

export interface CreditTypeData {
  id: string;

  name: string;
}

export interface Discount {
  id: string;

  product: Discount.Product;

  schedule: SchedulePointInTime;

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
}

/**
 * An optional filtering rule to match the 'event_type' property of an event.
 */
export interface EventTypeFilter {
  /**
   * A list of event types that are explicitly included in the billable metric. If
   * specified, only events of these types will match the billable metric. Must be
   * non-empty if present.
   */
  in_values?: Array<string>;

  /**
   * A list of event types that are explicitly excluded from the billable metric. If
   * specified, events of these types will not match the billable metric. Must be
   * non-empty if present.
   */
  not_in_values?: Array<string>;
}

export interface ID {
  id: string;
}

export interface Override {
  id: string;

  starting_at: string;

  applicable_product_tags?: Array<string>;

  credit_type?: CreditTypeData;

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
  tiers?: Array<Tier>;

  type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';

  /**
   * Only set for CUSTOM rate_type. This field is interpreted by custom rate
   * processors.
   */
  value?: Record<string, unknown>;
}

export namespace Override {
  export interface OverrideSpecifier {
    commit_ids?: Array<string>;

    presentation_group_values?: Record<string, string | null>;

    pricing_group_values?: Record<string, string>;

    product_id?: string;

    product_tags?: Array<string>;
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

export interface PropertyFilter {
  /**
   * The name of the event property.
   */
  name: string;

  /**
   * Determines whether the property must exist in the event. If true, only events
   * with this property will pass the filter. If false, only events without this
   * property will pass the filter. If null or omitted, the existence of the property
   * is optional.
   */
  exists?: boolean;

  /**
   * Specifies the allowed values for the property to match an event. An event will
   * pass the filter only if its property value is included in this list. If
   * undefined, all property values will pass the filter. Must be non-empty if
   * present.
   */
  in_values?: Array<string>;

  /**
   * Specifies the values that prevent an event from matching the filter. An event
   * will not pass the filter if its property value is included in this list. If null
   * or empty, all property values will pass the filter. Must be non-empty if
   * present.
   */
  not_in_values?: Array<string>;
}

export interface ProService {
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

export interface Rate {
  rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'CUSTOM' | 'TIERED';

  credit_type?: CreditTypeData;

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
  tiers?: Array<Tier>;

  /**
   * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
   * using list prices rather than the standard rates for this product on the
   * contract.
   */
  use_list_prices?: boolean;
}

export interface ScheduledCharge {
  id: string;

  product: ScheduledCharge.Product;

  schedule: SchedulePointInTime;

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
}

export interface ScheduleDuration {
  schedule_items: Array<ScheduleDuration.ScheduleItem>;

  credit_type?: CreditTypeData;
}

export namespace ScheduleDuration {
  export interface ScheduleItem {
    id: string;

    amount: number;

    ending_before: string;

    starting_at: string;
  }
}

export interface SchedulePointInTime {
  credit_type?: CreditTypeData;

  schedule_items?: Array<SchedulePointInTime.ScheduleItem>;
}

export namespace SchedulePointInTime {
  export interface ScheduleItem {
    id: string;

    amount: number;

    invoice_id: string;

    quantity: number;

    timestamp: string;

    unit_price: number;
  }
}

export interface Tier {
  price: number;

  size?: number;
}
