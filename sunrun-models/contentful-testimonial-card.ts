/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type testimonialCard}
 * - {@displayField name}
 * - {@description Card content for testimonial section}
 * - {@name Testimonial Card}
 */
export interface ContentfulTestimonialCard {
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
   * - {@name Name}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  name: string;
  /** @modelberry
   * - {@name City}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  city?: string;
  /** @modelberry
   * - {@name Quote}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  quote: string;
}
