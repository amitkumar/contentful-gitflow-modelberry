import { ContentfulCta } from "./contentful-cta";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulTitledContentWithCtaAndImage } from "./contentful-titled-content-with-cta-and-image";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type sectionWithCardsAndCta}
 * - {@displayField title}
 * - {@description A section that has a title, cards, and a Cta}
 * - {@name Section With Cards and CTA}
 */
export interface ContentfulSectionWithCardsAndCta {
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
   * - {@name CTA}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name Cards}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-titledContentWithCtaAndImage}
   * - {@widgetId entryLinksEditor}
   */
  cardsCollection: {
    items: (ContentfulTitledContentWithCtaAndImage | ContentfulReference)[];
  };
}
