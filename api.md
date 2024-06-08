# Shared

Types:

- <code><a href="./src/resources/shared.ts">Commit</a></code>
- <code><a href="./src/resources/shared.ts">ContractWithoutAmendments</a></code>
- <code><a href="./src/resources/shared.ts">CreditType</a></code>
- <code><a href="./src/resources/shared.ts">Discount</a></code>
- <code><a href="./src/resources/shared.ts">ID</a></code>
- <code><a href="./src/resources/shared.ts">Override</a></code>
- <code><a href="./src/resources/shared.ts">Rate</a></code>
- <code><a href="./src/resources/shared.ts">SchedulePointInTime</a></code>
- <code><a href="./src/resources/shared.ts">ScheduledCharge</a></code>

# Alerts

Types:

- <code><a href="./src/resources/alerts.ts">AlertCreateResponse</a></code>
- <code><a href="./src/resources/alerts.ts">AlertArchiveResponse</a></code>

Methods:

- <code title="post /alerts/create">client.alerts.<a href="./src/resources/alerts.ts">create</a>({ ...params }) -> AlertCreateResponse</code>
- <code title="post /alerts/archive">client.alerts.<a href="./src/resources/alerts.ts">archive</a>({ ...params }) -> AlertArchiveResponse</code>

# Plans

Types:

- <code><a href="./src/resources/plans.ts">PlanDetail</a></code>
- <code><a href="./src/resources/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanGetDetailsResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanListChargesResponse</a></code>
- <code><a href="./src/resources/plans.ts">PlanListCustomersResponse</a></code>

Methods:

- <code title="get /plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlanListResponse</code>
- <code title="get /planDetails/{plan_id}">client.plans.<a href="./src/resources/plans.ts">getDetails</a>(planId) -> PlanGetDetailsResponse</code>
- <code title="get /planDetails/{plan_id}/charges">client.plans.<a href="./src/resources/plans.ts">listCharges</a>(planId, { ...params }) -> PlanListChargesResponse</code>
- <code title="get /planDetails/{plan_id}/customers">client.plans.<a href="./src/resources/plans.ts">listCustomers</a>(planId, { ...params }) -> PlanListCustomersResponse</code>

# CreditGrants

Types:

- <code><a href="./src/resources/credit-grants.ts">CreditLedgerEntry</a></code>
- <code><a href="./src/resources/credit-grants.ts">RolloverAmountMaxAmount</a></code>
- <code><a href="./src/resources/credit-grants.ts">RolloverAmountMaxPercentage</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantCreateResponse</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantListResponse</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantEditResponse</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantListCreditTypesResponse</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantListEntriesResponse</a></code>
- <code><a href="./src/resources/credit-grants.ts">CreditGrantVoidResponse</a></code>

Methods:

- <code title="post /credits/createGrant">client.creditGrants.<a href="./src/resources/credit-grants.ts">create</a>({ ...params }) -> CreditGrantCreateResponse</code>
- <code title="post /credits/listGrants">client.creditGrants.<a href="./src/resources/credit-grants.ts">list</a>({ ...params }) -> CreditGrantListResponse</code>
- <code title="post /credits/editGrant">client.creditGrants.<a href="./src/resources/credit-grants.ts">edit</a>({ ...params }) -> CreditGrantEditResponse</code>
- <code title="get /credit-types/list">client.creditGrants.<a href="./src/resources/credit-grants.ts">listCreditTypes</a>({ ...params }) -> CreditGrantListCreditTypesResponse</code>
- <code title="post /credits/listEntries">client.creditGrants.<a href="./src/resources/credit-grants.ts">listEntries</a>({ ...params }) -> CreditGrantListEntriesResponse</code>
- <code title="post /credits/voidGrant">client.creditGrants.<a href="./src/resources/credit-grants.ts">void</a>({ ...params }) -> CreditGrantVoidResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerDetail</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerArchiveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListBillableMetricsResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListCostsResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerSetNameResponse</a></code>

