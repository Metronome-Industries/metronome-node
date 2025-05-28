// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Metronome from '@metronome/sdk';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_v2_contracts from './v2/contracts/retrieve-v2-contracts';
import list_v2_contracts from './v2/contracts/list-v2-contracts';
import edit_v2_contracts from './v2/contracts/edit-v2-contracts';
import edit_commit_v2_contracts from './v2/contracts/edit-commit-v2-contracts';
import edit_credit_v2_contracts from './v2/contracts/edit-credit-v2-contracts';
import get_edit_history_v2_contracts from './v2/contracts/get-edit-history-v2-contracts';
import create_v1_alerts from './v1/alerts/create-v1-alerts';
import archive_v1_alerts from './v1/alerts/archive-v1-alerts';
import list_v1_plans from './v1/plans/list-v1-plans';
import get_details_v1_plans from './v1/plans/get-details-v1-plans';
import list_charges_v1_plans from './v1/plans/list-charges-v1-plans';
import list_v1_plans_customers from './v1/plans/list-customers-v1-plans';
import create_v1_credit_grants from './v1/credit-grants/create-v1-credit-grants';
import list_v1_credit_grants from './v1/credit-grants/list-v1-credit-grants';
import edit_v1_credit_grants from './v1/credit-grants/edit-v1-credit-grants';
import list_entries_v1_credit_grants from './v1/credit-grants/list-entries-v1-credit-grants';
import void_v1_credit_grants from './v1/credit-grants/void-v1-credit-grants';
import list_v1_pricing_units from './v1/pricing-units/list-v1-pricing-units';
import create_v1_customers from './v1/customers/create-v1-customers';
import retrieve_v1_customers from './v1/customers/retrieve-v1-customers';
import list_v1_customers from './v1/customers/list-v1-customers';
import archive_v1_customers from './v1/customers/archive-v1-customers';
import list_billable_metrics_v1_customers from './v1/customers/list-billable-metrics-v1-customers';
import list_costs_v1_customers from './v1/customers/list-costs-v1-customers';
import set_ingest_aliases_v1_customers from './v1/customers/set-ingest-aliases-v1-customers';
import set_name_v1_customers from './v1/customers/set-name-v1-customers';
import update_config_v1_customers from './v1/customers/update-config-v1-customers';
import retrieve_customers_v1_alerts from './v1/customers/alerts/retrieve-customers-v1-alerts';
import list_customers_v1_alerts from './v1/customers/alerts/list-customers-v1-alerts';
import reset_customers_v1_alerts from './v1/customers/alerts/reset-customers-v1-alerts';
import list_customers_v1_plans from './v1/customers/plans/list-customers-v1-plans';
import add_customers_v1_plans from './v1/customers/plans/add-customers-v1-plans';
import end_customers_v1_plans from './v1/customers/plans/end-customers-v1-plans';
import list_price_adjustments_customers_v1_plans from './v1/customers/plans/list-price-adjustments-customers-v1-plans';
import retrieve_customers_v1_invoices from './v1/customers/invoices/retrieve-customers-v1-invoices';
import list_customers_v1_invoices from './v1/customers/invoices/list-customers-v1-invoices';
import add_charge_customers_v1_invoices from './v1/customers/invoices/add-charge-customers-v1-invoices';
import list_breakdowns_customers_v1_invoices from './v1/customers/invoices/list-breakdowns-customers-v1-invoices';
import create_customers_v1_billing_config from './v1/customers/billing-config/create-customers-v1-billing-config';
import retrieve_customers_v1_billing_config from './v1/customers/billing-config/retrieve-customers-v1-billing-config';
import delete_customers_v1_billing_config from './v1/customers/billing-config/delete-customers-v1-billing-config';
import create_customers_v1_commits from './v1/customers/commits/create-customers-v1-commits';
import list_customers_v1_commits from './v1/customers/commits/list-customers-v1-commits';
import update_end_date_customers_v1_commits from './v1/customers/commits/update-end-date-customers-v1-commits';
import create_customers_v1_credits from './v1/customers/credits/create-customers-v1-credits';
import list_customers_v1_credits from './v1/customers/credits/list-customers-v1-credits';
import update_end_date_customers_v1_credits from './v1/customers/credits/update-end-date-customers-v1-credits';
import retrieve_customers_v1_named_schedules from './v1/customers/named-schedules/retrieve-customers-v1-named-schedules';
import update_customers_v1_named_schedules from './v1/customers/named-schedules/update-customers-v1-named-schedules';
import get_embeddable_url_v1_dashboards from './v1/dashboards/get-embeddable-url-v1-dashboards';
import list_v1_usage from './v1/usage/list-v1-usage';
import ingest_v1_usage from './v1/usage/ingest-v1-usage';
import list_with_groups_v1_usage from './v1/usage/list-with-groups-v1-usage';
import list_v1_audit_logs from './v1/audit-logs/list-v1-audit-logs';
import add_key_v1_custom_fields from './v1/custom-fields/add-key-v1-custom-fields';
import delete_values_v1_custom_fields from './v1/custom-fields/delete-values-v1-custom-fields';
import list_keys_v1_custom_fields from './v1/custom-fields/list-keys-v1-custom-fields';
import remove_key_v1_custom_fields from './v1/custom-fields/remove-key-v1-custom-fields';
import set_values_v1_custom_fields from './v1/custom-fields/set-values-v1-custom-fields';
import create_v1_billable_metrics from './v1/billable-metrics/create-v1-billable-metrics';
import retrieve_v1_billable_metrics from './v1/billable-metrics/retrieve-v1-billable-metrics';
import list_v1_billable_metrics from './v1/billable-metrics/list-v1-billable-metrics';
import archive_v1_billable_metrics from './v1/billable-metrics/archive-v1-billable-metrics';
import list_v1_services from './v1/services/list-v1-services';
import regenerate_v1_invoices from './v1/invoices/regenerate-v1-invoices';
import void_v1_invoices from './v1/invoices/void-v1-invoices';
import create_v1_contracts from './v1/contracts/create-v1-contracts';
import retrieve_v1_contracts from './v1/contracts/retrieve-v1-contracts';
import list_v1_contracts from './v1/contracts/list-v1-contracts';
import add_manual_balance_entry_v1_contracts from './v1/contracts/add-manual-balance-entry-v1-contracts';
import amend_v1_contracts from './v1/contracts/amend-v1-contracts';
import archive_v1_contracts from './v1/contracts/archive-v1-contracts';
import create_historical_invoices_v1_contracts from './v1/contracts/create-historical-invoices-v1-contracts';
import get_subscription_quantity_history_v1_contracts from './v1/contracts/get-subscription-quantity-history-v1-contracts';
import list_balances_v1_contracts from './v1/contracts/list-balances-v1-contracts';
import retrieve_rate_schedule_v1_contracts from './v1/contracts/retrieve-rate-schedule-v1-contracts';
import schedule_pro_services_invoice_v1_contracts from './v1/contracts/schedule-pro-services-invoice-v1-contracts';
import set_usage_filter_v1_contracts from './v1/contracts/set-usage-filter-v1-contracts';
import update_end_date_v1_contracts from './v1/contracts/update-end-date-v1-contracts';
import create_contracts_v1_products from './v1/contracts/products/create-contracts-v1-products';
import retrieve_contracts_v1_products from './v1/contracts/products/retrieve-contracts-v1-products';
import update_contracts_v1_products from './v1/contracts/products/update-contracts-v1-products';
import list_contracts_v1_products from './v1/contracts/products/list-contracts-v1-products';
import archive_contracts_v1_products from './v1/contracts/products/archive-contracts-v1-products';
import create_contracts_v1_rate_cards from './v1/contracts/rate-cards/create-contracts-v1-rate-cards';
import retrieve_contracts_v1_rate_cards from './v1/contracts/rate-cards/retrieve-contracts-v1-rate-cards';
import update_contracts_v1_rate_cards from './v1/contracts/rate-cards/update-contracts-v1-rate-cards';
import list_contracts_v1_rate_cards from './v1/contracts/rate-cards/list-contracts-v1-rate-cards';
import archive_contracts_v1_rate_cards from './v1/contracts/rate-cards/archive-contracts-v1-rate-cards';
import retrieve_rate_schedule_contracts_v1_rate_cards from './v1/contracts/rate-cards/retrieve-rate-schedule-contracts-v1-rate-cards';
import update_rate_cards_contracts_v1_product_orders from './v1/contracts/rate-cards/product-orders/update-rate-cards-contracts-v1-product-orders';
import set_rate_cards_contracts_v1_product_orders from './v1/contracts/rate-cards/product-orders/set-rate-cards-contracts-v1-product-orders';
import list_rate_cards_contracts_v1_rates from './v1/contracts/rate-cards/rates/list-rate-cards-contracts-v1-rates';
import add_rate_cards_contracts_v1_rates from './v1/contracts/rate-cards/rates/add-rate-cards-contracts-v1-rates';
import add_many_rate_cards_contracts_v1_rates from './v1/contracts/rate-cards/rates/add-many-rate-cards-contracts-v1-rates';
import retrieve_rate_cards_contracts_v1_named_schedules from './v1/contracts/rate-cards/named-schedules/retrieve-rate-cards-contracts-v1-named-schedules';
import update_rate_cards_contracts_v1_named_schedules from './v1/contracts/rate-cards/named-schedules/update-rate-cards-contracts-v1-named-schedules';
import retrieve_contracts_v1_named_schedules from './v1/contracts/named-schedules/retrieve-contracts-v1-named-schedules';
import update_contracts_v1_named_schedules from './v1/contracts/named-schedules/update-contracts-v1-named-schedules';

