# Shared

Types:

- <code><a href="./src/resources/shared.ts">BaseUsageFilter</a></code>
- <code><a href="./src/resources/shared.ts">Commit</a></code>
- <code><a href="./src/resources/shared.ts">ContractWithoutAmendments</a></code>
- <code><a href="./src/resources/shared.ts">Credit</a></code>
- <code><a href="./src/resources/shared.ts">CreditType</a></code>
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

- <code title="get /plans">client.plans.<a href="./src/resources/plans.ts">list</a>({ ...params }) -> PlanListResponsesCursorPage</code>
- <code title="get /planDetails/{plan_id}">client.plans.<a href="./src/resources/plans.ts">getDetails</a>(planId) -> PlanGetDetailsResponse</code>
- <code title="get /planDetails/{plan_id}/charges">client.plans.<a href="./src/resources/plans.ts">listCharges</a>(planId, { ...params }) -> PlanListChargesResponsesCursorPage</code>
- <code title="get /planDetails/{plan_id}/customers">client.plans.<a href="./src/resources/plans.ts">listCustomers</a>(planId, { ...params }) -> PlanListCustomersResponsesCursorPage</code>

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
- <code title="post /credits/listGrants">client.creditGrants.<a href="./src/resources/credit-grants.ts">list</a>({ ...params }) -> CreditGrantListResponsesCursorPage</code>
- <code title="post /credits/editGrant">client.creditGrants.<a href="./src/resources/credit-grants.ts">edit</a>({ ...params }) -> CreditGrantEditResponse</code>
- <code title="get /credit-types/list">client.creditGrants.<a href="./src/resources/credit-grants.ts">listCreditTypes</a>({ ...params }) -> CreditGrantListCreditTypesResponsesCursorPage</code>
- <code title="post /credits/listEntries">client.creditGrants.<a href="./src/resources/credit-grants.ts">listEntries</a>({ ...params }) -> CreditGrantListEntriesResponse</code>
- <code title="post /credits/voidGrant">client.creditGrants.<a href="./src/resources/credit-grants.ts">void</a>({ ...params }) -> CreditGrantVoidResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers/customers.ts">Customer</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerDetail</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerArchiveResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListBillableMetricsResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerListCostsResponse</a></code>
- <code><a href="./src/resources/customers/customers.ts">CustomerSetNameResponse</a></code>

Methods:

- <code title="post /customers">client.customers.<a href="./src/resources/customers/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="get /customers/{customer_id}">client.customers.<a href="./src/resources/customers/customers.ts">retrieve</a>(customerId) -> CustomerRetrieveResponse</code>
- <code title="get /customers">client.customers.<a href="./src/resources/customers/customers.ts">list</a>({ ...params }) -> CustomerDetailsCursorPage</code>
- <code title="post /customers/archive">client.customers.<a href="./src/resources/customers/customers.ts">archive</a>({ ...params }) -> CustomerArchiveResponse</code>
- <code title="get /customers/{customer_id}/billable-metrics">client.customers.<a href="./src/resources/customers/customers.ts">listBillableMetrics</a>(customerId, { ...params }) -> CustomerListBillableMetricsResponsesCursorPage</code>
- <code title="get /customers/{customer_id}/costs">client.customers.<a href="./src/resources/customers/customers.ts">listCosts</a>(customerId, { ...params }) -> CustomerListCostsResponsesCursorPage</code>
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

- <code title="get /customers/{customer_id}/plans">client.customers.plans.<a href="./src/resources/customers/plans.ts">list</a>(customerId, { ...params }) -> PlanListResponsesCursorPage</code>
- <code title="post /customers/{customer_id}/plans/add">client.customers.plans.<a href="./src/resources/customers/plans.ts">add</a>(customerId, { ...params }) -> PlanAddResponse</code>
- <code title="post /customers/{customer_id}/plans/{customer_plan_id}/end">client.customers.plans.<a href="./src/resources/customers/plans.ts">end</a>(customerId, customerPlanId, { ...params }) -> PlanEndResponse</code>
- <code title="get /customers/{customer_id}/plans/{customer_plan_id}/priceAdjustments">client.customers.plans.<a href="./src/resources/customers/plans.ts">listPriceAdjustments</a>(customerId, customerPlanId, { ...params }) -> PlanListPriceAdjustmentsResponsesCursorPage</code>

