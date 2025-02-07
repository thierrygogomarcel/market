interface Window {
  ethereum?: {
    request: (request: { method: string, params?: any[] }) => Promise<any>;
    isMetaMask?: boolean;
    on?: (event: string, callback: (...args: any[]) => void) => void;
    removeListener?: (event: string, callback: (...args: any[]) => void) => void;
  }
}
