import { ContentfulCompanyFeatCard } from "./contentful-company-feat-card";
import { ContentfulTestimonialCard } from "./contentful-testimonial-card";
import { ContentfulTitledContentWithCta } from "./contentful-titled-content-with-cta";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type numberOneSolarCompanySection}
 * - {@displayField title}
 * - {@description Contains all content for section with header and a reference to many items for content}
 * - {@name Title with card content section}
 */
export interface ContentfulNumberOneSolarCompanySection {
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
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-companyFeatCard-testimonialCard-titledContentWithCta}
   * - {@widgetId entryLinksEditor}
   */
  cardsCollection?: {
    items: (
      | ContentfulCompanyFeatCard
      | ContentfulTestimonialCard
      | ContentfulTitledContentWithCta
      | ContentfulReference
    )[];
  };
}
