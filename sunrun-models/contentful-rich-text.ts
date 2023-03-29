/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type richText}
 * - {@displayField title}
 * - {@name Rich Text}
 */
export interface ContentfulRichText {
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
   * - {@name Rich Text}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-14 enabledNodeTypes-heading-1-heading-2-heading-3-15 richText}
   */
  richText?: {
    json?: any;
  };
  /** @modelberry
   * - {@name Show Bottom Line}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId radio}
   * - {@validations in-yes-no}
   */
  showBottomLine: string;
}
