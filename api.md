# Shared

Types:

- <code><a href="./src/resources/shared.ts">BaseUsageFilter</a></code>
- <code><a href="./src/resources/shared.ts">Commit</a></code>
- <code><a href="./src/resources/shared.ts">ContractWithoutAmendments</a></code>
- <code><a href="./src/resources/shared.ts">Credit</a></code>
- <code><a href="./src/resources/shared.ts">CreditTypeData</a></code>
- <code><a href="./src/resources/shared.ts">Discount</a></code>
- <code><a href="./src/resources/shared.ts">EventTypeFilter</a></code>
- <code><a href="./src/resources/shared.ts">ID</a></code>
- <code><a href="./src/resources/shared.ts">Override</a></code>
- <code><a href="./src/resources/shared.ts">PropertyFilter</a></code>
- <code><a href="./src/resources/shared.ts">ProService</a></code>
- <code><a href="./src/resources/shared.ts">Rate</a></code>
- <code><a href="./src/resources/shared.ts">ScheduledCharge</a></code>
- <code><a href="./src/resources/shared.ts">ScheduleDuration</a></code>
- <code><a href="./src/resources/shared.ts">SchedulePointInTime</a></code>
- <code><a href="./src/resources/shared.ts">Tier</a></code>

# V2

## Contracts

Types:

- <code><a href="./src/resources/v2/contracts.ts">ContractRetrieveResponse</a></code>
- <code><a href="./src/resources/v2/contracts.ts">ContractListResponse</a></code>
- <code><a href="./src/resources/v2/contracts.ts">ContractEditResponse</a></code>
- <code><a href="./src/resources/v2/contracts.ts">ContractEditCommitResponse</a></code>
- <code><a href="./src/resources/v2/contracts.ts">ContractEditCreditResponse</a></code>
- <code><a href="./src/resources/v2/contracts.ts">ContractGetEditHistoryResponse</a></code>

Methods:

- <code title="post /v2/contracts/get">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">retrieve</a>({ ...params }) -> ContractRetrieveResponse</code>
- <code title="post /v2/contracts/list">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>
- <code title="post /v2/contracts/edit">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">edit</a>({ ...params }) -> ContractEditResponse</code>
- <code title="post /v2/contracts/commits/edit">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">editCommit</a>({ ...params }) -> ContractEditCommitResponse</code>
- <code title="post /v2/contracts/credits/edit">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">editCredit</a>({ ...params }) -> ContractEditCreditResponse</code>
- <code title="post /v2/contracts/getEditHistory">client.v2.contracts.<a href="./src/resources/v2/contracts.ts">getEditHistory</a>({ ...params }) -> ContractGetEditHistoryResponse</code>

# V1

## Alerts

Types:

- <code><a href="./src/resources/v1/alerts.ts">AlertCreateResponse</a></code>
- <code><a href="./src/resources/v1/alerts.ts">AlertArchiveResponse</a></code>

Methods:

- <code title="post /v1/alerts/create">client.v1.alerts.<a href="./src/resources/v1/alerts.ts">create</a>({ ...params }) -> AlertCreateResponse</code>
- <code title="post /v1/alerts/archive">client.v1.alerts.<a href="./src/resources/v1/alerts.ts">archive</a>({ ...params }) -> AlertArchiveResponse</code>

## Plans

Types:

- <code><a href="./src/resources/v1/plans.ts">PlanDetail</a></code>
- <code><a href="./src/resources/v1/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/v1/plans.ts">PlanGetDetailsResponse</a></code>
- <code><a href="./src/resources/v1/plans.ts">PlanListChargesResponse</a></code>
- <code><a href="./src/resources/v1/plans.ts">PlanListCustomersResponse</a></code>

Methods:

- <code title="get /v1/plans">client.v1.plans.<a href="./src/resources/v1/plans.ts">list</a>({ ...params }) -> PlanListResponsesCursorPage</code>
- <code title="get /v1/planDetails/{plan_id}">client.v1.plans.<a href="./src/resources/v1/plans.ts">getDetails</a>({ ...params }) -> PlanGetDetailsResponse</code>
- <code title="get /v1/planDetails/{plan_id}/charges">client.v1.plans.<a href="./src/resources/v1/plans.ts">listCharges</a>({ ...params }) -> PlanListChargesResponsesCursorPage</code>
- <code title="get /v1/planDetails/{plan_id}/customers">client.v1.plans.<a href="./src/resources/v1/plans.ts">listCustomers</a>({ ...params }) -> PlanListCustomersResponsesCursorPage</code>

