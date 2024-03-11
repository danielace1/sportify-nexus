const Footer = () => {
  return (
    <footer className="flex items-center bg-green-100 text-primary-col1 px-4 sm:px-10 py-3 text-xs sm:text-sm">
      &copy; 2024 Sportify Nexus. All Rights Reserved. | Lead Contributors
      <div className="flex items-center ml-3">
        <a
          href="https://github.com/danielace1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.com/danielace1.png"
            alt="instagram"
            className="w-8 h-8 object-cover rounded-full"
          />
        </a>
        <a
          href="https://github.com/sharif-22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://github.com/sharif-22.png"
            alt="instagram"
            className="w-8 h-8 object-cover rounded-full"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
