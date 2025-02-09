import { Link } from "react-router-dom";

export default function FindStore() {
  return (
    <section className="findStoreSection d-flex">
      <div className="left d-flex flex-column justify-content-between px-4 py-5 col-4">
        <div>
          <h2>Find a store</h2>
          <p>
            Share your location so you can always find your nearest store,
            whether you decide to order ahead or pay in store
          </p>
        </div>
        <div>
          <Link to="#">Share Location</Link>
        </div>
      </div>
      <div className="right col-8">
        <iframe
          width={"100%"}
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093707!2d144.95373631531695!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1634567890123"
        />
      </div>
    </section>
  );
}