## CreditGrants

Types:

- <code><a href="./src/resources/v1/credit-grants.ts">CreditLedgerEntry</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">RolloverAmountMaxAmount</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">RolloverAmountMaxPercentage</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">CreditGrantCreateResponse</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">CreditGrantListResponse</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">CreditGrantEditResponse</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">CreditGrantListEntriesResponse</a></code>
- <code><a href="./src/resources/v1/credit-grants.ts">CreditGrantVoidResponse</a></code>

Methods:

- <code title="post /v1/credits/createGrant">client.v1.creditGrants.<a href="./src/resources/v1/credit-grants.ts">create</a>({ ...params }) -> CreditGrantCreateResponse</code>
- <code title="post /v1/credits/listGrants">client.v1.creditGrants.<a href="./src/resources/v1/credit-grants.ts">list</a>({ ...params }) -> CreditGrantListResponsesCursorPage</code>
- <code title="post /v1/credits/editGrant">client.v1.creditGrants.<a href="./src/resources/v1/credit-grants.ts">edit</a>({ ...params }) -> CreditGrantEditResponse</code>
- <code title="post /v1/credits/listEntries">client.v1.creditGrants.<a href="./src/resources/v1/credit-grants.ts">listEntries</a>({ ...params }) -> CreditGrantListEntriesResponse</code>
- <code title="post /v1/credits/voidGrant">client.v1.creditGrants.<a href="./src/resources/v1/credit-grants.ts">void</a>({ ...params }) -> CreditGrantVoidResponse</code>

## PricingUnits

Types:

- <code><a href="./src/resources/v1/pricing-units.ts">PricingUnitListResponse</a></code>

Methods:

- <code title="get /v1/credit-types/list">client.v1.pricingUnits.<a href="./src/resources/v1/pricing-units.ts">list</a>({ ...params }) -> PricingUnitListResponsesCursorPage</code>

## Customers

Types:

- <code><a href="./src/resources/v1/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerDetail</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerArchiveResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListBillableMetricsResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerListCostsResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerPreviewEventsResponse</a></code>
- <code><a href="./src/resources/v1/customers/customers.ts">CustomerSetNameResponse</a></code>

Methods:

- <code title="post /v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /v1/customers/{customer_id}">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>
- <code title="get /v1/customers">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">list</a>({ ...params }) -> CustomerDetailsCursorPage</code>
- <code title="post /v1/customers/archive">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">archive</a>({ ...params }) -> CustomerArchiveResponse</code>
- <code title="get /v1/customers/{customer_id}/billable-metrics">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">listBillableMetrics</a>({ ...params }) -> CustomerListBillableMetricsResponsesCursorPage</code>
- <code title="get /v1/customers/{customer_id}/costs">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">listCosts</a>({ ...params }) -> CustomerListCostsResponsesCursorPage</code>
- <code title="post /v1/customers/{customer_id}/previewEvents">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">previewEvents</a>({ ...params }) -> CustomerPreviewEventsResponse</code>
- <code title="post /v1/customers/{customer_id}/setIngestAliases">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">setIngestAliases</a>({ ...params }) -> void</code>
- <code title="post /v1/customers/{customer_id}/setName">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">setName</a>({ ...params }) -> CustomerSetNameResponse</code>
- <code title="post /v1/customers/{customer_id}/updateConfig">client.v1.customers.<a href="./src/resources/v1/customers/customers.ts">updateConfig</a>({ ...params }) -> void</code>

### Alerts

Types:

- <code><a href="./src/resources/v1/customers/alerts.ts">CustomerAlert</a></code>
- <code><a href="./src/resources/v1/customers/alerts.ts">AlertRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/customers/alerts.ts">AlertListResponse</a></code>

Methods:

- <code title="post /v1/customer-alerts/get">client.v1.customers.alerts.<a href="./src/resources/v1/customers/alerts.ts">retrieve</a>({ ...params }) -> AlertRetrieveResponse</code>
- <code title="post /v1/customer-alerts/list">client.v1.customers.alerts.<a href="./src/resources/v1/customers/alerts.ts">list</a>({ ...params }) -> AlertListResponse</code>
- <code title="post /v1/customer-alerts/reset">client.v1.customers.alerts.<a href="./src/resources/v1/customers/alerts.ts">reset</a>({ ...params }) -> void</code>

