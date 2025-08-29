// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Dashboards extends APIResource {
  /**
   * Generate secure, embeddable dashboard URLs that allow you to seamlessly
   * integrate Metronome's billing visualizations directly into your application.
   * This endpoint creates authenticated iframe-ready URLs for customer-specific
   * dashboards, providing a white-labeled billing experience without building custom
   * UI.
   *
   * ### Use this endpoint to:
   *
   * - Embed billing dashboards directly in your customer portal or admin interface
   * - Provide self-service access to invoices, usage data, and credit balances
   * - Build white-labeled billing experiences with minimal development effort
   *
   * ### Key response fields:
   *
   * - A secure, time-limited URL that can be embedded in an iframe
   * - The URL includes authentication tokens and configuration parameters
   * - URLs are customer-specific and respect your security settings
   *
   * ### Usage guidelines:
   *
   * - Dashboard types: Choose from `invoices`, `usage`, or `commits_and_credits`
   * - Customization options:
   *   - `dashboard_options`: Configure whether you want invoices to show zero usage
   *     line items
   *   - `color_overrides`: Match your brand's color palette
   *   - `bm_group_key_overrides`: Customize how dimensions are displayed (for the
   *     usage embeddable dashboard)
   * - Iframe implementation: Embed the returned URL directly in an iframe element
   * - Responsive design: Dashboards automatically adapt to container dimensions
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.dashboards.getEmbeddableURL({
   *     customer_id: '4db51251-61de-4bfe-b9ce-495e244f3491',
   *     dashboard: 'invoices',
   *     bm_group_key_overrides: [
   *       {
   *         group_key_name: 'tenant_id',
   *         display_name: 'Org ID',
   *         value_display_names: {
   *           '48ecb18f358f': 'Cluster EU',
   *           e358f3ce242d: 'Cluster APAC',
   *         },
   *       },
   *     ],
   *     color_overrides: [
   *       { name: 'Gray_dark', value: '#ff0000' },
   *     ],
   *     dashboard_options: [
   *       { key: 'show_zero_usage_line_items', value: 'false' },
   *       { key: 'hide_voided_invoices', value: 'true' },
   *     ],
   *   });
   * ```
   */
  getEmbeddableURL(
    body: DashboardGetEmbeddableURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DashboardGetEmbeddableURLResponse> {
    return this._client.post('/v1/dashboards/getEmbeddableUrl', { body, ...options });
  }
}

export interface DashboardGetEmbeddableURLResponse {
  data: DashboardGetEmbeddableURLResponse.Data;
}

export namespace DashboardGetEmbeddableURLResponse {
  export interface Data {
    url?: string;
  }
}

export interface DashboardGetEmbeddableURLParams {
  customer_id: string;

  /**
   * The type of dashboard to retrieve.
   */
  dashboard: 'invoices' | 'usage' | 'credits' | 'commits_and_credits';

  /**
   * Optional list of billable metric group key overrides
   */
  bm_group_key_overrides?: Array<DashboardGetEmbeddableURLParams.BmGroupKeyOverride>;

  /**
   * Optional list of colors to override
   */
  color_overrides?: Array<DashboardGetEmbeddableURLParams.ColorOverride>;

  /**
   * Optional dashboard specific options
   */
  dashboard_options?: Array<DashboardGetEmbeddableURLParams.DashboardOption>;
}

export namespace DashboardGetEmbeddableURLParams {
  export interface BmGroupKeyOverride {
    /**
     * The name of the billable metric group key.
     */
    group_key_name: string;

    /**
     * The display name for the billable metric group key
     */
    display_name?: string;

    /**
     * <key, value> pairs of the billable metric group key values and their display
     * names. e.g. {"a": "Asia", "b": "Euro"}
     */
    value_display_names?: { [key: string]: unknown };
  }

  export interface ColorOverride {
    /**
     * The color to override
     */
    name?:
      | 'Gray_dark'
      | 'Gray_medium'
      | 'Gray_light'
      | 'Gray_extralight'
      | 'White'
      | 'Primary_medium'
      | 'Primary_light'
      | 'UsageLine_0'
      | 'UsageLine_1'
      | 'UsageLine_2'
      | 'UsageLine_3'
      | 'UsageLine_4'
      | 'UsageLine_5'
      | 'UsageLine_6'
      | 'UsageLine_7'
      | 'UsageLine_8'
      | 'UsageLine_9'
      | 'Primary_green'
      | 'Primary_red'
      | 'Progress_bar'
      | 'Progress_bar_background';

    /**
     * Hex value representation of the color
     */
    value?: string;
  }

  export interface DashboardOption {
    /**
     * The option key name
     */
    key: string;

    /**
     * The option value
     */
    value: string;
  }
}

export declare namespace Dashboards {
  export {
    type DashboardGetEmbeddableURLResponse as DashboardGetEmbeddableURLResponse,
    type DashboardGetEmbeddableURLParams as DashboardGetEmbeddableURLParams,
  };
}
