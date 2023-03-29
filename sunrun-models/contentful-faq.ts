/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type faq}
 * - {@displayField question}
 * - {@name FAQ}
 */
export interface ContentfulFaq {
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
   * - {@name Question}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  question?: string;
  /** @modelberry
   * - {@name Answer}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  answer?: string;
}
