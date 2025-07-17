
const Footer = () => {
  return (
    <footer className="bg-tampa-blue-light border-t border-tampa-blue/30">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-tampa-dark">Fun and The City</h3>
            <p className="text-tampa-gray text-sm mt-1">
              Discovering Tampa Bay's best 18+ experiences, one adventure at a time.
            </p>
          </div>
          <div className="text-sm text-tampa-gray">
            © 2024 Fun and The City • Made with ❤️ in Tampa
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
