import { ContentfulTextSection } from "./contentful-text-section";
import { ContentfulImageSection } from "./contentful-image-section";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type twoColumnSection}
 * - {@displayField title}
 * - {@name Two Column Section}
 */
export interface ContentfulTwoColumnSection {
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
   * - {@name Column 1}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textSection-imageSection}
   */
  column1?:
    | ContentfulTextSection
    | ContentfulImageSection
    | ContentfulReference;
  /** @modelberry
   * - {@name Column 2}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   * - {@validations linkContentType-textSection-imageSection}
   */
  column2?:
    | ContentfulTextSection
    | ContentfulImageSection
    | ContentfulReference;
  /** @modelberry
   * - {@name Style Show Bottom Line}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  styleShowBottomLine: boolean;
}
