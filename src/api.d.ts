export type IpcRequest = {
  body: any;
  headers: any;
  method: string;
  url: string;
};

export type IpcResponse = {
  body: any;
  headers: any;
  status: number;
}

export interface IElectronAPI {
  node: () => string;
  chrome: () => string;
  electron: () => string;
}

declare global {
  interface Window {
    appApi: IElectronAPI;
    ipcRenderer: import('electron').IpcRenderer;
  }
}
