export interface Product {
  slug: string;
  category: 'platforms' | 'saas' | 'solutions' | 'enterprise';
  name: string; tagline: string; description: string; longDesc: string;
  heroImage: string;
  platforms: string[];
  features: { icon: string; title: string; desc: string }[];
  benefits: string[];
  screenshots: string[];
  pricing: { name: string; price: string; period: string; features: string[]; popular?: boolean; cta: string }[];
  downloads: { label: string; file: string; size: string; version: string; type: 'msi' | 'exe' | 'apk' | 'zip'; url: string; platform: string }[];
}
