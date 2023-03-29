import { ContentfulLeadFormContainer } from "./contentful-lead-form-container";
import { ContentfulInteractiveMap } from "./contentful-interactive-map";
import { ContentfulTestimonialCarousel } from "./contentful-testimonial-carousel";
import { ContentfulTwoColumnList } from "./contentful-two-column-list";
import { ContentfulOneThirdImageWithCopy } from "./contentful-one-third-image-with-copy";
import { ContentfulHeroLargeFullImage } from "./contentful-hero-large-full-image";
import { ContentfulStateSolarIncentives } from "./contentful-state-solar-incentives";
import { ContentfulFullWidthVideo } from "./contentful-full-width-video";
import { ContentfulHeroSmallTwoThirdsImage } from "./contentful-hero-small-two-thirds-image";
import { ContentfulImageTwoThirdsText } from "./contentful-image-two-thirds-text";
import { ContentfulRichText } from "./contentful-rich-text";
import { ContentfulTwoColumnSection } from "./contentful-two-column-section";
import { ContentfulFaqinfoAccordion } from "./contentful-faqinfo-accordion";
import { ContentfulTwoColumnTable } from "./contentful-two-column-table";
import { ContentfulHeroTwoThirdsImage } from "./contentful-hero-two-thirds-image";
import { ContentfulPlansComparison } from "./contentful-plans-comparison";
import { ContentfulImageGrid3ColWithDescription } from "./contentful-image-grid3col-with-description";
import { ContentfulImageGrid4ColWithDescription } from "./contentful-image-grid4col-with-description";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type section}
 * - {@displayField title}
 * - {@name Section}
 */
export interface ContentfulSection {
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
   * - {@name Content}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-leadFormContainer-interactiveMap-testimonialCarousel}
   * - {@widgetId entryLinksEditor}
   */
  contentCollection?: {
    items: (
      | ContentfulLeadFormContainer
      | ContentfulInteractiveMap
      | ContentfulTestimonialCarousel
      | ContentfulTwoColumnList
      | ContentfulOneThirdImageWithCopy
      | ContentfulHeroLargeFullImage
      | ContentfulStateSolarIncentives
      | ContentfulFullWidthVideo
      | ContentfulHeroSmallTwoThirdsImage
      | ContentfulImageTwoThirdsText
      | ContentfulRichText
      | ContentfulTwoColumnSection
      | ContentfulFaqinfoAccordion
      | ContentfulTwoColumnTable
      | ContentfulHeroTwoThirdsImage
      | ContentfulPlansComparison
      | ContentfulImageGrid3ColWithDescription
      | ContentfulImageGrid4ColWithDescription
      | ContentfulReference
    )[];
  };
  /** @modelberry
   * - {@name Background Color}
   * - {@type Array}
   * - {@itemsType Symbol}
   * - {@itemsValidations in-OffWhite-PrimaryBlue-Transparent}
   * - {@widgetId checkbox}
   */
  backgroundColor?: string[];
  /** @modelberry
   * - {@name Show Bottom Divider Line}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  showBottomDividerLine?: boolean;
}
