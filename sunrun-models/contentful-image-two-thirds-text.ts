import { ContentfulButton } from "./contentful-button";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type imageTwoThirdsText}
 * - {@displayField heading}
 * - {@name Image (Two-Thirds) + Text}
 */
export interface ContentfulImageTwoThirdsText {
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
   * - {@name Heading}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  heading?: string;
  /** @modelberry
   * - {@name Body}
   * - {@type Text}
   * - {@widgetId markdown}
   */
  body?: string;
  /** @modelberry
   * - {@name CTAButton}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-button}
   */
  ctaButton?: ContentfulButton | ContentfulReference;
  /** @modelberry
   * - {@name Image}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  image: string;
  /** @modelberry
   * - {@name Image Alignment}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-Left-Right}
   */
  imageAlignment?: string;
  /** @modelberry
   * - {@name Text Background}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-PrimaryBlueGradient-OffWhite}
   */
  textBackground?: string;
  /** @modelberry
   * - {@name Height}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-Medium-Large}
   */
  height?: string;
}
