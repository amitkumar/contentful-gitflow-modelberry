import { ModelberryPluginData } from "@modelberry/plugin-contentful";
export * from "./contentful-faqinfo-accordion";
export * from "./contentful-card";
export * from "./contentful-section";
export * from "./contentful-image-grid4col-with-description";
export * from "./contentful-image-with-overlay-grid";
export * from "./contentful-hero-two-thirds-image";
export * from "./contentful-image-grid3col-with-description";
export * from "./contentful-plans-comparison";
export * from "./contentful-title-content";
export * from "./contentful-rich-text";
export * from "./contentful-lead-form-container";
export * from "./contentful-image-two-thirds-text";
export * from "./contentful-hero-small-two-thirds-image";
export * from "./contentful-full-width-video";
export * from "./contentful-state-solar-incentives";
export * from "./contentful-hero-small";
export * from "./contentful-button";
export * from "./contentful-hero-large-full-image";
export * from "./contentful-one-third-image-with-copy";
export * from "./contentful-testimonial-carousel";
export * from "./contentful-hero-section";
export * from "./contentful-three-colum-section";
export * from "./contentful-comparison-table";
export * from "./contentful-benefit-list";
export * from "./contentful-page";
export * from "./contentful-two-column-list";
export * from "./contentful-interactive-map";
export * from "./contentful-header";
export * from "./contentful-text-section";
export * from "./contentful-two-column-section";
export * from "./contentful-two-column-table";
export * from "./contentful-geo-state-stats-section";
export * from "./contentful-testimonials-section";
export * from "./contentful-testimonial-card";
export * from "./contentful-contact-page-interest";
export * from "./contentful-generic-page";
export * from "./contentful-titled-content";
export * from "./contentful-lead-form";
export * from "./contentful-cta";
export * from "./contentful-column";
export * from "./contentful-info-modal";
export * from "./contentful-markdown";
export * from "./contentful-layout-container";
export * from "./contentful-tiled-content-with-cards";
export * from "./contentful-image-section";
export * from "./contentful-hero";
export * from "./contentful-faq-section";
export * from "./contentful-faq";
export * from "./contentful-seo-fields";
export * from "./contentful-plans-section";
export * from "./contentful-plan";
export * from "./contentful-number-one-solar-company-section";
export * from "./contentful-list";
export * from "./contentful-pdf";
export * from "./contentful-learning-section";
export * from "./contentful-footer";
export * from "./contentful-menu";
export * from "./contentful-lead-created-modal";
export * from "./contentful-titled-content-with-cta-and-image";
export * from "./contentful-section-with-cards-and-cta";
export * from "./contentful-video-section";
export * from "./contentful-radio-button-form-input";
export * from "./contentful-input-option";
export * from "./contentful-company-feat-card";
export * from "./contentful-text-form-input";
export * from "./contentful-titled-content-with-cta";
export * from "./contentful-social-media-link";
export * from "./contentful-card-group";
export const modelberryPluginData: ModelberryPluginData = {
  "@modelberry/plugin-contentful": {
    validations: {
      "linkContentType-cardGroup": { linkContentType: ["cardGroup"] },
      "in-OffWhite-White": { in: ["OffWhite", "White"] },
      "linkContentType-cta": { linkContentType: ["cta"] },
      "enabledMarks-bold-italic-underline": {
        enabledMarks: ["bold", "italic", "underline"],
        message: "Only bold, italic, and underline marks are allowed",
      },
      "enabledNodeTypes-heading-2-heading-3-heading-4": {
        enabledNodeTypes: [
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],
        message:
          "Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      richText: { nodes: {} },
      "linkContentType-leadFormContainer-interactiveMap-testimonialCarousel": {
        linkContentType: [
          "leadFormContainer",
          "interactiveMap",
          "testimonialCarousel",
          "twoColumnList",
          "oneThirdImageWithCopy",
          "heroLargeFullImage",
          "stateSolarIncentives",
          "fullWidthVideo",
          "heroSmallTwoThirdsImage",
          "imageTwoThirdsText",
          "richText",
          "twoColumnSection",
          "faqinfoAccordion",
          "twoColumnTable",
          "heroTwoThirdsImage",
          "plansComparison",
          "imageGrid3ColWithDescription",
          "imageGrid4ColWithDescription",
        ],
      },
      "in-OffWhite-PrimaryBlue-Transparent": {
        in: ["OffWhite", "PrimaryBlue", "Transparent"],
      },
      "linkContentType-card": { linkContentType: ["card"] },
      "linkContentType-titledContentWithImage": {
        linkContentType: ["titledContentWithImage"],
      },
      "enabledNodeTypes-heading-1-heading-2-heading-3": {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],
      },
      "enabledMarks-bold-italic-underline-12": {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
        ],
      },
      "linkContentType-benefitList": { linkContentType: ["benefitList"] },
      "enabledMarks-bold-italic-underline-14": {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "code",
          "superscript",
          "subscript",
        ],
        message:
          "Only bold, italic, underline, code, superscript, and subscript marks are allowed",
      },
      "enabledNodeTypes-heading-1-heading-2-heading-3-15": {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "hr",
          "blockquote",
          "hyperlink",
        ],
        message:
          "Only heading 1, heading 2, heading 3, horizontal rule, quote, and link to Url nodes are allowed",
      },
      "in-yes-no": { in: ["yes", "no"] },
      "linkContentType-button": { linkContentType: ["button"] },
      "in-Left-Right": { in: ["Left", "Right"] },
      "in-PrimaryBlueGradient-OffWhite": {
        in: ["PrimaryBlueGradient", "OffWhite"],
      },
      "in-Medium-Large": { in: ["Medium", "Large"] },
      "in-left-right": { in: ["left", "right"] },
      "size-minnull-max5": { size: { min: null, max: 5 } },
      "enabledNodeTypes-heading-1-heading-2-heading-3-23": {
        enabledNodeTypes: [
          "heading-1",
          "heading-2",
          "heading-3",
          "heading-4",
          "heading-5",
          "heading-6",
          "ordered-list",
          "unordered-list",
          "hr",
          "blockquote",
          "embedded-entry-block",
          "embedded-asset-block",
          "table",
          "hyperlink",
          "entry-hyperlink",
          "asset-hyperlink",
          "embedded-entry-inline",
        ],
        message:
          "Only heading 1, heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, block entry, asset, table, link to Url, link to entry, link to asset, and inline entry nodes are allowed",
      },
      "in-PrimaryBluePill-OffWhitePill-OffWhiteCircleArrow": {
        in: [
          "PrimaryBluePill",
          "OffWhitePill",
          "OffWhiteCircleArrow",
          "OffWhitePillPrimaryBlueOutline",
        ],
      },
      "size-minundefined-max5000": { size: { max: 5000 } },
      "linkContentType-imageSection": { linkContentType: ["imageSection"] },
      "in-top-side": { in: ["top", "side"] },
      "linkContentType-testimonialCard": {
        linkContentType: ["testimonialCard"],
      },
      "in-cms.sunrun.com-cms2.sunrun.com-quote.sunrun.com": {
        in: ["cms.sunrun.com", "cms2.sunrun.com", "quote.sunrun.com"],
      },
      "regexp-1": { regexp: { pattern: "^\\/\\S*$", flags: "" } },
      "linkContentType-seoFields": { linkContentType: ["seoFields"] },
      "linkContentType-header": { linkContentType: ["header"] },
      "linkContentType-section": { linkContentType: ["section"] },
      "linkContentType-footer": { linkContentType: ["footer"] },
      "linkContentType-oneThirdImageWithCopy": {
        linkContentType: ["oneThirdImageWithCopy"],
      },
      "size-min1-maxundefined": { size: { min: 1 } },
      "in-ShamrockGreen-CyanBlue-DarkBlue": {
        in: ["Shamrock Green", "Cyan Blue", "Dark Blue", "Light Blue"],
      },
      "unique-true": { unique: true },
      "linkContentType-cta-menu": { linkContentType: ["cta", "menu"] },
      "in-LightOverlay-DarkOverlay-PrimaryBlue": {
        in: ["Light Overlay", "Dark Overlay", "Primary Blue"],
      },
      "enabledMarks-bold-italic-underline-41": {
        enabledMarks: [
          "bold",
          "italic",
          "underline",
          "superscript",
          "subscript",
        ],
        message:
          "Only bold, italic, underline, superscript, and subscript marks are allowed",
      },
      "enabledNodeTypes-": {
        enabledNodeTypes: [],
        message: "Nodes are not allowed",
      },
      "linkContentType-textSection-imageSection": {
        linkContentType: ["textSection", "imageSection"],
      },
      "linkContentType-titleContent": { linkContentType: ["titleContent"] },
      "regexp-2": { regexp: { pattern: "^\\/\\S*$", flags: "" } },
      "linkContentType-hero-blogPost-cardGroup": {
        linkContentType: [
          "hero",
          "blogPost",
          "cardGroup",
          "column",
          "customPageLayout",
          "faqSection",
          "imageSection",
          "interactiveMap",
          "layoutContainer",
          "leadForm",
          "learningSection",
          "list",
          "pdf",
          "plansSection",
          "section",
          "sectionWithCardsAndCta",
          "tiledContentWithCards",
          "numberOneSolarCompanySection",
          "titledContent",
          "titledContentWithCta",
          "titledContentWithCtaAndImage",
          "videoSection",
        ],
      },
      "in-H1-H2-H3": { in: ["H1", "H2", "H3"] },
      "linkContentType-textFormInput": { linkContentType: ["textFormInput"] },
      "linkContentType-radioButtonFormInput": {
        linkContentType: ["radioButtonFormInput"],
      },
      "linkContentType-leadCreatedModal": {
        linkContentType: ["leadCreatedModal"],
      },
      "regexp-3": {
        regexp: {
          pattern:
            "^((ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: "",
        },
      },
      "in-Button-Link": { in: ["Button", "Link"] },
      "in-Top-Center-Bottom": { in: ["Top", "Center", "Bottom", "Even"] },
      "enabledMarks-bold-italic-underline-54": {
        enabledMarks: ["bold", "italic", "underline", "code"],
        message: "Only bold, italic, underline, and code marks are allowed",
      },
      "in-row-column": { in: ["row", "column"] },
      "in-start-end-center": {
        in: ["start", "end", "center", "space-between", "space-around"],
      },
      "in-top-bottom-center": { in: ["top", "bottom", "center", "stretch"] },
      "in-wrap-no-wrap": { in: ["wrap", "no-wrap"] },
      "linkContentType-titledContent": { linkContentType: ["titledContent"] },
      "range-min1-max4": { range: { min: 1, max: 4 } },
      "size-minundefined-max1": { size: { max: 1 } },
      "in-ImagewithTextOverlay-TextNexttoImage": {
        in: ["Image with Text Overlay", "Text Next to Image"],
      },
      "linkContentType-faq": { linkContentType: ["faq"] },
      "linkContentType-plan": { linkContentType: ["plan"] },
      "linkContentType-companyFeatCard-testimonialCard-titledContentWithCta": {
        linkContentType: [
          "companyFeatCard",
          "testimonialCard",
          "titledContentWithCta",
        ],
      },
      "linkContentType-titledContentWithCta": {
        linkContentType: ["titledContentWithCta"],
      },
      "linkContentType-menu": { linkContentType: ["menu"] },
      "linkContentType-socialMediaLink": {
        linkContentType: ["socialMediaLink"],
      },
      "size-min1-max1": { size: { min: 1, max: 1 } },
      "linkContentType-titledContentWithCtaAndImage": {
        linkContentType: ["titledContentWithCtaAndImage"],
      },
      "linkContentType-inputOption": { linkContentType: ["inputOption"] },
      "regexp-4": {
        regexp: {
          pattern:
            "^((ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
          flags: "",
        },
      },
    },
  },
};
