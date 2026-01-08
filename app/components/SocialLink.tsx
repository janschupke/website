interface SocialLinkProps {
  href: string;
  title: string;
  icon: React.ReactNode;
}

export default function SocialLink({ href, title, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="text-2xl text-text-secondary hover:text-text-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
    >
      {icon}
    </a>
  );
}

