# Metronome Node MCP Server

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

- `retrieve_v2_contracts` (`write`): Get a specific contract. New clients should use this endpoint rather than the v1 endpoint.
- `list_v2_contracts` (`write`): List all contracts for a customer. New clients should use this endpoint rather than the v1 endpoint.
- `edit_v2_contracts` (`write`): Edit a contract. Contract editing must be enabled to use this endpoint.
- `edit_commit_v2_contracts` (`write`): Edit a customer or contract commit. Contract commits can only be edited using this endpoint if contract editing is enabled.
- `edit_credit_v2_contracts` (`write`): Edit a customer or contract credit. Contract credits can only be edited using this endpoint if contract editing is enabled.
- `get_edit_history_v2_contracts` (`write`): Get the edit history of a specific contract. Contract editing must be enabled to use this endpoint.

### Resource `v1.alerts`:

- `create_v1_alerts` (`write`): Create a new alert
- `archive_v1_alerts` (`write`): Archive an existing alert

### Resource `v1.plans`:

- `list_v1_plans` (`read`): List all available plans.
- `get_details_v1_plans` (`read`): Fetch high level details of a specific plan.
- `list_charges_v1_plans` (`read`): Fetches a list of charges of a specific plan.
- `list_customers_v1_plans` (`read`): Fetches a list of customers on a specific plan (by default, only currently active plans are included)

### Resource `v1.credit_grants`:

- `create_v1_credit_grants` (`write`): Create a new credit grant
- `list_v1_credit_grants` (`write`): List credit grants. This list does not included voided grants.
- `edit_v1_credit_grants` (`write`): Edit an existing credit grant
- `list_entries_v1_credit_grants` (`write`): Fetches a list of credit ledger entries. Returns lists of ledgers per customer. Ledger entries are returned in chronological order. Ledger entries associated with voided credit grants are not included.
- `void_v1_credit_grants` (`write`): Void a credit grant

### Resource `v1.pricing_units`:

- `list_v1_pricing_units` (`read`): List all pricing units (known in the API by the legacy term "credit types").

### Resource `v1.customers`:

- `create_v1_customers` (`write`): Create a new customer
- `retrieve_v1_customers` (`read`): Get a customer by Metronome ID.
- `list_v1_customers` (`read`): List all customers.
- `archive_v1_customers` (`write`): Archive a customer Note: any alerts associated with the customer will not be triggered.
- `list_billable_metrics_v1_customers` (`read`): Get all billable metrics for a given customer.
- `list_costs_v1_customers` (`read`): Fetch daily pending costs for the specified customer, broken down by credit type and line items. Note: this is not supported for customers whose plan includes a UNIQUE-type billable metric.
- `preview_events_v1_customers` (`write`): Preview how a set of events will affect a customer's invoice. Generates a draft invoice for a customer using their current contract configuration and the provided events. This is useful for testing how new events will affect the customer's invoice before they are actually processed.
- `set_ingest_aliases_v1_customers` (`write`): Sets the ingest aliases for a customer. Ingest aliases can be used in the `customer_id` field when sending usage events to Metronome. This call is idempotent. It fully replaces the set of ingest aliases for the given customer.
- `set_name_v1_customers` (`write`): Updates the specified customer's name.
- `update_config_v1_customers` (`write`): Updates the specified customer's config.

### Resource `v1.customers.alerts`:

- `retrieve_customers_v1_alerts` (`write`): Get the customer alert status and alert information for the specified customer and alert
- `list_customers_v1_alerts` (`write`): Fetch all customer alert statuses and alert information for a customer
- `reset_customers_v1_alerts` (`write`): Reset state for an alert by customer id and force re-evaluation

### Resource `v1.customers.plans`:

