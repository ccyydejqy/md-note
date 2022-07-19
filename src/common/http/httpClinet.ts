/**
 * http 统一请求客户端
 */
import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';
import { ApiErrorCode } from './errorCode';
import { Host } from './config';
// 配置接口地址
axios.defaults.baseURL = '/';
// 配置超时时间
axios.defaults.timeout = 30e3;
axios.defaults.withCredentials = true;

export enum ErrHandleType {
  noCatch = 1, // 统一处理， 不抛出给业务代码异常.
  noCatch_hideErr = 2, // 统一处理， 并抛出异常，业务代码自行处理。
  catch_hideErr = 3, // 隐藏异常，不统一处理，不抛出给业务代码异常.
  catch = 4, // 不统一处理，抛出异常，业务代码自行处理。
}
interface HttpClientConfig extends AxiosRequestConfig {
  errHandleType?: ErrHandleType; // 错误处理类型。默认 ErrHandleType.common
  debounce?: boolean; // 是否需要对接口返回结果进行防抖，默认false
}

export class HttpClient {
  /* 请求中的请求,处理接口防抖 */
  private static requestMaps: any = {};

  /**
   * 发起请求
   */
  public static fetch(config: HttpClientConfig) {
    config.baseURL = localStorage.getItem('__baseUrl') || '/'; // localStorage可以手动改baseurl
    const requestId = `${config.method}${config.url}`;
    const requestSymbol = Symbol(requestId);
    HttpClient.requestMaps[requestId] = requestSymbol;
    return new Promise((rsv, rej) => {
      if (!config.headers) config.headers = {};

      axios(config)
        .then((res: any) => {
          /* 接口防抖 */
          if (config?.debounce && HttpClient.requestMaps[requestId] !== requestSymbol) {
            return;
          }
          /** 成功，失败 */
          if (String(res?.data?.errno) === '0') {
            rsv(res?.data?.data);
          } else {
            /* 错误处理方式 */
            HttpClient.dealErrhandle({
              rsv,
              rej,
              config,
              err: res?.data,
            });
          }
        })
        .catch((err: any) => {
          /* 接口防抖 */
          if (config?.debounce && HttpClient.requestMaps[requestId] !== requestSymbol) {
            return;
          }
          // 错误监控
          // Omega?.tracekError('接口请求异常', OmegaErrCode.API_ERR, '接口请求异常', { requestConfig: config, res: err });
          /* 错误处理方式 */
          HttpClient.dealErrhandle({
            rsv,
            rej,
            config,
            err,
          });
          /* end */
        })
        .finally(() => {
          // TODO
        });
    });
  }

  /**
   * 错误统一处理
   */
  public static dealErrhandle(params) {
    const { rsv, rej, config, err } = params;
    /* 必须的错误处理 */
    HttpClient.dealMustErrCode(err);
    /* 错误处理方式 */
    if (config?.errHandleType === ErrHandleType.noCatch) {
      /* 错误码处理 */
      HttpClient.dealErrCode(err);
      rsv(err);
    } else if (config?.errHandleType === ErrHandleType.noCatch_hideErr) {
      rsv(err);
    } else if (config?.errHandleType === ErrHandleType.catch_hideErr) {
      rej(err);
    } else {
      /* 错误码处理 */
      HttpClient.dealErrCode(err);
      rej(err);
    }
    /* end */
  }

  /**
   * 必须的错误码统一处理
   */
  public static dealMustErrCode(err: any) {
  }

  /**
   * 可选的错误码统一处理
   */
  public static dealErrCode(err: any) { }
}