export interface Product {
  slug: string;
  category: 'platforms' | 'solutions' | 'enterprise' | 'developers';
  name: string;
  tagline: string;
  description: string;
  features: { icon: string; title: string; desc: string }[];
  benefits: string[];
}

export const PRODUCTS: Product[] = [
  {
    slug: 'neogenpay',
    category: 'platforms',
    name: 'NeogenPay',
    tagline: 'Liberia’s Secure Payment Gateway',
    description: 'Accept mobile money, cards and bank transfers with one API.',
    features: [
      { icon: 'bi-shield-check', title: 'Secure', desc: 'Bank-grade encryption.' },
      { icon: 'bi-phone', title: 'Mobile Money', desc: 'MTN, Orange Money integrated.' }
    ],
    benefits: ['Instant settlement', '99.9% Uptime']
  },
  {
    slug: 'neonotify',
    category: 'platforms',
    name: 'NeogenNotify',
    tagline: 'Omni-Channel Communications',
    description: 'SMS, WhatsApp, Email from one dashboard.',
    features: [
      { icon: 'bi-chat-dots', title: 'Bulk SMS', desc: 'High deliverability.' },
      { icon: 'bi-whatsapp', title: 'WhatsApp API', desc: 'Verified business messaging.' }
    ],
    benefits: ['High delivery rate', 'Campaign analytics']
  },
  {
    slug: 'neodrive',
    category: 'platforms',
    name: 'NeoDrive',
    tagline: 'Secure Cloud Storage',
    description: 'Encrypted storage locally in Liberia.',
    features: [
      { icon: 'bi-cloud-arrow-up', title: 'Encrypted', desc: 'End-to-end encrypted.' },
      { icon: 'bi-share', title: 'Sharing', desc: 'Secure team sharing.' }
    ],
    benefits: ['Local residency', 'Fast access']
  },
  { slug: 'web-dev', category: 'solutions', name: 'Web Development', tagline: 'Custom Web Apps', description: 'Fast, secure web apps.', features: [], benefits: [] },
  { slug: 'app-dev', category: 'solutions', name: 'App Development', tagline: 'Mobile Apps', description: 'iOS & Android apps.', features: [], benefits: [] },
  { slug: 'cloud', category: 'solutions', name: 'Cloud Solutions', tagline: 'Liberian Cloud', description: 'Cloud infrastructure.', features: [], benefits: [] },
  { slug: 'erp', category: 'enterprise', name: 'ERP Systems', tagline: 'Enterprise Systems', description: 'ERP/CRM platform.', features: [], benefits: [] },
  { slug: 'crm', category: 'enterprise', name: 'CRM Solutions', tagline: 'Customer Management', description: 'CRM platform.', features: [], benefits: [] }
];
