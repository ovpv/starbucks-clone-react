import { Link } from "react-router-dom";

export interface SayHelloSectionProps {
  img: string;
  alt: string;
  title: string;
  text: string;
}

const SayHelloData: SayHelloSectionProps[] = [
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c09_items_list_192x192/public/2025-01/3468%20UK%20AH%20MTR%20Page%20Refresh%20-%20Icons_114x114px_v02%20-%2001_Star_Value.png.webp?itok=srNXY6ry",
    alt: "£1=10 Stars",
    title: "Earn 10 Stars for every £1 spent",
    text: "Order and pay how you'd like to earn free faves.",
  },
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c09_items_list_192x192/public/2025-01/3468%20UK%20AH%20MTR%20Page%20Refresh%20-%20Icons_114x114px_v02%20-%2002_Free_Drink.png.webp?itok=mhL2O4g0",
    alt: "A Free Drink from 130 Stars",
    title: "Redeem for as little as 130 Stars across a bigger range",
    text: "That's us adding a little sparkle to your day.",
  },
  {
    img: "https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c09_items_list_192x192/public/2024-11/Birthday%20Drink%20Roundal.png.webp?itok=-ckiAXOu",
    alt: "A birthday drink on us when you reach Gold Level",
    title: "Collect 2500 Stars to become Gold",
    text: "Gold members get free extras on the house, plus a free drink on your birthday - you deserve it!",
  },
];

export const SayHelloSection = ({
  img,
  alt,
  title,
  text,
}: SayHelloSectionProps) => {
  return (
    <div className="sayHelloSection d-flex align-items-start col-4">
      <img width="72" height="72" src={img} alt={alt} />
      <div className="d-flex flex-column ms-3 align-items-start">
        <h4 className="text-start">{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function SayHello() {
  return (
    <section className="sayHelloSectionContainer">
      <h2 className="text-center text-justify-balance d-flex justify-content-center pb-5">
        <span className="col-7">
          Say hello to easy ordering and yes, more than just free coffee with
          new Starbucks® Rewards!
        </span>
      </h2>
      <div className="d-flex row g-3 pt-1">
        {SayHelloData.map((s) => (
          <SayHelloSection {...s} />
        ))}
      </div>
      <div className="links d-flex justify-content-center align-items-center">
        <Link to={"register"}>Join now</Link>
        <Link to={"login"}>Sign in</Link>
      </div>
    </section>
  );
}
