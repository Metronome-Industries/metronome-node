# Metronome TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export METRONOME_BEARER_TOKEN="My Bearer Token"
export METRONOME_WEBHOOK_SECRET="My Webhook Secret"
npx -y @metronome/mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "metronome_sdk_api": {
      "command": "npx",
      "args": ["-y", "@metronome/mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "METRONOME_BEARER_TOKEN": "My Bearer Token",
        "METRONOME_WEBHOOK_SECRET": "My Webhook Secret"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| -------------------------- | ------------------------ | --------------- |
| `x-metronome-bearer-token` | `bearerToken` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "metronome_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@metronome/mcp/server";

// import a specific tool
import retrieveV2Contracts from "@metronome/mcp/tools/v2/contracts/retrieve-v2-contracts";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveV2Contracts, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `v2.contracts`:

- `retrieve_v2_contracts` (`write`): Gets the details for a specific contract, including contract term, rate card information, credits and commits, and more.

  ### Use this endpoint to:

  - Check the duration of a customer's current contract
  - Get details on contract terms, including access schedule amounts for commitments and credits
  - Understand the state of a contract at a past time. As you can evolve the terms of a contract over time through editing, use the `as_of_date` parameter to view the full contract configuration as of that point in time.

  ### Usage guidelines:

  - Optionally, use the `include_balance` and `include_ledger` fields to include balances and ledgers in the credit and commit responses. Using these fields will cause the query to be slower.

- `list_v2_contracts` (`write`): For a given customer, lists all of their contracts in chronological order.

  ### Use this endpoint to:

  - Check if a customer is provisioned with any contract, and at which tier
  - Check the duration and terms of a customer's current contract
  - Power a page in your end customer experience that shows the customer's history of tiers (e.g. this customer started out on the Pro Plan, then downgraded to the Starter plan).

  ### Usage guidelines:

  Use the `starting_at`, `covering_date`, and `include_archived` parameters to filter the list of returned contracts. For example, to list only currently active contracts, pass `covering_date` equal to the current time.

- `edit_v2_contracts` (`write`): The ability to edit a contract helps you react quickly to the needs of your customers and your business.

  ### Use this endpoint to:

  - Encode mid-term commitment and discount changes
  - Fix configuration mistakes and easily roll back packaging changes

  ### Key response fields:

  - The `id` of the edit
  - Complete edit details. For example, if you edited the contract to add new overrides and credits, you will receive the IDs of those overrides and credits in the response.

  ### Usage guidelines:

  - When you edit a contract, any draft invoices update immediately to reflect that edit. Finalized invoices remain unchanged - you must void and regenerate them in the UI or API to reflect the edit.
  - Contract editing must be enabled to use this endpoint. Reach out to your Metronome representative to learn more.

- `edit_commit_v2_contracts` (`write`): Edit specific details for a contract-level or customer-level commit. Use this endpoint to modify individual commit access schedules, invoice schedules, applicable products, invoicing contracts, or other fields.

  ### Usage guidelines:

  - As with all edits in Metronome, draft invoices will reflect the edit immediately, while finalized invoices are untouched unless voided and regenerated.
  - If a commit's invoice schedule item is associated with a finalized invoice, you cannot remove or update the invoice schedule item.
  - If a commit's invoice schedule item is associated with a voided invoice, you cannot remove the invoice schedule item.
  - You cannot remove an commit access schedule segment that was applied to a finalized invoice. You can void the invoice beforehand and then remove the access schedule segment.

- `edit_credit_v2_contracts` (`write`): Edit details for a contract-level or customer-level credit.

  ### Use this endpoint to:

  - Extend the duration or the amount of an existing free credit like a trial
  - Modify individual credit access schedules, applicable products, priority, or other fields.

  ### Usage guidelines:

  - As with all edits in Metronome, draft invoices will reflect the edit immediately, while finalized invoices are untouched unless voided and regenerated.
  - You cannot remove an access schedule segment that was applied to a finalized invoice. You can void the invoice beforehand and then remove the access schedule segment.

- `get_edit_history_v2_contracts` (`write`): List all the edits made to a contract over time. In Metronome, you can edit a contract at any point after it's created to fix mistakes or reflect changes in terms. Metronome stores a full history of all edits that were ever made to a contract, whether through the UI, `editContract` endpoint, or other endpoints like `updateContractEndDate`.

  ### Use this endpoint to:

  - Understand what changes were made to a contract, when, and by who

  ### Key response fields:

  - An array of every edit ever made to the contract
  - Details on each individual edit - for example showing that in one edit, a user added two discounts and incremented a subscription quantity.

### Resource `v1.alerts`:

- `create_v1_alerts` (`write`): Create a new threshold notification to monitor customer spending, balances, and billing metrics in real-time. Metronome's notification system provides industry-leading speed with immediate evaluation capabilities, enabling you to proactively manage customer accounts and prevent revenue leakage.

  This endpoint creates configurable threshold notifications that continuously monitor various billing thresholds including spend limits, credit balances, commitment utilization, and invoice totals. Threshold notifications can be configured globally for all customers or targeted to specific customer accounts.

  ### Use this endpoint to:

  - Proactively monitor customer spending patterns to prevent unexpected overages or credit exhaustion
  - Automate notifications when customers approach commitment limits or credit thresholds
  - Enable real-time intervention for accounts at risk of churn or payment issues
  - Scale billing operations by automating threshold-based workflows and notifications

  ### Key response fields:

  A successful response returns a CustomerAlert object containing:

  - The threshold notification configuration with its unique ID and current status
  - The customer's evaluation status (ok, in_alarm, or evaluating)
  - Threshold notification metadata including type, threshold values, and update timestamps

  ### Usage guidelines:

  - Immediate evaluation: Set `evaluate_on_create` : `true` (default) for instant evaluation against existing customers
  - Uniqueness constraints: Each threshold notification must have a unique `uniqueness_key` within your organization. Use `release_uniqueness_key` : `true` when archiving to reuse keys
  - Notification type requirements: Different threshold notification types require specific fields (e.g., `billable_metric_id` for usage notifications, `credit_type_id` for credit-based threshold notifications)
  - Webhook delivery: Threshold notifications trigger webhook notifications for real-time integration with your systems. Configure webhook endpoints before creating threshold notifications
  - Performance at scale: Metronome's event-driven architecture processes threshold notification evaluations in real-time as usage events stream in, unlike competitors who rely on periodic polling or batch evaluation cycles

- `archive_v1_alerts` (`write`): Permanently disable a threshold notification and remove it from active monitoring across all customers. Archived threshold notifications stop evaluating immediately and can optionally release their uniqueness key for reuse in future threshold notification configurations.

  ### Use this endpoint to:

  - Decommission threshold notifications that are no longer needed
  - Clean up test or deprecated threshold notification configurations
  - Free up uniqueness keys for reuse with new threshold notifications
  - Stop threshold notification evaluations without losing historical configuration data
  - Disable outdated monitoring rules during pricing model transitions

  ### Key response fields:

  - data: Object containing the archived threshold notification's ID

  ### Usage guidelines:

  - Irreversible for evaluation: Archived threshold notifications cannot be re-enabled; create a new threshold notification to resume monitoring
  - Uniqueness key handling: Set `release_uniqueness_key` : `true` to reuse the key in future threshold notifications
  - Immediate effect: Threshold notification evaluation stops instantly across all customers
  - Historical preservation: Archive operation maintains threshold notification history and configuration for compliance and auditing

### Resource `v1.plans`:

- `list_v1_plans` (`read`): List all available plans. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `get_details_v1_plans` (`read`): Fetch high level details of a specific plan. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_charges_v1_plans` (`read`): Fetches a list of charges of a specific plan. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_customers_v1_plans` (`read`): Fetches a list of customers on a specific plan (by default, only currently active plans are included). This is a Plans (deprecated) endpoint. New clients should implement using Contracts.

### Resource `v1.credit_grants`:

- `create_v1_credit_grants` (`write`): Create a new credit grant. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_v1_credit_grants` (`write`): List credit grants. This list does not included voided grants. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `edit_v1_credit_grants` (`write`): Edit an existing credit grant. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_entries_v1_credit_grants` (`write`): Fetches a list of credit ledger entries. Returns lists of ledgers per customer. Ledger entries are returned in chronological order. Ledger entries associated with voided credit grants are not included. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `void_v1_credit_grants` (`write`): Void a credit grant. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.

### Resource `v1.pricing_units`:

- `list_v1_pricing_units` (`read`): List all pricing units. All fiat currency types (for example, USD or GBP) will be included, as well as any custom pricing units that were configured. Custom pricing units can be used to charge for usage in a non-fiat pricing unit, for example AI credits.

  Note: The USD (cents) pricing unit is 2714e483-4ff1-48e4-9e25-ac732e8f24f2.

### Resource `v1.customers`:

- `create_v1_customers` (`write`): Create a new customer in Metronome and optionally the billing configuration (recommended) which dictates where invoices for the customer will be sent or where payment will be collected.

  ### Use this endpoint to:

  Execute your customer provisioning workflows for either PLG motions, where customers originate in your platform, or SLG motions, where customers originate in your sales system.

  ### Key response fields:

  This end-point returns the `customer_id` created by the request. This id can be used to fetch relevant billing configurations and create contracts.

  ### Example workflow:

  - Generally, Metronome recommends first creating the customer in the downstream payment / ERP system when payment method is collected and then creating the customer in Metronome using the response (i.e. `customer_id`) from the downstream system. If you do not create a billing configuration on customer creation, you can add it later.
  - Once a customer is created, you can then create a contract for the customer. In the contract creation process, you will need to add the customer billing configuration to the contract to ensure Metronome invoices the customer correctly. This is because a customer can have multiple configurations.
  - As part of the customer creation process, set the ingest alias for the customer which will ensure usage is accurately mapped to the customer. Ingest aliases can be added or changed after the creation process as well.

  ### Usage guidelines:

  For details on different billing configurations for different systems, review the `/setCustomerBillingConfiguration` end-point.

- `retrieve_v1_customers` (`read`): Get detailed information for a specific customer by their Metronome ID. Returns customer profile data including name, creation date, ingest aliases, configuration settings, and custom fields. Use this endpoint to fetch complete customer details for billing operations or account management.

  Note: If searching for a customer billing configuration, use the `/getCustomerBillingConfigurations` endpoint.

- `list_v1_customers` (`read`): Gets a paginated list of all customers in your Metronome account. Use this endpoint to browse your customer base, implement customer search functionality, or sync customer data with external systems. Returns customer details including IDs, names, and configuration settings. Supports filtering and pagination parameters for efficient data retrieval.
- `archive_v1_customers` (`write`): Use this endpoint to archive a customer while preserving auditability. Archiving a customer will automatically archive all contracts as of the current date and void all corresponding invoices. Use this endpoint if a customer is onboarded by mistake.

  ### Usage guidelines:

  - Once a customer is archived, it cannot be unarchived.
  - Archived customers can still be viewed through the API or the UI for audit purposes.
  - Ingest aliases remain idempotent for archived customers. In order to reuse an ingest alias, first remove the ingest alias from the customer prior to archiving.
  - Any notifications associated with the customer will no longer be triggered.

- `list_billable_metrics_v1_customers` (`read`): Get all billable metrics available for a specific customer. Supports pagination and filtering by current plan status or archived metrics. Use this endpoint to see which metrics are being tracked for billing calculations for a given customer.
- `list_costs_v1_customers` (`read`): Fetch daily pending costs for the specified customer, broken down by credit type and line items. Note: this is not supported for customers whose plan includes a UNIQUE-type billable metric. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `preview_events_v1_customers` (`write`): Preview how a set of events will affect a customer's invoices. Generates draft invoices for a customer using their current contract configuration and the provided events. This is useful for testing how new events will affect the customer's invoices before they are actually processed. Customers on contracts with SQL billable metrics are not supported.
- `retrieve_billing_configurations_v1_customers` (`write`): Returns all billing configurations previously set for the customer. Use during the contract provisioning process to fetch the `billing_provider_configuration_id` needed to set the contract billing configuration.
- `set_billing_configurations_v1_customers` (`write`): Create a billing configuration for a customer. Once created, these configurations are available to associate to a contract and dictates which downstream system to collect payment in or send the invoice to. You can create multiple configurations per customer. The configuration formats are distinct for each downstream provider.

  ### Use this endpoint to:

  - Add the initial configuration to an existing customer. Once created, the billing configuration can then be associated to the customer's contract.
  - Add a new configuration to an existing customer. This might be used as part of an upgrade or downgrade workflow where the customer was previously billed through system A (e.g. Stripe) but will now be billed through system B (e.g. AWS). Once created, the new configuration can then be associated to the customer's contract.
  - Multiple configurations can be added per destination. For example, you can create two Stripe billing configurations for a Metronome customer that each have a distinct `collection_method`.

  ### Delivery method options:

  - `direct_to_billing_provider`: Use when Metronome should send invoices directly to the billing provider's API (e.g., Stripe, NetSuite). This is the most common method for automated billing workflows.
  - `tackle`: Use specifically for AWS Marketplace transactions that require Tackle's co-selling platform for partner attribution and commission tracking.
  - `aws_sqs`: Use when you want invoice data delivered to an AWS SQS queue for custom processing before sending to your billing system.
  - `aws_sns`: Use when you want invoice notifications published to an AWS SNS topic for event-driven billing workflows.

  ### Key response fields:

  The id for the customer billing configuration. This id can be used to associate the billing configuration to a contract.

  ### Usage guidelines:

  Must use the `delivery_method_id` if you have multiple Stripe accounts connected to Metronome.

- `set_ingest_aliases_v1_customers` (`write`): Sets the ingest aliases for a customer. Use this endpoint to associate a Metronome customer with an internal ID for easier tracking between systems. Ingest aliases can be used in the `customer_id` field when sending usage events to Metronome.

  ### Usage guidelines:

  - This call is idempotent and fully replaces the set of ingest aliases for the given customer.
  - Switching an ingest alias from one customer to another will associate all corresponding usage to the new customer.
  - Use multiple ingest aliases to model child organizations within a single Metronome customer.

- `set_name_v1_customers` (`write`): Updates the display name for a customer record. Use this to correct customer names, update business names after rebranding, or maintain accurate customer information for invoicing and reporting. Returns the updated customer object with the new name applied immediately across all billing documents and interfaces.
- `update_config_v1_customers` (`write`): Update configuration settings for a specific customer, such as external system integrations (e.g., Salesforce account ID) and other customer-specific billing parameters. Use this endpoint to modify customer configurations without affecting core customer data like name or ingest aliases.

### Resource `v1.customers.alerts`:

- `retrieve_customers_v1_alerts` (`write`): Retrieve the real-time evaluation status for a specific threshold notification-customer pair. This endpoint provides instant visibility into whether a customer has triggered a threshold notification condition, enabling you to monitor account health and take proactive action based on current threshold notification states.

  ### Use this endpoint to:

  - Check if a specific customer is currently violating an threshold notification (`in_alarm` status)
  - Verify threshold notification configuration details and threshold values for a customer
  - Monitor the evaluation state of newly created or recently modified threshold notification
  - Build dashboards or automated workflows that respond to specific threshold notification conditions
  - Validate threshold notification behavior before deploying to production customers
  - Integrate threshold notification status checks into customer support tools or admin interfaces

  ### Key response fields:

  A CustomerAlert object containing:

  - `customer_status`: The current evaluation state

  - `ok` - Customer is within acceptable thresholds
  - `in_alarm` - Customer has breached the threshold for the notification
  - `evaluating` - Notification is currently being evaluated (typically during initial setup)
  - `null` - Notification has been archived
  - `triggered_by`: Additional context about what caused the notification to trigger (when applicable)
  - alert: Complete threshold notification configuration including:
    - Notification ID, name, and type
    - Current threshold values and credit type information
    - Notification status (enabled, disabled, or archived)
    - Last update timestamp
    - Any applied filters (credit grant types, custom fields, group values)

  ### Usage guidelines:

  - Customer status: Returns the current evaluation state, not historical data. For threshold notification history, use webhook notifications or event logs
  - Required parameters: Both customer_id and alert_id must be valid UUIDs that exist in your organization
  - Archived notifications: Returns null for customer_status if the notification has been archived, but still includes the notification configuration details
  - Performance considerations: This endpoint queries live evaluation state, making it ideal for real-time monitoring but not for bulk status checks
  - Integration patterns: Best used for on-demand status checks in response to user actions or as part of targeted monitoring workflows
  - Error handling: Returns 404 if either the customer or alert_id doesn't exist or isn't accessible to your organization

- `list_customers_v1_alerts` (`write`): Retrieve all threshold notification configurations and their current statuses for a specific customer in a single API call. This endpoint provides a comprehensive view of all threshold notification monitoring a customer account.

  ### Use this endpoint to:

  - Display all active threshold notifications for a customer in dashboards or admin panels
  - Quickly identify which threshold notifications a customer is currently triggering
  - Audit threshold notification coverage for specific accounts
  - Filter threshold notifications by status (enabled, disabled, or archived)

  ### Key response fields:

  - data: Array of CustomerAlert objects, each containing:
    - Current evaluation status (`ok`, `in_alarm`, `evaluating`, or `null`)
    - Complete threshold notification configuration and threshold details
    - Threshold notification metadata including type, name, and last update time
  - next_page: Pagination cursor for retrieving additional results

  ### Usage guidelines:

  - Default behavior: Returns only enabled threshold notifications unless `alert_statuses` filter is specified
  - Pagination: Use the `next_page` cursor to retrieve all results for customers with many notifications
  - Performance: Efficiently retrieves multiple threshold notification statuses in a single request instead of making individual calls
  - Filtering: Pass the `alert_statuses` array to include disabled or archived threshold notifications in results

- `reset_customers_v1_alerts` (`write`): Force an immediate re-evaluation of a specific threshold notification for a customer, clearing any previous state and triggering a fresh assessment against current thresholds. This endpoint ensures threshold notification accuracy after configuration changes or data corrections.

  ### Use this endpoint to:

  - Clear false positive threshold notifications after fixing data issues
  - Re-evaluate threshold notifications after adjusting customer balances or credits
  - Test threshold notification behavior during development and debugging
  - Resolve stuck threshold notification that may be in an incorrect state
  - Trigger immediate evaluation after threshold modifications

  ### Key response fields:

  - 200 Success: Confirmation that the threshold notification has been reset and re-evaluation initiated
  - No response body is returned - the operation completes asynchronously

  ### Usage guidelines:

  - Immediate effect: Triggers re-evaluation instantly, which may result in new webhook notifications if thresholds are breached
  - State clearing: Removes any cached evaluation state, ensuring a fresh assessment
  - Use sparingly: Intended for exceptional cases, not routine operations
  - Asynchronous processing: The reset completes immediately, but re-evaluation happens in the background

### Resource `v1.customers.plans`:

- `list_customers_v1_plans` (`read`): List the given customer's plans in reverse-chronological order. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `add_customers_v1_plans` (`write`): Associate an existing customer with a plan for a specified date range. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details on the price adjustments. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `end_customers_v1_plans` (`write`): Change the end date of a customer's plan. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_price_adjustments_customers_v1_plans` (`read`): Lists a customer plans adjustments. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.

### Resource `v1.customers.invoices`:

- `retrieve_customers_v1_invoices` (`read`): Retrieve detailed information for a specific invoice by its unique identifier. This endpoint returns comprehensive invoice data including line items, applied credits, totals, and billing period details for both finalized and draft invoices.

  ### Use this endpoint to:

  - Display historical invoice details in customer-facing dashboards or billing portals.
  - Retrieve current month draft invoices to show customers their month-to-date spend.
  - Access finalized invoices for historical billing records and payment reconciliation.
  - Validate customer pricing and credit applications for customer support queries.

  ### Key response fields:

  Invoice status (DRAFT, FINALIZED, VOID)
  Billing period start and end dates
  Total amount and amount due after credits
  Detailed line items broken down by:

  - Customer and contract information
  - Invoice line item type
  - Product/service name and ID
  - Quantity consumed
  - Unit and total price
  - Time period for usage-based charges
  - Applied credits or prepaid commitments

  ### Usage guidelines:

  - Draft invoices update in real-time as usage is reported and may change before finalization
  - The response includes both usage-based line items (e.g., API calls, data processed) and scheduled charges (e.g., monthly subscriptions, commitment fees)
  - Credit and commitment applications are shown as separate line items with negative amounts
  - For voided invoices, the response will indicate VOID status but retain all original line item details

- `list_customers_v1_invoices` (`read`): Retrieves a paginated list of invoices for a specific customer, with flexible filtering options to narrow results by status, date range, credit type, and more. This endpoint provides a comprehensive view of a customer's billing history and current charges, supporting both real-time billing dashboards and historical reporting needs.

  ### Use this endpoint to:

  - Display historical invoice details in customer-facing dashboards or billing portals.
  - Retrieve current month draft invoices to show customers their month-to-date spend.
  - Access finalized invoices for historical billing records and payment reconciliation.
  - Validate customer pricing and credit applications for customer support queries.
  - Generate financial reports by filtering invoices within specific date ranges

  ### Key response fields:

  Array of invoice objects containing:

  - Invoice ID and status (DRAFT, FINALIZED, VOID)
  - Invoice type (USAGE, SCHEDULED)
  - Billing period start and end dates
  - Issue date and due date
  - Total amount, subtotal, and amount due
  - Applied credits summary
  - Contract ID reference
  - External billing provider status (if integrated with Stripe, etc.)
  - Pagination metadata `next_page` cursor

  ### Usage guidelines:

  - The endpoint returns invoice summaries; use the Get Invoice endpoint for detailed line items
  - Draft invoices are continuously updated as new usage is reported and will show real-time spend
  - Results are ordered by creation date descending by default (newest first)
  - When filtering by date range, the filter applies to the billing period, not the issue date
  - For customers with many invoices, implement pagination to ensure all results are retrieved
    External billing provider statuses (like Stripe payment status) are included when applicable
  - Voided invoices are included in results by default unless filtered out by status

- `add_charge_customers_v1_invoices` (`write`): Add a one time charge to the specified invoice. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `list_breakdowns_customers_v1_invoices` (`read`): Retrieve granular time-series breakdowns of invoice data at hourly or daily intervals. This endpoint transforms standard invoices into detailed timelines, enabling you to track usage patterns, identify consumption spikes, and provide customers with transparency into their billing details throughout the billing period.

  ### Use this endpoint to:

  - Build usage analytics dashboards showing daily or hourly consumption trends
  - Identify peak usage periods for capacity planning and cost optimization
  - Generate detailed billing reports for finance teams and customer success
  - Troubleshoot billing disputes by examining usage patterns at specific times
  - Power real-time cost monitoring and alerting systems

  ### Key response fields:

  An array of BreakdownInvoice objects, each containing:

  - All standard invoice fields (ID, customer, commit, line items, totals, status)
  - Line items with quantities and costs for that specific period
  - `breakdown_start_timestamp`: Start of the specific time window
  - `breakdown_end_timestamp`: End of the specific time window
  - `next_page`: Pagination cursor for large result sets

  ### Usage guidelines:

  - Time granularity: Set `window_size` to hour or day based on your analysis needs
  - Response limits: Daily breakdowns return up to 35 days; hourly breakdowns return up to 24 hours per request
  - Date filtering: Use `starting_on` and `ending_before` to focus on specific periods
  - Performance: For large date ranges, use pagination to retrieve all data efficiently
  - Backdated usage: If usage events arrive after invoice finalization, breakdowns will reflect the updated usage
  - Zero quantity filtering: Use `skip_zero_qty_line_items=true` to exclude periods with no usage

- `retrieve_pdf_customers_v1_invoices` (`read`): Retrieve a PDF version of a specific invoice by its unique identifier. This endpoint generates a professionally formatted invoice document suitable for sharing with customers, accounting teams, or for record-keeping purposes.

  ### Use this endpoint to:

  - Provide customers with downloadable or emailable copies of their invoices
  - Support accounting and finance teams with official billing documents
  - Maintain accurate records of billing transactions for audits and compliance

  ### Key response details:

  - The response is a binary PDF file representing the full invoice
  - The PDF includes all standard invoice information such as line items, totals, billing period, and customer details
  - The document is formatted for clarity and professionalism, suitable for official use

  ### Usage guidelines:

  - Ensure the `invoice_id` corresponds to an existing invoice for the specified `customer_id`
  - The PDF is generated on-demand; frequent requests for the same invoice may impact performance
  - Use appropriate headers to handle the binary response in your application (e.g., setting `Content-Type: application/pdf`)

### Resource `v1.customers.billing_config`:

- `create_customers_v1_billing_config` (`write`): Set the billing configuration for a given customer. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `retrieve_customers_v1_billing_config` (`read`): Fetch the billing configuration for the given customer. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.
- `delete_customers_v1_billing_config` (`write`): Delete the billing configuration for a given customer.
  Note: this is unsupported for Azure and AWS Marketplace customers. This is a Plans (deprecated) endpoint. New clients should implement using Contracts.

### Resource `v1.customers.commits`:

- `create_customers_v1_commits` (`write`): Creates customer-level commits that establish spending commitments for customers across their Metronome usage. Commits represent contracted spending obligations that can be either prepaid (paid upfront) or postpaid (billed later).

  Note: In most cases, you should add commitments directly to customer contracts using the contract/create or contract/edit APIs.

  ### Use this endpoint to:

  Use this endpoint when you need to establish customer-level spending commitments that can be applied across multiple contracts or scoped to specific contracts. Customer-level commits are ideal for:

  - Enterprise-wide minimum spending agreements that span multiple contracts
  - Multi-contract volume commitments with shared spending pools
  - Cross-contract discount tiers based on aggregate usage

  #### Commit type Requirements:

  - You must specify either "prepaid" or "postpaid" as the commit type:
  - Prepaid commits: Customer pays upfront; invoice_schedule is optional (if omitted, creates a commit without an invoice)
  - Postpaid commits: Customer pays when the commitment expires (the end of the access_schedule); invoice_schedule is required and must match access_schedule totals.

  #### Billing configuration:

  - invoice_contract_id is required for postpaid commits and for prepaid commits with billing (only optional for free prepaid commits) unless do_not_invoice is set to true
  - For postpaid commits: access_schedule and invoice_schedule must have matching amounts
  - For postpaid commits: only one schedule item is allowed in both schedules.

  #### Scoping flexibility:

  Customer-level commits can be configured in a few ways:

  - Contract-specific: Use the `applicable_contract_ids` field to limit the commit to specific contracts
  - Cross-contract: Leave `applicable_contract_ids` empty to allow the commit to be used across all of the customer's contracts

  #### Product targeting:

  Commits can be scoped to specific products using applicable_product_ids, applicable_product_tags, or specifiers, or left unrestricted to apply to all products.

  #### Priority considerations:

  When multiple commits are applicable, the one with the lower priority value will be consumed first. If there is a tie, contract level commits and credits will be applied before customer level commits and credits. Plan your priority scheme carefully to ensure commits are applied in the desired order.

  ### Usage guidelines:

  ⚠️ Preferred Alternative: In most cases, you should add commits directly to contracts using the create contract or edit contract APIs instead of creating customer-level commits. Contract-level commits provide better organization and are the recommended approach for standard use cases.

- `list_customers_v1_commits` (`write`): Retrieve all commit agreements for a customer, including both prepaid and postpaid commitments. This endpoint provides comprehensive visibility into contractual spending obligations, enabling you to track commitment utilization and manage customer contracts effectively.

  ### Use this endpoint to:

  - Display commitment balances and utilization in customer dashboards
  - Track prepaid commitment drawdown and remaining balances
  - Monitor postpaid commitment progress toward minimum thresholds
  - Build commitment tracking and forecasting tools
  - Show commitment history with optional ledger details
  - Manage rollover balances between contract periods

  ### Key response fields:

  An array of Commit objects containing:

  - Commit type: PREPAID (pay upfront) or POSTPAID (pay at true-up)
  - Rate type: COMMIT_RATE (discounted) or LIST_RATE (standard pricing)
  - Access schedule: When commitment funds become available
  - Invoice schedule: When the customer is billed
  - Product targeting: Which product(s) usage is eligible to draw from this commit
  - Optional ledger entries: Transaction history (if `include_ledgers=true`)
  - Balance information: Current available amount (if `include_balance=true`)
  - Rollover settings: Fraction of unused amount that carries forward

  ### Usage guidelines:

  - Pagination: Results limited to 25 commits per page; use 'next_page' for more
  - Date filtering options:
    - `covering_date`: Commits active on a specific date
    - `starting_at`: Commits with access on/after a date
    - `effective_before`: Commits with access before a date (exclusive)
  - Scope options:
    - `include_contract_commits`: Include contract-level commits (not just customer-level)
    - `include_archived`: Include archived commits and commits from archived contracts
  - Performance considerations:
    - include_ledgers: Adds detailed transaction history (slower)
    - include_balance: Adds current balance calculation (slower)
  - Optional filtering: Use commit_id to retrieve a specific commit

- `update_end_date_customers_v1_commits` (`write`): Shortens the end date of a prepaid commit to terminate it earlier than originally scheduled. Use this endpoint when you need to cancel or reduce the duration of an existing prepaid commit. Only works with prepaid commit types and can only move the end date forward (earlier), not extend it.

  ### Usage guidelines:

  To extend commit end dates or make other comprehensive edits, use the 'edit commit' endpoint instead.

### Resource `v1.customers.credits`:

- `create_customers_v1_credits` (`write`): Creates customer-level credits that provide spending allowances or free credit balances for customers across their Metronome usage. Note: In most cases, you should add credits directly to customer contracts using the contract/create or contract/edit APIs.

  ### Use this endpoint to:

  Use this endpoint when you need to provision credits directly at the customer level that can be applied across multiple contracts or scoped to specific contracts. Customer-level credits are ideal for:

  - Customer onboarding incentives that apply globally
  - Flexible spending allowances that aren't tied to a single contract
  - Migration scenarios where you need to preserve existing customer balances

  #### Scoping flexibility:

  Customer-level credits can be configured in two ways:

  - Contract-specific: Use the applicable_contract_ids field to limit the credit to specific contracts
  - Cross-contract: Leave applicable_contract_ids empty to allow the credit to be used across all of the customer's contracts

  #### Product Targeting:

  Credits can be scoped to specific products using `applicable_product_ids` or `applicable_product_tags`, or left unrestricted to apply to all products.

  #### Priority considerations:

  When multiple credits are applicable, the one with the lower priority value will be consumed first. If there is a tie, contract level commits and credits will be applied before customer level commits and credits. Plan your priority scheme carefully to ensure credits are applied in the desired order.

  #### Access Schedule Required:

  You must provide an `access_schedule` that defines when and how much credit becomes available to the customer over time. This usually is aligned to the contract schedule or starts immediately and is set to expire in the future.

  ### Usage Guidelines:

  ⚠️ Preferred Alternative: In most cases, you should add credits directly to contracts using the contract/create or contract/edit APIs instead of creating customer-level credits. Contract-level credits provide better organization, and are easier for finance teams to recognize revenue, and are the recommended approach for most use cases.

- `list_customers_v1_credits` (`write`): Retrieve a detailed list of all credits available to a customer, including promotional credits and contract-specific credits. This endpoint provides comprehensive visibility into credit balances, access schedules, and usage rules, enabling you to build credit management interfaces and track available funding.

  ### Use this endpoint to:

  - Display all available credits in customer billing dashboards
  - Show credit balances and expiration dates
  - Track credit usage history with optional ledger details
  - Build credit management and reporting tools
  - Monitor promotional credit utilization
    • Support customer inquiries about available credits

  ### Key response fields:

  An array of Credit objects containing:

  - Credit details: Name, priority, and which applicable products/tags it applies to
  - Product ID: The `product_id` of the credit. This is for external mapping into your quote-to-cash stack, not the product it applies to.
  - Access schedule: When credits become available and expire
  - Optional ledger entries: Transaction history (if `include_ledgers=true`)
  - Balance information: Current available amount (if `include_balance=true`)
  - Metadata: Custom fields and usage specifiers

  ### Usage guidelines:

  - Pagination: Results limited to 25 commits per page; use next_page for more
  - Date filtering options:
    - `covering_date`: Credits active on a specific date
    - `starting_at`: Credits with access on/after a date
    - `effective_before`: Credits with access before a date (exclusive)
  - Scope options:
    - `include_contract_credits`: Include contract-level credits (not just customer-level)
    - `include_archived`: Include archived credits and credits from archived contracts
  - Performance considerations:
    - `include_ledgers`: Adds detailed transaction history (slower)
    - `include_balance`: Adds current balance calculation (slower)
  - Optional filtering: Use credit_id to retrieve a specific commit

- `update_end_date_customers_v1_credits` (`write`): Shortens the end date of an existing customer credit to terminate it earlier than originally scheduled. Only allows moving end dates forward (earlier), not extending them.

  Note: To extend credit end dates or make comprehensive edits, use the 'edit credit' endpoint instead.

### Resource `v1.customers.named_schedules`:

- `retrieve_customers_v1_named_schedules` (`write`): Get a named schedule for the given customer. This endpoint's availability is dependent on your client's configuration.
- `update_customers_v1_named_schedules` (`write`): Update a named schedule for the given customer. This endpoint's availability is dependent on your client's configuration.

### Resource `v1.dashboards`:

- `get_embeddable_url_v1_dashboards` (`write`): Generate secure, embeddable dashboard URLs that allow you to seamlessly integrate Metronome's billing visualizations directly into your application. This endpoint creates authenticated iframe-ready URLs for customer-specific dashboards, providing a white-labeled billing experience without building custom UI.

  ### Use this endpoint to:

  - Embed billing dashboards directly in your customer portal or admin interface
  - Provide self-service access to invoices, usage data, and credit balances
  - Build white-labeled billing experiences with minimal development effort

  ### Key response fields:

  - A secure, time-limited URL that can be embedded in an iframe
  - The URL includes authentication tokens and configuration parameters
  - URLs are customer-specific and respect your security settings

  ### Usage guidelines:

  - Dashboard types: Choose from `invoices`, `usage`, or `commits_and_credits`
  - Customization options:
    - `dashboard_options`: Configure whether you want invoices to show zero usage line items
    - `color_overrides`: Match your brand's color palette
    - `bm_group_key_overrides`: Customize how dimensions are displayed (for the usage embeddable dashboard)
  - Iframe implementation: Embed the returned URL directly in an iframe element
  - Responsive design: Dashboards automatically adapt to container dimensions

### Resource `v1.usage`:

- `list_v1_usage` (`write`): Retrieve aggregated usage data across multiple customers and billable metrics in a single query. This batch endpoint enables you to fetch usage patterns at scale, broken down by time windows, making it ideal for building analytics dashboards, generating reports, and monitoring platform-wide usage trends.

  ### Use this endpoint to:

  - Generate platform-wide usage reports for internal teams
  - Monitor aggregate usage trends across your entire customer base
  - Create comparative usage analyses between customers or time periods
  - Support capacity planning with historical usage patterns

  ### Key response fields:

  An array of `UsageBatchAggregate` objects containing:

  - `customer_id`: The customer this usage belongs to
  - `billable_metric_id` and `billable_metric_name`: What was measured
  - `start_timestamp` and `end_timestamp`: Time window for this data point
  - `value`: Aggregated usage amount for the period
  - `groups` (optional): Usage broken down by group keys with values
  - `next_page`: Pagination cursor for large result sets

  ### Usage guidelines:

  - Time windows: Set `window_size` to `hour`, `day`, or `none` (entire period)
  - Required parameters: Must specify `starting_on`, `ending_before`, and `window_size`
  - Filtering options:
    - `customer_ids`: Limit to specific customers (omit for all customers)
    - `billable_metrics`: Limit to specific metrics (omit for all metrics)
  - Pagination: Use `next_page` cursor to retrieve large datasets
  - Null values: Group values may be null when no usage matches that group

- `ingest_v1_usage` (`write`): The ingest endpoint is the primary method for sending usage events to Metronome, serving as the foundation for all billing calculations in your usage-based pricing model. This high-throughput endpoint is designed for real-time streaming ingestion, supports backdating 34 days, and is built to handle mission-critical usage data with enterprise-grade reliability. Metronome supports 100,000 events per second without requiring pre-aggregation or rollups and can scale up from there. See the [Send usage events](/guides/events/send-usage-events) guide to learn more about usage events.

  ### Use this endpoint to:

  Create a customer usage pipeline into Metronome that drives billable metrics, credit drawdown, and invoicing. Track customer behavior, resource consumption, and feature usage

  ### What happens when you send events:

  - Events are validated and processed in real-time
  - Events are matched to customers using customer IDs or customer ingest aliases
  - Events are matched to billable metrics and are immediately available for usage and spend calculations

  ### Usage guidelines:

  - Historical events can be backdated up to 34 days and will immediately impact live customer spend
  - Duplicate events are automatically detected and ignored (34-day deduplication window)

  #### Event structure:

  Usage events are simple JSON objects designed for flexibility and ease of integration:

  ```json
  {
    "transaction_id": "2021-01-01T00:00:00Z_cluster42",
    "customer_id": "team@example.com",
    "event_type": "api_request",
    "timestamp": "2021-01-01T00:00:00Z",
    "properties": {
      "endpoint": "/v1/users",
      "method": "POST",
      "response_time_ms": 45,
      "region": "us-west-2"
    }
  }
  ```

  Learn more about [usage event structure definitions](/guides/events/design-usage-events).

  #### Transaction ID

  The transaction_id serves as your idempotency key, ensuring events are processed exactly once. Metronome maintains a 34-day deduplication window - significantly longer than typical 12-hour windows - enabling robust backfill scenarios without duplicate billing.

  - Best Practices:
    - Use UUIDs for one-time events: uuid4()
    - For heartbeat events, use deterministic IDs
    - Include enough context to avoid collisions across different event sources

  #### Customer ID

  Identifies which customer should be billed for this usage. Supports two identification methods:

  - Metronome Customer ID: The UUID returned when creating a customer
  - Ingest Alias: Your system's identifier (email, account number, etc.)

  Ingest aliases enable seamless integration without requiring ID mapping, and customers can have multiple aliases for flexibility.

  #### Event Type:

  Categorizes the event type for billable metric matching. Choose descriptive names that aligns with the product surface area.

  #### Properties:

  Flexible metadata also used to match billable metrics or to be used to serve as group keys to create multiple pricing dimensions or breakdown costs by novel properties for end customers or internal finance teams measuring underlying COGs.

- `list_with_groups_v1_usage` (`write`): Retrieve granular usage data for a specific customer and billable metric, with the ability to break down usage by custom grouping dimensions. This endpoint enables deep usage analytics by segmenting data across attributes like region, user, model type, or any custom dimension defined in your billable metrics.

  ### Use this endpoint to:

  - Analyze usage patterns broken down by specific attributes (region, user, department, etc.)
  - Build detailed usage dashboards with dimensional filtering
  - Identify high-usage segments for optimization opportunities

  ### Key response fields:

  An array of `PagedUsageAggregate` objects containing:

  - `starting_on` and `ending_before`: Time window boundaries
  - `group_key`: The dimension being grouped by (e.g., "region")
  - `group_value`: The specific value for this group (e.g., "US-East")
  - `value`: Aggregated usage for this group and time window
  - `next_page`: Pagination cursor for large datasets

  ### Usage guidelines:

  - Required parameters: Must specify `customer_id`, `billable_metric_id`, and `window_size`
  - Time windows: Set `window_size` to hour, day, or none for different granularities
  - Group filtering: Use `group_by` to specify:
    - key: The dimension to group by (must be set on the billable metric as a group key)
    - values: Optional array to filter to specific values only
  - Pagination: Use limit and `next_page` for large result sets
  - Null handling: `group_value` may be null for unmatched data

- `search_v1_usage` (`write`): This endpoint retrieves events by transaction ID for events that occurred within the last 34 days. It is specifically designed for sampling-based testing workflows to detect revenue leakage. The Event Search API provides a critical observability tool that validates the integrity of your usage pipeline by allowing you to sample raw events and verify their matching against active billable metrics.

  Why event observability matters for revenue leakage:
  Silent revenue loss occurs when events are dropped, delayed, or fail to match billable metrics due to:

  - Upstream system failures
  - Event format changes
  - Misconfigured billable metrics

  ### Use this endpoint to:

  - Sample raw events and validate they match the expected billable metrics
  - Build custom leakage detection alerts to prevent silent revenue loss
  - Verify event processing accuracy during system changes or metric updates
  - Debug event matching issues in real-time

  ### Key response fields:

  - Complete event details including transaction ID, customer ID, and properties
  - Matched Metronome customer (if any)
  - Matched billable metric information (if any)
  - Processing status and duplicate detection flags

  ### Usage guidelines:

  ⚠️ Important: This endpoint is heavily rate limited and designed for sampling workflows only. Do not use this endpoint to check every event in your system. Instead, implement a sampling strategy to randomly validate a subset of events for observability purposes.

### Resource `v1.audit_logs`:

- `list_v1_audit_logs` (`read`): Get a comprehensive audit trail of all operations performed in your Metronome account, whether initiated through the API, web interface, or automated processes. This endpoint provides detailed logs of who did what and when, enabling compliance reporting, security monitoring, and operational troubleshooting across all interaction channels.

  ### Use this endpoint to:

  - Monitor all account activity for security and compliance purposes
  - Track configuration changes regardless of source (API, UI, or system)
  - Investigate issues by reviewing historical operations

  ### Key response fields:

  An array of AuditLog objects containing:

  - id: Unique identifier for the audit log entry
  - timestamp: When the action occurred (RFC 3339 format)
  - actor: Information about who performed the action
  - request: Details including request ID, IP address, and user agent
  - `resource_type`: The type of resource affected (e.g., customer, contract, invoice)
  - `resource_id`: The specific resource identifier
  - `action`: The operation performed
  - `next_page`: Cursor for continuous log retrieval

  ### Usage guidelines:

  - Continuous retrieval: The next_page token enables uninterrupted log streaming—save it between requests to ensure no logs are missed
  - Empty responses: An empty data array means no new logs yet; continue polling with the same next_page token
  - Date filtering:
    - `starting_on`: Earliest logs to return (inclusive)
    - `ending_before`: Latest logs to return (exclusive)
    - Cannot be used with `next_page`
  - Resource filtering: Must specify both `resource_type` and `resource_id` together
  - Sort order: Default is `date_asc`; use `date_desc` for newest first

### Resource `v1.custom_fields`:

- `add_key_v1_custom_fields` (`write`): Creates a new custom field key for a given entity (e.g. billable metric, contract, alert).

  Custom fields are properties that you can add to Metronome objects to store metadata like foreign keys or other descriptors. This metadata can get transferred to or accessed by other systems to contextualize Metronome data and power business processes. For example, to service workflows like revenue recognition, reconciliation, and invoicing, custom fields help Metronome know the relationship between entities in the platform and third-party systems.

  ### Use this endpoint to:

  - Create a new custom field key for Customer objects in Metronome. You can then use the Set Custom Field Values endpoint to set the value of this key for a specific customer.
  - Specify whether the key should enforce uniqueness. If the key is set to enforce uniqueness and you attempt to set a custom field value for the key that already exists, it will fail.

  ### Usage guidelines:

  - Custom fields set on commits, credits, and contracts can be used to scope alert evaluation. For example, you can create a spend threshold alert that only considers spend associated with contracts with custom field key `contract_type` and value `paygo`
  - Custom fields set on products can be used in the Stripe integration to set metadata on invoices.
  - Custom fields for customers, contracts, invoices, products, commits, scheduled charges, and subscriptions are passed down to the invoice.

- `delete_values_v1_custom_fields` (`write`): Remove specific custom field values from a Metronome entity instance by specifying the field keys to delete. Use this endpoint to clean up unwanted custom field data while preserving other fields on the same entity. Requires the entity type, entity ID, and array of keys to remove.
- `list_keys_v1_custom_fields` (`write`): Retrieve all your active custom field keys, with optional filtering by entity type (customer, contract, product, etc.). Use this endpoint to discover what custom field keys are available before setting values on entities or to audit your custom field configuration across different entity types.
- `remove_key_v1_custom_fields` (`write`): Removes a custom field key from the allowlist for a specific entity type, preventing future use of that key across all instances of the entity. Existing values for this key on entity instances will no longer be accessible once the key is removed.
- `set_values_v1_custom_fields` (`write`): Sets custom field values on a specific Metronome entity instance. Overwrites existing values for matching keys while preserving other fields. All updates are transactional—either all values are set or none are. Custom field values are limited to 200 characters each.

### Resource `v1.billable_metrics`:

- `create_v1_billable_metrics` (`write`): Create billable metrics programmatically with this endpoint—an essential step in configuring your pricing and packaging in Metronome.

  A billable metric is a customizable query that filters and aggregates events from your event stream. These metrics are continuously tracked as usage data enters Metronome through the ingestion pipeline. The ingestion process transforms raw usage data into actionable pricing metrics, enabling accurate metering and billing for your products.

  ### Use this endpoint to:

  - Create individual or multiple billable metrics as part of a setup workflow.
  - Automate the entire pricing configuration process, from metric creation to customer contract setup.
  - Define metrics using either standard filtering/aggregation or a custom SQL query.

  ### Key response fields:

  - The ID of the billable metric that was created
  - The created billable metric will be available to be used in Products, usage endpoints, and alerts.

  ### Usage guidelines:

  - Metrics defined using standard filtering and aggregation are Streaming billable metrics, which have been optimized for ultra low latency and high throughput workflows.
  - Use SQL billable metrics if you require more flexible aggregation options.

- `retrieve_v1_billable_metrics` (`read`): Retrieves the complete configuration for a specific billable metric by its ID. Use this to review billable metric setup before associating it with products. Returns the metric's `name`, `event_type_filter`, `property_filters`, `aggregation_type`, `aggregation_key`, `group_keys`, `custom fields`, and `SQL query` (if it's a SQL billable metric).

  Important:

  - Archived billable metrics will include an `archived_at` timestamp; they no longer process new usage events but remain accessible for historical reference.

- `list_v1_billable_metrics` (`read`): Retrieves all billable metrics with their complete configurations. Use this for programmatic discovery and management of billable metrics, such as associating metrics to products and auditing for orphaned or archived metrics.
  Important: Archived metrics are excluded by default; use `include_archived`=`true` parameter to include them.
- `archive_v1_billable_metrics` (`write`): Use this endpoint to retire billable metrics that are no longer used. After a billable metric is archived, that billable metric can no longer be used in any new Products to define how that product should be metered. If you archive a billable metric that is already associated with a Product, the Product will continue to function as usual, metering based on the definition of the archived billable metric.

  Archived billable metrics will be returned on the `getBillableMetric` and `listBillableMetrics` endpoints with a populated `archived_at` field.

### Resource `v1.services`:

- `list_v1_services` (`read`): Gets Metronome's service registry with associated IP addresses for security allowlisting and firewall configuration. Use this endpoint to maintain an up-to-date list of IPs that your systems should trust for Metronome communications. Returns service names and their current IP ranges, with new IPs typically appearing 30+ days before first use to ensure smooth allowlist updates.

### Resource `v1.invoices`:

- `regenerate_v1_invoices` (`write`): This endpoint regenerates a voided invoice and recalculates the invoice based on up-to-date rates, available balances, and other fees regardless of the billing period.

  ### Use this endpoint to:

  Recalculate an invoice with updated rate terms, available balance, and fees to correct billing disputes or discrepancies

  ### Key response fields:

  The regenerated invoice id, which is distinct from the previously voided invoice.

  ### Usage guidelines:

  If an invoice is attached to a contract with a billing provider on it, the regenerated invoice will be distributed based on the configuration.

- `void_v1_invoices` (`write`): Permanently cancels an invoice by setting its status to voided, preventing collection and removing it from customer billing. Use this to correct billing errors, cancel incorrect charges, or handle disputed invoices that should not be collected. Returns the voided invoice ID with the status change applied immediately to stop any payment processing.

### Resource `v1.contracts`:

- `create_v1_contracts` (`write`): Contracts define a customer's products, pricing, discounts, access duration, and billing configuration. Contracts serve as the central billing agreement for both PLG and Enterprise customers, you can automatically customers access to your products and services directly from your product or CRM.

  ### Use this endpoint to:

  - PLG onboarding: Automatically provision new self-serve customers with contracts when they sign up.
  - Enterprise sales: Push negotiated contracts from Salesforce with custom pricing and commitments
  - Promotional pricing: Implement time-limited discounts and free trials through overrides

  ### Key components:

  #### Contract Term and Billing Schedule

  - Set contract duration using `starting_at` and `ending_before` fields. PLG contracts typically use perpetual agreements (no end date), while Enterprise contracts have fixed end dates which can be edited over time in the case of co-term upsells.

  #### Rate Card

  If you are offering usage based pricing, you can set a rate card for the contract to reference through `rate_card_id` or `rate_card_alias`. The rate card is a store of all of your usage based products and their centralized pricing. Any new products or price changes on the rate card can be set to automatically propagate to all associated contracts - this ensures consistent pricing and product launches flow to contracts without manual updates and migrations. The `usage_statement_schedule` determines the cadence on which Metronome will finalize a usage invoice for the customer. This defaults to monthly on the 1st, with options for custom dates, quarterly, or annual cadences. Note: Most usage based billing companies align usage statements to be evaluated aligned to the first of the month.
  Read more about [Rate Cards](https://docs.metronome.com/pricing-packaging/create-manage-rate-cards/).

  #### Overrides and discounts

  Customize pricing on the contract through time-bounded overrides that can target specific products, product families, or complex usage scenarios. Overrides enable two key capabilities:

  - Discounts: Apply percentage discounts, fixed rate reductions, or quantity-based pricing tiers
  - Entitlements: Provide special pricing or access to specific products for negotiated deals

  Read more about [Contract Overrides](https://docs.metronome.com/manage-product-access/add-contract-override/).

  #### Commits and Credits

  Using commits, configure prepaid or postpaid spending commitments where customers promise to spend a certain amount over the contract period paid in advance or in arrears. Use credits to provide free spending allowances. Under the hood these are the same mechanisms, however, credits are typically offered for free (SLA or promotional) or as a part of an allotment associated with a Subscription.

  In Metronome, you can set commits and credits to only be applicable for a subset of usage. Use `applicable_product_ids` or `applicable_product_tags` to create product or product-family specific commits or credits, or you can build complex boolean logic specifiers to target usage based on pricing and presentation group values using `override_specifiers`.

  These objects can also also be configured to have a recurrence schedule to easily model customer packaging which includes recurring monthly or quarterly allotments.

  Commits support rollover settings (`rollover_fraction`) to transfer unused balances between contract periods, either entirely or as a percentage.

  Read more about [Credits and Commits](https://docs.metronome.com/pricing-packaging/apply-credits-commits/).

  #### Subscriptions

  You can add a fixed recurring charge to a contract, like monthly licenses or seat-based fees, using the subscription charge. Subscription charges are defined on your rate card and you can select which subscription is applicable to add to each contract. When you add a subscription to a contract you need to:

  - Define whether the subscription is paid for in-advance or in-arrears (`collection_schedule`)
  - Define the proration behavior (`proration`)
  - Specify an initial quantity (`initial_quantity`)
  - Define which subscription rate on the rate card should be used (`subscription_rate`)

  Read more about [Subscriptions](https://docs.metronome.com/manage-product-access/create-subscription/).

  #### Scheduled Charges

  Set up one-time, recurring, or entirely custom charges that occur on specific dates, separate from usage-based billing or commitments. These can be used to model non-recurring platform charges or professional services.

  #### Threshold Billing

  Metronome allows you to configure automatic billing triggers when customers reach spending thresholds to prevent fraud and manage risk. You can use `spend_threshold_configuration` to trigger an invoice to cover current charges whenever the threshold is reached or you can ensure the customer maintains a minimum prepaid balance using the `prepaid_balance_configuration`.

  Read more about [Spend Threshold](https://docs.metronome.com/manage-product-access/spend-thresholds/) and [Prepaid Balance Thresholds](https://docs.metronome.com/manage-product-access/prepaid-balance-thresholds/).

  ### Usage guidelines:

  - You can always [Edit Contracts](https://docs.metronome.com/manage-product-access/edit-contract/) after it has been created, using the `editContract` endpoint. Metronome keeps track of all edits, both in the audit log and over the `getEditHistory` endpoint.
  - Customers in Metronome can have multiple concurrent contracts at one time. Use `usage_filters` to route the correct usage to each contract. [Read more about usage filters](https://docs.metronome.com/manage-product-access/provision-customer/#create-a-usage-filter).

- `retrieve_v1_contracts` (`write`): This is the v1 endpoint to get a contract. New clients should implement using the v2 endpoint.
- `list_v1_contracts` (`write`): Retrieves all contracts for a specific customer, including pricing, terms, credits, and commitments. Use this to view a customer's contract history and current agreements for billing management. Returns contract details with optional ledgers and balance information.

  ⚠️ Note: This is the legacy v1 endpoint - new integrations should use the v2 endpoint for enhanced features.

- `add_manual_balance_entry_v1_contracts` (`write`): Manually adjust the available balance on a commit or credit. This entry is appended to the commit ledger as a new event. Optionally include a description that provides the reasoning for the entry.

  ### Use this endpoint to:

  - Address incorrect usage burn-down caused by malformed usage or invalid config
  - Decrease available balance to account for outages where usage may have not been tracked or sent to Metronome
  - Issue credits to customers in the form of increased balance on existing commit or credit

  ### Usage guidelines:

  Manual ledger entries can be extremely useful for resolving discrepancies in Metronome. However, most corrections to inaccurate billings can be modified upstream of the commit, whether that is via contract editing, rate editing, or other actions that cause an invoice to be recalculated.

- `amend_v1_contracts` (`write`): Amendments will be replaced by Contract editing. New clients should implement using the `editContract` endpoint. Read more about the migration to contract editing [here](/guides/implement-metronome/migrate-amendments-to-edits/) and reach out to your Metronome representative for more details. Once contract editing is enabled, access to this endpoint will be removed.
- `archive_v1_contracts` (`write`): Permanently end and archive a contract along with all its terms. Any draft invoices will be canceled, and all upcoming scheduled invoices will be voided–also all finalized invoices can optionally be voided. Use this in the event a contract was incorrectly created and needed to be removed from a customer.

  #### Impact on commits and credits:

  When archiving a contract, all associated commits and credits are also archived. For prepaid commits with active segments, Metronome automatically generates expiration ledger entries to close out any remaining balances, ensuring accurate accounting of unused prepaid amounts. These ledger entries will appear in the commit's transaction history with type `PREPAID_COMMIT_EXPIRATION`.

  #### Archived contract visibility:

  Archived contracts remain accessible for historical reporting and audit purposes. They can be retrieved using the `ListContracts` endpoint by setting the `include_archived` parameter to `true` or in the Metronome UI when the "Show archived" option is enabled.

- `create_historical_invoices_v1_contracts` (`write`): Create historical usage invoices for past billing periods on specific contracts. Use this endpoint to generate retroactive invoices with custom usage line items, quantities, and date ranges. Supports preview mode to validate invoice data before creation. Ideal for billing migrations or correcting past billing periods.
- `list_balances_v1_contracts` (`write`): Retrieve a comprehensive view of all available balances (commits and credits) for a customer. This endpoint provides real-time visibility into prepaid funds, postpaid commitments, promotional credits, and other balance types that can offset usage charges, helping you build transparent billing experiences.

  ### Use this endpoint to:

  - Display current available balances in customer dashboards
  - Verify available funds before approving high-usage operations
  - Generate balance reports for finance teams
  - Filter balances by contract or date ranges

  ### Key response fields:

  An array of balance objects (all credits and commits) containing:

  - Balance details: Current available amount for each commit or credit
  - Metadata: Product associations, priorities, applicable date ranges
  - Optional ledger entries: Detailed transaction history (if `include_ledgers=true`)
  - Balance calculations: Including pending transactions and future-dated entries
  - Custom fields: Any additional metadata attached to balances

  ### Usage guidelines:

  - Date filtering: Use `effective_before` to include only balances with access before a specific date (exclusive)
  - Set `include_balance=true` for calculated balance amounts on each commit or credit
  - Set `include_ledgers=true` for full transaction history
  - Set `include_contract_balances = true` to see contract level balances
  - Balance logic: Reflects currently accessible amounts, excluding expired/future segments
  - Manual adjustments: Includes all manual ledger entries, even future-dated ones

- `retrieve_rate_schedule_v1_contracts` (`write`): For a specific customer and contract, get the rates at a specific point in time. This endpoint takes the contract's rate card into consideration, including scheduled changes. It also takes into account overrides on the contract.

  For example, if you want to show your customer a summary of the prices they are paying, inclusive of any negotiated discounts or promotions, use this endpoint. This endpoint only returns rates that are entitled.

- `retrieve_subscription_quantity_history_v1_contracts` (`write`): Get the history of subscription quantities and prices over time for a given `subscription_id`. This endpoint can be used to power an in-product experience where you show a customer their historical changes to seat count. Future changes are not included in this endpoint - use the `getContract` endpoint to view the future scheduled changes to a subscription's quantity.

  Subscriptions are used to model fixed recurring fees as well as seat-based recurring fees. To model changes to the number of seats in Metronome, you can increment or decrement the quantity on a subscription at any point in the past or future.

- `schedule_pro_services_invoice_v1_contracts` (`write`): Create a new scheduled invoice for Professional Services terms on a contract. This endpoint's availability is dependent on your client's configuration.
- `set_usage_filter_v1_contracts` (`write`): If a customer has multiple contracts with overlapping rates, the usage filter routes usage to the appropriate contract based on a predefined group key.

  As an example, imagine you have a customer associated with two projects. Each project is associated with its own contract. You can create a usage filter with group key `project_id`
  on each contract, and route usage for `project_1` to the first contract and `project_2` to the second contract.

  ### Use this endpoint to:

  - Support enterprise contracting scenarios where multiple contracts are associated to the same customer with the same rates.
  - Update the usage filter associated with the contract over time.

  ### Usage guidelines:

  To use usage filters, the `group_key` must be defined on the billable metrics underlying the rate card on the contracts.

- `update_end_date_v1_contracts` (`write`): Update or add an end date to a contract. Ending a contract early will impact draft usage statements, truncate any terms, and remove upcoming scheduled invoices. Moving the date into the future will only extend the contract length. Terms and scheduled invoices are not extended. In-advance subscriptions will not be extended. Use this if a contract's end date has changed or if a perpetual contract ends.

### Resource `v1.contracts.products`:

- `create_contracts_v1_products` (`write`): Create a new product object. Products in Metronome represent your company's individual product or service offerings. A Product can be thought of as the basic unit of a line item on the invoice. This is analogous to SKUs or items in an ERP system. Give the product a meaningful name as they will appear on customer invoices.
- `retrieve_contracts_v1_products` (`write`): Retrieve a product by its ID, including all metadata and historical changes.
- `update_contracts_v1_products` (`write`): Updates a product's configuration while maintaining billing continuity for active customers. Use this endpoint to modify product names, metrics, pricing rules, and composite settings without disrupting ongoing billing cycles. Changes are scheduled using the starting_at timestamp, which must be on an hour boundary—set future dates to schedule updates ahead of time, or past dates for retroactive changes. Returns the updated product ID upon success.

  ### Usage guidance:

  - Product type cannot be changed after creation. For incorrect product types, create a new product and archive the original instead.

- `list_contracts_v1_products` (`write`): Get a paginated list of all products in your organization with their complete configuration, version history, and metadata. By default excludes archived products unless explicitly requested via the `archive_filter` parameter.
- `archive_contracts_v1_products` (`write`): Archive a product. Any current rate cards associated with this product will continue to function as normal. However, it will no longer be available as an option for newly created rates. Once you archive a product, you can still retrieve it in the UI and API, but you cannot unarchive it.

### Resource `v1.contracts.rateCards`:

- `create_contracts_v1_rate_cards` (`write`): In Metronome, the rate card is the central location for your pricing. Rate cards were built with new product launches and pricing changes in mind - you can update your products and pricing in one place, and that change will be automatically propagated across your customer cohorts. Most clients need only maintain one or a few rate cards within Metronome.

  ### Use this endpoint to:

  - Create a rate card with a name and description
  - Define the rate card's single underlying fiat currency, and any number of conversion rates between that fiat currency and custom pricing units. You can then add products and associated rates in the fiat currency or custom pricing unit for which you have defined a conversion rate.
  - Set aliases for the rate card. Aliases are human-readable names that you can use in the place of the id of the rate card when provisioning a customer's contract. By using an alias, you can easily create a contract and provision a customer by choosing the paygo rate card, without storing the rate card id in your internal systems. This is helpful when launching a new rate card for paygo customers, you can update the alias for paygo to be scheduled to be assigned to the new rate card without updating your code.

  ### Key response fields:

  - The ID of the rate card you just created

  ### Usage guidelines:

  - After creating a rate card, you can now use the addRate or addRates endpoints to add products and their prices to it
  - A rate card alias can only be used by one rate card at a time. If you create a contract with a rate card alias that is already in use by another rate card, the original rate card's alias schedule will be updated. The alias will reference the rate card to which it was most recently assigned.

- `retrieve_contracts_v1_rate_cards` (`write`): Return details for a specific rate card including name, description, and aliases. This endpoint does not return rates - use the dedicated getRates or getRateSchedule endpoints to understand the rates on a rate card.
- `update_contracts_v1_rate_cards` (`write`): Update the metadata properties of an existing rate card, including its name, description, and aliases. This endpoint is designed for managing rate card identity and reference aliases rather than modifying pricing rates.

  Modifies the descriptive properties and alias configuration of a rate card without affecting the underlying pricing rates or schedules. This allows you to update how a rate card is identified and referenced throughout your system.

  ### Use this endpoint to:

  - Rate card renaming: Update display names or descriptions for organizational clarity
  - Alias management: Add, modify, or schedule alias transitions for seamless rate card migrations
  - Documentation updates: Keep rate card descriptions current with business context
  - Self-serve provisioning setup: Configure aliases to enable code-free rate card transitions

  #### Active contract impact:

  - Alias changes: Already-created contracts continue using their originally assigned rate cards.
  - Other changes made using this endpoint will only impact the Metronome UI.

  #### Grandfathering existing PLG customer pricing:

  - Rate card aliases support scheduled transitions, enabling seamless rate card migrations for new customers, allowing existing customers to be grandfathered into their existing prices without code. Note that there are multiple mechanisms to support grandfathering in Metronome.

  #### How scheduled aliases work for PLG grandfathering:

  Initial setup:

  - Add alias to current rate card: Assign a stable alias (e.g., "standard-pricing") to your active rate card
  - Reference alias during contract creation: Configure your self-serve workflow to create contracts using `rate_card_alias` instead of direct `rate_card_id`
  - Automatic resolution: New contracts referencing the alias automatically resolve to the rate card associated with the alias at the point in time of provisioning

  #### Grandfathering process:

  - Create new rate card: Build your new rate card with updated pricing structure
  - Schedule alias transition: Add the same alias to the new rate card with a `starting_at` timestamp
  - Automatic cutover: Starting at the scheduled time, new contracts created in your PLG workflow using that alias will automatically reference the new rate card

- `list_contracts_v1_rate_cards` (`write`): List all rate cards. Returns rate card IDs, names, descriptions, aliases, and other details. To view the rates associated with a given rate card, use the getRates or getRateSchedule endpoints.
- `archive_contracts_v1_rate_cards` (`write`): Permanently disable a rate card by archiving it, preventing use in new contracts while preserving existing contract pricing. Use this when retiring old pricing models, consolidating rate cards, or removing outdated pricing structures. Returns the archived rate card ID and stops the rate card from appearing in contract creation workflows.
- `retrieve_rate_schedule_contracts_v1_rate_cards` (`write`): A rate card defines the prices that you charge for your products. Rate cards support scheduled changes over time, to allow you to easily roll out pricing changes and new product launches across your customer base. Use this endpoint to understand the rate schedule `starting_at` a given date, optionally filtering the list of rates returned based on product id or pricing group values. For example, you may want to display a schedule of upcoming price changes for a given product in your product experience - use this endpoint to fetch that information from its source of truth in Metronome.

  If you want to understand the rates for a specific customer's contract, inclusive of contract-level overrides, use the `getContractRateSchedule` endpoint.

### Resource `v1.contracts.rateCards.product_orders`:

- `update_rate_cards_contracts_v1_product_orders` (`write`): The ordering of products on a rate card determines the order in which the products will appear on customers' invoices. Use this endpoint to set the order of specific products on the rate card by moving them relative to their current location.
- `set_rate_cards_contracts_v1_product_orders` (`write`): The ordering of products on a rate card determines the order in which the products will appear on customers' invoices. Use this endpoint to set the order of products on the rate card.

### Resource `v1.contracts.rateCards.rates`:

- `list_rate_cards_contracts_v1_rates` (`write`): Understand the rate schedule at a given timestamp, optionally filtering the list of rates returned based on properties such as `product_id` and `pricing_group_values`. For example, you may want to display the current price for a given product in your product experience - use this endpoint to fetch that information from its source of truth in Metronome.

  If you want to understand the rates for a specific customer's contract, inclusive of contract-level overrides, use the `getContractRateSchedule` endpoint.

- `add_rate_cards_contracts_v1_rates` (`write`): Add a new rate
- `add_many_rate_cards_contracts_v1_rates` (`write`): Add new rates

### Resource `v1.contracts.rateCards.named_schedules`:

- `retrieve_rate_cards_contracts_v1_named_schedules` (`write`): Get a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.
- `update_rate_cards_contracts_v1_named_schedules` (`write`): Update a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.

### Resource `v1.contracts.named_schedules`:

- `retrieve_contracts_v1_named_schedules` (`write`): Get a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.
- `update_contracts_v1_named_schedules` (`write`): Update a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.

### Resource `v1.payments`:

- `list_v1_payments` (`write`): Fetch all payment attempts for the given invoice.
- `attempt_v1_payments` (`write`): Trigger a new attempt by canceling any existing attempts for this invoice and creating a new Payment. This will trigger another attempt to charge the Customer's configured Payment Gateway.
  Payment can only be attempted if all of the following are true:

  - The Metronome Invoice is finalized
  - PLG Invoicing is configured for the Customer
  - You cannot attempt payments for invoices that have already been `paid` or `voided`.

  Attempting to payment on an ineligible Invoice or Customer will result in a `400` response.

- `cancel_v1_payments` (`write`): Cancel an existing payment attempt for an invoice.
