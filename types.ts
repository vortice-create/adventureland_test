export {};

declare global {
  interface Window {
    WonderWidget: {
      init: (config: any) => void;
    };
  }
}