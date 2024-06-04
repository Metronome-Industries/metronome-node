# Metronome

Methods:

- <code title="post /ingest">client.<a href="./src/index.ts">ingest</a>([ ...body ]) -> void</code>

# Shared

Types:

- <code><a href="./src/resources/shared.ts">Commit</a></code>
- <code><a href="./src/resources/shared.ts">ContractWithoutAmendments</a></code>
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

# CustomerAlerts

Types:

- <code><a href="./src/resources/customer-alerts.ts">CustomerAlert</a></code>
- <code><a href="./src/resources/customer-alerts.ts">CustomerAlertRetrieveResponse</a></code>
- <code><a href="./src/resources/customer-alerts.ts">CustomerAlertListResponse</a></code>

Methods:

- <code title="post /customer-alerts/get">client.customerAlerts.<a href="./src/resources/customer-alerts.ts">retrieve</a>({ ...params }) -> CustomerAlertRetrieveResponse</code>
- <code title="post /customer-alerts/list">client.customerAlerts.<a href="./src/resources/customer-alerts.ts">list</a>({ ...params }) -> CustomerAlertListResponse</code>
- <code title="post /customer-alerts/reset">client.customerAlerts.<a href="./src/resources/customer-alerts.ts">reset</a>({ ...params }) -> void</code>

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

# Credits

Types:

- <code><a href="./src/resources/credits.ts">CreditCreateGrantResponse</a></code>
- <code><a href="./src/resources/credits.ts">CreditEditGrantResponse</a></code>
- <code><a href="./src/resources/credits.ts">CreditListEntriesResponse</a></code>
- <code><a href="./src/resources/credits.ts">CreditListGrantsResponse</a></code>
- <code><a href="./src/resources/credits.ts">CreditVoidGrantResponse</a></code>

Methods:

- <code title="post /credits/createGrant">client.credits.<a href="./src/resources/credits.ts">createGrant</a>({ ...params }) -> CreditCreateGrantResponse</code>
- <code title="post /credits/editGrant">client.credits.<a href="./src/resources/credits.ts">editGrant</a>({ ...params }) -> CreditEditGrantResponse</code>
- <code title="post /credits/listEntries">client.credits.<a href="./src/resources/credits.ts">listEntries</a>({ ...params }) -> CreditListEntriesResponse</code>
- <code title="post /credits/listGrants">client.credits.<a href="./src/resources/credits.ts">listGrants</a>({ ...params }) -> CreditListGrantsResponse</code>
- <code title="post /credits/voidGrant">client.credits.<a href="./src/resources/credits.ts">voidGrant</a>({ ...params }) -> CreditVoidGrantResponse</code>

# CreditTypes

Types:

- <code><a href="./src/resources/credit-types.ts">CreditTypeListResponse</a></code>

Methods:

- <code title="get /credit-types/list">client.creditTypes.<a href="./src/resources/credit-types.ts">list</a>({ ...params }) -> CreditTypeListResponse</code>

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

Methods:

- <code title="get /customers/{customer_id}/invoices/{invoice_id}">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">retrieve</a>(customerId, invoiceId, { ...params }) -> InvoiceRetrieveResponse</code>
- <code title="get /customers/{customer_id}/invoices">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">list</a>(customerId, { ...params }) -> InvoiceListResponse</code>

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

# Webhooks

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(payload, headers, secret) -> Object</code>
- <code>client.webhooks.<a href="./src/resources/webhooks.ts">verifySignature</a>(body, headers, secret) -> void</code>

# Usage

Types:

- <code><a href="./src/resources/usage.ts">UsageListResponse</a></code>
- <code><a href="./src/resources/usage.ts">UsageListWithGroupsResponse</a></code>

Methods:

- <code title="post /usage">client.usage.<a href="./src/resources/usage.ts">list</a>({ ...params }) -> UsageListResponse</code>
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
