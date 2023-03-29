/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type plan}
 * - {@displayField title}
 * - {@name Plan}
 */
export interface ContentfulPlan {
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
   * - {@name title}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title?: string;
  /** @modelberry
   * - {@name planFeatures}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@widgetId tagEditor}
   */
  planFeatures?: string[];
  /** @modelberry
   * - {@name Link URL}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  linkUrl?: string;
}
