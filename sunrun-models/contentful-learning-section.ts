import { ContentfulTitledContentWithCta } from "./contentful-titled-content-with-cta";
import { ContentfulReference } from "./contentful-reference";
import { ContentfulTitledContent } from "./contentful-titled-content";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type learningSection}
 * - {@displayField title}
 * - {@description A single section that is on the learning page}
 * - {@name Learning Section}
 */
export interface ContentfulLearningSection {
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
   * - {@name Image}
   * - {@required true}
   * - {@type Object}
   * - {@widgetId 5wHGALSJtz7y2EQOLfGhKH}
   * - {@widgetNamespace app}
   */
  image: string;
  /** @modelberry
   * - {@name Main content}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-titledContentWithCta}
   */
  mainContent: ContentfulTitledContentWithCta | ContentfulReference;
  /** @modelberry
   * - {@name Details Section}
   * - {@required true}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-titledContent}
   * - {@widgetId entryLinksEditor}
   */
  detailsSectionCollection: {
    items: (ContentfulTitledContent | ContentfulReference)[];
  };
  /** @modelberry
   * - {@name Has Down Arrows}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hasDownArrows?: boolean;
  /** @modelberry
   * - {@name Has Bullets}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  hasBullets?: boolean;
}
