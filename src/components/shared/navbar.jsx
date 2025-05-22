import logo from "../../assets/images/logo.png";
import { navLinksData } from "../../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  console.log(navLinksData, "navLinksData");
  return (
    <div className="w-full h-24 sticky bg-bodyColor text-lightText mx-auto flex items-center justify-between font-opensans border-b-[1px]  border-b-gray-600">
      <div>
        <img src={logo} />
      </div>
      <div>
        <ul className="hidden md:inline-flex items-center gap-6 lg:gap-10">
          {navLinksData.map((item) => (
            <li
              key={item._id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
