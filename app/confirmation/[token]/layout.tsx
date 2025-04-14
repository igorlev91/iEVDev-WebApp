import SEO from "@/components/SEO";
import { Metadata } from "next";

export const metadata: Metadata = SEO({
  title: "Email Confirmation | levdev",
  type: "website",
  additionalKeywords: ["confirmation email"],
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return children;
};
export default Layout;