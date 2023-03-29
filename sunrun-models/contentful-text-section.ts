/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type textSection}
 * - {@displayField heading}
 * - {@name Text Section}
 */
export interface ContentfulTextSection {
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
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-41 enabledNodeTypes- richText}
   */
  body?: {
    json?: any;
  };
  /** @modelberry
   * - {@name CTA}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  cta?: string;
  /** @modelberry
   * - {@name Style Show Bottom Line}
   * - {@required true}
   * - {@type Boolean}
   * - {@widgetId boolean}
   */
  styleShowBottomLine: boolean;
}
