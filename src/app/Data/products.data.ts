import { Product } from '../Models/product.model';

const makePricing = (productName: string) => [
  { name: 'Starter', price: '$29', period: '/mo', features: [`${productName} Basic`, '1 User', 'Email Support', '5GB Storage'], cta: 'Start Free' },
  { name: 'Growth', price: '$99', period: '/mo', features: [`${productName} Pro`, '10 Users', '24/7 Support', '100GB Storage', 'API Access'], popular: true, cta: 'Get Started' },
  { name: 'Enterprise', price: 'Custom', period: '', features: [`${productName} Enterprise`, 'Unlimited Users', 'Dedicated Manager', 'On-Premise', 'Custom SLA'], cta: 'Contact Sales' }
];

const mockFeatures = [
  { icon: 'bi-shield-check', title: 'Secure & Compliant', desc: 'Bank-grade security.' },
  { icon: 'bi-lightning', title: 'Fast & Reliable', desc: '99.9% uptime.' },
  { icon: 'bi-phone', title: 'Mobile Ready', desc: 'Works everywhere.' }
];

export const PRODUCTS: Product[] = [
  {
    slug: 'neogenpay', category: 'platforms', name: 'NeogenPay', tagline: 'Liberia’s Secure Payment Gateway',
    description: 'Accept mobile money, cards and bank transfers with one API.', longDesc: 'Built for Liberia with MTN, Orange Money, cards. Developer friendly API.',
    heroImage: '/IMAGES/Neogen API Developer Ecosystem Banner.png', platforms: ['Web','API','Desktop'], screenshots: ['/IMAGES/Neogen API Developer Ecosystem Banner.png'],
    features: mockFeatures, benefits: ['Instant settlement','99.9% uptime'],
    pricing: [{name:'Starter',price:'$29',period:'/mo',features:['10k transactions','Mobile Money','Email support'],cta:'Start Free'},{name:'Growth',price:'$99',period:'/mo',features:['100k transactions','All gateways','24/7 support'],popular:true,cta:'Get Started'},{name:'Enterprise',price:'Custom',period:'',features:['Unlimited','Dedicated manager','On-premise'],cta:'Contact Sales'}],
    downloads: [{label:'Windows MSI',file:'Setup.msi',size:'48 MB',version:'v2.1.0',type:'msi',url:'#',platform:'Windows'},{label:'POS EXE',file:'POS.exe',size:'72 MB',version:'v2.1.0',type:'exe',url:'#',platform:'Windows'}]
  },
  {
    slug: 'neosmartcampus', category: 'saas', name: 'NeoSmartCampus', tagline: 'Smart School Management',
    description: 'Complete school ERP.', longDesc: 'Admissions, fees, attendance, exams, parent app.',
    heroImage: '/IMAGES/NeoSmartCampus School Management.png', platforms: ['Web','Desktop','Android'], screenshots: ['/IMAGES/NeoSmartCampus School Management.png'],
    features: mockFeatures, benefits: ['MoE compliant'],
    pricing: [{name:'Basic',price:'$49',period:'/mo',features:['500 students','Fees & Attendance','Email support'],cta:'Start'},{name:'Pro',price:'$129',period:'/mo',features:['Unlimited students','Exams & E-learning','Parent App'],popular:true,cta:'Start Trial'},{name:'Enterprise',price:'Custom',period:'',features:['Multi-campus','Custom domain','On-premise'],cta:'Contact'}],
    downloads: [{label:'School MSI',file:'Campus.msi',size:'156 MB',version:'v4.0.2',type:'msi',url:'#',platform:'Windows'}]
  },
  { slug: 'palmhub-pos', category: 'saas', name: 'PalmHub POS', tagline: 'Retail & Restaurant POS', description: 'Fast billing.', longDesc: 'POS for shops.', heroImage: '/IMAGES/Neogen Technologies Cloud City.png', platforms: ['Desktop','Android'], screenshots: [], features: mockFeatures, benefits: ['Offline'], pricing: makePricing('PalmHub POS'), downloads: [{label:'POS MSI',file:'PalmHub.msi',size:'89 MB',version:'v3.5',type:'msi',url:'#',platform:'Windows'}] },
  { slug: 'palmmart', category: 'saas', name: 'PalmMart', tagline: 'Ecommerce for PalmHub', description: 'Online store.', longDesc: 'Linked to POS.', heroImage: '', platforms: ['Web','Android'], screenshots: [], features: mockFeatures, benefits: ['No commission'], pricing: makePricing('PalmMart'), downloads: [] },
  { slug: 'neosmartid', category: 'saas', name: 'NeoSmartID', tagline: 'GovDigitalID - National ID', description: 'National ID.', longDesc: 'Biometric ID.', heroImage: '/IMAGES/Neogen Technologies Liberia Data Centre.png', platforms: ['Desktop','Web'], screenshots: [], features: mockFeatures, benefits: ['Govt grade security'], pricing: makePricing('NeoSmartID'), downloads: [] },
  { slug: 'neocare', category: 'saas', name: 'NeoCare HMS', tagline: 'Hospital Management', description: 'HMS.', longDesc: 'HMS for clinics.', heroImage: '/IMAGES/Neogen Technologies Liberia Holographic Office.png', platforms: ['Web','Desktop','Android'], screenshots: [], features: mockFeatures, benefits: ['MOH compliant'], pricing: makePricing('NeoCare HMS'), downloads: [] },
  { slug: 'neonotify', category: 'platforms', name: 'NeogenNotify', tagline: 'Omni-Channel Comms', description: 'SMS, WhatsApp, Email.', longDesc: 'Bulk SMS, WhatsApp API.', heroImage: '', platforms: ['Web','API'], features: mockFeatures, benefits: ['High delivery'], screenshots: [], pricing: makePricing('NeogenNotify'), downloads: [] },
  { slug: 'neodrive', category: 'platforms', name: 'NeoDrive', tagline: 'Secure Cloud Storage', description: 'Encrypted storage.', longDesc: 'Encrypted storage locally.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['Local residency'], screenshots: [], pricing: makePricing('NeoDrive'), downloads: [] },
  { slug: 'web-dev', category: 'solutions', name: 'Web Development', tagline: 'Custom Web Apps', description: 'Fast web apps.', longDesc: 'Angular, React, Node.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['SEO ready'], screenshots: [], pricing: makePricing('Web Development'), downloads: [] },
  { slug: 'app-dev', category: 'solutions', name: 'App Development', tagline: 'Mobile Apps', description: 'iOS & Android.', longDesc: 'Flutter, Native.', heroImage: '', platforms: ['Android'], features: mockFeatures, benefits: ['Offline support'], screenshots: [], pricing: makePricing('App Development'), downloads: [] },
  { slug: 'cloud', category: 'solutions', name: 'Cloud Solutions', tagline: 'Liberian Cloud', description: 'Cloud infra.', longDesc: 'VPS, Storage.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['Local data center'], screenshots: [], pricing: makePricing('Cloud Solutions'), downloads: [] },
  { slug: 'erp', category: 'enterprise', name: 'ERP Systems', tagline: 'Enterprise ERP', description: 'Run entire business.', longDesc: 'ERP, CRM, HRM, Accounting.', heroImage: '', platforms: ['Web','Desktop'], features: mockFeatures, benefits: ['All-in-one'], screenshots: [], pricing: makePricing('ERP Systems'), downloads: [] },
  { slug: 'crm', category: 'enterprise', name: 'CRM Solutions', tagline: 'Customer Management', description: 'Leads & customers.', longDesc: 'Complete CRM.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['Lead tracking'], screenshots: [], pricing: makePricing('CRM Solutions'), downloads: [] },
  { slug: 'services', category: 'enterprise', name: 'All Services', tagline: 'Platform Integration', description: 'All Neogen services.', longDesc: 'We integrate all platforms.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['One vendor'], screenshots: [], pricing: makePricing('Neogen Services'), downloads: [] },
  { slug: 'consulting', category: 'solutions', name: 'IT Consulting', tagline: 'Expert IT Consulting', description: 'Advisory & Strategy.', longDesc: 'IT strategy.', heroImage: '', platforms: ['Web'], features: mockFeatures, benefits: ['Expert team'], screenshots: [], pricing: makePricing('IT Consulting'), downloads: [] },


  // For all products with empty heroImage, replace with:
// heroImage: '/IMAGES/Neogen Technologies Cloud City.png',
// Example:
// { slug: 'palmmart', heroImage: '/IMAGES/Neogen Technologies Cloud City.png', ... },
// { slug: 'neosmartid', heroImage: '/IMAGES/Neogen Technologies Liberia Data Centre.png', ... },
// { slug: 'neocare', heroImage: '/IMAGES/Neogen Technologies Liberia Holographic Office.png', ... },
// { slug: 'neonotify', heroImage: '/IMAGES/Neogen API Developer Ecosystem Banner.png', ... },
// { slug: 'neodrive', heroImage: '/IMAGES/Neogen Technologies Cloud City copy.png', ... },
// { slug: 'web-dev', heroImage: '/IMAGES/Neogen Technologies Dashboard Presentation.png', ... },
// { slug: 'app-dev', heroImage: '/IMAGES/Neogen Technologies Cloud City.png', ... },
// { slug: 'cloud', heroImage: '/IMAGES/Neogen Technologies Liberia Data Centre.png', ... },
// { slug: 'erp', heroImage: '/IMAGES/Neogen Technologies Dashboard Presentation.png', ... },
// { slug: 'crm', heroImage: '/IMAGES/Neogen API Developer Ecosystem Banner.png', ... },
];