### Plans

Types:

- <code><a href="./src/resources/v1/customers/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/v1/customers/plans.ts">PlanAddResponse</a></code>
- <code><a href="./src/resources/v1/customers/plans.ts">PlanEndResponse</a></code>
- <code><a href="./src/resources/v1/customers/plans.ts">PlanListPriceAdjustmentsResponse</a></code>

Methods:

- <code title="get /v1/customers/{customer_id}/plans">client.v1.customers.plans.<a href="./src/resources/v1/customers/plans.ts">list</a>({ ...params }) -> PlanListResponsesCursorPage</code>
- <code title="post /v1/customers/{customer_id}/plans/add">client.v1.customers.plans.<a href="./src/resources/v1/customers/plans.ts">add</a>({ ...params }) -> PlanAddResponse</code>
- <code title="post /v1/customers/{customer_id}/plans/{customer_plan_id}/end">client.v1.customers.plans.<a href="./src/resources/v1/customers/plans.ts">end</a>({ ...params }) -> PlanEndResponse</code>
- <code title="get /v1/customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments">client.v1.customers.plans.<a href="./src/resources/v1/customers/plans.ts">listPriceAdjustments</a>({ ...params }) -> PlanListPriceAdjustmentsResponsesCursorPage</code>

### Invoices

Types:

- <code><a href="./src/resources/v1/customers/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/v1/customers/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/customers/invoices.ts">InvoiceAddChargeResponse</a></code>
- <code><a href="./src/resources/v1/customers/invoices.ts">InvoiceListBreakdownsResponse</a></code>

Methods:

- <code title="get /v1/customers/{customer_id}/invoices/{invoice_id}">client.v1.customers.invoices.<a href="./src/resources/v1/customers/invoices.ts">retrieve</a>({ ...params }) -> InvoiceRetrieveResponse</code>
- <code title="get /v1/customers/{customer_id}/invoices">client.v1.customers.invoices.<a href="./src/resources/v1/customers/invoices.ts">list</a>({ ...params }) -> InvoicesCursorPage</code>
- <code title="post /v1/customers/{customer_id}/addCharge">client.v1.customers.invoices.<a href="./src/resources/v1/customers/invoices.ts">addCharge</a>({ ...params }) -> InvoiceAddChargeResponse</code>
- <code title="get /v1/customers/{customer_id}/invoices/breakdowns">client.v1.customers.invoices.<a href="./src/resources/v1/customers/invoices.ts">listBreakdowns</a>({ ...params }) -> InvoiceListBreakdownsResponsesCursorPage</code>

### BillingConfig

Types:

- <code><a href="./src/resources/v1/customers/billing-config.ts">BillingConfigRetrieveResponse</a></code>

Methods:

- <code title="post /v1/customers/{customer_id}/billing-config/{billing_provider_type}">client.v1.customers.billingConfig.<a href="./src/resources/v1/customers/billing-config.ts">create</a>({ ...params }) -> void</code>
- <code title="get /v1/customers/{customer_id}/billing-config/{billing_provider_type}">client.v1.customers.billingConfig.<a href="./src/resources/v1/customers/billing-config.ts">retrieve</a>({ ...params }) -> BillingConfigRetrieveResponse</code>
- <code title="delete /v1/customers/{customer_id}/billing-config/{billing_provider_type}">client.v1.customers.billingConfig.<a href="./src/resources/v1/customers/billing-config.ts">delete</a>({ ...params }) -> void</code>

### Commits

Types:

- <code><a href="./src/resources/v1/customers/commits.ts">CommitCreateResponse</a></code>
- <code><a href="./src/resources/v1/customers/commits.ts">CommitUpdateEndDateResponse</a></code>

Methods:

- <code title="post /v1/contracts/customerCommits/create">client.v1.customers.commits.<a href="./src/resources/v1/customers/commits.ts">create</a>({ ...params }) -> CommitCreateResponse</code>
- <code title="post /v1/contracts/customerCommits/list">client.v1.customers.commits.<a href="./src/resources/v1/customers/commits.ts">list</a>({ ...params }) -> CommitsCursorPage</code>
- <code title="post /v1/contracts/customerCommits/updateEndDate">client.v1.customers.commits.<a href="./src/resources/v1/customers/commits.ts">updateEndDate</a>({ ...params }) -> CommitUpdateEndDateResponse</code>

