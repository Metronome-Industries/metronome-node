// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@metronome/sdk/core';
import { APIResource } from '@metronome/sdk/resource';
import * as ServicesAPI from '@metronome/sdk/resources/services';

export class Services extends APIResource {
  /**
   * Fetches a list of services used by Metronome and the associated IP addresses. IP
   * addresses are not necessarily unique between services. In most cases, IP
   * addresses will appear in the list at least 30 days before they are used for the
   * first time.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ServiceListResponse> {
    return this._client.get('/services', options);
  }
}

export interface ServiceListResponse {
  services: Array<ServiceListResponse.Service>;
}

export namespace ServiceListResponse {
  export interface Service {
    ips: Array<string>;

    name: string;

    usage: 'makes_connections_from' | 'accepts_connections_at';
  }
}

export namespace Services {
  export import ServiceListResponse = ServicesAPI.ServiceListResponse;
}
