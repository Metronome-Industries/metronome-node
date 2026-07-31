// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BillingProvidersAPI from './billing-providers';
import {
  BillingProviderCreateParams,
  BillingProviderCreateResponse,
  BillingProviderListParams,
  BillingProviderListResponse,
  BillingProviders,
} from './billing-providers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Use these endpoints to configure a billing API key, a webhook secret, or invoice finalization behavior.
 */
export class Settings extends APIResource {
  billingProviders: BillingProvidersAPI.BillingProviders = new BillingProvidersAPI.BillingProviders(
    this._client,
  );

  /**
   * Set the Avalara credentials for some specified `delivery_method_ids`, which can
   * be found in the `/listConfiguredBillingProviders` response. This maps the
   * Avalara credentials to the appropriate billing entity. These credentials are
   * only used for PLG Invoicing today.
   *
   * @example
   * ```ts
   * const response =
   *   await client.v1.settings.upsertAvalaraCredentials({
   *     avalara_environment: 'PRODUCTION',
   *     avalara_password: 'my_password_123',
   *     avalara_username: 'test@metronome.com',
   *     delivery_method_ids: [
   *       '9a906ebb-fbc7-42e8-8e29-53bfd2db3aca',
   *     ],
   *     commit_transactions: true,
   *   });
   * ```
   */
  upsertAvalaraCredentials(
    body: SettingUpsertAvalaraCredentialsParams,
    options?: RequestOptions,
  ): APIPromise<SettingUpsertAvalaraCredentialsResponse> {
    return this._client.post('/v1/upsertAvalaraCredentials', { body, ...options });
  }
}

export interface SettingUpsertAvalaraCredentialsResponse {}

export interface SettingUpsertAvalaraCredentialsParams {
  /**
   * The Avalara environment to use (SANDBOX or PRODUCTION).
   */
  avalara_environment: 'PRODUCTION' | 'SANDBOX';

  /**
   * The password for the Avalara account.
   */
  avalara_password: string;

  /**
   * The username for the Avalara account.
   */
  avalara_username: string;

  /**
   * The delivery method IDs of the billing provider configurations to update, can be
   * found in the response of the `/listConfiguredBillingProviders` endpoint.
   */
  delivery_method_ids: Array<string>;

  /**
   * Commit transactions if you want Metronome tax calculations used for reporting
   * and tax filings.
   */
  commit_transactions?: boolean;
}

Settings.BillingProviders = BillingProviders;

export declare namespace Settings {
  export {
    type SettingUpsertAvalaraCredentialsResponse as SettingUpsertAvalaraCredentialsResponse,
    type SettingUpsertAvalaraCredentialsParams as SettingUpsertAvalaraCredentialsParams,
  };

  export {
    BillingProviders as BillingProviders,
    type BillingProviderCreateResponse as BillingProviderCreateResponse,
    type BillingProviderListResponse as BillingProviderListResponse,
    type BillingProviderCreateParams as BillingProviderCreateParams,
    type BillingProviderListParams as BillingProviderListParams,
  };
}
