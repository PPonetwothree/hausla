/**
 * Rehype plugin: prefix root-relative links in Markdown ("/find-care") with the
 * site base ("/hausla/find-care"), so content files never hard-code the base.
 * External links also get rel="noopener".
 */
export default function rehypeBaseLinks({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      const href = String(node.properties.href ?? '');
      if (prefix && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(prefix + '/')) {
        node.properties.href = prefix + href;
      } else if (/^https?:\/\//.test(href)) {
        node.properties.rel = ['noopener'];
      }
    }
    (node.children ?? []).forEach(walk);
  };
  return (tree) => walk(tree);
}
