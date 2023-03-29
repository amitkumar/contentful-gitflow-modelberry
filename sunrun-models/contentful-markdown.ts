/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type markdown}
 * - {@displayField title}
 * - {@description Markdown Text Only}
 * - {@name Markdown}
 */
export interface ContentfulMarkdown {
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
   * - {@name Markdown}
   * - {@required true}
   * - {@type RichText}
   * - {@widgetId richTextEditor}
   * - {@validations enabledMarks-bold-italic-underline-54 enabledNodeTypes-heading-1-heading-2-heading-3-23 richText}
   */
  markdown: {
    json?: any;
  };
}
