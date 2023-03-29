import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type layoutContainer}
 * - {@displayField title}
 * - {@description A flex-box container that holds and lays out content}
 * - {@name Layout Container}
 */
export interface ContentfulLayoutContainer {
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
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  title: string;
  /** @modelberry
   * - {@name Direction}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-row-column}
   */
  direction: string;
  /** @modelberry
   * - {@name Justification}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-start-end-center}
   */
  justification: string;
  /** @modelberry
   * - {@name Vertical Alignment}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-top-bottom-center}
   */
  verticalAlignment?: string;
  /** @modelberry
   * - {@name Wrap Content}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-wrap-no-wrap}
   */
  wrapContent?: string;
  /** @modelberry
   * - {@name Content}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@widgetId entryLinksEditor}
   */
  contentCollection: {
    items: ContentfulReference[];
  };
}