## Invoices

Types:

- <code><a href="./src/resources/customers/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/customers/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/customers/invoices.ts">InvoiceAddChargeResponse</a></code>

Methods:

- <code title="get /customers/{customer_id}/invoices/{invoice_id}">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">retrieve</a>(customerId, invoiceId, { ...params }) -> InvoiceRetrieveResponse</code>
- <code title="get /customers/{customer_id}/invoices">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">list</a>(customerId, { ...params }) -> InvoicesCursorPage</code>
- <code title="post /customers/{customer_id}/addCharge">client.customers.invoices.<a href="./src/resources/customers/invoices.ts">addCharge</a>(customerId, { ...params }) -> InvoiceAddChargeResponse</code>

## BillingConfig

Types:

- <code><a href="./src/resources/customers/billing-config.ts">BillingConfigRetrieveResponse</a></code>

Methods:

- <code title="post /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">create</a>(customerId, billingProviderType, { ...params }) -> void</code>
- <code title="get /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">retrieve</a>(customerId, billingProviderType) -> BillingConfigRetrieveResponse</code>
- <code title="delete /customers/{customer_id}/billing-config/{billing_provider_type}">client.customers.billingConfig.<a href="./src/resources/customers/billing-config.ts">delete</a>(customerId, billingProviderType) -> void</code>

## Commits

Types:

- <code><a href="./src/resources/customers/commits.ts">CommitCreateResponse</a></code>
- <code><a href="./src/resources/customers/commits.ts">CommitListResponse</a></code>
- <code><a href="./src/resources/customers/commits.ts">CommitUpdateEndDateResponse</a></code>

Methods:

- <code title="post /contracts/customerCommits/create">client.customers.commits.<a href="./src/resources/customers/commits.ts">create</a>({ ...params }) -> CommitCreateResponse</code>
- <code title="post /contracts/customerCommits/list">client.customers.commits.<a href="./src/resources/customers/commits.ts">list</a>({ ...params }) -> CommitListResponse</code>
- <code title="post /contracts/customerCommits/updateEndDate">client.customers.commits.<a href="./src/resources/customers/commits.ts">updateEndDate</a>({ ...params }) -> CommitUpdateEndDateResponse</code>

## Credits

Types:

- <code><a href="./src/resources/customers/credits.ts">CreditCreateResponse</a></code>
- <code><a href="./src/resources/customers/credits.ts">CreditListResponse</a></code>
- <code><a href="./src/resources/customers/credits.ts">CreditUpdateEndDateResponse</a></code>

Methods:

- <code title="post /contracts/customerCredits/create">client.customers.credits.<a href="./src/resources/customers/credits.ts">create</a>({ ...params }) -> CreditCreateResponse</code>
- <code title="post /contracts/customerCredits/list">client.customers.credits.<a href="./src/resources/customers/credits.ts">list</a>({ ...params }) -> CreditListResponse</code>
- <code title="post /contracts/customerCredits/updateEndDate">client.customers.credits.<a href="./src/resources/customers/credits.ts">updateEndDate</a>({ ...params }) -> CreditUpdateEndDateResponse</code>

## NamedSchedules

Types:

- <code><a href="./src/resources/customers/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /customers/getNamedSchedule">client.customers.namedSchedules.<a href="./src/resources/customers/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /customers/updateNamedSchedule">client.customers.namedSchedules.<a href="./src/resources/customers/named-schedules.ts">update</a>({ ...params }) -> void</code>

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
- <code title="post /usage/groups">client.usage.<a href="./src/resources/usage.ts">listWithGroups</a>({ ...params }) -> UsageListWithGroupsResponsesCursorPage</code>

# AuditLogs

Types:

- <code><a href="./src/resources/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /auditLogs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesCursorPage</code>

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
- <code title="get /customers/{customer_id}/billable-metrics">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">list</a>(customerId, { ...params }) -> BillableMetricListResponsesCursorPage</code>
- <code title="post /billable-metrics/archive">client.billableMetrics.<a href="./src/resources/billable-metrics.ts">archive</a>({ ...params }) -> BillableMetricArchiveResponse</code>

# Services

Types:

