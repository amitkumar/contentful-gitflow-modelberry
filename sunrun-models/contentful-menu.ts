import { ContentfulCta } from "./contentful-cta";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type menu}
 * - {@displayField name}
 * - {@description Navigation menu containing a list of grouped links.}
 * - {@name Menu}
 */
export interface ContentfulMenu {
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
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  name: string;
  /** @modelberry
   * - {@name Links}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-cta}
   * - {@widgetId entryLinksEditor}
   */
  linksCollection?: {
    items: (ContentfulCta | ContentfulReference)[];
  };
}
