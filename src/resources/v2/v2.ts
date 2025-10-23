// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ContractsAPI from './contracts';
import {
  ContractEditCommitParams,
  ContractEditCommitResponse,
  ContractEditCreditParams,
  ContractEditCreditResponse,
  ContractEditParams,
  ContractEditResponse,
  ContractGetEditHistoryParams,
  ContractGetEditHistoryResponse,
  ContractListParams,
  ContractListResponse,
  ContractRetrieveParams,
  ContractRetrieveResponse,
  Contracts,
} from './contracts';
import * as NotificationsAPI from './notifications';
import {
  LifecycleEventOffsetNotificationConfig,
  LifecycleEventOffsetPolicy,
  LifecycleEventSystemNotificationConfig,
  LifecycleEventSystemPolicy,
  NotificationArchiveParams,
  NotificationArchiveResponse,
  NotificationCreateParams,
  NotificationCreateResponse,
  NotificationEditParams,
  NotificationEditResponse,
  NotificationListOffsetParams,
  NotificationListOffsetResponse,
  NotificationListSystemResponse,
  NotificationRetrieveParams,
  NotificationRetrieveResponse,
  Notifications,
} from './notifications';

export class V2 extends APIResource {
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
}

V2.Contracts = Contracts;
V2.Notifications = Notifications;

export declare namespace V2 {
  export {
    Contracts as Contracts,
    type ContractRetrieveResponse as ContractRetrieveResponse,
    type ContractListResponse as ContractListResponse,
    type ContractEditResponse as ContractEditResponse,
    type ContractEditCommitResponse as ContractEditCommitResponse,
    type ContractEditCreditResponse as ContractEditCreditResponse,
    type ContractGetEditHistoryResponse as ContractGetEditHistoryResponse,
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractListParams as ContractListParams,
    type ContractEditParams as ContractEditParams,
    type ContractEditCommitParams as ContractEditCommitParams,
    type ContractEditCreditParams as ContractEditCreditParams,
    type ContractGetEditHistoryParams as ContractGetEditHistoryParams,
  };

  export {
    Notifications as Notifications,
    type LifecycleEventOffsetNotificationConfig as LifecycleEventOffsetNotificationConfig,
    type LifecycleEventOffsetPolicy as LifecycleEventOffsetPolicy,
    type LifecycleEventSystemNotificationConfig as LifecycleEventSystemNotificationConfig,
    type LifecycleEventSystemPolicy as LifecycleEventSystemPolicy,
    type NotificationCreateResponse as NotificationCreateResponse,
    type NotificationRetrieveResponse as NotificationRetrieveResponse,
    type NotificationArchiveResponse as NotificationArchiveResponse,
    type NotificationEditResponse as NotificationEditResponse,
    type NotificationListOffsetResponse as NotificationListOffsetResponse,
    type NotificationListSystemResponse as NotificationListSystemResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationRetrieveParams as NotificationRetrieveParams,
    type NotificationArchiveParams as NotificationArchiveParams,
    type NotificationEditParams as NotificationEditParams,
    type NotificationListOffsetParams as NotificationListOffsetParams,
  };
}
