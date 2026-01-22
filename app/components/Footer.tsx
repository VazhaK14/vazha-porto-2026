import { Link } from "react-router";
import { Button } from "./ui/button";
import { SOCIAL_MEDIA } from "~/modules/ProfileModule/payload";

const Footer = () => {
  return (
    <footer className="px-20 py-5 text-center border-t border-black items-center flex justify-between  text-black bg-white">
      <p>© 2026 Vazha Khayri. All rights reserved.</p>
      <div className="flex justify-center gap-4">
        {SOCIAL_MEDIA.map((sm, i) => (
          <div key={i}>
            <Link to={sm.link} target="_blank" rel="noopener noreferrer">
              <Button className="w-10 h-10 border-black border-2 text-black font-normal md:w-12 md:h-12">
                {sm.icon}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
