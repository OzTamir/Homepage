import { Github, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";

interface Social {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: Social[] = [
  {
    title: "Github",
    href: "https://github.com/oztamir",
    icon: <Github />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/oztamir",
    icon: <TwitterIcon />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/oz-tamir-7179b185",
    icon: <LinkedinIcon />,
  },
  {
    title: "Email",
    href: "mailto:oz@tamir.fun",
    icon: <MailIcon />,
  },
];

export const Socials = () => {
  return (
    <div className="flex flex-row gap-5">
      {socialLinks.map((social) => (
        <a
          key={social.title}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.title}
          title={social.title}
          className="text-paper/40 transition-colors hover:text-golden"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
