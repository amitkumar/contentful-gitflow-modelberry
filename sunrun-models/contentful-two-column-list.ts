import { ContentfulOneThirdImageWithCopy } from "./contentful-one-third-image-with-copy";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type twoColumnList}
 * - {@displayField title}
 * - {@name Two Column List}
 */
export interface ContentfulTwoColumnList {
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
   * - {@name List Items}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-oneThirdImageWithCopy}
   * - {@widgetId entryLinksEditor}
   * - {@validations size-min1-maxundefined}
   */
  listItemsCollection: {
    items: (ContentfulOneThirdImageWithCopy | ContentfulReference)[];
  };
}
