// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { CursorPage, type CursorPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Packages extends APIResource {
  /**
   * Create a package that defines a set of reusable, time-relative contract terms
   * that can be used across cohorts of customers. Packages provide an abstraction
   * layer on top of rate cards to provide an easy way to provision customers with
   * standard pricing.
   *
   * ### **Use this endpoint to:**
   *
   * - Model standard pay-as-you-go pricing packages that can be easily reused across
   *   customers
   * - Define standardized contract terms and discounting for sales-led motions
   * - Set aliases for the package to facilitate easy package transition. Aliases are
   *   human-readable names that you can use in the place of the id of the package
   *   when provisioning a customer’s contract. By using an alias, you can easily
   *   create a contract and provision a customer by choosing the “Starter Plan”
   *   package, without storing the package ID in your internal systems. This is
   *   helpful when launching terms for a package, as you can create a new package
   *   with the “Starter Plan” alias scheduled to be assigned without updating your
   *   provisioning code.
   *
   * ### Key input fields:
   *
   * - `starting_at_offset`: Starting date relative to contract start. Generates the
   *   `starting_at` date when a contract is provisioned using a package.
   * - `duration`: Duration starting from `starting_at_offset`. Generates the
   *   `ending_before` date when a contract is provisioned using a package.
   * - `date_offset`: Date relative to contract start. Used for point-in-time dates
   *   without a duration.
   * - `aliases`: Human-readable name to use when provisioning contracts with a
   *   package.
   *
   * ### Usage guidelines:
   *
   * - Use packages for standard self-serve use cases where customers have consistent
   *   terms. For customers with negotiated custom contract terms, use the
   *   `createContract` endpoint for maximum flexibility.
   * - Billing provider configuration can be set when creating a package by using
   *   `billing_provider` and `delivery_method`. To provision a customer successfully
   *   with a package, the customer must have one and only one billing provider
   *   configuration that matches the billing provider configuration set on the
   *   package.
   * - A package alias can only be used by one package at a time. If you create a new
   *   package with an alias that is already in use by another package, the original
   *   package’s alias schedule will be updated. The alias will reference the package
   *   to which it was most recently assigned.
   * - Terms can only be specified using times relative to the contract start date.
   *   Supported granularities are: `days`, `weeks`, `months`, `years`
   * - Packages cannot be edited once created. Use the rate card to easily add new
   *   rates across all of your customers or make direct edits to a contract after
   *   provisioning with a package. Edited contracts will still be associated with
   *   the package used during provisioning.
   *
   * @example
   * ```ts
   * const _package = await client.v1.packages.create({
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

  /**
   * Gets the details for a specific package, including name, aliases, duration, and
   * terms. Use this endpoint to understand a package’s alias schedule, or display a
   * specific package’s details to end customers.
   *
   * @example
   * ```ts
   * const _package = await client.v1.packages.retrieve({
   *   package_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  retrieve(body: PackageRetrieveParams, options?: RequestOptions): APIPromise<PackageRetrieveResponse> {
    return this._client.post('/v1/packages/get', { body, ...options });
  }

  /**
   * Lists all packages with details including name, aliases, duration, and terms. To
   * view contracts on a specific package, use the `listContractsOnPackage` endpoint.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const packageListResponse of client.v1.packages.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PackageListResponsesCursorPage, PackageListResponse> {
    const { limit, next_page, ...body } = params ?? {};
    return this._client.getAPIList('/v1/packages/list', CursorPage<PackageListResponse>, {
      query: { limit, next_page },
      body,
      method: 'post',
      ...options,
    });
  }

  /**
   * Archive a package. Archived packages cannot be used to create new contracts.
   * However, existing contracts associated with the package will continue to
   * function as normal. Once you archive a package, you can still retrieve it in the
   * UI and API, but you cannot unarchive it.
   *
   * @example
   * ```ts
   * const response = await client.v1.packages.archive({
   *   package_id: 'd7abd0cd-4ae9-4db7-8676-e986a4ebd8dc',
   * });
   * ```
   */
  archive(body: PackageArchiveParams, options?: RequestOptions): APIPromise<PackageArchiveResponse> {
    return this._client.post('/v1/packages/archive', { body, ...options });
  }

  /**
   * For a given package, returns all contract IDs and customer IDs associated with
   * the package over a specific time period.
   *
   * ### Use this endpoint to:
   *
   * - Understand which customers are provisioned on a package at any given time for
   *   internal cohort management
   * - Manage customer migrations to a new package. For example, to migrate all
   *   active customers to a new package, call this endpoint, end contracts, and
   *   provision customers on a new package.
   *
   * ### **Usage guidelines:**
   *
   * Use the **`starting_at`**, **`covering_date`**,
   * and **`include_archived`** parameters to filter the list of returned contracts.
   * For example, to list only currently active contracts,
   * pass **`covering_date`** equal to the current time.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const packageListContractsOnPackageResponse of client.v1.packages.listContractsOnPackage(
   *   { package_id: '13117714-3f05-48e5-a6e9-a66093f13b4d' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listContractsOnPackage(
    params: PackageListContractsOnPackageParams,
    options?: RequestOptions,
  ): PagePromise<PackageListContractsOnPackageResponsesCursorPage, PackageListContractsOnPackageResponse> {
    const { limit, next_page, ...body } = params;
    return this._client.getAPIList(
      '/v1/packages/listContractsOnPackage',
      CursorPage<PackageListContractsOnPackageResponse>,
      { query: { limit, next_page }, body, method: 'post', ...options },
    );
  }
}

export type PackageListResponsesCursorPage = CursorPage<PackageListResponse>;

export type PackageListContractsOnPackageResponsesCursorPage =
  CursorPage<PackageListContractsOnPackageResponse>;

export interface PackageCreateResponse {
  data: Shared.ID;
}

export interface PackageRetrieveResponse {
  data: PackageRetrieveResponse.Data;
}

export namespace PackageRetrieveResponse {
  export interface Data {
    id: string;

    commits: Array<Data.Commit>;

    created_at: string;

    created_by: string;

    overrides: Array<Data.Override>;

    scheduled_charges: Array<Data.ScheduledCharge>;

    usage_statement_schedule: Data.UsageStatementSchedule;

    aliases?: Array<Data.Alias>;

    archived_at?: string;

    billing_provider?:
      | 'aws_marketplace'
      | 'stripe'
      | 'netsuite'
      | 'custom'
      | 'azure_marketplace'
      | 'quickbooks_online'
      | 'workday'
      | 'gcp_marketplace'
      | 'metronome';

    credits?: Array<Data.Credit>;

    delivery_method?: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

    duration?: Data.Duration;

    /**
     * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
     * prices automatically. EXPLICIT prioritization requires specifying priorities for
     * each multiplier; the one with the lowest priority value will be prioritized
     * first.
     */
    multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

    name?: string;

    net_payment_terms_days?: number;

    prepaid_balance_threshold_configuration?: Shared.PrepaidBalanceThresholdConfiguration;

    rate_card_id?: string;

    recurring_commits?: Array<Data.RecurringCommit>;

    recurring_credits?: Array<Data.RecurringCredit>;

    /**
     * Determines which scheduled and commit charges to consolidate onto the Contract's
     * usage invoice. The charge's `timestamp` must match the usage invoice's
     * `ending_before` date for consolidation to occur. This field cannot be modified
     * after a Contract has been created. If this field is omitted, charges will appear
     * on a separate invoice from usage charges.
     */
    scheduled_charges_on_usage_invoices?: 'ALL';

    spend_threshold_configuration?: Shared.SpendThresholdConfiguration;

    subscriptions?: Array<Data.Subscription>;

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
      access_schedule?: Commit.AccessSchedule;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

      /**
       * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
       */
      custom_fields?: { [key: string]: string };

      description?: string;

      /**
       * The schedule that the customer will be invoiced for this commit.
       */
      invoice_schedule?: Commit.InvoiceSchedule;

      name?: string;

      /**
       * If multiple credits or commits are applicable, the one with the lower priority
       * will apply first.
       */
      priority?: number;

      rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

      rollover_fraction?: number;

      /**
       * List of filters that determine what kind of customer usage draws down a commit
       * or credit. A customer's usage needs to meet the condition of at least one of the
       * specifiers to contribute to a commit's or credit's drawdown.
       */
      specifiers?: Array<Shared.CommitSpecifier>;
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
        credit_type: Shared.CreditTypeData;

        schedule_items: Array<AccessSchedule.ScheduleItem>;
      }

      export namespace AccessSchedule {
        export interface ScheduleItem {
          id: string;

          amount: number;

          duration: ScheduleItem.Duration;

          starting_at_offset: ScheduleItem.StartingAtOffset;
        }

        export namespace ScheduleItem {
          export interface Duration {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }

          export interface StartingAtOffset {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }
        }
      }

      /**
       * The schedule that the customer will be invoiced for this commit.
       */
      export interface InvoiceSchedule {
        credit_type: Shared.CreditTypeData;

        /**
         * If true, this schedule will not generate an invoice.
         */
        do_not_invoice: boolean;

        schedule_items: Array<InvoiceSchedule.ScheduleItem>;
      }

      export namespace InvoiceSchedule {
        export interface ScheduleItem {
          id: string;

          date_offset: ScheduleItem.DateOffset;

          quantity: number;

          unit_price: number;
        }

        export namespace ScheduleItem {
          export interface DateOffset {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }
        }
      }
    }

    export interface Override {
      id: string;

      override_specifiers: Array<Override.OverrideSpecifier>;

      starting_at_offset: Override.StartingAtOffset;

      applicable_product_tags?: Array<string>;

      duration?: Override.Duration;

      entitled?: boolean;

      is_commit_specific?: boolean;

      multiplier?: number;

      override_tiers?: Array<Shared.OverrideTier>;

      overwrite_rate?: Shared.OverwriteRate;

      priority?: number;

      product?: Override.Product;

      target?: 'COMMIT_RATE' | 'LIST_RATE';

      type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
    }

    export namespace Override {
      export interface OverrideSpecifier {
        billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

        commit_template_ids?: Array<string>;

        presentation_group_values?: { [key: string]: string | null };

        pricing_group_values?: { [key: string]: string };

        product_id?: string;

        product_tags?: Array<string>;

        recurring_commit_template_ids?: Array<string>;

        recurring_credit_template_ids?: Array<string>;
      }

      export interface StartingAtOffset {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      export interface Duration {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
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

      /**
       * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
       */
      custom_fields?: { [key: string]: string };

      description?: string;

      name?: string;
    }

    export namespace ScheduledCharge {
      export interface Product {
        id: string;

        name: string;
      }

      export interface Schedule {
        credit_type: Shared.CreditTypeData;

        schedule_items: Array<Schedule.ScheduleItem>;
      }

      export namespace Schedule {
        export interface ScheduleItem {
          id: string;

          date_offset: ScheduleItem.DateOffset;

          quantity: number;

          unit_price: number;
        }

        export namespace ScheduleItem {
          export interface DateOffset {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }
        }
      }
    }

    export interface UsageStatementSchedule {
      frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
    }

    export interface Alias {
      name: string;

      ending_before?: string;

      starting_at?: string;
    }

    export interface Credit {
      id: string;

      product: Credit.Product;

      access_schedule?: Credit.AccessSchedule;

      applicable_product_ids?: Array<string>;

      applicable_product_tags?: Array<string>;

      /**
       * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
       */
      custom_fields?: { [key: string]: string };

      description?: string;

      name?: string;

      priority?: number;

      rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

      /**
       * List of filters that determine what kind of customer usage draws down a commit
       * or credit. A customer's usage needs to meet the condition of at least one of the
       * specifiers to contribute to a commit's or credit's drawdown.
       */
      specifiers?: Array<Shared.CommitSpecifier>;
    }

    export namespace Credit {
      export interface Product {
        id: string;

        name: string;
      }

      export interface AccessSchedule {
        credit_type: Shared.CreditTypeData;

        schedule_items: Array<AccessSchedule.ScheduleItem>;
      }

      export namespace AccessSchedule {
        export interface ScheduleItem {
          id: string;

          amount: number;

          duration: ScheduleItem.Duration;

          starting_at_offset: ScheduleItem.StartingAtOffset;
        }

        export namespace ScheduleItem {
          export interface Duration {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }

          export interface StartingAtOffset {
            unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

            value: number;
          }
        }
      }
    }

    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    export interface RecurringCommit {
      id: string;

      /**
       * The amount of commit to grant.
       */
      access_amount: RecurringCommit.AccessAmount;

      /**
       * The amount of time each of the created commits will be valid for
       */
      commit_duration: RecurringCommit.CommitDuration;

      priority: number;

      product: RecurringCommit.Product;

      /**
       * Whether the created commits will use the commit rate or list rate
       */
      rate_type: 'COMMIT_RATE' | 'LIST_RATE';

      /**
       * Offset relative to the contract start date that determines the start time for
       * the first commit
       */
      starting_at_offset: RecurringCommit.StartingAtOffset;

      /**
       * Will be passed down to the individual commits
       */
      applicable_product_ids?: Array<string>;

      /**
       * Will be passed down to the individual commits
       */
      applicable_product_tags?: Array<string>;

      description?: string;

      /**
       * Offset relative to the recurring credit start that determines when the contract
       * will stop creating recurring commits. optional
       */
      duration?: RecurringCommit.Duration;

      /**
       * The amount the customer should be billed for the commit.
       */
      invoice_amount?: RecurringCommit.InvoiceAmount;

      name?: string;

      /**
       * Determines whether the first and last commit will be prorated. If not provided,
       * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
       */
      proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

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
       * specifiers to contribute to a commit's or credit's drawdown.
       */
      specifiers?: Array<Shared.CommitSpecifier>;

      /**
       * Attach a subscription to the recurring commit/credit.
       */
      subscription_config?: RecurringCommit.SubscriptionConfig;
    }

    export namespace RecurringCommit {
      /**
       * The amount of commit to grant.
       */
      export interface AccessAmount {
        credit_type_id: string;

        unit_price: number;

        quantity?: number;
      }

      /**
       * The amount of time each of the created commits will be valid for
       */
      export interface CommitDuration {
        value: number;

        unit?: 'PERIODS';
      }

      export interface Product {
        id: string;

        name: string;
      }

      /**
       * Offset relative to the contract start date that determines the start time for
       * the first commit
       */
      export interface StartingAtOffset {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      /**
       * Offset relative to the recurring credit start that determines when the contract
       * will stop creating recurring commits. optional
       */
      export interface Duration {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      /**
       * The amount the customer should be billed for the commit.
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
        allocation: 'INDIVIDUAL' | 'POOLED';

        apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

        subscription_template_id: string;
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
      id: string;

      /**
       * The amount of commit to grant.
       */
      access_amount: RecurringCredit.AccessAmount;

      /**
       * The amount of time each of the created commits will be valid for
       */
      commit_duration: RecurringCredit.CommitDuration;

      priority: number;

      product: RecurringCredit.Product;

      /**
       * Whether the created commits will use the commit rate or list rate
       */
      rate_type: 'COMMIT_RATE' | 'LIST_RATE';

      /**
       * Offset relative to the contract start date that determines the start time for
       * the first commit
       */
      starting_at_offset: RecurringCredit.StartingAtOffset;

      /**
       * Will be passed down to the individual commits
       */
      applicable_product_ids?: Array<string>;

      /**
       * Will be passed down to the individual commits
       */
      applicable_product_tags?: Array<string>;

      description?: string;

      /**
       * Offset relative to the recurring credit start that determines when the contract
       * will stop creating recurring commits. optional
       */
      duration?: RecurringCredit.Duration;

      name?: string;

      /**
       * Determines whether the first and last commit will be prorated. If not provided,
       * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
       */
      proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

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
       * specifiers to contribute to a commit's or credit's drawdown.
       */
      specifiers?: Array<Shared.CommitSpecifier>;

      /**
       * Attach a subscription to the recurring commit/credit.
       */
      subscription_config?: RecurringCredit.SubscriptionConfig;
    }

    export namespace RecurringCredit {
      /**
       * The amount of commit to grant.
       */
      export interface AccessAmount {
        credit_type_id: string;

        unit_price: number;

        quantity?: number;
      }

      /**
       * The amount of time each of the created commits will be valid for
       */
      export interface CommitDuration {
        value: number;

        unit?: 'PERIODS';
      }

      export interface Product {
        id: string;

        name: string;
      }

      /**
       * Offset relative to the contract start date that determines the start time for
       * the first commit
       */
      export interface StartingAtOffset {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      /**
       * Offset relative to the recurring credit start that determines when the contract
       * will stop creating recurring commits. optional
       */
      export interface Duration {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      /**
       * Attach a subscription to the recurring commit/credit.
       */
      export interface SubscriptionConfig {
        allocation: 'INDIVIDUAL' | 'POOLED';

        apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

        subscription_template_id: string;
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

    export interface Subscription {
      collection_schedule: 'ADVANCE' | 'ARREARS';

      proration: Subscription.Proration;

      subscription_rate: Subscription.SubscriptionRate;

      id?: string;

      /**
       * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
       */
      custom_fields?: { [key: string]: string };

      description?: string;

      duration?: Subscription.Duration;

      fiat_credit_type_id?: string;

      initial_quantity?: number;

      name?: string;

      /**
       * Determines how the subscription's quantity is controlled. Defaults to
       * QUANTITY_ONLY. **QUANTITY_ONLY**: The subscription quantity is specified
       * directly on the subscription. `initial_quantity` must be provided with this
       * option. Compatible with recurring commits/credits that use POOLED allocation.
       * **SEAT_BASED**: Use when you want to pass specific seat identifiers (e.g. add
       * user_123) to increment and decrement a subscription quantity, rather than
       * directly providing the quantity. You must use a SEAT_BASED subscription to use a
       * linked recurring credit with an allocation per seat. `seat_config` must be
       * provided with this option.
       */
      quantity_management_mode?: 'SEAT_BASED' | 'QUANTITY_ONLY';

      seat_config?: Subscription.SeatConfig;

      starting_at_offset?: Subscription.StartingAtOffset;
    }

    export namespace Subscription {
      export interface Proration {
        invoice_behavior: 'BILL_IMMEDIATELY' | 'BILL_ON_NEXT_COLLECTION_DATE';

        is_prorated: boolean;
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

      export interface Duration {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }

      export interface SeatConfig {
        /**
         * The property name, sent on usage events, that identifies the seat ID associated
         * with the usage event. For example, the property name might be seat_id or
         * user_id. The property must be set as a group key on billable metrics and a
         * presentation/pricing group key on contract products. This allows linked
         * recurring credits with an allocation per seat to be consumed by only one seat's
         * usage.
         */
        seat_group_key: string;
      }

      export interface StartingAtOffset {
        unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

        value: number;
      }
    }
  }
}

export interface PackageListResponse {
  id: string;

  commits: Array<PackageListResponse.Commit>;

  created_at: string;

  created_by: string;

  overrides: Array<PackageListResponse.Override>;

  scheduled_charges: Array<PackageListResponse.ScheduledCharge>;

  usage_statement_schedule: PackageListResponse.UsageStatementSchedule;

  aliases?: Array<PackageListResponse.Alias>;

  archived_at?: string;

  billing_provider?:
    | 'aws_marketplace'
    | 'stripe'
    | 'netsuite'
    | 'custom'
    | 'azure_marketplace'
    | 'quickbooks_online'
    | 'workday'
    | 'gcp_marketplace'
    | 'metronome';

  credits?: Array<PackageListResponse.Credit>;

  delivery_method?: 'direct_to_billing_provider' | 'aws_sqs' | 'tackle' | 'aws_sns';

  duration?: PackageListResponse.Duration;

  /**
   * Defaults to LOWEST_MULTIPLIER, which applies the greatest discount to list
   * prices automatically. EXPLICIT prioritization requires specifying priorities for
   * each multiplier; the one with the lowest priority value will be prioritized
   * first.
   */
  multiplier_override_prioritization?: 'LOWEST_MULTIPLIER' | 'EXPLICIT';

  name?: string;

  net_payment_terms_days?: number;

  prepaid_balance_threshold_configuration?: Shared.PrepaidBalanceThresholdConfiguration;

  rate_card_id?: string;

  recurring_commits?: Array<PackageListResponse.RecurringCommit>;

  recurring_credits?: Array<PackageListResponse.RecurringCredit>;

  /**
   * Determines which scheduled and commit charges to consolidate onto the Contract's
   * usage invoice. The charge's `timestamp` must match the usage invoice's
   * `ending_before` date for consolidation to occur. This field cannot be modified
   * after a Contract has been created. If this field is omitted, charges will appear
   * on a separate invoice from usage charges.
   */
  scheduled_charges_on_usage_invoices?: 'ALL';

  spend_threshold_configuration?: Shared.SpendThresholdConfiguration;

  subscriptions?: Array<PackageListResponse.Subscription>;

  /**
   * Prevents the creation of duplicates. If a request to create a record is made
   * with a previously used uniqueness key, a new record will not be created and the
   * request will fail with a 409 error.
   */
  uniqueness_key?: string;
}

export namespace PackageListResponse {
  export interface Commit {
    id: string;

    product: Commit.Product;

    type: 'PREPAID' | 'POSTPAID';

    /**
     * The schedule that the customer will gain access to the credits purposed with
     * this commit.
     */
    access_schedule?: Commit.AccessSchedule;

    applicable_product_ids?: Array<string>;

    applicable_product_tags?: Array<string>;

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    description?: string;

    /**
     * The schedule that the customer will be invoiced for this commit.
     */
    invoice_schedule?: Commit.InvoiceSchedule;

    name?: string;

    /**
     * If multiple credits or commits are applicable, the one with the lower priority
     * will apply first.
     */
    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    rollover_fraction?: number;

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown.
     */
    specifiers?: Array<Shared.CommitSpecifier>;
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
      credit_type: Shared.CreditTypeData;

      schedule_items: Array<AccessSchedule.ScheduleItem>;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        id: string;

        amount: number;

        duration: ScheduleItem.Duration;

        starting_at_offset: ScheduleItem.StartingAtOffset;
      }

      export namespace ScheduleItem {
        export interface Duration {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }

        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }

    /**
     * The schedule that the customer will be invoiced for this commit.
     */
    export interface InvoiceSchedule {
      credit_type: Shared.CreditTypeData;

      /**
       * If true, this schedule will not generate an invoice.
       */
      do_not_invoice: boolean;

      schedule_items: Array<InvoiceSchedule.ScheduleItem>;
    }

    export namespace InvoiceSchedule {
      export interface ScheduleItem {
        id: string;

        date_offset: ScheduleItem.DateOffset;

        quantity: number;

        unit_price: number;
      }

      export namespace ScheduleItem {
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface Override {
    id: string;

    override_specifiers: Array<Override.OverrideSpecifier>;

    starting_at_offset: Override.StartingAtOffset;

    applicable_product_tags?: Array<string>;

    duration?: Override.Duration;

    entitled?: boolean;

    is_commit_specific?: boolean;

    multiplier?: number;

    override_tiers?: Array<Shared.OverrideTier>;

    overwrite_rate?: Shared.OverwriteRate;

    priority?: number;

    product?: Override.Product;

    target?: 'COMMIT_RATE' | 'LIST_RATE';

    type?: 'OVERWRITE' | 'MULTIPLIER' | 'TIERED';
  }

  export namespace Override {
    export interface OverrideSpecifier {
      billing_frequency?: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';

      commit_template_ids?: Array<string>;

      presentation_group_values?: { [key: string]: string | null };

      pricing_group_values?: { [key: string]: string };

      product_id?: string;

      product_tags?: Array<string>;

      recurring_commit_template_ids?: Array<string>;

      recurring_credit_template_ids?: Array<string>;
    }

    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
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

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    description?: string;

    name?: string;
  }

  export namespace ScheduledCharge {
    export interface Product {
      id: string;

      name: string;
    }

    export interface Schedule {
      credit_type: Shared.CreditTypeData;

      schedule_items: Array<Schedule.ScheduleItem>;
    }

    export namespace Schedule {
      export interface ScheduleItem {
        id: string;

        date_offset: ScheduleItem.DateOffset;

        quantity: number;

        unit_price: number;
      }

      export namespace ScheduleItem {
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface UsageStatementSchedule {
    frequency: 'MONTHLY' | 'QUARTERLY' | 'ANNUAL' | 'WEEKLY';
  }

  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }

  export interface Credit {
    id: string;

    product: Credit.Product;

    access_schedule?: Credit.AccessSchedule;

    applicable_product_ids?: Array<string>;

    applicable_product_tags?: Array<string>;

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    description?: string;

    name?: string;

    priority?: number;

    rate_type?: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * List of filters that determine what kind of customer usage draws down a commit
     * or credit. A customer's usage needs to meet the condition of at least one of the
     * specifiers to contribute to a commit's or credit's drawdown.
     */
    specifiers?: Array<Shared.CommitSpecifier>;
  }

  export namespace Credit {
    export interface Product {
      id: string;

      name: string;
    }

    export interface AccessSchedule {
      credit_type: Shared.CreditTypeData;

      schedule_items: Array<AccessSchedule.ScheduleItem>;
    }

    export namespace AccessSchedule {
      export interface ScheduleItem {
        id: string;

        amount: number;

        duration: ScheduleItem.Duration;

        starting_at_offset: ScheduleItem.StartingAtOffset;
      }

      export namespace ScheduleItem {
        export interface Duration {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }

        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface Duration {
    unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

    value: number;
  }

  export interface RecurringCommit {
    id: string;

    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCommit.AccessAmount;

    /**
     * The amount of time each of the created commits will be valid for
     */
    commit_duration: RecurringCommit.CommitDuration;

    priority: number;

    product: RecurringCommit.Product;

    /**
     * Whether the created commits will use the commit rate or list rate
     */
    rate_type: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    starting_at_offset: RecurringCommit.StartingAtOffset;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_ids?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_tags?: Array<string>;

    description?: string;

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    duration?: RecurringCommit.Duration;

    /**
     * The amount the customer should be billed for the commit.
     */
    invoice_amount?: RecurringCommit.InvoiceAmount;

    name?: string;

    /**
     * Determines whether the first and last commit will be prorated. If not provided,
     * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
     */
    proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

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
     * specifiers to contribute to a commit's or credit's drawdown.
     */
    specifiers?: Array<Shared.CommitSpecifier>;

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    subscription_config?: RecurringCommit.SubscriptionConfig;
  }

  export namespace RecurringCommit {
    /**
     * The amount of commit to grant.
     */
    export interface AccessAmount {
      credit_type_id: string;

      unit_price: number;

      quantity?: number;
    }

    /**
     * The amount of time each of the created commits will be valid for
     */
    export interface CommitDuration {
      value: number;

      unit?: 'PERIODS';
    }

    export interface Product {
      id: string;

      name: string;
    }

    /**
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * The amount the customer should be billed for the commit.
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
      allocation: 'INDIVIDUAL' | 'POOLED';

      apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

      subscription_template_id: string;
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
    id: string;

    /**
     * The amount of commit to grant.
     */
    access_amount: RecurringCredit.AccessAmount;

    /**
     * The amount of time each of the created commits will be valid for
     */
    commit_duration: RecurringCredit.CommitDuration;

    priority: number;

    product: RecurringCredit.Product;

    /**
     * Whether the created commits will use the commit rate or list rate
     */
    rate_type: 'COMMIT_RATE' | 'LIST_RATE';

    /**
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    starting_at_offset: RecurringCredit.StartingAtOffset;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_ids?: Array<string>;

    /**
     * Will be passed down to the individual commits
     */
    applicable_product_tags?: Array<string>;

    description?: string;

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    duration?: RecurringCredit.Duration;

    name?: string;

    /**
     * Determines whether the first and last commit will be prorated. If not provided,
     * the default is FIRST_AND_LAST (i.e. prorate both the first and last commits).
     */
    proration?: 'NONE' | 'FIRST' | 'LAST' | 'FIRST_AND_LAST';

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
     * specifiers to contribute to a commit's or credit's drawdown.
     */
    specifiers?: Array<Shared.CommitSpecifier>;

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    subscription_config?: RecurringCredit.SubscriptionConfig;
  }

  export namespace RecurringCredit {
    /**
     * The amount of commit to grant.
     */
    export interface AccessAmount {
      credit_type_id: string;

      unit_price: number;

      quantity?: number;
    }

    /**
     * The amount of time each of the created commits will be valid for
     */
    export interface CommitDuration {
      value: number;

      unit?: 'PERIODS';
    }

    export interface Product {
      id: string;

      name: string;
    }

    /**
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Attach a subscription to the recurring commit/credit.
     */
    export interface SubscriptionConfig {
      allocation: 'INDIVIDUAL' | 'POOLED';

      apply_seat_increase_config: SubscriptionConfig.ApplySeatIncreaseConfig;

      subscription_template_id: string;
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

  export interface Subscription {
    collection_schedule: 'ADVANCE' | 'ARREARS';

    proration: Subscription.Proration;

    subscription_rate: Subscription.SubscriptionRate;

    id?: string;

    /**
     * Custom fields to be added eg. { "key1": "value1", "key2": "value2" }
     */
    custom_fields?: { [key: string]: string };

    description?: string;

    duration?: Subscription.Duration;

    fiat_credit_type_id?: string;

    initial_quantity?: number;

    name?: string;

    /**
     * Determines how the subscription's quantity is controlled. Defaults to
     * QUANTITY_ONLY. **QUANTITY_ONLY**: The subscription quantity is specified
     * directly on the subscription. `initial_quantity` must be provided with this
     * option. Compatible with recurring commits/credits that use POOLED allocation.
     * **SEAT_BASED**: Use when you want to pass specific seat identifiers (e.g. add
     * user_123) to increment and decrement a subscription quantity, rather than
     * directly providing the quantity. You must use a SEAT_BASED subscription to use a
     * linked recurring credit with an allocation per seat. `seat_config` must be
     * provided with this option.
     */
    quantity_management_mode?: 'SEAT_BASED' | 'QUANTITY_ONLY';

    seat_config?: Subscription.SeatConfig;

    starting_at_offset?: Subscription.StartingAtOffset;
  }

  export namespace Subscription {
    export interface Proration {
      invoice_behavior: 'BILL_IMMEDIATELY' | 'BILL_ON_NEXT_COLLECTION_DATE';

      is_prorated: boolean;
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

    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    export interface SeatConfig {
      /**
       * The property name, sent on usage events, that identifies the seat ID associated
       * with the usage event. For example, the property name might be seat_id or
       * user_id. The property must be set as a group key on billable metrics and a
       * presentation/pricing group key on contract products. This allows linked
       * recurring credits with an allocation per seat to be consumed by only one seat's
       * usage.
       */
      seat_group_key: string;
    }

    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }
  }
}

export interface PackageArchiveResponse {
  data: Shared.ID;
}

export interface PackageListContractsOnPackageResponse {
  contract_id: string;

  customer_id: string;

  starting_at: string;

  archived_at?: string;

  ending_before?: string;
}

export interface PackageCreateParams {
  name: string;

  /**
   * Reference this alias when creating a contract. If the same alias is assigned to
   * multiple packages, it will reference the package to which it was most recently
   * assigned. It is not exposed to end customers.
   */
  aliases?: Array<PackageCreateParams.Alias>;

  billing_anchor_date?: 'contract_start_date' | 'first_billing_period';

  billing_provider?: 'aws_marketplace' | 'azure_marketplace' | 'gcp_marketplace' | 'stripe' | 'netsuite';

  commits?: Array<PackageCreateParams.Commit>;

  contract_name?: string;

  credits?: Array<PackageCreateParams.Credit>;

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
  export interface Alias {
    name: string;

    ending_before?: string;

    starting_at?: string;
  }

  export interface Commit {
    /**
     * Required: Schedule for distributing the commit to the customer. For "POSTPAID"
     * commits only one schedule item is allowed and amount must match invoice_schedule
     * total.
     */
    access_schedule: Commit.AccessSchedule;

    product_id: string;

    type: 'PREPAID' | 'POSTPAID';

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
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

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

      /**
       * If true, this schedule will not generate an invoice.
       */
      do_not_invoice?: boolean;
    }

    export namespace InvoiceSchedule {
      export interface ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        date_offset: ScheduleItem.DateOffset;

        /**
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount.
         */
        quantity: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount.
         */
        unit_price: number;
      }

      export namespace ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
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
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }

        /**
         * Date relative to the contract start date indicating the start of this schedule
         * segment.
         */
        export interface StartingAtOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface Duration {
    unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

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
    starting_at_offset: Override.StartingAtOffset;

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
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to override start indicating when the override will stop
     * applying (exclusive)
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Required for OVERWRITE type.
     */
    export interface OverwriteRate {
      rate_type: 'FLAT' | 'PERCENTAGE' | 'SUBSCRIPTION' | 'TIERED' | 'TIERED_PERCENTAGE' | 'CUSTOM';

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
       * Only set for TIERED_PERCENTAGE or PERCENTAGE rate_type.
       */
      minimum_config?: OverwriteRate.MinimumConfig;

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

    export namespace OverwriteRate {
      /**
       * Only set for TIERED_PERCENTAGE or PERCENTAGE rate_type.
       */
      export interface MinimumConfig {
        minimum: number;
      }
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
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    starting_at_offset: RecurringCommit.StartingAtOffset;

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
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    duration?: RecurringCommit.Duration;

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
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

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
       * If set to POOLED, allocation added per seat is pooled across the account. If set
       * to INDIVIDUAL, each seat in the subscription will have its own allocation.
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
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    starting_at_offset: RecurringCredit.StartingAtOffset;

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
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    duration?: RecurringCredit.Duration;

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
     * Offset relative to the contract start date that determines the start time for
     * the first commit
     */
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    /**
     * Offset relative to the recurring credit start that determines when the contract
     * will stop creating recurring commits. optional
     */
    export interface Duration {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

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
       * If set to POOLED, allocation added per seat is pooled across the account. If set
       * to INDIVIDUAL, each seat in the subscription will have its own allocation.
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
         * Quantity for the charge. Will be multiplied by unit_price to determine the
         * amount.
         */
        quantity: number;

        /**
         * Unit price for the charge. Will be multiplied by quantity to determine the
         * amount.
         */
        unit_price: number;
      }

      export namespace ScheduleItem {
        /**
         * Date relative to the contract start date.
         */
        export interface DateOffset {
          unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

          value: number;
        }
      }
    }
  }

  export interface Subscription {
    collection_schedule: 'ADVANCE' | 'ARREARS';

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

    /**
     * The initial quantity for the subscription. It must be non-negative value.
     * Required if quantity_management_mode is QUANTITY_ONLY.
     */
    initial_quantity?: number;

    name?: string;

    /**
     * Determines how the subscription's quantity is controlled. Defaults to
     * QUANTITY_ONLY. **QUANTITY_ONLY**: The subscription quantity is specified
     * directly on the subscription. `initial_quantity` must be provided with this
     * option. Compatible with recurring commits/credits that use POOLED allocation.
     * **SEAT_BASED**: Use when you want to pass specific seat identifiers (e.g. add
     * user_123) to increment and decrement a subscription quantity, rather than
     * directly providing the quantity. You must use a **SEAT_BASED** subscription to
     * use a linked recurring credit with an allocation per seat. `seat_config` must be
     * provided with this option.
     */
    quantity_management_mode?: 'SEAT_BASED' | 'QUANTITY_ONLY';

    seat_config?: Subscription.SeatConfig;

    /**
     * Relative date from contract start date corresponding to the inclusive start time
     * for the subscription. If not provided, defaults to contract start date
     */
    starting_at_offset?: Subscription.StartingAtOffset;

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
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }

    export interface SeatConfig {
      /**
       * The property name, sent on usage events, that identifies the seat ID associated
       * with the usage event. For example, the property name might be seat_id or
       * user_id. The property must be set as a group key on billable metrics and a
       * presentation/pricing group key on contract products. This allows linked
       * recurring credits with an allocation per seat to be consumed by only one seat's
       * usage.
       */
      seat_group_key: string;

      /**
       * The initial amount of unassigned seats on this subscription.
       */
      initial_unassigned_seats?: number;
    }

    /**
     * Relative date from contract start date corresponding to the inclusive start time
     * for the subscription. If not provided, defaults to contract start date
     */
    export interface StartingAtOffset {
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

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
      unit: 'DAYS' | 'WEEKS' | 'MONTHS' | 'YEARS';

      value: number;
    }
  }
}

export interface PackageRetrieveParams {
  package_id: string;
}

export interface PackageListParams extends CursorPageParams {
  /**
   * Body param: Filter packages by archived status. Defaults to NOT_ARCHIVED.
   */
  archive_filter?: 'ARCHIVED' | 'NOT_ARCHIVED' | 'ALL';
}

export interface PackageArchiveParams {
  /**
   * ID of the package to archive
   */
  package_id: string;
}

export interface PackageListContractsOnPackageParams extends CursorPageParams {
  /**
   * Body param
   */
  package_id: string;

  /**
   * Body param: Optional RFC 3339 timestamp. Only include contracts active on the
   * provided date. This cannot be provided if starting_at filter is provided.
   */
  covering_date?: string;

  /**
   * Body param: Default false. Determines whether to include archived contracts in
   * the results
   */
  include_archived?: boolean;

  /**
   * Body param: Optional RFC 3339 timestamp. Only include contracts that started on
   * or after this date. This cannot be provided if covering_date filter is provided.
   */
  starting_at?: string;
}

export declare namespace Packages {
  export {
    type PackageCreateResponse as PackageCreateResponse,
    type PackageRetrieveResponse as PackageRetrieveResponse,
    type PackageListResponse as PackageListResponse,
    type PackageArchiveResponse as PackageArchiveResponse,
    type PackageListContractsOnPackageResponse as PackageListContractsOnPackageResponse,
    type PackageListResponsesCursorPage as PackageListResponsesCursorPage,
    type PackageListContractsOnPackageResponsesCursorPage as PackageListContractsOnPackageResponsesCursorPage,
    type PackageCreateParams as PackageCreateParams,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageListParams as PackageListParams,
    type PackageArchiveParams as PackageArchiveParams,
    type PackageListContractsOnPackageParams as PackageListContractsOnPackageParams,
  };
}
