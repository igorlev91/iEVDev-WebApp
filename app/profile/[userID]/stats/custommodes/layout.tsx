import SEO from '@/components/SEO';
import { Metadata } from 'next';
export const metadata: Metadata = SEO({
  title: 'Custom Modes | Stats',
  type: 'website',
  url: "/profile"
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
