/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type textFormInput}
 * - {@displayField label}
 * - {@name Text Form Input}
 */
export interface ContentfulTextFormInput {
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
   * - {@localized true}
   * - {@name Default Value}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  defaultValue?: string;
  /** @modelberry
   * - {@localized true}
   * - {@name Placeholder Value}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  placeholderValue?: string;
  /** @modelberry
   * - {@localized true}
   * - {@name Error Message}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  errorMessage?: string;
  /** @modelberry
   * - {@localized true}
   * - {@name Invalid Message}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  invalidMessage?: string;
  /** @modelberry
   * - {@localized true}
   * - {@name Note}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  note?: string;
}
