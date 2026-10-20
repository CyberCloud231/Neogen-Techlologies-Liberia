import { ContactUs } from './contact-us/contact-us';
import { Blogs } from './blogs/blogs';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { ProductTemplates } from './Pages/Templates/product-templates/product-templates';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'blogs', component: Blogs },
  { path: 'contact', component: ContactUs },

  // ONE TEMPLATE FOR ALL PRODUCTS - THIS FIXES ALL YOUR FOOTER & HEADER LINKS
  { path: 'platforms/:slug', component: ProductTemplates },
  { path: 'platforms', component: ProductTemplates },

  // Solutions from footer/header
  { path: 'web-dev', component: ProductTemplates },
  { path: 'app-dev', component: ProductTemplates },
  { path: 'cloud', component: ProductTemplates },
  { path: 'consulting', component: ProductTemplates },
  { path: 'services', component: ProductTemplates },
  { path: 'erp', component: ProductTemplates },
  { path: 'crm', component: ProductTemplates },

  // Other footer links - create placeholder components later, for now redirect to home
  { path: 'projects', component: Home },
  { path: 'careers', component: Home },
  { path: 'developers', component: Home },
  { path: 'developers/docs', component: Home },
  { path: 'developers/api', component: Home },
  { path: 'privacy', component: Home },
  { path: 'terms', component: Home },
  { path: 'faq', component: Home },
];
