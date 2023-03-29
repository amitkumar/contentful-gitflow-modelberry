import { ContentfulTestimonialCard } from "./contentful-testimonial-card";
import { ContentfulReference } from "./contentful-reference";
/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type testimonialCarousel}
 * - {@displayField title}
 * - {@name Testimonial Carousel}
 */
export interface ContentfulTestimonialCarousel {
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
   * - {@name Testimonials}
   * - {@type Array}
   * - {@itemsType Link}
   * - {@itemsLinkType Entry}
   * - {@itemsValidations linkContentType-testimonialCard}
   * - {@widgetId entryLinksEditor}
   */
  testimonialsCollection?: {
    items: (ContentfulTestimonialCard | ContentfulReference)[];
  };
}
