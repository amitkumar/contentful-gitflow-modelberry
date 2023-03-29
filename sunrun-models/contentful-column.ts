import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type column}
 * - {@displayField name}
 * - {@name Column}
 */
export interface ContentfulColumn {
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
   * - {@name Name}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  name?: string;
  /** @modelberry
   * - {@name Vertical Spacing}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-Top-Center-Bottom}
   */
  verticalSpacing?: string;
  /** @modelberry
   * - {@name Content}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@widgetId entryLinksEditor}
   */
  contentCollection?: {
    items: ContentfulReference[];
  };
}
