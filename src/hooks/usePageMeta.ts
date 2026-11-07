import { useEffect } from 'react';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    if (title === 'Mithai Ghar' || title.startsWith('Mithai Ghar')) {
      document.title = 'Mithai Ghar';
    } else {
      document.title = `${title} · Mithai Ghar`;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title === 'Mithai Ghar' ? 'Mithai Ghar' : `${title} · Mithai Ghar`);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description]);
}