- `list_customers_v1_plans` (`read`): List the given customer's plans in reverse-chronological order.
- `add_customers_v1_plans` (`write`): Associate an existing customer with a plan for a specified date range. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details on the price adjustments.
- `end_customers_v1_plans` (`write`): Change the end date of a customer's plan.
- `list_price_adjustments_customers_v1_plans` (`read`): Lists a customer plans adjustments. See the [price adjustments documentation](https://plans-docs.metronome.com/pricing/managing-plans/#price-adjustments) for details.

### Resource `v1.customers.invoices`:

- `retrieve_customers_v1_invoices` (`read`): Fetch a specific invoice for a given customer.
- `list_customers_v1_invoices` (`read`): List all invoices for a given customer, optionally filtered by status, date range, and/or credit type.
- `add_charge_customers_v1_invoices` (`write`): Add a one time charge to the specified invoice
- `list_breakdowns_customers_v1_invoices` (`read`): List daily or hourly invoice breakdowns for a given customer, optionally filtered by status, date range, and/or credit type.
  Important considerations:
  - If we receive backdated usage after an invoice has been finalized, the backdated usage will be included in the response and usage numbers may differ.

### Resource `v1.customers.billing_config`:

- `create_customers_v1_billing_config` (`write`): Set the billing configuration for a given customer.
- `retrieve_customers_v1_billing_config` (`read`): Fetch the billing configuration for the given customer.
- `delete_customers_v1_billing_config` (`write`): Delete the billing configuration for a given customer. Note: this is unsupported for Azure and AWS Marketplace customers.

### Resource `v1.customers.commits`:

- `create_customers_v1_commits` (`write`): Create a new commit at the customer level.
- `list_customers_v1_commits` (`write`): List commits.
- `update_end_date_customers_v1_commits` (`write`): Pull forward the end date of a prepaid commit. Use the "edit a commit" endpoint to extend the end date of a prepaid commit, or to make other edits to the commit.

### Resource `v1.customers.credits`:

- `create_customers_v1_credits` (`write`): Create a new credit at the customer level.
- `list_customers_v1_credits` (`write`): List credits.
- `update_end_date_customers_v1_credits` (`write`): Pull forward the end date of a credit. Use the "edit a credit" endpoint to extend the end date of a credit, or to make other edits to the credit.

### Resource `v1.customers.named_schedules`:

- `retrieve_customers_v1_named_schedules` (`write`): Get a named schedule for the given customer. This endpoint's availability is dependent on your client's configuration.
- `update_customers_v1_named_schedules` (`write`): Update a named schedule for the given customer. This endpoint's availability is dependent on your client's configuration.

### Resource `v1.dashboards`:

- `get_embeddable_url_v1_dashboards` (`write`): Retrieve an embeddable dashboard url for a customer. The dashboard can be embedded using an iframe in a website. This will show information such as usage data and customer invoices.

### Resource `v1.usage`:

- `list_v1_usage` (`write`): Fetch aggregated usage data for multiple customers and billable-metrics, broken into intervals of the specified length.
- `ingest_v1_usage` (`write`): Send usage events to Metronome. The body of this request is expected to be a JSON array of between 1 and 100 usage events. Compressed request bodies are supported with a `Content-Encoding: gzip` header. See [Getting usage into Metronome](https://docs.metronome.com/connect-metronome/) to learn more about usage events.
- `list_with_groups_v1_usage` (`write`): Fetch aggregated usage data for the specified customer, billable-metric, and optional group, broken into intervals of the specified length.
- `search_v1_usage` (`write`): Find events to match to customers, billable metrics, etc. We only look for transactions that occurred in the last 34 days.

### Resource `v1.audit_logs`:

- `list_v1_audit_logs` (`read`): Retrieves a range of audit logs. If no further audit logs are currently available, the data array will be empty. As new audit logs are created, subsequent requests using the same next_page value will be in the returned data array, ensuring a continuous and uninterrupted reading of audit logs.

### Resource `v1.custom_fields`:

- `add_key_v1_custom_fields` (`write`): Add a key to the allow list for a given entity. There is a 100 character limit on custom field keys.
- `delete_values_v1_custom_fields` (`write`): Deletes one or more custom fields on an instance of a Metronome entity.
- `list_keys_v1_custom_fields` (`write`): List all active custom field keys, optionally filtered by entity type.
- `remove_key_v1_custom_fields` (`write`): Remove a key from the allow list for a given entity.
- `set_values_v1_custom_fields` (`write`): Sets one or more custom fields on an instance of a Metronome entity. If a key/value pair passed in this request matches one already set on the entity, its value will be overwritten. Any key/value pairs that exist on the entity that do not match those passed in this request will remain untouched. This endpoint is transactional and will update all key/value pairs or no key/value pairs. Partial updates are not supported. There is a 200 character limit on custom field values.

### Resource `v1.billable_metrics`:

- `create_v1_billable_metrics` (`write`): Creates a new Billable Metric.
- `retrieve_v1_billable_metrics` (`read`): Get a billable metric.
- `list_v1_billable_metrics` (`read`): List all billable metrics.
- `archive_v1_billable_metrics` (`write`): Archive an existing billable metric.

### Resource `v1.services`:

- `list_v1_services` (`read`): Fetches a list of services used by Metronome and the associated IP addresses. IP addresses are not necessarily unique between services. In most cases, IP addresses will appear in the list at least 30 days before they are used for the first time.

### Resource `v1.invoices`:

- `regenerate_v1_invoices` (`write`): Regenerate a voided contract invoice
- `void_v1_invoices` (`write`): Void an invoice

### Resource `v1.contracts`:

- `create_v1_contracts` (`write`): Create a new contract
- `retrieve_v1_contracts` (`write`): This is the v1 endpoint to get a contract. New clients should implement using the v2 endpoint.
- `list_v1_contracts` (`write`): This is the v1 endpoint to list all contracts for a customer. New clients should implement using the v2 endpoint.
- `add_manual_balance_entry_v1_contracts` (`write`): Add a manual balance entry
- `amend_v1_contracts` (`write`): Amendments will be replaced by Contract editing. New clients should implement using the editContract endpoint. Read more about the migration to contract editing [here](https://docs.metronome.com/migrate-amendments-to-edits/) and reach out to your Metronome representative for more details. Once contract editing is enabled, access to this endpoint will be removed.
- `archive_v1_contracts` (`write`): Archive a contract
- `create_historical_invoices_v1_contracts` (`write`): Creates historical usage invoices for a contract
- `list_balances_v1_contracts` (`write`): List balances (commits and credits).
- `retrieve_rate_schedule_v1_contracts` (`write`): Get the rate schedule for the rate card on a given contract.
- `retrieve_subscription_quantity_history_v1_contracts` (`write`): Fetch the quantity and price for a subscription over time. End-point does not return future scheduled changes.
- `schedule_pro_services_invoice_v1_contracts` (`write`): Create a new scheduled invoice for Professional Services terms on a contract. This endpoint's availability is dependent on your client's configuration.
- `set_usage_filter_v1_contracts` (`write`): Set usage filter for a contract
- `update_end_date_v1_contracts` (`write`): Update the end date of a contract

### Resource `v1.contracts.products`:

- `create_contracts_v1_products` (`write`): Create a new product
- `retrieve_contracts_v1_products` (`write`): Get a specific product
- `update_contracts_v1_products` (`write`): Update a product
- `list_contracts_v1_products` (`write`): List products
- `archive_contracts_v1_products` (`write`): Archive a product

### Resource `v1.contracts.rateCards`:

- `create_contracts_v1_rate_cards` (`write`): Create a new rate card
- `retrieve_contracts_v1_rate_cards` (`write`): Get a specific rate card NOTE: Use `/contract-pricing/rate-cards/getRates` to retrieve rate card rates.
- `update_contracts_v1_rate_cards` (`write`): Update a rate card
- `list_contracts_v1_rate_cards` (`write`): List rate cards NOTE: Use `/contract-pricing/rate-cards/getRates` to retrieve rate card rates.
- `archive_contracts_v1_rate_cards` (`write`): Archive a rate card
- `retrieve_rate_schedule_contracts_v1_rate_cards` (`write`): Get all rates for a rate card from starting_at (either in perpetuity or until ending_before, if provided)

### Resource `v1.contracts.rateCards.product_orders`:

- `update_rate_cards_contracts_v1_product_orders` (`write`): Updates ordering of specified products
- `set_rate_cards_contracts_v1_product_orders` (`write`): Sets the ordering of products within a rate card

### Resource `v1.contracts.rateCards.rates`:

- `list_rate_cards_contracts_v1_rates` (`write`): Get all rates for a rate card at a point in time
- `add_rate_cards_contracts_v1_rates` (`write`): Add a new rate
- `add_many_rate_cards_contracts_v1_rates` (`write`): Add new rates

### Resource `v1.contracts.rateCards.named_schedules`:

- `retrieve_rate_cards_contracts_v1_named_schedules` (`write`): Get a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.
- `update_rate_cards_contracts_v1_named_schedules` (`write`): Update a named schedule for the given contract. This endpoint's availability is dependent on your client's configuration.

### Resource `v1.contracts.named_schedules`:

- `retrieve_contracts_v1_named_schedules` (`write`): Get a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.
- `update_contracts_v1_named_schedules` (`write`): Update a named schedule for the given rate card. This endpoint's availability is dependent on your client's configuration.
