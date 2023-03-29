import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type titledContentWithCta}
 * - {@displayField title}
 * - {@description Header Content with a sub header to and a CTA}
 * - {@name Titled Content with CTA}
 */
export interface ContentfulTitledContentWithCta {
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
   * - {@name Sub Header}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-54 enabledNodeTypes-heading-1-heading-2-heading-3-23 richText}
   */
  subHeader?: {
    json?: any;
  };
  /** @modelberry
   * - {@name CTA}
   * - {@required true}
   * - {@type Link}
   * - {@linkType Entry}
   * - {@widgetId entryLinkEditor}
   */
  cta: ContentfulReference;
}
