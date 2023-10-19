export interface Page {
  slug: string;
  title: string;
  metadata: {
    headline: string;
    hero: {
      url: string;
      imgix_url: string;
    };
    content: string;
  };
}
