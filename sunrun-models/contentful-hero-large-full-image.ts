import { ContentfulButton } from "./contentful-button";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type heroLargeFullImage}
 * - {@displayField heading}
 * - {@name Hero (Large) Full Image}
 */
export interface ContentfulHeroLargeFullImage {
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
   * - {@name Background Image}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  backgroundImage?: string;
  /** @modelberry
   * - {@name MobileBackgroundImage}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  mobileBackgroundImage?: string;
  /** @modelberry
   * - {@name Heading}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  heading?: string;
  /** @modelberry
   * - {@name Description}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  description?: string;
  /** @modelberry
   * - {@name CTAButton}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-button}
   */
  ctaButton?: ContentfulButton | ContentfulReference;
}
