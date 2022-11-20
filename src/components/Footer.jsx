import ("../css/footer.css")
const Footer = () => {
  return (
    <>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3 footer-title">
          <img src="assets/VolunteGreen-logo.png" alt="" width="300rem" />
          <p className="text-white ">
            {" "}
            VolunteGreen merupakan sebuah website yang dikembangkan oleh
            beberapa Mahasiswa/i Indoensia yang mengikuti kegiatan Studi
            Independent di Skilvul dengan membantu mengedukasi masyarakat
            sekitar bersama Greenpeace
          </p>
        </div>

        <div className="col mb-3 footer-items">
          <h5>Contact Us</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                {" "}
                <img
                  src="assets/png-24/facebook-24x24-721949.png"
                  alt="facebook"
                />{" "}
                Facebook
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                {" "}
                <img src="assets/png-24/instagram.png" alt="instagram" />{" "}
                Instagram
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                {" "}
                <img
                  src="assets/png-24/youtube-24x24-721990.png"
                  alt="youtube"
                />{" "}
                Youtube
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                {" "}
                <img
                  src="assets/png-24/tik-tok-logo-33090.png"
                  alt="tiktok"
                  width="24rem"
                />{" "}
                Tiktok
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3 footer-items">
          <h5>Information</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
