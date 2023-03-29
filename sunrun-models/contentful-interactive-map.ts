/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type interactiveMap}
 * - {@displayField title}
 * - {@description An interactive map component showing which states are currently offering solar and battery services}
 * - {@name Interactive Map}
 */
export interface ContentfulInteractiveMap {
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
   * - {@name Title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name Solar Only Color}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-ShamrockGreen-CyanBlue-DarkBlue}
   */
  solarOnlyColor?: string;
  /** @modelberry
   * - {@name Solar and Battery Color}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-ShamrockGreen-CyanBlue-DarkBlue}
   */
  solarAndBatteryColor?: string;
}