- <code><a href="./src/resources/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /services">client.services.<a href="./src/resources/services.ts">list</a>() -> ServiceListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceRegenerateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceVoidResponse</a></code>

Methods:

- <code title="post /invoices/regenerate">client.invoices.<a href="./src/resources/invoices.ts">regenerate</a>({ ...params }) -> InvoiceRegenerateResponse</code>
- <code title="post /invoices/void">client.invoices.<a href="./src/resources/invoices.ts">void</a>({ ...params }) -> InvoiceVoidResponse</code>

# Contracts

Types:

- <code><a href="./src/resources/contracts/contracts.ts">ContractCreateResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractRetrieveResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractListResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractAmendResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractArchiveResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractListBalancesResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractRetrieveRateScheduleResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractScheduleProServicesInvoiceResponse</a></code>
- <code><a href="./src/resources/contracts/contracts.ts">ContractUpdateEndDateResponse</a></code>

Methods:

- <code title="post /contracts/create">client.contracts.<a href="./src/resources/contracts/contracts.ts">create</a>({ ...params }) -> ContractCreateResponse</code>
- <code title="post /contracts/get">client.contracts.<a href="./src/resources/contracts/contracts.ts">retrieve</a>({ ...params }) -> ContractRetrieveResponse</code>
- <code title="post /contracts/list">client.contracts.<a href="./src/resources/contracts/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>
- <code title="post /contracts/addManualBalanceLedgerEntry">client.contracts.<a href="./src/resources/contracts/contracts.ts">addManualBalanceEntry</a>({ ...params }) -> void</code>
- <code title="post /contracts/amend">client.contracts.<a href="./src/resources/contracts/contracts.ts">amend</a>({ ...params }) -> ContractAmendResponse</code>
- <code title="post /contracts/archive">client.contracts.<a href="./src/resources/contracts/contracts.ts">archive</a>({ ...params }) -> ContractArchiveResponse</code>
- <code title="post /contracts/customerBalances/list">client.contracts.<a href="./src/resources/contracts/contracts.ts">listBalances</a>({ ...params }) -> ContractListBalancesResponse</code>
- <code title="post /contracts/getContractRateSchedule">client.contracts.<a href="./src/resources/contracts/contracts.ts">retrieveRateSchedule</a>({ ...params }) -> ContractRetrieveRateScheduleResponse</code>
- <code title="post /contracts/scheduleProServicesInvoice">client.contracts.<a href="./src/resources/contracts/contracts.ts">scheduleProServicesInvoice</a>({ ...params }) -> ContractScheduleProServicesInvoiceResponse</code>
- <code title="post /contracts/setUsageFilter">client.contracts.<a href="./src/resources/contracts/contracts.ts">setUsageFilter</a>({ ...params }) -> void</code>
- <code title="post /contracts/updateEndDate">client.contracts.<a href="./src/resources/contracts/contracts.ts">updateEndDate</a>({ ...params }) -> ContractUpdateEndDateResponse</code>

## Products

Types:

- <code><a href="./src/resources/contracts/products.ts">ProductListItemState</a></code>
- <code><a href="./src/resources/contracts/products.ts">QuantityConversion</a></code>
- <code><a href="./src/resources/contracts/products.ts">QuantityRounding</a></code>
- <code><a href="./src/resources/contracts/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/contracts/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/contracts/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/contracts/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/contracts/products.ts">ProductArchiveResponse</a></code>

Methods:

- <code title="post /contract-pricing/products/create">client.contracts.products.<a href="./src/resources/contracts/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="post /contract-pricing/products/get">client.contracts.products.<a href="./src/resources/contracts/products.ts">retrieve</a>({ ...params }) -> ProductRetrieveResponse</code>
- <code title="post /contract-pricing/products/update">client.contracts.products.<a href="./src/resources/contracts/products.ts">update</a>({ ...params }) -> ProductUpdateResponse</code>
- <code title="post /contract-pricing/products/list">client.contracts.products.<a href="./src/resources/contracts/products.ts">list</a>({ ...params }) -> ProductListResponsesCursorPage</code>
- <code title="post /contract-pricing/products/archive">client.contracts.products.<a href="./src/resources/contracts/products.ts">archive</a>({ ...params }) -> ProductArchiveResponse</code>

## RateCards

Types:

