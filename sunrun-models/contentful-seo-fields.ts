/** @modelberry
* - {@plugin "@modelberry/plugin-contentful"}
* - {@type seoFields}
* - {@displayField metaTitle}
* - {@description SEO Fields:
Meta Title
Meta Description
Enable Search Engine Indexing}
* - {@name SEO Fields}
*/
export interface ContentfulSeoFields {
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
   * - {@name MetaTitle}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  metaTitle: string;
  /** @modelberry
   * - {@name MetaText}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  metaText: string;
  /** @modelberry
   * - {@name Enable Search Engine Indexing}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  enableSearchEngineIndexing: boolean;
}
