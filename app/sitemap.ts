import {products,categories,categorySlug} from '@/data/catalog';
export default function sitemap(){return ['','products','custom-printing','industries','factory','about','request-quote','contact','faq','privacy-policy','terms',...products.map(p=>'products/'+p.slug),...categories.map(c=>'products/'+categorySlug(c))].map(path=>({url:'https://bags-hub-studio.valid-squid-3659.chatgpt.site/'+path}));}
