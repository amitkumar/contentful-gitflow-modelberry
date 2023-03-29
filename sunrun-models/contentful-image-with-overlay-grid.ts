import { ContentfulTitledContentWithImage } from "./contentful-titled-content-with-image";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type imageWithOverlayGrid}
 * - {@displayField title}
 * - {@name Image with Overlay Grid}
 */
export interface ContentfulImageWithOverlayGrid {
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
   * - {@name Image Grid Items}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-titledContentWithImage}
   * - {@widgetId entryLinksEditor}
   */
  imageGridItemsCollection: {
    items: (ContentfulTitledContentWithImage | ContentfulReference)[];
  };
}