- <code><a href="./src/resources/contracts/rate-cards/rate-cards.ts">RateCardCreateResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rate-cards.ts">RateCardRetrieveResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rate-cards.ts">RateCardUpdateResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rate-cards.ts">RateCardListResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rate-cards.ts">RateCardRetrieveRateScheduleResponse</a></code>

Methods:

- <code title="post /contract-pricing/rate-cards/create">client.contracts.rateCards.<a href="./src/resources/contracts/rate-cards/rate-cards.ts">create</a>({ ...params }) -> RateCardCreateResponse</code>
- <code title="post /contract-pricing/rate-cards/get">client.contracts.rateCards.<a href="./src/resources/contracts/rate-cards/rate-cards.ts">retrieve</a>({ ...params }) -> RateCardRetrieveResponse</code>
- <code title="post /contract-pricing/rate-cards/update">client.contracts.rateCards.<a href="./src/resources/contracts/rate-cards/rate-cards.ts">update</a>({ ...params }) -> RateCardUpdateResponse</code>
- <code title="post /contract-pricing/rate-cards/list">client.contracts.rateCards.<a href="./src/resources/contracts/rate-cards/rate-cards.ts">list</a>({ ...params }) -> RateCardListResponsesCursorPage</code>
- <code title="post /contract-pricing/rate-cards/getRateSchedule">client.contracts.rateCards.<a href="./src/resources/contracts/rate-cards/rate-cards.ts">retrieveRateSchedule</a>({ ...params }) -> RateCardRetrieveRateScheduleResponse</code>

### ProductOrders

Types:

- <code><a href="./src/resources/contracts/rate-cards/product-orders.ts">ProductOrderUpdateResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/product-orders.ts">ProductOrderSetResponse</a></code>

Methods:

- <code title="post /contract-pricing/rate-cards/moveRateCardProducts">client.contracts.rateCards.productOrders.<a href="./src/resources/contracts/rate-cards/product-orders.ts">update</a>({ ...params }) -> ProductOrderUpdateResponse</code>
- <code title="post /contract-pricing/rate-cards/setRateCardProductsOrder">client.contracts.rateCards.productOrders.<a href="./src/resources/contracts/rate-cards/product-orders.ts">set</a>({ ...params }) -> ProductOrderSetResponse</code>

### Rates

Types:

- <code><a href="./src/resources/contracts/rate-cards/rates.ts">RateListResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rates.ts">RateAddResponse</a></code>
- <code><a href="./src/resources/contracts/rate-cards/rates.ts">RateAddManyResponse</a></code>

Methods:

- <code title="post /contract-pricing/rate-cards/getRates">client.contracts.rateCards.rates.<a href="./src/resources/contracts/rate-cards/rates.ts">list</a>({ ...params }) -> RateListResponsesCursorPage</code>
- <code title="post /contract-pricing/rate-cards/addRate">client.contracts.rateCards.rates.<a href="./src/resources/contracts/rate-cards/rates.ts">add</a>({ ...params }) -> RateAddResponse</code>
- <code title="post /contract-pricing/rate-cards/addRates">client.contracts.rateCards.rates.<a href="./src/resources/contracts/rate-cards/rates.ts">addMany</a>({ ...params }) -> RateAddManyResponse</code>

### NamedSchedules

Types:

- <code><a href="./src/resources/contracts/rate-cards/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /contracts/getNamedSchedule">client.contracts.rateCards.namedSchedules.<a href="./src/resources/contracts/rate-cards/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /contracts/updateNamedSchedule">client.contracts.rateCards.namedSchedules.<a href="./src/resources/contracts/rate-cards/named-schedules.ts">update</a>({ ...params }) -> void</code>

## NamedSchedules

Types:

- <code><a href="./src/resources/contracts/named-schedules.ts">NamedScheduleRetrieveResponse</a></code>

Methods:

- <code title="post /contract-pricing/rate-cards/getNamedSchedule">client.contracts.namedSchedules.<a href="./src/resources/contracts/named-schedules.ts">retrieve</a>({ ...params }) -> NamedScheduleRetrieveResponse</code>
- <code title="post /contract-pricing/rate-cards/updateNamedSchedule">client.contracts.namedSchedules.<a href="./src/resources/contracts/named-schedules.ts">update</a>({ ...params }) -> void</code>
