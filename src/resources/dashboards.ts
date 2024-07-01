// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@metronome/sdk/resource';
import * as Core from '@metronome/sdk/core';
import * as DashboardsAPI from '@metronome/sdk/resources/dashboards';

export class Dashboards extends APIResource {
  /**
   * Retrieve an embeddable dashboard url for a customer. The dashboard can be
   * embedded using an iframe in a website. This will show information such as usage
   * data and customer invoices.
   */
  getEmbeddableURL(
    body: DashboardGetEmbeddableURLParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DashboardGetEmbeddableURLResponse> {
    return this._client.post('/dashboards/getEmbeddableUrl', { body, ...options });
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
  dashboard: 'invoices' | 'usage' | 'credits';

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
      | 'Primary_red';

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

export namespace Dashboards {
  export import DashboardGetEmbeddableURLResponse = DashboardsAPI.DashboardGetEmbeddableURLResponse;
  export import DashboardGetEmbeddableURLParams = DashboardsAPI.DashboardGetEmbeddableURLParams;
}