export type HandlerFunction = (client: Metronome, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_v2_contracts);
addEndpoint(list_v2_contracts);
addEndpoint(edit_v2_contracts);
addEndpoint(edit_commit_v2_contracts);
addEndpoint(edit_credit_v2_contracts);
addEndpoint(get_edit_history_v2_contracts);
addEndpoint(create_v1_alerts);
addEndpoint(archive_v1_alerts);
addEndpoint(list_v1_plans);
addEndpoint(get_details_v1_plans);
addEndpoint(list_charges_v1_plans);
addEndpoint(list_v1_plans_customers);
addEndpoint(create_v1_credit_grants);
addEndpoint(list_v1_credit_grants);
addEndpoint(edit_v1_credit_grants);
addEndpoint(list_entries_v1_credit_grants);
addEndpoint(void_v1_credit_grants);
addEndpoint(list_v1_pricing_units);
addEndpoint(create_v1_customers);
addEndpoint(retrieve_v1_customers);
addEndpoint(list_v1_customers);
addEndpoint(archive_v1_customers);
addEndpoint(list_billable_metrics_v1_customers);
addEndpoint(list_costs_v1_customers);
addEndpoint(set_ingest_aliases_v1_customers);
addEndpoint(set_name_v1_customers);
addEndpoint(update_config_v1_customers);
addEndpoint(retrieve_customers_v1_alerts);
addEndpoint(list_customers_v1_alerts);
addEndpoint(reset_customers_v1_alerts);
addEndpoint(list_customers_v1_plans);
addEndpoint(add_customers_v1_plans);
addEndpoint(end_customers_v1_plans);
addEndpoint(list_price_adjustments_customers_v1_plans);
addEndpoint(retrieve_customers_v1_invoices);
addEndpoint(list_customers_v1_invoices);
addEndpoint(add_charge_customers_v1_invoices);
addEndpoint(list_breakdowns_customers_v1_invoices);
addEndpoint(create_customers_v1_billing_config);
addEndpoint(retrieve_customers_v1_billing_config);
addEndpoint(delete_customers_v1_billing_config);
addEndpoint(create_customers_v1_commits);
addEndpoint(list_customers_v1_commits);
addEndpoint(update_end_date_customers_v1_commits);
addEndpoint(create_customers_v1_credits);
addEndpoint(list_customers_v1_credits);
addEndpoint(update_end_date_customers_v1_credits);
addEndpoint(retrieve_customers_v1_named_schedules);
addEndpoint(update_customers_v1_named_schedules);
addEndpoint(get_embeddable_url_v1_dashboards);
addEndpoint(list_v1_usage);
addEndpoint(ingest_v1_usage);
addEndpoint(list_with_groups_v1_usage);
addEndpoint(list_v1_audit_logs);
addEndpoint(add_key_v1_custom_fields);
addEndpoint(delete_values_v1_custom_fields);
addEndpoint(list_keys_v1_custom_fields);
addEndpoint(remove_key_v1_custom_fields);
addEndpoint(set_values_v1_custom_fields);
addEndpoint(create_v1_billable_metrics);
addEndpoint(retrieve_v1_billable_metrics);
addEndpoint(list_v1_billable_metrics);
addEndpoint(archive_v1_billable_metrics);
addEndpoint(list_v1_services);
addEndpoint(regenerate_v1_invoices);
addEndpoint(void_v1_invoices);
addEndpoint(create_v1_contracts);
addEndpoint(retrieve_v1_contracts);
addEndpoint(list_v1_contracts);
addEndpoint(add_manual_balance_entry_v1_contracts);
addEndpoint(amend_v1_contracts);
addEndpoint(archive_v1_contracts);
addEndpoint(create_historical_invoices_v1_contracts);
addEndpoint(get_subscription_quantity_history_v1_contracts);
addEndpoint(list_balances_v1_contracts);
addEndpoint(retrieve_rate_schedule_v1_contracts);
addEndpoint(schedule_pro_services_invoice_v1_contracts);
addEndpoint(set_usage_filter_v1_contracts);
addEndpoint(update_end_date_v1_contracts);
addEndpoint(create_contracts_v1_products);
addEndpoint(retrieve_contracts_v1_products);
addEndpoint(update_contracts_v1_products);
addEndpoint(list_contracts_v1_products);
addEndpoint(archive_contracts_v1_products);
addEndpoint(create_contracts_v1_rate_cards);
addEndpoint(retrieve_contracts_v1_rate_cards);
addEndpoint(update_contracts_v1_rate_cards);
addEndpoint(list_contracts_v1_rate_cards);
addEndpoint(archive_contracts_v1_rate_cards);
addEndpoint(retrieve_rate_schedule_contracts_v1_rate_cards);
addEndpoint(update_rate_cards_contracts_v1_product_orders);
addEndpoint(set_rate_cards_contracts_v1_product_orders);
addEndpoint(list_rate_cards_contracts_v1_rates);
addEndpoint(add_rate_cards_contracts_v1_rates);
addEndpoint(add_many_rate_cards_contracts_v1_rates);
addEndpoint(retrieve_rate_cards_contracts_v1_named_schedules);
addEndpoint(update_rate_cards_contracts_v1_named_schedules);
addEndpoint(retrieve_contracts_v1_named_schedules);
addEndpoint(update_contracts_v1_named_schedules);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
