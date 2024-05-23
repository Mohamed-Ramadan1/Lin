import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { Link } from "react-router-dom";
import { Pagination, NoteCart } from "../../components";

const Wishlist = () => {
  const [userNotes, setUserNotes] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchMyNotes = async () => {
      try {
        setLoading(true);
        const response = await customFetch.get("userCoursesNotes", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });
        if (response.data.data.usersNotes) {
          setUserNotes(response.data.data.usersNotes);
          setIsMorePages(response.data.data.usersNotes.length === itemsPerPage);
        } else {
          setUserNotes([]);
          setIsMorePages(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchMyNotes();
    setLoading(false);
  }, [token, itemsPerPage, currentPage, isChanged]);
  return (
    <>
      <div className="container w-full max-w-[1400px]  m-auto flex gap-10  justify-start items-start my-3">
        {userNotes.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3  ">
            {userNotes &&
              userNotes.map((note) => (
                <NoteCart
                  note={note}
                  key={note._id}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
        )}
        {userNotes.length === 0 && (
          <div className="w-full">
            <div className="w-full my-10 flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold text-center">
                No Notes created yet
              </h1>

              <Link
                to="/courses"
                className="text-blue-500 ml-2 mt-2 font-bold text-2xl underline"
              >
                Start Courses and take notes
              </Link>
            </div>
          </div>
        )}

        {loading && (
          <div className="w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && (
          <div className="w-full flex justify-center items-center">
            <h1 className="text-2xl font-bold text-red-500">{error}</h1>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-end w-[50%]">
          <Pagination
            currentPage={currentPage}
            isMorePages={isMorePages}
            onPrevPage={() => setCurrentPage((prev) => prev - 1)}
            onNextPage={() => setCurrentPage((prev) => prev + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default Wishlist;
