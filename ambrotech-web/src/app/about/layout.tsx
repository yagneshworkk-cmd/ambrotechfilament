import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Ambrotech Filaments | Premium Monofilament Manufacturer",
  description:
    "Learn about Ambrotech Filaments — ISO 9001:2015 certified manufacturer of polyester & nylon monofilament yarn since 2016. Two manufacturing plants in Bhavnagar, Gujarat.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
