import {
  IoMail,
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io5";

function Footer() {
  const ContactMe = [
    {
      icon: <IoMail size={30} />,
    },
    {
      icon: <IoLogoWhatsapp size={30} />,
    },
    {
      icon: <IoLogoGithub size={30} />,
    },
    {
      icon: <IoLogoLinkedin size={30} />,
    },
    {
      icon: <IoLogoFacebook size={30} />,
    },
    {
      icon: <IoLogoInstagram size={30} />,
    },
  ];
  return (
    <div className="h-[400px] bg-slate-700 relative mt-10">
      <div className=" justify-center items-center flex h-full">
        <p className="text-white text-3xl font-bold italic">
          " It's better to be tormented by discipline than to be tormented by
          regret "
        </p>
      </div>
      <div className="absolute text-white bottom-5 left-5 text-center right-5 justify-between flex items-center">
        <p>Copyright Nurhamsah 2023</p>
        <div className="flex items-center justify-center gap-4">
          {ContactMe.map((x: any, y: number) => (
            <button key={y}>{x.icon}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
