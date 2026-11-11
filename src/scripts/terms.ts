/** Word-meaning popups for <Term>. Loaded once by the Base layout. */
export function setupTerms() {
    const seen = new Set<string>();
    document.querySelectorAll<HTMLElement>('.term').forEach((term) => {
      const id = term.dataset.term!;
      if (seen.has(id)) term.classList.add('is-repeat');
      seen.add(id);
      const btn = term.querySelector<HTMLButtonElement>('.term-word')!;
      const tip = term.querySelector<HTMLElement>('.term-tip')!;
      const more = term.querySelector<HTMLAnchorElement>('.term-more')!;

      const place = () => {
        tip.style.setProperty('--shift', '0px');
        const r = tip.getBoundingClientRect();
        const overflow = r.right - (window.innerWidth - 16);
        if (overflow > 0) tip.style.setProperty('--shift', `${-overflow}px`);
      };
      const open = (v: boolean) => {
        term.classList.toggle('is-open', v);
        btn.setAttribute('aria-expanded', String(v));
        more.tabIndex = v ? 0 : -1;
        if (v) place();
      };
      btn.addEventListener('click', () => open(!term.classList.contains('is-open')));
      term.addEventListener('mouseenter', place);
      btn.addEventListener('focus', place);
      term.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') { open(false); btn.focus(); }
      });
      document.addEventListener('click', (e) => {
        if (!term.contains(e.target as Node)) open(false);
      });
    });
  }
