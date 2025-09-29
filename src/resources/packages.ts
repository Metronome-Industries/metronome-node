// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Packages extends APIResource {
  /**
   * Create a new package
   *
   * @example
   * ```ts
   * const _package = await client.packages.create({
   *   name: 'My package',
   *   billing_provider: 'stripe',
   *   delivery_method: 'direct_to_billing_provider',
   *   rate_card_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  create(body: PackageCreateParams, options?: RequestOptions): APIPromise<PackageCreateResponse> {
    return this._client.post('/v1/packages/create', { body, ...options });
  }
}

export interface PackageCreateResponse {
  data: Shared.ID;
}

export interface PackageCreateParams {
  name: string;

  billing_anchor_date?: 'contract_start_date' | 'first_billing_period';

  billing_provider?: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace' | 'stripe' | 'netsuite';

  commits?: Array<PackageCreateParams.Commit>;

  contract_name?: string;

  credits?: Array<PackageCreateParams.Credit>;

  /**
   * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
   */
  custom_fields?: { [key: string]: string };

  delivery_method?: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

  duration?: PackageCreateParams.Duration;

  /**
   * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
   * prices automatically. EXPLICIT prioritization requires specifying priorities for
   * each multiplier; the one with the lowest priority value will be prioritized
   * first. If tiered overrides are used, prioritization must be explicit.
   */
  multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

  net_payment_terms_days?: number;

  overrides?: Array<PackageCreateParams.Override>;

  prepaid_balance_threshold_configuration?: Shared.PrepaidBalanceThresholdConfiguration;

  /**
   * Priority of the generated contract.
   */
  priority?: number;

  /**
   * Selects the rate card linked to the specified alias as of the contract's start
   * date.
   */
  rate_card_alias?: string;

  rate_card_id?: string;

  recurring_commits?: Array<PackageCreateParams.RecurringCommit>;

  recurring_credits?: Array<PackageCreateParams.RecurringCredit>;

  scheduled_charges?: Array<PackageCreateParams.ScheduledCharge>;

  /**
   * Determines which scheduled and commit charges to consolidate onto the Contract's
   * usage invoice. The charge's `timestamp` must match the usage invoice's
   * `ending_before` date for consolidation to occur. This field cannot be modified
   * after a Contract has been created. If this field is omitted, charges will appear
   * on a separate invoice from usage charges.
   */
  scheduled_charges_on_usage_invoices?: 'ALL';

  spend_threshold_configuration?: Shared.SpendThresholdConfiguration;

  subscriptions?: Array<PackageCreateParams.Subscription>;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string;

  usage_statement_schedule?: PackageCreateParams.UsageStatementSchedule;
}

