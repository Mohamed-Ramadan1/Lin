function DashboardFooter() {
  return (
    <>
      <footer className="flex items-center justify-between flex-wrap p-3 bg-gray-800 text-white w-[100%] fixed bottom-0">
        <div className="container mx-5 h-full">
          {/* Added h-full to container */}
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © 2024 All rights reserved for MOhamed Ramadan.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">
                Made with ❤️
                <a
                  href="https://www.linkedin.com/in/mohamed-ramadan-758555236/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline ml-3"
                >
                  Mohamed Ramadan
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default DashboardFooter;
