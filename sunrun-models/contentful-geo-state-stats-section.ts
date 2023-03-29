/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type geoStateStatsSection}
 * - {@displayField headerQuestion}
 * - {@name Geo State Stats Section}
 */
export interface ContentfulGeoStateStatsSection {
  /** @modelberry
   * - {@ignore }
   */
  __typename?: string;
  /** @modelberry
   * - {@ignore }
   */
  sys?: {
    id?: string;
  };
  /** @modelberry
   * - {@name Header Question}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  headerQuestion?: string;
  /** @modelberry
   * - {@name Header Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  headerText?: string;
  /** @modelberry
   * - {@name Position Header}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  positionHeader?: string;
  /** @modelberry
   * - {@name Position Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  positionText?: string;
  /** @modelberry
   * - {@name Price Percent Header}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  pricePercentHeader?: string;
  /** @modelberry
   * - {@name Price Percent Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  pricePercentText?: string;
  /** @modelberry
   * - {@name Solar Generated Percent Header}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  solarGeneratedPercentHeader?: string;
  /** @modelberry
   * - {@name Solar Generated Percent Text}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  solarGeneratedPercentText?: string;
  /** @modelberry
   * - {@name State Footer Description}
   * - {@type Text}
   * - {@widgetId singleLine}
   */
  stateFooterDescription?: string;
}
