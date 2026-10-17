import type { Metadata } from 'next';
import './globals.css';
import {Header,Footer} from '@/components/bags/layout';
export const metadata:Metadata={metadataBase:new URL('https://bags-hub-studio.valid-squid-3659.chatgpt.site'),title:{default:'Bags Hub — Custom Non-Woven Bags, Made for Your Brand',template:'%s | Bags Hub'},description:'In-house non-woven bag manufacturing, custom printing and bulk packaging for your business.',openGraph:{title:'Bags Hub — Made for Your Brand',description:'Custom non-woven bags. In-house manufacturing. Thoughtfully made.',images:['/images/hero.webp']}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>}
