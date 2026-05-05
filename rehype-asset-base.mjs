/**
 * Prefixes root-relative <img src> in Markdown with Astro `base` so CMS paths
 * like /images/uploads/... work on GitHub project pages (/repo-name/...).
 */
export function rehypeAssetBase(options) {
  const base = options?.base ?? "/";
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");

  return (tree) => {
    const walk = (node) => {
      if (node?.type === "element" && node.tagName === "img" && node.properties?.src != null) {
        const src = String(node.properties.src);
        if (src.startsWith("/") && !src.startsWith("//")) {
          node.properties.src = `${normalizedBase}${src}`;
        }
      }
      for (const child of node?.children ?? []) walk(child);
    };
    walk(tree);
  };
}
