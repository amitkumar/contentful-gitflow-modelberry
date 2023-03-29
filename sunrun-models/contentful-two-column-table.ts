import { ContentfulTitleContent } from "./contentful-title-content";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type twoColumnTable}
 * - {@displayField title}
 * - {@name Two Column Table}
 */
export interface ContentfulTwoColumnTable {
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
   * - {@name Subtitle}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  subtitle?: string;
  /** @modelberry
   * - {@name Column 1 Heading}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  column1Heading?: string;
  /** @modelberry
   * - {@name Column 2 Heading}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  column2Heading?: string;
  /** @modelberry
   * - {@name Table Entries}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-titleContent}
   * - {@widgetId entryLinksEditor}
   */
  tableEntriesCollection?: {
    items: (ContentfulTitleContent | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Style Show Background Gradient}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  styleShowBackgroundGradient: boolean;
  /** @modelberry
   * - {@name Style Show Bottom Line}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  styleShowBottomLine: boolean;
}