Methods:

- <code title="post /customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /customers/{customer_id}">client.customers.<a href="./src/resources/customers/customers.ts">retrieve</a>(customerId) -> CustomerRetrieveResponse</code>
- <code title="get /customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="post /customers/archive">client.customers.<a href="./src/resources/customers/customers.ts">archive</a>({ ...params }) -> CustomerArchiveResponse</code>
- <code title="get /customers/{customer_id}/billable-metrics">client.customers.<a href="./src/resources/customers/customers.ts">listBillableMetrics</a>(customerId, { ...params }) -> CustomerListBillableMetricsResponse</code>
- <code title="get /customers/{customer_id}/costs">client.customers.<a href="./src/resources/customers/customers.ts">listCosts</a>(customerId, { ...params }) -> CustomerListCostsResponse</code>
- <code title="post /customers/{customer_id}/setIngestAliases">client.customers.<a href="./src/resources/customers/customers.ts">setIngestAliases</a>(customerId, { ...params }) -> void</code>
- <code title="post /customers/{customer_id}/setName">client.customers.<a href="./src/resources/customers/customers.ts">setName</a>(customerId, { ...params }) -> CustomerSetNameResponse</code>
- <code title="post /customers/{customer_id}/updateConfig">client.customers.<a href="./src/resources/customers/customers.ts">updateConfig</a>(customerId, { ...params }) -> void</code>

## Alerts

Types:

- <code><a href="./src/resources/customers/alerts.ts">CustomerAlert</a></code>
- <code><a href="./src/resources/customers/alerts.ts">AlertRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/alerts.ts">AlertListResponse</a></code>

Methods:

- <code title="post /customer-alerts/get">client.customers.alerts.<a href="./src/resources/customers/alerts.ts">retrieve</a>({ ...params }) -> AlertRetrieveResponse</code>
- <code title="post /customer-alerts/list">client.customers.alerts.<a href="./src/resources/customers/alerts.ts">list</a>({ ...params }) -> AlertListResponse</code>
- <code title="post /customer-alerts/reset">client.customers.alerts.<a href="./src/resources/customers/alerts.ts">reset</a>({ ...params }) -> void</code>

## Plans

Types:

- <code><a href="./src/resources/customers/plans.ts">PlanListResponse</a></code>
- <code><a href="./src/resources/customers/plans.ts">PlanAddResponse</a></code>
- <code><a href="./src/resources/customers/plans.ts">PlanEndResponse</a></code>
- <code><a href="./src/resources/customers/plans.ts">PlanListPriceAdjustmentsResponse</a></code>

Methods:

- <code title="get /customers/{customer_id}/plans">client.customers.plans.<a href="./src/resources/customers/plans.ts">list</a>(customerId, { ...params }) -> PlanListResponse</code>
- <code title="post /customers/{customer_id}/plans/add">client.customers.plans.<a href="./src/resources/customers/plans.ts">add</a>(customerId, { ...params }) -> PlanAddResponse</code>
- <code title="post /customers/{customer_id}/plans/{customer_plan_id}/end">client.customers.plans.<a href="./src/resources/customers/plans.ts">end</a>(customerId, customerPlanId, { ...params }) -> PlanEndResponse</code>
- <code title="get /customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments">client.customers.plans.<a href="./src/resources/customers/plans.ts">listPriceAdjustments</a>(customerId, customerPlanId, { ...params }) -> PlanListPriceAdjustmentsResponse</code>

## Invoices

Types:

- <code><a href="./src/resources/customers/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/customers/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/customers/invoices.ts">InvoiceAddChargeResponse</a></code>

Methods:

