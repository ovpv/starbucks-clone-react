import { Link } from "react-router-dom";

interface IFooterLink {
  url: string;
  text: string;
}

interface IFooterLinkSection {
  heading: string;
  links: IFooterLink[];
}

const footerLinks: IFooterLinkSection[] = [
  {
    heading: "About us",
    links: [
      {
        url: "",
        text: "About Us",
      },
      {
        url: "",
        text: "Starbucks for the Record",
      },
      {
        url: "",
        text: "Our Coffees",
      },
      {
        url: "",
        text: "Starbucks Stories & News",
      },
      {
        url: "",
        text: "Starbucks® Ready to Drink",
      },
      {
        url: "",
        text: "Foodservice Coffee",
      },
      {
        url: "",
        text: "Customer Service",
      },
      {
        url: "",
        text: "Tax Strategy 2024",
      },
    ],
  },
  {
    heading: "Careers",
    links: [
      {
        url: "",
        text: "Search Careers",
      },
    ],
  },
  {
    heading: "Social Impact",
    links: [
      {
        url: "",
        text: "Responsibility",
      },
    ],
  },
  {
    heading: "Starbucks Card",
    links: [
      {
        url: "",
        text: "Starbucks Card",
      },
      {
        url: "",
        text: "Starbucks Card Terms & Conditions",
      },
    ],
  },
];

export type IAppFooterLinkSectionProps = IFooterLinkSection;

export function FooterLink({ url, text }: IFooterLink) {
  return (
    <div className="py-2">
      <Link to={url}>{text}</Link>
    </div>
  );
}

export function AppFooterLinkSection({
  heading,
  links,
}: IAppFooterLinkSectionProps) {
  return (
    <nav>
      <h6 className="pb-2">{heading}</h6>
      {links.map((l) => (
        <FooterLink {...l} />
      ))}
    </nav>
  );
}

export default function AppFooterLinks() {
  return (
    <section className="appFooterLinks row px-4 py-3">
      {footerLinks.map(({ heading, links }) => (
        <div className="col-3 p-2">
          <AppFooterLinkSection heading={heading} links={links} />
        </div>
      ))}
    </section>
  );
}
