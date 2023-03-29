import { ContentfulPlan } from "./contentful-plan";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type plansSection}
 * - {@displayField title}
 * - {@name Plans Section}
 */
export interface ContentfulPlansSection {
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
   * - {@name plans}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-plan}
   * - {@widgetId entryLinksEditor}
   */
  plansCollection?: {
    items: (ContentfulPlan | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Highlighted Column }
   * - {@type Integer}
   * - {@widgetId numberEditor}
   */
  highlightedColumn?: number;
}
