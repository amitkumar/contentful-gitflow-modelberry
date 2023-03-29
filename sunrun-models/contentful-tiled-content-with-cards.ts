import { ContentfulTitledContent } from "./contentful-titled-content";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulCard } from "./contentful-card";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type tiledContentWithCards}
 * - {@displayField title}
 * - {@description Header Content with a Sub Header and cards}
 * - {@name Tiled Content with Cards}
 */
export interface ContentfulTiledContentWithCards {
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
   * - {@name Tiled Content}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-titledContent}
   */
  tiledContent?: ContentfulTitledContent | ContentfulReference;
  /** @modelberry
   * - {@name Cards}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-card}
   * - {@widgetId entryLinksEditor}
   */
  cardsCollection?: {
    items: (ContentfulCard | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Row Cards Lg}
   * - {@type Integer}
   * - {@widgetId numberEditor}
   * - {@validations range-min1-max4}
   */
  rowCardsLg?: number;
  /** @modelberry
   * - {@name Row Cards Md}
   * - {@type Integer}
   * - {@widgetId numberEditor}
   * - {@validations range-min1-max4}
   */
  rowCardsMd?: number;
}
