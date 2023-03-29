import { ContentfulImageSection } from "./contentful-image-section";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulCta } from "./contentful-cta";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type oneThirdImageWithCopy}
 * - {@displayField heading}
 * - {@name One Third Image with Copy}
 */
export interface ContentfulOneThirdImageWithCopy {
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
   * - {@required true}
   * - {@type Text}
   * - {@widgetId multipleLine}
   * - {@validations size-minundefined-max5000}
   */
  body: string;
  /** @modelberry
   * - {@name Image}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-imageSection}
   */
  image: ContentfulImageSection | ContentfulReference;
  /** @modelberry
   * - {@name CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-cta}
   */
  cta?: ContentfulCta | ContentfulReference;
  /** @modelberry
   * - {@name Image Mobile Position}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-top-side}
   */
  imageMobilePosition: string;
  /** @modelberry
   * - {@name Image Alignment}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-left-right}
   */
  imageAlignment: string;
}
