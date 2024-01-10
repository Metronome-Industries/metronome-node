// File generated from our OpenAPI spec by Stainless.

export interface Commit {
  id: string;

  product: Commit.Product;

  type: 'PREPAID' | 'POSTPAID';

  /**
   * Only valid for "PREPAID" commits: The schedule that the customer will gain
   * access to the credits purposed with this commit.
   */
  access_schedule?: Commit.AccessSchedule;

  /**
   * Only valid for "POSTPAID" commits: The total that the customer commits to
   * consume. Must be >= 0.
   */
  amount?: number;

  applicable_product_ids?: Array<string>;

  applicable_product_tags?: Array<string>;

  description?: string;

  /**
   * Only valid for "PREPAID" commits: The schedule that the customer will be
   * invoiced for this commit.
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
    | Commit.PostpaidCommitTrueupLedgerEntry
    | Commit.PrepaidCommitManualLedgerEntry
  >;

  name?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  netsuite_sales_order_id?: string;

  rolled_over_from?: Commit.RolledOverFrom;

  rollover_fraction?: number;
}

export namespace Commit {
  export interface Product {
    id: string;

    name: string;
  }

  /**
   * Only valid for "PREPAID" commits: The schedule that the customer will gain
   * access to the credits purposed with this commit.
   */
  export interface AccessSchedule {
    schedule_items: Array<AccessSchedule.ScheduleItem>;
  }

  export namespace AccessSchedule {
    export interface ScheduleItem {
      id: string;

      amount: number;

      ending_before: string;

      starting_at: string;
    }
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

    timestamp: string;

    type: 'POSTPAID_COMMIT_AUTOMATED_INVOICE_DEDUCTION';
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

  rate_card_id?: string;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  reseller_royalties?: Array<ContractWithoutAmendments.ResellerRoyalty>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  salesforce_opportunity_id?: string;

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
    frequency: 'MONTHLY' | 'monthly' | 'QUARTERLY' | 'quarterly';
  }

  export interface ResellerRoyalty {
    fraction: number;

    netsuite_reseller_id: string;

    reseller_type: 'AWS' | 'GCP';

    starting_at: string;

    aws_account_number?: string;

    aws_offer_id?: string;

    aws_payer_reference_id?: string;

    ending_before?: string;

    gcp_account_id?: string;

    gcp_offer_id?: string;

    reseller_contract_value?: number;
  }

  export interface UsageFilter {
    current: UsageFilter.Current;

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

export interface ID {
  id: string;
}

export interface Override {
  id: string;

  starting_at: string;

  applicable_product_tags?: Array<string>;

  ending_before?: string;

  entitled?: boolean;

  multiplier?: number;

  overwrite_rate?: Override.OverwriteRate;

  product?: Override.Product;

  type?: 'OVERWRITE' | 'MULTIPLIER';
}

export namespace Override {
  export interface OverwriteRate {
    /**
     * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
     * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
     */
    price: number;

    rate_type: 'FLAT' | 'flat' | 'PERCENTAGE' | 'percentage' | 'SUBSCRIPTION' | 'subscription';

    /**
     * Default proration configuration. Only vali for SUBSCRIPTION rate_type.
     */
    is_prorated?: boolean;

    /**
     * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
     */
    quantity?: number;
  }

  export interface Product {
    id: string;

    name: string;
  }
}

export interface Rate {
  /**
   * Default price. For FLAT rate_type, this must be >=0. For PERCENTAGE rate_type,
   * this is a decimal fraction, e.g. use 0.1 for 10%; this must be >=0 and <=1.
   */
  price: number;

  rate_type: 'FLAT' | 'flat' | 'PERCENTAGE' | 'percentage' | 'SUBSCRIPTION' | 'subscription';

  /**
   * Default proration configuration. Only vali for SUBSCRIPTION rate_type.
   */
  is_prorated?: boolean;

  /**
   * Default quantity. For SUBSCRIPTION rate_type, this must be >=0.
   */
  quantity?: number;

  /**
   * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
   * using list prices rather than the standard rates for this product on the
   * contract.
   */
  use_list_prices?: boolean;
}

export interface SchedulePointInTime {
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

export interface ScheduledCharge {
  id: string;

  product: ScheduledCharge.Product;

  schedule: SchedulePointInTime;

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