### Credits

Types:

- <code><a href="./src/resources/v1/customers/credits.ts">CreditCreateResponse</a></code>
- <code><a href="./src/resources/v1/customers/credits.ts">CreditUpdateEndDateResponse</a></code>

Methods:

- <code title="post /v1/contracts/customerCredits/create">client.v1.customers.credits.<a href="./src/resources/v1/customers/credits.ts">create</a>({ ...params }) -> CreditCreateResponse</code>
- <code title="post /v1/contracts/customerCredits/list">client.v1.customers.credits.<a href="./src/resources/v1/customers/credits.ts">list</a>({ ...params }) -> CreditsCursorPage</code>
- <code title="post /v1/contracts/customerCredits/updateEndDate">client.v1.customers.credits.<a href="./src/resources/v1/customers/credits.ts">updateEndDate</a>({ ...params }) -> CreditUpdateEndDateResponse</code>

### NamedSchedules

Types:

- <code><a href="./src/resources/v1/customers/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /v1/customers/getNamedSchedule">client.v1.customers.namedSchedules.<a href="./src/resources/v1/customers/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /v1/customers/updateNamedSchedule">client.v1.customers.namedSchedules.<a href="./src/resources/v1/customers/named-schedules.ts">update</a>({ ...params }) -> void</code>

## Dashboards

Types:

- <code><a href="./src/resources/v1/dashboards.ts">DashboardGetEmbeddableURLResponse</a></code>

Methods:

- <code title="post /v1/dashboards/getEmbeddableUrl">client.v1.dashboards.<a href="./src/resources/v1/dashboards.ts">getEmbeddableURL</a>({ ...params }) -> DashboardGetEmbeddableURLResponse</code>

## Usage

Types:

- <code><a href="./src/resources/v1/usage.ts">UsageListResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageListWithGroupsResponse</a></code>
- <code><a href="./src/resources/v1/usage.ts">UsageSearchResponse</a></code>

Methods:

- <code title="post /v1/usage">client.v1.usage.<a href="./src/resources/v1/usage.ts">list</a>({ ...params }) -> UsageListResponse</code>
- <code title="post /v1/ingest">client.v1.usage.<a href="./src/resources/v1/usage.ts">ingest</a>([ ...usage ]) -> void</code>
- <code title="post /v1/usage/groups">client.v1.usage.<a href="./src/resources/v1/usage.ts">listWithGroups</a>({ ...params }) -> UsageListWithGroupsResponsesCursorPage</code>
- <code title="post /v1/events/search">client.v1.usage.<a href="./src/resources/v1/usage.ts">search</a>({ ...params }) -> UsageSearchResponse</code>

## AuditLogs

Types:

- <code><a href="./src/resources/v1/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /v1/auditLogs">client.v1.auditLogs.<a href="./src/resources/v1/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesCursorPage</code>

## CustomFields

Types:

- <code><a href="./src/resources/v1/custom-fields.ts">CustomFieldListKeysResponse</a></code>

Methods:

- <code title="post /v1/customFields/addKey">client.v1.customFields.<a href="./src/resources/v1/custom-fields.ts">addKey</a>({ ...params }) -> void</code>
- <code title="post /v1/customFields/deleteValues">client.v1.customFields.<a href="./src/resources/v1/custom-fields.ts">deleteValues</a>({ ...params }) -> void</code>
- <code title="post /v1/customFields/listKeys">client.v1.customFields.<a href="./src/resources/v1/custom-fields.ts">listKeys</a>({ ...params }) -> CustomFieldListKeysResponse</code>
- <code title="post /v1/customFields/removeKey">client.v1.customFields.<a href="./src/resources/v1/custom-fields.ts">removeKey</a>({ ...params }) -> void</code>
- <code title="post /v1/customFields/setValues">client.v1.customFields.<a href="./src/resources/v1/custom-fields.ts">setValues</a>({ ...params }) -> void</code>

## BillableMetrics

Types:

- <code><a href="./src/resources/v1/billable-metrics.ts">BillableMetricCreateResponse</a></code>
- <code><a href="./src/resources/v1/billable-metrics.ts">BillableMetricRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/billable-metrics.ts">BillableMetricListResponse</a></code>
- <code><a href="./src/resources/v1/billable-metrics.ts">BillableMetricArchiveResponse</a></code>

Methods:

