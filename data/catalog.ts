export type Product = {slug:string; category:string; name:string; description:string; image:string; handle:string; use:string};
export const products:Product[] = [
{slug:'everyday-d-cut',category:'D-Cut Bags',name:'The Everyday D-Cut',description:'A clean, lightweight silhouette for everyday retail.',image:'dcut',handle:'Die-cut',use:'Pharmacies, boutiques & retail'},
{slug:'signature-loop',category:'Loop Handle Bags',name:'The Signature Loop',description:'Comfortable handles. A little more room for your brand.',image:'loop',handle:'Loop',use:'Fashion, gifting & events'},
{slug:'structured-box',category:'Box Bags',name:'The Structured Box',description:'A generous gusset and a shape that stands out.',image:'hero',handle:'Loop',use:'Grocery, retail & takeaway'},
{slug:'home-storage',category:'Storage Bags',name:'The Home Organizer',description:'Thoughtful storage for blankets, bedding and more.',image:'storage',handle:'Side handles',use:'Home textiles & organization'},
{slug:'market-w-cut',category:'W-Cut Bags',name:'The Market W-Cut',description:'An easy-carry option for everyday shopping.',image:'wcut',handle:'Integrated',use:'Supermarkets & grocery'},
{slug:'brand-edition',category:'Custom Printed Bags',name:'The Brand Edition',description:'Your identity, printed on a bag made to your brief.',image:'printed',handle:'Loop',use:'Retail brands & launches'},
{slug:'event-tote',category:'Promotional Bags',name:'The Event Tote',description:'Carry your campaign beyond the event.',image:'promo',handle:'Loop',use:'Conferences & corporate campaigns'},
{slug:'retail-classic',category:'Retail Shopping Bags',name:'The Retail Classic',description:'Considered packaging for the things customers love.',image:'retail',handle:'Loop',use:'Fashion & department stores'}];
const extraProducts:Product[] = [
{slug:'studio-d-cut',category:'D-Cut Bags',name:'The Studio D-Cut',description:'A wider silhouette for neatly folded garments, stationery and boutique purchases.',image:'dcut-wide',handle:'Die-cut',use:'Boutiques, stationery & gift stores'},
{slug:'contrast-shopper',category:'Loop Handle Bags',name:'The Contrast Shopper',description:'A two-tone design with contrasting handles and side panels for a distinctive retail finish.',image:'contrast-tote',handle:'Loop',use:'Fashion retailers, launches & gifting'},
{slug:'quilt-keeper',category:'Storage Bags',name:'The Quilt Keeper',description:'A taller storage concept with a zip closure and a clear window to see what is inside.',image:'storage-tall',handle:'Side handles',use:'Bedding, home textiles & seasonal storage'},
{slug:'daily-grocery',category:'W-Cut Bags',name:'The Daily Grocery',description:'A simple unprinted carrier concept with integrated handles for everyday essentials.',image:'wcut-ivory',handle:'Integrated',use:'Grocers, convenience stores & everyday retail'}
];
products.push(...extraProducts);
export function matchesCategory(p:Product,category:string):boolean {
 if(p.category===category)return true;
 const retail=['signature-loop','structured-box','brand-edition','retail-classic','studio-d-cut','contrast-shopper','everyday-d-cut'];
 const branded=['brand-edition','retail-classic','signature-loop','studio-d-cut','contrast-shopper','event-tote','everyday-d-cut'];
 if(category==='Retail Shopping Bags')return retail.includes(p.slug);
 if(category==='Custom Printed Bags')return branded.includes(p.slug);
 if(category==='Promotional Bags')return ['event-tote','brand-edition','contrast-shopper','signature-loop','everyday-d-cut'].includes(p.slug);
 if(category==='Loop Handle Bags')return p.handle==='Loop';
 if(category==='Box Bags')return ['structured-box','retail-classic','contrast-shopper','signature-loop','brand-edition'].includes(p.slug);
 return false;
}
export const categorySlug=(name:string)=>name.toLowerCase().replaceAll(' ','-');
export const categories=Array.from(new Set(products.map(p=>p.category)));
export const faqs=[['Can you manufacture custom sizes?','Yes. Share the width, height and gusset you have in mind. Our team will confirm the material and construction options for your order.'],['Can you print our logo?','We support custom branding and artwork. Printing method, print area, colors and single- or double-sided availability are confirmed after reviewing your design.'],['What is the minimum order quantity?','Minimum quantities depend on the style, material and printing requirements. Request a quote for confirmation.'],['How much do the bags cost?','Each bulk order is priced to its specifications. Tell us your quantity, dimensions and design so we can prepare an accurate quotation.'],['Can I request a sample?','Discuss sample availability and any associated charges with our team before placing a bulk order.'],['What artwork should I provide?','A clear logo and your brand colors are a helpful starting point. Our team will confirm the final artwork format and approve the design with you before production.'],['How long does production take?','Lead times are confirmed for each order after the specifications, artwork and quantity are agreed.'],['Do you ship internationally?','Please include your destination in your inquiry. Delivery options, costs and international order availability are confirmed individually.'],['What are your payment terms?','Payment terms are included in your quotation and must be agreed before production.']];
export const phone='923219797021';
export const whatsapp='https://wa.me/'+phone;
