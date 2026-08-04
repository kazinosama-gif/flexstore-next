const columns = [
  {
    title: "Product",
    links: [
      "Features",
      "Pricing",
      "Analytics",
      "Dashboard",
    ],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Contact",
      "Partners",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Documentation",
      "Help Center",
      "API",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy",
      "Terms",
      "Cookies",
      "Licenses",
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-10 md:grid-cols-4">

      {columns.map((column) => (
        <div key={column.title}>

          <h4 className="mb-5 text-lg font-semibold text-foreground">
            {column.title}
          </h4>

          <div className="space-y-4">

            {column.links.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-muted-foreground transition-all duration-300 hover:text-[#6E8B3D]"
              >
                {link}
              </a>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}