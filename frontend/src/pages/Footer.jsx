import { TEInput, TERipple } from "tw-elements-react";

const Footer = () => {
  // Define an array of social media icons with their respective links
  const socialMediaIcons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
      url: "https://example.com/facebook"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-full w-4"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
      url: "https://example.com/twitter"
    },
    // Add more social media icons with their URLs as needed
  ];

  // Define an array of links for the Links section
  const linksSection = [
    {
      title: "HealthExploral",
      links: [
        { text: "Communities", url: "#" },
        { text: "Medi Help", url: "#" },
        { text: "Consultation", url: "#" },
        { text: "Contact Us", url: "#" }
      ]
    },
    {
      title: "Page",
      links: [
        { text: "404", url: "#" },
        { text: "Medi AI Assistance", url: "#" },
        { text: "ChatBot 3", url: "#" },
        { text: "New disease", url: "#" }
      ]
    },
    {
      title: "Address",
      links: [
        { text: "Krishna Engineering College, NCR Delhi.", url: "#" },
        { text: "+91-9555353894", url: "#" },
        { text: "healthExp24@gmail.com", url: "#" },
        { text: "Chat with Medi", url: "#" }
      ]
    }
  ];

  return (
    <div>
      <footer className="text-center text-green-400">
        <hr />
        <div className="container px-6 pt-6 mx-auto">
          {/* Social media icons container */}
          <div className="mb-6 flex justify-center w-full">
            {socialMediaIcons.map((icon, index) => (
              <TERipple key={index} rippleColor="light">
                <a
                  href={icon.url}
                  type="button"
                  className="m-1 h-9 w-9 rounded-full border-2 border-green-400 uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  {icon.icon}
                </a>
              </TERipple>
            ))}
          </div>

          <div>
           
          </div>

          {/* Links section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {linksSection.map((section, index) => (
              <div key={index} className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">{section.title}</h5>

                <ul className="mb-0 list-none">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a className="text-black" href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Remaining code... */}
          <div className="p-4 text-center bg-black bg-opacity-20 ">
          <span className="text-black"> © 2024 Copyright:</span>
          <a className="text-black" href="https://tw-elements.com/">
            HealthExploral
          </a>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
