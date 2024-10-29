/**
 * model.Server
 */
export interface ModelServer {
  created_at: string;
  /**
   * DDNS配置
   */
  ddns_profiles: number[];
  deleted_at: string;
  /**
   * 展示排序，越大越靠前
   */
  display_index: number;
  /**
   * 启用DDNS
   */
  enable_ddns: boolean;
  /**
   * 对游客隐藏
   */
  hide_for_guest?: boolean;
  host?: ModelHost;
  id: number;
  last_active?: string;
  name: string;
  /**
   * 管理员可见备注
   */
  note: string;
  /**
   * 公开备注
   */
  public_note: string;
  state: ModelHostState;
  updated_at: string;
  uuid: string;
}

export interface ModelHost {
  arch: string;
  bootTime: number;
  countryCode: string;
  cpu: string[];
  diskTotal: number;
  gpu: string[];
  memTotal: number;
  platform: string;
  platformVersion: string;
  swapTotal: number;
  version: string;
  virtualization: string;
}

export interface ModelHostState {
  cpu?: number;
  diskUsed: number;
  gpu: number[];
  load1: number;
  load15: number;
  load5: number;
  memUsed: number;
  netInSpeed: number;
  netInTransfer: number;
  netOutSpeed?: number;
  netOutTransfer: number;
  processCount: number;
  swapUsed: number;
  tcpConnCount: number;
  temperatures: ModelSensorTemperature[];
  udpConnCount: number;
  uptime: number;
}

export interface ModelSensorTemperature {
  name?: string;
  temperature?: number;
}