export namespace PackageCreateParams {
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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

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
    specifiers?: Array<Shared.CommitSpecifierInput>;

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
         * Offset relative to the start of this segment indicating when it should end.
         */
        duration: ScheduleItem.Duration;

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        starting_at_offset: ScheduleItem.StartingAtOffset;
      }

      export namespace ScheduleItem {
        /**
         * Offset relative to the start of this segment indicating when it should end.
         */
        export interface Duration {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }
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
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items: Array<InvoiceSchedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;
    }

    export namespace InvoiceSchedule {
      export interface ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        date_offset: ScheduleItem.DateOffset;

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

      export namespace ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }
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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    /**
     * Used only in UI/API. It is not exposed to end customers.
     */
    description?: string;

    /**
     * displayed on invoices
     */
    name?: string;

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
    specifiers?: Array<Shared.CommitSpecifierInput>;
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
         * Offset relative to the start of this segment indicating when it should end.
         */
        duration: ScheduleItem.Duration;

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        starting_at_offset: ScheduleItem.StartingAtOffset;
      }

      export namespace ScheduleItem {
        /**
         * Offset relative to the start of this segment indicating when it should end.
         */
        export interface Duration {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface Duration {
    unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

    value: number;
  }

  export interface Override {
    /**
     * Specifies which products the override will apply to.
     */
    override_specifiers: Array<Override.OverrideSpecifier>;

    /**
     * Offset relative to contract start date indicating when the override will start
     * applying (inclusive)
     */
    starting_offset: Override.StartingOffset;

    /**
     * Offset relative to override start indicating when the override will stop
     * applying (exclusive)
     */
    duration?: Override.Duration;

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
       * one of `product_id`, `product_tags`, `pricing_group_values`, or
       * `presentation_group_values`. If provided, the override will only apply to the
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
       * one of `product_id`, `product_tags`, `pricing_group_values`, or
       * `presentation_group_values`. If provided, the override will only apply to
       * commits created by the specified recurring commit ids.
       */
      recurring_commit_ids?: Array<string>;

      /**
       * Can only be used for commit specific overrides. Must be used in conjunction with
       * one of `product_id`, `product_tags`, `pricing_group_values`, or
       * `presentation_group_values`. If provided, the override will only apply to
       * credits created by the specified recurring credit ids.
       */
      recurring_credit_ids?: Array<string>;
    }

    /**
     * Offset relative to contract start date indicating when the override will start
     * applying (inclusive)
     */
    export interface StartingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to override start indicating when the override will stop
     * applying (exclusive)
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
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
     * Determines the start time for the first commit
     */
    starting_offset: RecurringCommit.StartingOffset;

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
    ending_offset?: RecurringCommit.EndingOffset;

    /**
     * The amount the customer should be billed for the commit. Not required.
     */
    invoice_amount?: RecurringCommit.InvoiceAmount;

    /**
     * displayed on invoices. will be passed through to the individual commits
     */
    name?: string;

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
    specifiers?: Array<Shared.CommitSpecifierInput>;

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
     * Determines the start time for the first commit
     */
    export interface StartingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }

    /**
     * Determines when the contract will stop creating recurring commits. optional
     */
    export interface EndingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

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
      allocation?: 'INDIVIDUAL' | 'POOLED';
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
     * Determines the start time for the first commit
     */
    starting_offset: RecurringCredit.StartingOffset;

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
    ending_offset?: RecurringCredit.EndingOffset;

    /**
     * displayed on invoices. will be passed through to the individual commits
     */
    name?: string;

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
    specifiers?: Array<Shared.CommitSpecifierInput>;

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
     * Determines the start time for the first commit
     */
    export interface StartingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }

    /**
     * Determines when the contract will stop creating recurring commits. optional
     */
    export interface EndingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
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
      allocation?: 'INDIVIDUAL' | 'POOLED';
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

  export interface ScheduledCharge {
    product_id: string;

    /**
     * Must provide schedule_items.
     */
    schedule: ScheduledCharge.Schedule;

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    /**
     * displayed on invoices
     */
    name?: string;
  }

  export namespace ScheduledCharge {
    /**
     * Must provide schedule_items.
     */
    export interface Schedule {
      /**
       * Either provide amount or provide both unit_price and quantity.
       */
      schedule_items: Array<Schedule.ScheduleItem>;

      /**
       * Defaults to USD (cents) if not passed.
       */
      credit_type_id?: string;
    }

    export namespace Schedule {
      export interface ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        date_offset: ScheduleItem.DateOffset;

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

      export namespace ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

          value: number;
        }
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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    description?: string;

    /**
     * Lifetime of the subscription from its start. If not provided, subscription
     * inherits contract end date.
     */
    duration?: Subscription.Duration;

    name?: string;

    /**
     * Relative date from contract start date corresponding to the inclusive start time
     * for the subscription. If not provided, defaults to contract start date
     */
    starting_offset?: Subscription.StartingOffset;

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

    /**
     * Lifetime of the subscription from its start. If not provided, subscription
     * inherits contract end date.
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }

    /**
     * Relative date from contract start date corresponding to the inclusive start time
     * for the subscription. If not provided, defaults to contract start date
     */
    export interface StartingOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }
  }

  export interface UsageStatementSchedule {
    frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

    /**
     * If not provided, defaults to the first day of the month.
     */
    day?: 'FIRST_OF_MONTH' | 'CONTRACT_START';

    /**
     * The offset at which Metronome should start generating usage invoices, relative
     * to the contract start date. If unspecified, contract start date will be used.
     * This is useful to set if you want to import historical invoices via our 'Create
     * Historical Invoices' API rather than having Metronome automatically generate
     * them.
     */
    invoice_generation_starting_at_offset?: UsageStatementSchedule.InvoiceGenerationStartingAtOffset;
  }

  export namespace UsageStatementSchedule {
    /**
     * The offset at which Metronome should start generating usage invoices, relative
     * to the contract start date. If unspecified, contract start date will be used.
     * This is useful to set if you want to import historical invoices via our 'Create
     * Historical Invoices' API rather than having Metronome automatically generate
     * them.
     */
    export interface InvoiceGenerationStartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'QUARTERS' | 'YEARS';

      value: number;
    }
  }
}

export declare namespace Packages {
  export {
    type PackageCreateResponse as PackageCreateResponse,
    type PackageCreateParams as PackageCreateParams,
  };
}