- <code title="get /customers/{customer_id}/invoices/{invoice_id}">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">retrieve</a>(customerId, invoiceId, { ...params }) -> InvoiceRetrieveResponse</code>
- <code title="get /customers/{customer_id}/invoices">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">list</a>(customerId, { ...params }) -> InvoiceListResponse</code>
- <code title="post /customers/{customer_id}/addCharge">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">addCharge</a>(customerId, { ...params }) -> InvoiceAddChargeResponse</code>

## BillingConfig

Types:

- <code><a href="./src/resources/customers/billing-config.ts">BillingConfigRetrieveResponse</a></code>

Methods:

- <code title="post /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">create</a>(customerId, billingProviderType, { ...params }) -> void</code>
- <code title="get /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">retrieve</a>(customerId, billingProviderType) -> BillingConfigRetrieveResponse</code>
- <code title="delete /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">delete</a>(customerId, billingProviderType) -> void</code>

# Dashboards

Types:

- <code><a href="./src/resources/dashboards.ts">DashboardGetEmbeddableURLResponse</a></code>

Methods:

- <code title="post /dashboards/getEmbeddableUrl">client.dashboards.<a href="./src/resources/dashboards.ts">getEmbeddableURL</a>({ ...params }) -> DashboardGetEmbeddableURLResponse</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageListResponse</a></code>
- <code><a href="./src/resources/usage.ts">UsageListWithGroupsResponse</a></code>

Methods:

- <code title="post /usage">client.usage.<a href="./src/resources/usage.ts">list</a>({ ...params }) -> UsageListResponse</code>
- <code title="post /ingest">client.usage.<a href="./src/resources/usage.ts">ingest</a>([ ...usage ]) -> void</code>
- <code title="post /usage/groups">client.usage.<a href="./src/resources/usage.ts">listWithGroups</a>({ ...params }) -> UsageListWithGroupsResponse</code>

# AuditLogs

Types:

- <code><a href="./src/resources/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /auditLogs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponse</code>

# CustomFields

Types:

- <code><a href="./src/resources/custom-fields.ts">CustomFieldListKeysResponse</a></code>

Methods:

- <code title="post /customFields/addKey">client.customFields.<a href="./src/resources/custom-fields.ts">addKey</a>({ ...params }) -> void</code>
- <code title="post /customFields/deleteValues">client.customFields.<a href="./src/resources/custom-fields.ts">deleteValues</a>({ ...params }) -> void</code>
- <code title="post /customFields/listKeys">client.customFields.<a href="./src/resources/custom-fields.ts">listKeys</a>({ ...params }) -> CustomFieldListKeysResponse</code>
- <code title="post /customFields/removeKey">client.customFields.<a href="./src/resources/custom-fields.ts">removeKey</a>({ ...params }) -> void</code>
- <code title="post /customFields/setValues">client.customFields.<a href="./src/resources/custom-fields.ts">setValues</a>({ ...params }) -> void</code>

# BillableMetrics

Types:

- <code><a href="./src/resources/billable-metrics.ts">BillableMetricCreateResponse</a></code>
- <code><a href="./src/resources/billable-metrics.ts">BillableMetricRetrieveResponse</a></code>
- <code><a href="./src/resources/billable-metrics.ts">BillableMetricListResponse</a></code>
- <code><a href="./src/resources/billable-metrics.ts">BillableMetricArchiveResponse</a></code>

Methods:

- <code title="post /billable-metrics/create">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">create</a>({ ...params }) -> BillableMetricCreateResponse</code>
- <code title="get /billable-metrics/{billable_metric_id}">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">retrieve</a>(billableMetricId) -> BillableMetricRetrieveResponse</code>
- <code title="get /customers/{customer_id}/billable-metrics">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">list</a>(customerId, { ...params }) -> BillableMetricListResponse</code>
- <code title="post /billable-metrics/archive">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">archive</a>({ ...params }) -> BillableMetricArchiveResponse</code>

# Services

Types:

- <code><a href="./src/resources/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /services">client.services.<a href="./src/resources/services.ts">list</a>() -> ServiceListResponse</code>
