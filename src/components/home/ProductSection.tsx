export interface IHomePageProduct {
  img: string;
  title: string;
}

const HomePageProducts: IHomePageProduct[] = [
  {
    img: "https://www.starbucks.co.uk/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FSBX-MOP-1500x1500-Pistachio-Velvet-Latte.jpeg&w=1200&q=75",
    title: "Pistachio Velvet Latte",
  },
  {
    img: "https://www.starbucks.co.uk/_next/image?url=https%3A%2F%2Fwww.digitalassets.starbucks.eu%2Fsites%2Fstarbucks-medialibrary%2Ffiles%2FSBX-MOP-1500x1500-Iced-Pistachio-Latte.jpeg&w=640&q=75",
    title: "Iced Pistachio Latte",
  },
];

export type IHompageProductProps = IHomePageProduct;

export function HomePageProduct({ img, title }: IHompageProductProps) {
  return (
    <div className="homePageProduct d-flex flex-column align-items-center mx-5">
      <div className="imgContainer">
        <img alt="Product Image" src={img} />
      </div>
      <h3 className="d-flex justify-content-center align-items-center mt-3">
        {title}
      </h3>
    </div>
  );
}

export default function HomePageProductSection() {
  return (
    <section className="d-flex justify-content-center align-items-center">
      {HomePageProducts.map((h) => (
        <HomePageProduct {...h} />
      ))}
    </section>
  );
}