- <code title="post /v1/billable-metrics/create">client.v1.billableMetrics.<a href="./src/resources/v1/billable-metrics.ts">create</a>({ ...params }) -> BillableMetricCreateResponse</code>
- <code title="get /v1/billable-metrics/{billable_metric_id}">client.v1.billableMetrics.<a href="./src/resources/v1/billable-metrics.ts">retrieve</a>({ ...params }) -> BillableMetricRetrieveResponse</code>
- <code title="get /v1/billable-metrics">client.v1.billableMetrics.<a href="./src/resources/v1/billable-metrics.ts">list</a>({ ...params }) -> BillableMetricListResponsesCursorPage</code>
- <code title="post /v1/billable-metrics/archive">client.v1.billableMetrics.<a href="./src/resources/v1/billable-metrics.ts">archive</a>({ ...params }) -> BillableMetricArchiveResponse</code>

## Services

Types:

- <code><a href="./src/resources/v1/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /v1/services">client.v1.services.<a href="./src/resources/v1/services.ts">list</a>() -> ServiceListResponse</code>

## Invoices

Types:

- <code><a href="./src/resources/v1/invoices.ts">InvoiceRegenerateResponse</a></code>
- <code><a href="./src/resources/v1/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /v1/invoices/regenerate">client.v1.invoices.<a href="./src/resources/v1/invoices.ts">regenerate</a>({ ...params }) -> InvoiceRegenerateResponse</code>
- <code title="post /v1/invoices/void">client.v1.invoices.<a href="./src/resources/v1/invoices.ts">void</a>({ ...params }) -> InvoiceVoidResponse</code>

## Contracts

Types:

- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractCreateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractListResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractAmendResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractArchiveResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractCreateHistoricalInvoicesResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractListBalancesResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractRetrieveRateScheduleResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractRetrieveSubscriptionQuantityHistoryResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractScheduleProServicesInvoiceResponse</a></code>
- <code><a href="./src/resources/v1/contracts/contracts.ts">ContractUpdateEndDateResponse</a></code>

Methods:

- <code title="post /v1/contracts/create">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">create</a>({ ...params }) -> ContractCreateResponse</code>
- <code title="post /v1/contracts/get">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">retrieve</a>({ ...params }) -> ContractRetrieveResponse</code>
- <code title="post /v1/contracts/list">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>
- <code title="post /v1/contracts/addManualBalanceLedgerEntry">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">addManualBalanceEntry</a>({ ...params }) -> void</code>
- <code title="post /v1/contracts/amend">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">amend</a>({ ...params }) -> ContractAmendResponse</code>
- <code title="post /v1/contracts/archive">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">archive</a>({ ...params }) -> ContractArchiveResponse</code>
- <code title="post /v1/contracts/createHistoricalInvoices">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">createHistoricalInvoices</a>({ ...params }) -> ContractCreateHistoricalInvoicesResponse</code>
- <code title="post /v1/contracts/customerBalances/list">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">listBalances</a>({ ...params }) -> ContractListBalancesResponsesCursorPage</code>
- <code title="post /v1/contracts/getContractRateSchedule">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">retrieveRateSchedule</a>({ ...params }) -> ContractRetrieveRateScheduleResponse</code>
- <code title="post /v1/contracts/getSubscriptionQuantityHistory">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">retrieveSubscriptionQuantityHistory</a>({ ...params }) -> ContractRetrieveSubscriptionQuantityHistoryResponse</code>
- <code title="post /v1/contracts/scheduleProServicesInvoice">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">scheduleProServicesInvoice</a>({ ...params }) -> ContractScheduleProServicesInvoiceResponse</code>
- <code title="post /v1/contracts/setUsageFilter">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">setUsageFilter</a>({ ...params }) -> void</code>
- <code title="post /v1/contracts/updateEndDate">client.v1.contracts.<a href="./src/resources/v1/contracts/contracts.ts">updateEndDate</a>({ ...params }) -> ContractUpdateEndDateResponse</code>

### Products

Types:

- <code><a href="./src/resources/v1/contracts/products.ts">ProductListItemState</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">QuantityConversion</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">QuantityRounding</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/v1/contracts/products.ts">ProductArchiveResponse</a></code>

Methods:

