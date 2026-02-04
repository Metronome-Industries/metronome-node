// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AlertsAPI from './alerts';
import {
  AlertArchiveParams,
  AlertArchiveResponse,
  AlertCreateParams,
  AlertCreateResponse,
  Alerts,
} from './alerts';
import * as AuditLogsAPI from './audit-logs';
import {
  AuditLogListParams,
  AuditLogListResponse,
  AuditLogListResponsesCursorPage,
  AuditLogs,
} from './audit-logs';
import * as BillableMetricsAPI from './billable-metrics';
import {
  BillableMetricArchiveParams,
  BillableMetricArchiveResponse,
  BillableMetricCreateParams,
  BillableMetricCreateResponse,
  BillableMetricListParams,
  BillableMetricListResponse,
  BillableMetricListResponsesCursorPage,
  BillableMetricRetrieveParams,
  BillableMetricRetrieveResponse,
  BillableMetrics,
} from './billable-metrics';
import * as CreditGrantsAPI from './credit-grants';
import {
  CreditGrantCreateParams,
  CreditGrantCreateResponse,
  CreditGrantEditParams,
  CreditGrantEditResponse,
  CreditGrantListEntriesParams,
  CreditGrantListEntriesResponse,
  CreditGrantListEntriesResponsesCursorPageWithoutLimit,
  CreditGrantListParams,
  CreditGrantListResponse,
  CreditGrantListResponsesCursorPage,
  CreditGrantVoidParams,
  CreditGrantVoidResponse,
  CreditGrants,
  CreditLedgerEntry,
  RolloverAmountMaxAmount,
  RolloverAmountMaxPercentage,
} from './credit-grants';
import * as CustomFieldsAPI from './custom-fields';
import {
  CustomFieldAddKeyParams,
  CustomFieldDeleteValuesParams,
  CustomFieldListKeysParams,
  CustomFieldListKeysResponse,
  CustomFieldListKeysResponsesCursorPageWithoutLimit,
  CustomFieldRemoveKeyParams,
  CustomFieldSetValuesParams,
  CustomFields,
} from './custom-fields';
import * as DashboardsAPI from './dashboards';
import { DashboardGetEmbeddableURLParams, DashboardGetEmbeddableURLResponse, Dashboards } from './dashboards';
import * as InvoicesAPI from './invoices';
import {
  InvoiceRegenerateParams,
  InvoiceRegenerateResponse,
  InvoiceVoidParams,
  InvoiceVoidResponse,
  Invoices,
} from './invoices';
import * as PaymentsAPI from './payments';
import {
  Payment,
  PaymentAttemptParams,
  PaymentAttemptResponse,
  PaymentCancelParams,
  PaymentCancelResponse,
  PaymentListParams,
  PaymentStatus,
  Payments,
  PaymentsBodyCursorPage,
} from './payments';
import * as PlansAPI from './plans';
import {
  PlanDetail,
  PlanGetDetailsParams,
  PlanGetDetailsResponse,
  PlanListChargesParams,
  PlanListChargesResponse,
  PlanListChargesResponsesCursorPage,
  PlanListCustomersParams,
  PlanListCustomersResponse,
  PlanListCustomersResponsesCursorPage,
  PlanListParams,
  PlanListResponse,
  PlanListResponsesCursorPage,
  Plans,
} from './plans';
import * as PricingUnitsAPI from './pricing-units';
import {
  PricingUnitListParams,
  PricingUnitListResponse,
  PricingUnitListResponsesCursorPage,
  PricingUnits,
} from './pricing-units';
import * as ServicesAPI from './services';
import { ServiceListResponse, Services } from './services';
import * as UsageAPI from './usage';
import {
  Usage,
  UsageIngestParams,
  UsageListParams,
  UsageListResponse,
  UsageListResponsesCursorPageWithoutLimit,
  UsageListWithGroupsParams,
  UsageListWithGroupsResponse,
  UsageListWithGroupsResponsesCursorPage,
  UsageSearchParams,
  UsageSearchResponse,
} from './usage';
import * as ContractsAPI from './contracts/contracts';
import {
  ContractAddManualBalanceEntryParams,
  ContractAmendParams,
  ContractAmendResponse,
  ContractArchiveParams,
  ContractArchiveResponse,
  ContractCreateHistoricalInvoicesParams,
  ContractCreateHistoricalInvoicesResponse,
  ContractCreateParams,
  ContractCreateResponse,
  ContractGetNetBalanceParams,
  ContractGetNetBalanceResponse,
  ContractListBalancesParams,
  ContractListBalancesResponse,
  ContractListBalancesResponsesBodyCursorPage,
  ContractListParams,
  ContractListResponse,
  ContractRetrieveParams,
  ContractRetrieveRateScheduleParams,
  ContractRetrieveRateScheduleResponse,
  ContractRetrieveResponse,
  ContractRetrieveSubscriptionQuantityHistoryParams,
  ContractRetrieveSubscriptionQuantityHistoryResponse,
  ContractScheduleProServicesInvoiceParams,
  ContractScheduleProServicesInvoiceResponse,
  ContractSetUsageFilterParams,
  ContractUpdateEndDateParams,
  ContractUpdateEndDateResponse,
  Contracts,
} from './contracts/contracts';
import * as CustomersAPI from './customers/customers';
import {
  Customer,
  CustomerArchiveParams,
  CustomerArchiveResponse,
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerDetail,
  CustomerDetailsCursorPage,
  CustomerListBillableMetricsParams,
  CustomerListBillableMetricsResponse,
  CustomerListBillableMetricsResponsesCursorPage,
  CustomerListCostsParams,
  CustomerListCostsResponse,
  CustomerListCostsResponsesCursorPage,
  CustomerListParams,
  CustomerPreviewEventsParams,
  CustomerPreviewEventsResponse,
  CustomerRetrieveBillingConfigurationsParams,
  CustomerRetrieveBillingConfigurationsResponse,
  CustomerRetrieveParams,
  CustomerRetrieveResponse,
  CustomerSetBillingConfigurationsParams,
  CustomerSetBillingConfigurationsResponse,
  CustomerSetIngestAliasesParams,
  CustomerSetNameParams,
  CustomerSetNameResponse,
  CustomerUpdateConfigParams,
  Customers,
} from './customers/customers';
import * as SettingsAPI from './settings/settings';
import {
  SettingUpsertAvalaraCredentialsParams,
  SettingUpsertAvalaraCredentialsResponse,
  Settings,
} from './settings/settings';

