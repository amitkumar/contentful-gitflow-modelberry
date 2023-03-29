import { ContentfulSeoFields } from "./contentful-seo-fields";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulHeader } from "./contentful-header";
import { ContentfulHero } from "./contentful-hero";
import { ContentfulBlogPost } from "./contentful-blog-post";
import { ContentfulCardGroup } from "./contentful-card-group";
import { ContentfulColumn } from "./contentful-column";
import { ContentfulCustomPageLayout } from "./contentful-custom-page-layout";
import { ContentfulFaqSection } from "./contentful-faq-section";
import { ContentfulImageSection } from "./contentful-image-section";
import { ContentfulInteractiveMap } from "./contentful-interactive-map";
import { ContentfulLayoutContainer } from "./contentful-layout-container";
import { ContentfulLeadForm } from "./contentful-lead-form";
import { ContentfulLearningSection } from "./contentful-learning-section";
import { ContentfulList } from "./contentful-list";
import { ContentfulPdf } from "./contentful-pdf";
import { ContentfulPlansSection } from "./contentful-plans-section";
import { ContentfulSection } from "./contentful-section";
import { ContentfulSectionWithCardsAndCta } from "./contentful-section-with-cards-and-cta";
import { ContentfulTiledContentWithCards } from "./contentful-tiled-content-with-cards";
import { ContentfulNumberOneSolarCompanySection } from "./contentful-number-one-solar-company-section";
import { ContentfulTitledContent } from "./contentful-titled-content";
import { ContentfulTitledContentWithCta } from "./contentful-titled-content-with-cta";
import { ContentfulTitledContentWithCtaAndImage } from "./contentful-titled-content-with-cta-and-image";
import { ContentfulVideoSection } from "./contentful-video-section";
import { ContentfulFooter } from "./contentful-footer";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type genericPage}
 * - {@displayField path}
 * - {@description Landing Page}
 * - {@name Generic Page}
 */
export interface ContentfulGenericPage {
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
   * - {@name Site}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@helpText This specifies the site that a new page should be added to}
   * - {@validations in-cms.sunrun.com-cms2.sunrun.com-quote.sunrun.com}
   */
  site: string;
  /** @modelberry
   * - {@name Path}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   * - {@helpText URL path following https://sunrun.com}
   * - {@validations regexp-2}
   */
  path: string;
  /** @modelberry
   * - {@name SEO Fields}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-seoFields}
   */
  seoFields: ContentfulSeoFields | ContentfulReference;
  /** @modelberry
   * - {@localized true}
   * - {@name Preview image}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  previewImage?: string;
  /** @modelberry
   * - {@name Header}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-header}
   */
  header?: ContentfulHeader | ContentfulReference;
  /** @modelberry
   * - {@name Content}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-hero-blogPost-cardGroup}
   * - {@widgetId entryLinksEditor}
   * - {@helpText Choose the layout for the content of the page. Custom Page Layout should only be used by developers}
   */
  contentCollection?: {
    items: (
      | ContentfulHero
      | ContentfulBlogPost
      | ContentfulCardGroup
      | ContentfulColumn
      | ContentfulCustomPageLayout
      | ContentfulFaqSection
      | ContentfulImageSection
      | ContentfulInteractiveMap
      | ContentfulLayoutContainer
      | ContentfulLeadForm
      | ContentfulLearningSection
      | ContentfulList
      | ContentfulPdf
      | ContentfulPlansSection
      | ContentfulSection
      | ContentfulSectionWithCardsAndCta
      | ContentfulTiledContentWithCards
      | ContentfulNumberOneSolarCompanySection
      | ContentfulTitledContent
      | ContentfulTitledContentWithCta
      | ContentfulTitledContentWithCtaAndImage
      | ContentfulVideoSection
      | ContentfulReference
    )[];
  };
  /** @modelberry
   * - {@name Footer}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-footer}
   */
  footer?: ContentfulFooter | ContentfulReference;
}
