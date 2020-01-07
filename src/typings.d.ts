/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare var window: Window;

interface Window {
  ClarityIcons: any;
  carto: any;
}
declare module "*.geojson" {
  const value: any;
  export default value;
}