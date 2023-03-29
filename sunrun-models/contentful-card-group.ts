import { ContentfulCard } from "./contentful-card";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type cardGroup}
 * - {@displayField title}
 * - {@name Card Group}
 */
export interface ContentfulCardGroup {
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
   * - {@name Cards}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-card}
   * - {@widgetId entryLinksEditor}
   * - {@validations size-min1-maxundefined}
   */
  cardsCollection: {
    items: (ContentfulCard | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Primary Copy}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline enabledNodeTypes-heading-2-heading-3-heading-4 richText}
   */
  primaryCopy?: {
    json?: any;
  };
}
