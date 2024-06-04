// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
    | Commit.UnionMember13
    | Commit.UnionMember14
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
    schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
  }

  export namespace InvoiceSchedule {
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

    segment_id: string;

    timestamp: string;

    type: 'POSTPAID_COMMIT_CANCELED';
  }

  export interface UnionMember10 {
    amount: number;

    invoice_id: string;

    segment_id: string;

    timestamp: string;

    type: 'POSTPAID_COMMIT_CREDITED';
  }

  export interface UnionMember11 {
    amount: number;

    invoice_id: string;

    timestamp: string;

    type: 'POSTPAID_COMMIT_TRUEUP';
  }

  export interface UnionMember12 {
    amount: number;

    reason: string;

    timestamp: string;

    type: 'PREPAID_COMMIT_MANUAL';
  }

  export interface UnionMember13 {
    amount: number;

    reason: string;

    timestamp: string;

    type: 'POSTPAID_COMMIT_MANUAL';
  }

  export interface UnionMember14 {
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
  commits: Array<ContractWithoutAmendments.Commit>;

  created_at: string;

  created_by: string;

  overrides: Array<ContractWithoutAmendments.Override>;

  scheduled_charges: Array<ContractWithoutAmendments.ScheduledCharge>;

  starting_at: string;

  transitions: Array<ContractWithoutAmendments.Transition>;

  usage_statement_schedule: ContractWithoutAmendments.UsageStatementSchedule;

  credits?: Array<ContractWithoutAmendments.Credit>;

  /**
   * This field's availability is dependent on your client's configuration.
   */
  discounts?: Array<ContractWithoutAmendments.Discount>;

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
  professional_services?: Array<ContractWithoutAmendments.ProfessionalService>;

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
      | Commit.UnionMember13
      | Commit.UnionMember14
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
      schedule_items?: Array<InvoiceSchedule.ScheduleItem>;
    }

    export namespace InvoiceSchedule {
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

      segment_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_CANCELED';
    }

    export interface UnionMember10 {
      amount: number;

      invoice_id: string;

      segment_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_CREDITED';
    }

    export interface UnionMember11 {
      amount: number;

      invoice_id: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_TRUEUP';
    }

    export interface UnionMember12 {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'PREPAID_COMMIT_MANUAL';
    }

    export interface UnionMember13 {
      amount: number;

      reason: string;

      timestamp: string;

      type: 'POSTPAID_COMMIT_MANUAL';
    }

    export interface UnionMember14 {
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

    multiplier?: number;

    override_specifiers?: Array<Override.OverrideSpecifier>;

    overwrite_rate?: Override.OverwriteRate;

    product?: Override.Product;

    type?: 'OVERWRITE' | 'MULTIPLIER';
  }

  export namespace Override {
    export interface OverrideSpecifier {
      presentation_group_values?: Record<string, string | null>;

      pricing_group_values?: Record<string, string>;

      product_id?: string;

      product_tags?: Array<string>;
    }

    export interface OverwriteRate {
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
      tiers?: Array<OverwriteRate.Tier>;
    }

    export namespace OverwriteRate {
      export interface Tier {
        price: number;

        size?: number;
      }
    }

    export interface Product {
      id: string;

      name: string;
    }
  }

  export interface ScheduledCharge {
    id: string;

    product: ScheduledCharge.Product;

    schedule: ScheduledCharge.Schedule;

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
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
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
    frequency: 'MONTHLY' | 'monthly' | 'QUARTERLY' | 'quarterly';
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
      schedule_items?: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
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

export interface Discount {
  id: string;

  product: Discount.Product;

  schedule: Discount.Schedule;

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
    schedule_items?: Array<Schedule.ScheduleItem>;
  }

  export namespace Schedule {
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

  override_specifiers?: Array<Override.OverrideSpecifier>;

  overwrite_rate?: Override.OverwriteRate;

  product?: Override.Product;

  type?: 'OVERWRITE' | 'MULTIPLIER';
}

export namespace Override {
  export interface OverrideSpecifier {
    presentation_group_values?: Record<string, string | null>;

    pricing_group_values?: Record<string, string>;

    product_id?: string;

    product_tags?: Array<string>;
  }

  export interface OverwriteRate {
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
    tiers?: Array<OverwriteRate.Tier>;
  }

  export namespace OverwriteRate {
    export interface Tier {
      price: number;

      size?: number;
    }
  }

  export interface Product {
    id: string;

    name: string;
  }
}

export interface Rate {
  rate_type:
    | 'FLAT'
    | 'flat'
    | 'PERCENTAGE'
    | 'percentage'
    | 'SUBSCRIPTION'
    | 'subscription'
    | 'CUSTOM'
    | 'custom'
    | 'TIERED'
    | 'tiered';

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
  tiers?: Array<Rate.Tier>;

  /**
   * Only set for PERCENTAGE rate_type. Defaults to false. If true, rate is computed
   * using list prices rather than the standard rates for this product on the
   * contract.
   */
  use_list_prices?: boolean;
}

export namespace Rate {
  export interface Tier {
    price: number;

    size?: number;
  }
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

  schedule: ScheduledCharge.Schedule;

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
    schedule_items?: Array<Schedule.ScheduleItem>;
  }

  export namespace Schedule {
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
