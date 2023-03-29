/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type titleContent}
 * - {@displayField title}
 * - {@name Title Content}
 */
export interface ContentfulTitleContent {
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
   * - {@name Body}
   * - {@type Text}
   * - {@widgetId multipleLine}
   */
  body?: string;
}