- <code title="post /v1/contract-pricing/products/create">client.v1.contracts.products.<a href="./src/resources/v1/contracts/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="post /v1/contract-pricing/products/get">client.v1.contracts.products.<a href="./src/resources/v1/contracts/products.ts">retrieve</a>({ ...params }) -> ProductRetrieveResponse</code>
- <code title="post /v1/contract-pricing/products/update">client.v1.contracts.products.<a href="./src/resources/v1/contracts/products.ts">update</a>({ ...params }) -> ProductUpdateResponse</code>
- <code title="post /v1/contract-pricing/products/list">client.v1.contracts.products.<a href="./src/resources/v1/contracts/products.ts">list</a>({ ...params }) -> ProductListResponsesCursorPage</code>
- <code title="post /v1/contract-pricing/products/archive">client.v1.contracts.products.<a href="./src/resources/v1/contracts/products.ts">archive</a>({ ...params }) -> ProductArchiveResponse</code>

### RateCards

Types:

- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardCreateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardRetrieveResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardUpdateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardListResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardArchiveResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">RateCardRetrieveRateScheduleResponse</a></code>

Methods:

- <code title="post /v1/contract-pricing/rate-cards/create">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">create</a>({ ...params }) -> RateCardCreateResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/get">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">retrieve</a>({ ...params }) -> RateCardRetrieveResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/update">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">update</a>({ ...params }) -> RateCardUpdateResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/list">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">list</a>({ ...params }) -> RateCardListResponsesCursorPage</code>
- <code title="post /v1/contract-pricing/rate-cards/archive">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">archive</a>({ ...params }) -> RateCardArchiveResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/getRateSchedule">client.v1.contracts.rateCards.<a href="./src/resources/v1/contracts/rate-cards/rate-cards.ts">retrieveRateSchedule</a>({ ...params }) -> RateCardRetrieveRateScheduleResponse</code>

#### ProductOrders

Types:

- <code><a href="./src/resources/v1/contracts/rate-cards/product-orders.ts">ProductOrderUpdateResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/product-orders.ts">ProductOrderSetResponse</a></code>

Methods:

- <code title="post /v1/contract-pricing/rate-cards/moveRateCardProducts">client.v1.contracts.rateCards.productOrders.<a href="./src/resources/v1/contracts/rate-cards/product-orders.ts">update</a>({ ...params }) -> ProductOrderUpdateResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/setRateCardProductsOrder">client.v1.contracts.rateCards.productOrders.<a href="./src/resources/v1/contracts/rate-cards/product-orders.ts">set</a>({ ...params }) -> ProductOrderSetResponse</code>

#### Rates

Types:

- <code><a href="./src/resources/v1/contracts/rate-cards/rates.ts">RateListResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rates.ts">RateAddResponse</a></code>
- <code><a href="./src/resources/v1/contracts/rate-cards/rates.ts">RateAddManyResponse</a></code>

Methods:

- <code title="post /v1/contract-pricing/rate-cards/getRates">client.v1.contracts.rateCards.rates.<a href="./src/resources/v1/contracts/rate-cards/rates.ts">list</a>({ ...params }) -> RateListResponsesCursorPage</code>
- <code title="post /v1/contract-pricing/rate-cards/addRate">client.v1.contracts.rateCards.rates.<a href="./src/resources/v1/contracts/rate-cards/rates.ts">add</a>({ ...params }) -> RateAddResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/addRates">client.v1.contracts.rateCards.rates.<a href="./src/resources/v1/contracts/rate-cards/rates.ts">addMany</a>({ ...params }) -> RateAddManyResponse</code>

#### NamedSchedules

Types:

- <code><a href="./src/resources/v1/contracts/rate-cards/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /v1/contracts/getNamedSchedule">client.v1.contracts.rateCards.namedSchedules.<a href="./src/resources/v1/contracts/rate-cards/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /v1/contracts/updateNamedSchedule">client.v1.contracts.rateCards.namedSchedules.<a href="./src/resources/v1/contracts/rate-cards/named-schedules.ts">update</a>({ ...params }) -> void</code>

### NamedSchedules

Types:

- <code><a href="./src/resources/v1/contracts/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /v1/contract-pricing/rate-cards/getNamedSchedule">client.v1.contracts.namedSchedules.<a href="./src/resources/v1/contracts/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /v1/contract-pricing/rate-cards/updateNamedSchedule">client.v1.contracts.namedSchedules.<a href="./src/resources/v1/contracts/named-schedules.ts">update</a>({ ...params }) -> void</code>
