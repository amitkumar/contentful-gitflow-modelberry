import { ComponentSys } from "./ComponentSys";

/** @modelberry
 * - {@plugin "@modelberry/plugin-contentful"}
 * - {@type cta}
 * - {@displayField text}
 * - {@description CTA}
 * - {@name cta}
 */
export interface CTA {
  /** @modelberry
   * - {@name Title}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId singleLine}
   */
  text: string;
  /** @modelberry
   * - {@name Type}
   * - {@required true}
   * - {@type Symbol}
   * - {@widgetId dropdown}
   */
  type?: "Link" | "Button";

  /** @modelberry
   * - {@name URL}
   * - {@required true}
   * - {@type Symbol}
   */
  url: string;
}
