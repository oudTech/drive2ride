/**
 * Shared responsive gutter, scaled across breakpoints so every section
 * gets consistent side margins from small laptops up through ultra-wide
 * displays instead of a single fixed jump.
 */
export const CONTAINER_PADDING =
  "px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-32";

/** Padding + centered max-width cap, for elements that aren't also full-bleed background hosts. */
export const CONTAINER = `mx-auto w-full max-w-350 ${CONTAINER_PADDING}`;
