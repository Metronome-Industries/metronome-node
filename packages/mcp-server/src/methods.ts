// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.v2.contracts.retrieve',
    fullyQualifiedName: 'v2.contracts.retrieve',
    httpMethod: 'post',
    httpPath: '/v2/contracts/get',
  },
  {
    clientCallName: 'client.v2.contracts.list',
    fullyQualifiedName: 'v2.contracts.list',
    httpMethod: 'post',
    httpPath: '/v2/contracts/list',
  },
  {
    clientCallName: 'client.v2.contracts.edit',
    fullyQualifiedName: 'v2.contracts.edit',
    httpMethod: 'post',
    httpPath: '/v2/contracts/edit',
  },
  {
    clientCallName: 'client.v2.contracts.editCommit',
    fullyQualifiedName: 'v2.contracts.editCommit',
    httpMethod: 'post',
    httpPath: '/v2/contracts/commits/edit',
  },
  {
    clientCallName: 'client.v2.contracts.editCredit',
    fullyQualifiedName: 'v2.contracts.editCredit',
    httpMethod: 'post',
    httpPath: '/v2/contracts/credits/edit',
  },
  {
    clientCallName: 'client.v2.contracts.getEditHistory',
    fullyQualifiedName: 'v2.contracts.getEditHistory',
    httpMethod: 'post',
    httpPath: '/v2/contracts/getEditHistory',
  },
  {
    clientCallName: 'client.v1.alerts.create',
    fullyQualifiedName: 'v1.alerts.create',
    httpMethod: 'post',
    httpPath: '/v1/alerts/create',
  },
  {
    clientCallName: 'client.v1.alerts.archive',
    fullyQualifiedName: 'v1.alerts.archive',
    httpMethod: 'post',
    httpPath: '/v1/alerts/archive',
  },
  {
    clientCallName: 'client.v1.plans.list',
    fullyQualifiedName: 'v1.plans.list',
    httpMethod: 'get',
    httpPath: '/v1/plans',
  },
  {
    clientCallName: 'client.v1.plans.getDetails',
    fullyQualifiedName: 'v1.plans.getDetails',
    httpMethod: 'get',
    httpPath: '/v1/planDetails/{plan_id}',
  },
  {
    clientCallName: 'client.v1.plans.listCharges',
    fullyQualifiedName: 'v1.plans.listCharges',
    httpMethod: 'get',
    httpPath: '/v1/planDetails/{plan_id}/charges',
  },
  {
    clientCallName: 'client.v1.plans.listCustomers',
    fullyQualifiedName: 'v1.plans.listCustomers',
    httpMethod: 'get',
    httpPath: '/v1/planDetails/{plan_id}/customers',
  },
  {
    clientCallName: 'client.v1.creditGrants.create',
    fullyQualifiedName: 'v1.creditGrants.create',
    httpMethod: 'post',
    httpPath: '/v1/credits/createGrant',
  },
  {
    clientCallName: 'client.v1.creditGrants.list',
    fullyQualifiedName: 'v1.creditGrants.list',
    httpMethod: 'post',
    httpPath: '/v1/credits/listGrants',
  },
  {
    clientCallName: 'client.v1.creditGrants.edit',
    fullyQualifiedName: 'v1.creditGrants.edit',
    httpMethod: 'post',
    httpPath: '/v1/credits/editGrant',
  },
  {
    clientCallName: 'client.v1.creditGrants.listEntries',
    fullyQualifiedName: 'v1.creditGrants.listEntries',
    httpMethod: 'post',
    httpPath: '/v1/credits/listEntries',
  },
  {
    clientCallName: 'client.v1.creditGrants.void',
    fullyQualifiedName: 'v1.creditGrants.void',
    httpMethod: 'post',
    httpPath: '/v1/credits/voidGrant',
  },
  {
    clientCallName: 'client.v1.pricingUnits.list',
    fullyQualifiedName: 'v1.pricingUnits.list',
    httpMethod: 'get',
    httpPath: '/v1/credit-types/list',
  },
  {
    clientCallName: 'client.v1.customers.create',
    fullyQualifiedName: 'v1.customers.create',
    httpMethod: 'post',
    httpPath: '/v1/customers',
  },
  {
    clientCallName: 'client.v1.customers.retrieve',
    fullyQualifiedName: 'v1.customers.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}',
  },
  {
    clientCallName: 'client.v1.customers.list',
    fullyQualifiedName: 'v1.customers.list',
    httpMethod: 'get',
    httpPath: '/v1/customers',
  },
  {
    clientCallName: 'client.v1.customers.archive',
    fullyQualifiedName: 'v1.customers.archive',
    httpMethod: 'post',
    httpPath: '/v1/customers/archive',
  },
  {
    clientCallName: 'client.v1.customers.archiveBillingConfigurations',
    fullyQualifiedName: 'v1.customers.archiveBillingConfigurations',
    httpMethod: 'post',
    httpPath: '/v1/archiveCustomerBillingProviderConfigurations',
  },
  {
    clientCallName: 'client.v1.customers.listBillableMetrics',
    fullyQualifiedName: 'v1.customers.listBillableMetrics',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/billable-metrics',
  },
  {
    clientCallName: 'client.v1.customers.listCosts',
    fullyQualifiedName: 'v1.customers.listCosts',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/costs',
  },
  {
    clientCallName: 'client.v1.customers.previewEvents',
    fullyQualifiedName: 'v1.customers.previewEvents',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/previewEvents',
  },
  {
    clientCallName: 'client.v1.customers.retrieveBillingConfigurations',
    fullyQualifiedName: 'v1.customers.retrieveBillingConfigurations',
    httpMethod: 'post',
    httpPath: '/v1/getCustomerBillingProviderConfigurations',
  },
  {
    clientCallName: 'client.v1.customers.setBillingConfigurations',
    fullyQualifiedName: 'v1.customers.setBillingConfigurations',
    httpMethod: 'post',
    httpPath: '/v1/setCustomerBillingProviderConfigurations',
  },
  {
    clientCallName: 'client.v1.customers.setIngestAliases',
    fullyQualifiedName: 'v1.customers.setIngestAliases',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/setIngestAliases',
  },
  {
    clientCallName: 'client.v1.customers.setName',
    fullyQualifiedName: 'v1.customers.setName',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/setName',
  },
  {
    clientCallName: 'client.v1.customers.updateConfig',
    fullyQualifiedName: 'v1.customers.updateConfig',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/updateConfig',
  },
  {
    clientCallName: 'client.v1.customers.alerts.retrieve',
    fullyQualifiedName: 'v1.customers.alerts.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/customer-alerts/get',
  },
  {
    clientCallName: 'client.v1.customers.alerts.list',
    fullyQualifiedName: 'v1.customers.alerts.list',
    httpMethod: 'post',
    httpPath: '/v1/customer-alerts/list',
  },
  {
    clientCallName: 'client.v1.customers.alerts.reset',
    fullyQualifiedName: 'v1.customers.alerts.reset',
    httpMethod: 'post',
    httpPath: '/v1/customer-alerts/reset',
  },
  {
    clientCallName: 'client.v1.customers.plans.list',
    fullyQualifiedName: 'v1.customers.plans.list',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/plans',
  },
  {
    clientCallName: 'client.v1.customers.plans.add',
    fullyQualifiedName: 'v1.customers.plans.add',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/plans/add',
  },
  {
    clientCallName: 'client.v1.customers.plans.end',
    fullyQualifiedName: 'v1.customers.plans.end',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/plans/{customer_plan_id}/end',
  },
  {
    clientCallName: 'client.v1.customers.plans.listPriceAdjustments',
    fullyQualifiedName: 'v1.customers.plans.listPriceAdjustments',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments',
  },
  {
    clientCallName: 'client.v1.customers.invoices.retrieve',
    fullyQualifiedName: 'v1.customers.invoices.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/invoices/{invoice_id}',
  },
  {
    clientCallName: 'client.v1.customers.invoices.list',
    fullyQualifiedName: 'v1.customers.invoices.list',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/invoices',
  },
  {
    clientCallName: 'client.v1.customers.invoices.addCharge',
    fullyQualifiedName: 'v1.customers.invoices.addCharge',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/addCharge',
  },
  {
    clientCallName: 'client.v1.customers.invoices.listBreakdowns',
    fullyQualifiedName: 'v1.customers.invoices.listBreakdowns',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/invoices/breakdowns',
  },
  {
    clientCallName: 'client.v1.customers.invoices.retrievePdf',
    fullyQualifiedName: 'v1.customers.invoices.retrievePdf',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/invoices/{invoice_id}/pdf',
  },
  {
    clientCallName: 'client.v1.customers.billingConfig.create',
    fullyQualifiedName: 'v1.customers.billingConfig.create',
    httpMethod: 'post',
    httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  },
  {
    clientCallName: 'client.v1.customers.billingConfig.retrieve',
    fullyQualifiedName: 'v1.customers.billingConfig.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  },
  {
    clientCallName: 'client.v1.customers.billingConfig.delete',
    fullyQualifiedName: 'v1.customers.billingConfig.delete',
    httpMethod: 'delete',
    httpPath: '/v1/customers/{customer_id}/billing-config/{billing_provider_type}',
  },
  {
    clientCallName: 'client.v1.customers.commits.create',
    fullyQualifiedName: 'v1.customers.commits.create',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCommits/create',
  },
  {
    clientCallName: 'client.v1.customers.commits.list',
    fullyQualifiedName: 'v1.customers.commits.list',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCommits/list',
  },
  {
    clientCallName: 'client.v1.customers.commits.updateEndDate',
    fullyQualifiedName: 'v1.customers.commits.updateEndDate',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCommits/updateEndDate',
  },
  {
    clientCallName: 'client.v1.customers.credits.create',
    fullyQualifiedName: 'v1.customers.credits.create',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCredits/create',
  },
  {
    clientCallName: 'client.v1.customers.credits.list',
    fullyQualifiedName: 'v1.customers.credits.list',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCredits/list',
  },
  {
    clientCallName: 'client.v1.customers.credits.updateEndDate',
    fullyQualifiedName: 'v1.customers.credits.updateEndDate',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerCredits/updateEndDate',
  },
  {
    clientCallName: 'client.v1.customers.namedSchedules.retrieve',
    fullyQualifiedName: 'v1.customers.namedSchedules.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/customers/getNamedSchedule',
  },
  {
    clientCallName: 'client.v1.customers.namedSchedules.update',
    fullyQualifiedName: 'v1.customers.namedSchedules.update',
    httpMethod: 'post',
    httpPath: '/v1/customers/updateNamedSchedule',
  },
  {
    clientCallName: 'client.v1.dashboards.getEmbeddableURL',
    fullyQualifiedName: 'v1.dashboards.getEmbeddableURL',
    httpMethod: 'post',
    httpPath: '/v1/dashboards/getEmbeddableUrl',
  },
  {
    clientCallName: 'client.v1.usage.list',
    fullyQualifiedName: 'v1.usage.list',
    httpMethod: 'post',
    httpPath: '/v1/usage',
  },
  {
    clientCallName: 'client.v1.usage.ingest',
    fullyQualifiedName: 'v1.usage.ingest',
    httpMethod: 'post',
    httpPath: '/v1/ingest',
  },
  {
    clientCallName: 'client.v1.usage.listWithGroups',
    fullyQualifiedName: 'v1.usage.listWithGroups',
    httpMethod: 'post',
    httpPath: '/v1/usage/groups',
  },
  {
    clientCallName: 'client.v1.usage.search',
    fullyQualifiedName: 'v1.usage.search',
    httpMethod: 'post',
    httpPath: '/v1/events/search',
  },
  {
    clientCallName: 'client.v1.auditLogs.list',
    fullyQualifiedName: 'v1.auditLogs.list',
    httpMethod: 'get',
    httpPath: '/v1/auditLogs',
  },
  {
    clientCallName: 'client.v1.customFields.addKey',
    fullyQualifiedName: 'v1.customFields.addKey',
    httpMethod: 'post',
    httpPath: '/v1/customFields/addKey',
  },
  {
    clientCallName: 'client.v1.customFields.deleteValues',
    fullyQualifiedName: 'v1.customFields.deleteValues',
    httpMethod: 'post',
    httpPath: '/v1/customFields/deleteValues',
  },
  {
    clientCallName: 'client.v1.customFields.listKeys',
    fullyQualifiedName: 'v1.customFields.listKeys',
    httpMethod: 'post',
    httpPath: '/v1/customFields/listKeys',
  },
  {
    clientCallName: 'client.v1.customFields.removeKey',
    fullyQualifiedName: 'v1.customFields.removeKey',
    httpMethod: 'post',
    httpPath: '/v1/customFields/removeKey',
  },
  {
    clientCallName: 'client.v1.customFields.setValues',
    fullyQualifiedName: 'v1.customFields.setValues',
    httpMethod: 'post',
    httpPath: '/v1/customFields/setValues',
  },
  {
    clientCallName: 'client.v1.billableMetrics.create',
    fullyQualifiedName: 'v1.billableMetrics.create',
    httpMethod: 'post',
    httpPath: '/v1/billable-metrics/create',
  },
  {
    clientCallName: 'client.v1.billableMetrics.retrieve',
    fullyQualifiedName: 'v1.billableMetrics.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/billable-metrics/{billable_metric_id}',
  },
  {
    clientCallName: 'client.v1.billableMetrics.list',
    fullyQualifiedName: 'v1.billableMetrics.list',
    httpMethod: 'get',
    httpPath: '/v1/billable-metrics',
  },
  {
    clientCallName: 'client.v1.billableMetrics.archive',
    fullyQualifiedName: 'v1.billableMetrics.archive',
    httpMethod: 'post',
    httpPath: '/v1/billable-metrics/archive',
  },
  {
    clientCallName: 'client.v1.services.list',
    fullyQualifiedName: 'v1.services.list',
    httpMethod: 'get',
    httpPath: '/v1/services',
  },
  {
    clientCallName: 'client.v1.invoices.regenerate',
    fullyQualifiedName: 'v1.invoices.regenerate',
    httpMethod: 'post',
    httpPath: '/v1/invoices/regenerate',
  },
  {
    clientCallName: 'client.v1.invoices.void',
    fullyQualifiedName: 'v1.invoices.void',
    httpMethod: 'post',
    httpPath: '/v1/invoices/void',
  },
  {
    clientCallName: 'client.v1.contracts.create',
    fullyQualifiedName: 'v1.contracts.create',
    httpMethod: 'post',
    httpPath: '/v1/contracts/create',
  },
  {
    clientCallName: 'client.v1.contracts.retrieve',
    fullyQualifiedName: 'v1.contracts.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/contracts/get',
  },
  {
    clientCallName: 'client.v1.contracts.list',
    fullyQualifiedName: 'v1.contracts.list',
    httpMethod: 'post',
    httpPath: '/v1/contracts/list',
  },
  {
    clientCallName: 'client.v1.contracts.addManualBalanceEntry',
    fullyQualifiedName: 'v1.contracts.addManualBalanceEntry',
    httpMethod: 'post',
    httpPath: '/v1/contracts/addManualBalanceLedgerEntry',
  },
  {
    clientCallName: 'client.v1.contracts.amend',
    fullyQualifiedName: 'v1.contracts.amend',
    httpMethod: 'post',
    httpPath: '/v1/contracts/amend',
  },
  {
    clientCallName: 'client.v1.contracts.archive',
    fullyQualifiedName: 'v1.contracts.archive',
    httpMethod: 'post',
    httpPath: '/v1/contracts/archive',
  },
  {
    clientCallName: 'client.v1.contracts.createHistoricalInvoices',
    fullyQualifiedName: 'v1.contracts.createHistoricalInvoices',
    httpMethod: 'post',
    httpPath: '/v1/contracts/createHistoricalInvoices',
  },
  {
    clientCallName: 'client.v1.contracts.getNetBalance',
    fullyQualifiedName: 'v1.contracts.getNetBalance',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerBalances/getNetBalance',
  },
  {
    clientCallName: 'client.v1.contracts.listBalances',
    fullyQualifiedName: 'v1.contracts.listBalances',
    httpMethod: 'post',
    httpPath: '/v1/contracts/customerBalances/list',
  },
  {
    clientCallName: 'client.v1.contracts.retrieveRateSchedule',
    fullyQualifiedName: 'v1.contracts.retrieveRateSchedule',
    httpMethod: 'post',
    httpPath: '/v1/contracts/getContractRateSchedule',
  },
  {
    clientCallName: 'client.v1.contracts.retrieveSubscriptionQuantityHistory',
    fullyQualifiedName: 'v1.contracts.retrieveSubscriptionQuantityHistory',
    httpMethod: 'post',
    httpPath: '/v1/contracts/getSubscriptionQuantityHistory',
  },
  {
    clientCallName: 'client.v1.contracts.scheduleProServicesInvoice',
    fullyQualifiedName: 'v1.contracts.scheduleProServicesInvoice',
    httpMethod: 'post',
    httpPath: '/v1/contracts/scheduleProServicesInvoice',
  },
  {
    clientCallName: 'client.v1.contracts.setUsageFilter',
    fullyQualifiedName: 'v1.contracts.setUsageFilter',
    httpMethod: 'post',
    httpPath: '/v1/contracts/setUsageFilter',
  },
  {
    clientCallName: 'client.v1.contracts.updateEndDate',
    fullyQualifiedName: 'v1.contracts.updateEndDate',
    httpMethod: 'post',
    httpPath: '/v1/contracts/updateEndDate',
  },
  {
    clientCallName: 'client.v1.contracts.products.create',
    fullyQualifiedName: 'v1.contracts.products.create',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/products/create',
  },
  {
    clientCallName: 'client.v1.contracts.products.retrieve',
    fullyQualifiedName: 'v1.contracts.products.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/products/get',
  },
  {
    clientCallName: 'client.v1.contracts.products.update',
    fullyQualifiedName: 'v1.contracts.products.update',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/products/update',
  },
  {
    clientCallName: 'client.v1.contracts.products.list',
    fullyQualifiedName: 'v1.contracts.products.list',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/products/list',
  },
  {
    clientCallName: 'client.v1.contracts.products.archive',
    fullyQualifiedName: 'v1.contracts.products.archive',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/products/archive',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.create',
    fullyQualifiedName: 'v1.contracts.rateCards.create',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/create',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.retrieve',
    fullyQualifiedName: 'v1.contracts.rateCards.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/get',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.update',
    fullyQualifiedName: 'v1.contracts.rateCards.update',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/update',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.list',
    fullyQualifiedName: 'v1.contracts.rateCards.list',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/list',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.archive',
    fullyQualifiedName: 'v1.contracts.rateCards.archive',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/archive',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.retrieveRateSchedule',
    fullyQualifiedName: 'v1.contracts.rateCards.retrieveRateSchedule',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/getRateSchedule',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.productOrders.update',
    fullyQualifiedName: 'v1.contracts.rateCards.productOrders.update',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/moveRateCardProducts',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.productOrders.set',
    fullyQualifiedName: 'v1.contracts.rateCards.productOrders.set',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/setRateCardProductsOrder',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.rates.list',
    fullyQualifiedName: 'v1.contracts.rateCards.rates.list',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/getRates',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.rates.add',
    fullyQualifiedName: 'v1.contracts.rateCards.rates.add',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/addRate',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.rates.addMany',
    fullyQualifiedName: 'v1.contracts.rateCards.rates.addMany',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/addRates',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.namedSchedules.retrieve',
    fullyQualifiedName: 'v1.contracts.rateCards.namedSchedules.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/contracts/getNamedSchedule',
  },
  {
    clientCallName: 'client.v1.contracts.rateCards.namedSchedules.update',
    fullyQualifiedName: 'v1.contracts.rateCards.namedSchedules.update',
    httpMethod: 'post',
    httpPath: '/v1/contracts/updateNamedSchedule',
  },
  {
    clientCallName: 'client.v1.contracts.namedSchedules.retrieve',
    fullyQualifiedName: 'v1.contracts.namedSchedules.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/getNamedSchedule',
  },
  {
    clientCallName: 'client.v1.contracts.namedSchedules.update',
    fullyQualifiedName: 'v1.contracts.namedSchedules.update',
    httpMethod: 'post',
    httpPath: '/v1/contract-pricing/rate-cards/updateNamedSchedule',
  },
  {
    clientCallName: 'client.v1.packages.create',
    fullyQualifiedName: 'v1.packages.create',
    httpMethod: 'post',
    httpPath: '/v1/packages/create',
  },
  {
    clientCallName: 'client.v1.packages.retrieve',
    fullyQualifiedName: 'v1.packages.retrieve',
    httpMethod: 'post',
    httpPath: '/v1/packages/get',
  },
  {
    clientCallName: 'client.v1.packages.list',
    fullyQualifiedName: 'v1.packages.list',
    httpMethod: 'post',
    httpPath: '/v1/packages/list',
  },
  {
    clientCallName: 'client.v1.packages.archive',
    fullyQualifiedName: 'v1.packages.archive',
    httpMethod: 'post',
    httpPath: '/v1/packages/archive',
  },
  {
    clientCallName: 'client.v1.packages.listContractsOnPackage',
    fullyQualifiedName: 'v1.packages.listContractsOnPackage',
    httpMethod: 'post',
    httpPath: '/v1/packages/listContractsOnPackage',
  },
  {
    clientCallName: 'client.v1.payments.list',
    fullyQualifiedName: 'v1.payments.list',
    httpMethod: 'post',
    httpPath: '/v1/payments/list',
  },
  {
    clientCallName: 'client.v1.payments.attempt',
    fullyQualifiedName: 'v1.payments.attempt',
    httpMethod: 'post',
    httpPath: '/v1/payments/attempt',
  },
  {
    clientCallName: 'client.v1.payments.cancel',
    fullyQualifiedName: 'v1.payments.cancel',
    httpMethod: 'post',
    httpPath: '/v1/payments/cancel',
  },
  {
    clientCallName: 'client.v1.settings.upsertAvalaraCredentials',
    fullyQualifiedName: 'v1.settings.upsertAvalaraCredentials',
    httpMethod: 'post',
    httpPath: '/v1/upsertAvalaraCredentials',
  },
  {
    clientCallName: 'client.v1.settings.billingProviders.create',
    fullyQualifiedName: 'v1.settings.billingProviders.create',
    httpMethod: 'post',
    httpPath: '/v1/setUpBillingProvider',
  },
  {
    clientCallName: 'client.v1.settings.billingProviders.list',
    fullyQualifiedName: 'v1.settings.billingProviders.list',
    httpMethod: 'post',
    httpPath: '/v1/listConfiguredBillingProviders',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
