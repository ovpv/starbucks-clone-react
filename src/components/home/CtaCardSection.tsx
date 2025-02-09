import { Link } from "react-router-dom";

export interface ICtaCardData {
  img: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}

const CtaCardData: ICtaCardData[] = [
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c22_featured_card_531x273/public/2025-01/3469%20UK%20WIN25%20Web%20Banners%20-%20C22%20LTO%20Banner%20727x373px_v01.png?h=aec870e8&amp;itok=BhZ99vG8",
    title: "Meet your new favourites!",
    text: "Elevate your daily ritual with the smooth Pistachio Velvet Latte. Perfect for cosy mornings. Bliss. Discover the perfect pistachio latte for you!",
    link: "/order",
    linkText: "Order now",
  },
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c22_featured_card_531x273/public/2025-01/3469%20UK%20WIN25%20Web%20Banners%20-%20C22%20Delivers%20Banner%20727x373px_v07.png?h=aec870e8&itok=DGHeaC1O",
    title: "Starbucks® Delivers",
    text: "Get your favourite winter drink delivered straight to your door. Order with Uber Eats, Just Eat or Deliveroo.",
    link: "/delivers",
    linkText: "Order now",
  },
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c22_featured_card_531x273/public/2022-03/About%20us%20-%20Starbucks%20%281%29.jpg?h=78ab6d9e&itok=EjamtVRd",
    title: "About Us",
    text: "Find out more about our company and heritage.",
    link: "/about-us",
    linkText: "Find out more",
  },
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c22_featured_card_531x273/public/2022-03/Copy-of-Headers-for-Starbucks-Stories-EMEA-7.jpg?h=14cd3cd6&itok=meyuBbY9",
    title: "Starbucks Stories",
    text: "Keep up to date with our latest stories and news.",
    link: "https://stories.starbucks.com/emea/",
    linkText: "Find out more",
  },
];

export interface ICtaCardProps extends ICtaCardData {
  invert?: boolean;
}

export function CtaCard({
  img,
  title,
  text,
  link,
  linkText,
  invert,
}: ICtaCardProps) {
  return (
    <div className={`col-6 ctaCard ${invert ? "invert" : ""}`}>
      <div className="imgContainer">
        <img
          data-image=""
          src={img}
          alt="Pistachio is here, with a twist"
          width="540"
          height="277"
        />
      </div>
      <div className="p-3">
        <h4 className="pb-2">{title}</h4>
        <p className="pb-3">{text}</p>
        <div className="pb-3">
          <Link to={link ?? "#"}>{linkText}</Link>
        </div>
      </div>
    </div>
  );
}

export default function CtaCardSection() {
  return (
    <section className="row g-3 ctaCardSection">
      {CtaCardData.map((c, i) => (
        <CtaCard {...c} invert={i === 1 || i === 2} />
      ))}
    </section>
  );
}