export class V1 extends APIResource {
  alerts: AlertsAPI.Alerts = new AlertsAPI.Alerts(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  creditGrants: CreditGrantsAPI.CreditGrants = new CreditGrantsAPI.CreditGrants(this._client);
  pricingUnits: PricingUnitsAPI.PricingUnits = new PricingUnitsAPI.PricingUnits(this._client);
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  dashboards: DashboardsAPI.Dashboards = new DashboardsAPI.Dashboards(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  auditLogs: AuditLogsAPI.AuditLogs = new AuditLogsAPI.AuditLogs(this._client);
  customFields: CustomFieldsAPI.CustomFields = new CustomFieldsAPI.CustomFields(this._client);
  billableMetrics: BillableMetricsAPI.BillableMetrics = new BillableMetricsAPI.BillableMetrics(this._client);
  services: ServicesAPI.Services = new ServicesAPI.Services(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

V1.Alerts = Alerts;
V1.Plans = Plans;
V1.CreditGrants = CreditGrants;
V1.PricingUnits = PricingUnits;
V1.Customers = Customers;
V1.Dashboards = Dashboards;
V1.Usage = Usage;
V1.AuditLogs = AuditLogs;
V1.CustomFields = CustomFields;
V1.BillableMetrics = BillableMetrics;
V1.Services = Services;
V1.Invoices = Invoices;
V1.Contracts = Contracts;
V1.Payments = Payments;
V1.Settings = Settings;

export declare namespace V1 {
  export {
    Alerts as Alerts,
    type AlertCreateResponse as AlertCreateResponse,
    type AlertArchiveResponse as AlertArchiveResponse,
    type AlertCreateParams as AlertCreateParams,
    type AlertArchiveParams as AlertArchiveParams,
  };

  export {
    Plans as Plans,
    type PlanDetail as PlanDetail,
    type PlanListResponse as PlanListResponse,
    type PlanGetDetailsResponse as PlanGetDetailsResponse,
    type PlanListChargesResponse as PlanListChargesResponse,
    type PlanListCustomersResponse as PlanListCustomersResponse,
    type PlanListResponsesCursorPage as PlanListResponsesCursorPage,
    type PlanListChargesResponsesCursorPage as PlanListChargesResponsesCursorPage,
    type PlanListCustomersResponsesCursorPage as PlanListCustomersResponsesCursorPage,
    type PlanListParams as PlanListParams,
    type PlanGetDetailsParams as PlanGetDetailsParams,
    type PlanListChargesParams as PlanListChargesParams,
    type PlanListCustomersParams as PlanListCustomersParams,
  };

  export {
    CreditGrants as CreditGrants,
    type CreditLedgerEntry as CreditLedgerEntry,
    type RolloverAmountMaxAmount as RolloverAmountMaxAmount,
    type RolloverAmountMaxPercentage as RolloverAmountMaxPercentage,
    type CreditGrantCreateResponse as CreditGrantCreateResponse,
    type CreditGrantListResponse as CreditGrantListResponse,
    type CreditGrantEditResponse as CreditGrantEditResponse,
    type CreditGrantListEntriesResponse as CreditGrantListEntriesResponse,
    type CreditGrantVoidResponse as CreditGrantVoidResponse,
    type CreditGrantListResponsesCursorPage as CreditGrantListResponsesCursorPage,
    type CreditGrantListEntriesResponsesCursorPageWithoutLimit as CreditGrantListEntriesResponsesCursorPageWithoutLimit,
    type CreditGrantCreateParams as CreditGrantCreateParams,
    type CreditGrantListParams as CreditGrantListParams,
    type CreditGrantEditParams as CreditGrantEditParams,
    type CreditGrantListEntriesParams as CreditGrantListEntriesParams,
    type CreditGrantVoidParams as CreditGrantVoidParams,
  };

  export {
    PricingUnits as PricingUnits,
    type PricingUnitListResponse as PricingUnitListResponse,
    type PricingUnitListResponsesCursorPage as PricingUnitListResponsesCursorPage,
    type PricingUnitListParams as PricingUnitListParams,
  };

  export {
    Customers as Customers,
    type Customer as Customer,
    type CustomerDetail as CustomerDetail,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerArchiveResponse as CustomerArchiveResponse,
    type CustomerListBillableMetricsResponse as CustomerListBillableMetricsResponse,
    type CustomerListCostsResponse as CustomerListCostsResponse,
    type CustomerPreviewEventsResponse as CustomerPreviewEventsResponse,
    type CustomerRetrieveBillingConfigurationsResponse as CustomerRetrieveBillingConfigurationsResponse,
    type CustomerSetBillingConfigurationsResponse as CustomerSetBillingConfigurationsResponse,
    type CustomerSetNameResponse as CustomerSetNameResponse,
    type CustomerDetailsCursorPage as CustomerDetailsCursorPage,
    type CustomerListBillableMetricsResponsesCursorPage as CustomerListBillableMetricsResponsesCursorPage,
    type CustomerListCostsResponsesCursorPage as CustomerListCostsResponsesCursorPage,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerListParams as CustomerListParams,
    type CustomerArchiveParams as CustomerArchiveParams,
    type CustomerListBillableMetricsParams as CustomerListBillableMetricsParams,
    type CustomerListCostsParams as CustomerListCostsParams,
    type CustomerPreviewEventsParams as CustomerPreviewEventsParams,
    type CustomerRetrieveBillingConfigurationsParams as CustomerRetrieveBillingConfigurationsParams,
    type CustomerSetBillingConfigurationsParams as CustomerSetBillingConfigurationsParams,
    type CustomerSetIngestAliasesParams as CustomerSetIngestAliasesParams,
    type CustomerSetNameParams as CustomerSetNameParams,
    type CustomerUpdateConfigParams as CustomerUpdateConfigParams,
  };

  export {
    Dashboards as Dashboards,
    type DashboardGetEmbeddableURLResponse as DashboardGetEmbeddableURLResponse,
    type DashboardGetEmbeddableURLParams as DashboardGetEmbeddableURLParams,
  };

  export {
    Usage as Usage,
    type UsageListResponse as UsageListResponse,
    type UsageListWithGroupsResponse as UsageListWithGroupsResponse,
    type UsageSearchResponse as UsageSearchResponse,
    type UsageListResponsesCursorPageWithoutLimit as UsageListResponsesCursorPageWithoutLimit,
    type UsageListWithGroupsResponsesCursorPage as UsageListWithGroupsResponsesCursorPage,
    type UsageListParams as UsageListParams,
    type UsageIngestParams as UsageIngestParams,
    type UsageListWithGroupsParams as UsageListWithGroupsParams,
    type UsageSearchParams as UsageSearchParams,
  };

  export {
    AuditLogs as AuditLogs,
    type AuditLogListResponse as AuditLogListResponse,
    type AuditLogListResponsesCursorPage as AuditLogListResponsesCursorPage,
    type AuditLogListParams as AuditLogListParams,
  };

  export {
    CustomFields as CustomFields,
    type CustomFieldListKeysResponse as CustomFieldListKeysResponse,
    type CustomFieldListKeysResponsesCursorPageWithoutLimit as CustomFieldListKeysResponsesCursorPageWithoutLimit,
    type CustomFieldAddKeyParams as CustomFieldAddKeyParams,
    type CustomFieldDeleteValuesParams as CustomFieldDeleteValuesParams,
    type CustomFieldListKeysParams as CustomFieldListKeysParams,
    type CustomFieldRemoveKeyParams as CustomFieldRemoveKeyParams,
    type CustomFieldSetValuesParams as CustomFieldSetValuesParams,
  };

  export {
    BillableMetrics as BillableMetrics,
    type BillableMetricCreateResponse as BillableMetricCreateResponse,
    type BillableMetricRetrieveResponse as BillableMetricRetrieveResponse,
    type BillableMetricListResponse as BillableMetricListResponse,
    type BillableMetricArchiveResponse as BillableMetricArchiveResponse,
    type BillableMetricListResponsesCursorPage as BillableMetricListResponsesCursorPage,
    type BillableMetricCreateParams as BillableMetricCreateParams,
    type BillableMetricRetrieveParams as BillableMetricRetrieveParams,
    type BillableMetricListParams as BillableMetricListParams,
    type BillableMetricArchiveParams as BillableMetricArchiveParams,
  };

  export { Services as Services, type ServiceListResponse as ServiceListResponse };

  export {
    Invoices as Invoices,
    type InvoiceRegenerateResponse as InvoiceRegenerateResponse,
    type InvoiceVoidResponse as InvoiceVoidResponse,
    type InvoiceRegenerateParams as InvoiceRegenerateParams,
    type InvoiceVoidParams as InvoiceVoidParams,
  };

  export {
    Contracts as Contracts,
    type ContractCreateResponse as ContractCreateResponse,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractAmendResponse as ContractAmendResponse,
    type ContractArchiveResponse as ContractArchiveResponse,
    type ContractCreateHistoricalInvoicesResponse as ContractCreateHistoricalInvoicesResponse,
    type ContractGetNetBalanceResponse as ContractGetNetBalanceResponse,
    type ContractListBalancesResponse as ContractListBalancesResponse,
    type ContractRetrieveRateScheduleResponse as ContractRetrieveRateScheduleResponse,
    type ContractRetrieveSubscriptionQuantityHistoryResponse as ContractRetrieveSubscriptionQuantityHistoryResponse,
    type ContractScheduleProServicesInvoiceResponse as ContractScheduleProServicesInvoiceResponse,
    type ContractUpdateEndDateResponse as ContractUpdateEndDateResponse,
    type ContractListBalancesResponsesBodyCursorPage as ContractListBalancesResponsesBodyCursorPage,
    type ContractCreateParams as ContractCreateParams,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractAddManualBalanceEntryParams as ContractAddManualBalanceEntryParams,
    type ContractAmendParams as ContractAmendParams,
    type ContractArchiveParams as ContractArchiveParams,
    type ContractCreateHistoricalInvoicesParams as ContractCreateHistoricalInvoicesParams,
    type ContractGetNetBalanceParams as ContractGetNetBalanceParams,
    type ContractListBalancesParams as ContractListBalancesParams,
    type ContractRetrieveRateScheduleParams as ContractRetrieveRateScheduleParams,
    type ContractRetrieveSubscriptionQuantityHistoryParams as ContractRetrieveSubscriptionQuantityHistoryParams,
    type ContractScheduleProServicesInvoiceParams as ContractScheduleProServicesInvoiceParams,
    type ContractSetUsageFilterParams as ContractSetUsageFilterParams,
    type ContractUpdateEndDateParams as ContractUpdateEndDateParams,
  };

  export {
    Payments as Payments,
    type Payment as Payment,
    type PaymentStatus as PaymentStatus,
    type PaymentAttemptResponse as PaymentAttemptResponse,
    type PaymentCancelResponse as PaymentCancelResponse,
    type PaymentsBodyCursorPage as PaymentsBodyCursorPage,
    type PaymentListParams as PaymentListParams,
    type PaymentAttemptParams as PaymentAttemptParams,
    type PaymentCancelParams as PaymentCancelParams,
  };

  export {
    Settings as Settings,
    type SettingUpsertAvalaraCredentialsResponse as SettingUpsertAvalaraCredentialsResponse,
    type SettingUpsertAvalaraCredentialsParams as SettingUpsertAvalaraCredentialsParams,
  };
}
