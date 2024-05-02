function DashboardFooter() {
  return (
    <>
      <footer className="flex items-center justify-between flex-wrap p-3 bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm">© 2021 All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm">
                Made with ❤️ by{" "}
                <a
                  href="
            https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Creative Tim
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
