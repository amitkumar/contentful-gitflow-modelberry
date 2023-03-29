import { ContentfulCard } from "./contentful-card";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulCta } from "./contentful-cta";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type imageGrid4ColWithDescription}
 * - {@displayField title}
 * - {@name Image Grid (4-col) with Description}
 */
export interface ContentfulImageGrid4ColWithDescription {
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
   * - {@name Cards}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-card}
   * - {@widgetId entryCardsEditor}
   */
  cardsCollection?: {
    items: (ContentfulCard | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name See All Link}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  seeAllLink?: ContentfulCta | ContentfulReference;
}
