import { link } from "fs";
import { title } from "process";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { TfiEmail } from "react-icons/tfi";

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/shivampawar18/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Shivam154CO",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Shivam154CO",
      },

    ],
  },
  {
    title: "Social Media",
    data: [

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/shivampawar18/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:shivampawar44330j@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  { title: "Home", link: "/" },{ title: "Projects", link: "/projects" },
  { title: "About", link: "/about" },
  { title: "Experience", link: "/experience" },
  { title: "Certificates", link: "/certificates" },
  { title: "Contact", link: "/contact" },
] as const;