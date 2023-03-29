/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type inputOption}
 * - {@displayField label}
 * - {@name Input Option}
 */
export interface ContentfulInputOption {
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
   * - {@name Label}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  label?: string;
  /** @modelberry
   * - {@name Value}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  value?: string;
}
