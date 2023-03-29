import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type hero}
 * - {@displayField title}
 * - {@description Hero for landing / Trust Section}
 * - {@name Background Image with Titled Content and CTA}
 */
export interface ContentfulHero {
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
   * - {@name Img}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  img?: string;
  /** @modelberry
   * - {@name Content with CTA}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   */
  contentWithCta?: ContentfulReference;
  /** @modelberry
   * - {@name Image Side}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  imageSide?: boolean;
  /** @modelberry
   * - {@name Variant}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   * - {@validations in-ImagewithTextOverlay-TextNexttoImage}
   */
  variant?: string;
}
