import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { customFetch } from "../../utils/customFetch";
import { Link } from "react-router-dom";
import {
  Pagination,
  WishlistCard,
  EmptyItems,
  ErrorMessage,
  LoadingSpinner,
  ProfilePageContainer,
} from "../../components";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useSelector((state) => state.userReducers);

  const [isMorePages, setIsMorePages] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsChanged(false);
    const fetchWishlistItems = async () => {
      try {
        setLoading(true);
        const response = await customFetch.get("wishlist", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            limit: itemsPerPage,
            sort: "-createdAt",
          },
        });
        if (response.data.data.wishlistItems) {
          setWishlistItems(response.data.data.wishlistItems);
          setIsMorePages(
            response.data.data.wishlistItems.length === itemsPerPage
          );
        } else {
          setWishlistItems([]);
          setIsMorePages(false);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    };
    fetchWishlistItems();
    setLoading(false);
  }, [token, itemsPerPage, currentPage, isChanged]);
  return (
    <>
      <ProfilePageContainer>
        {wishlistItems.length > 0 && (
          <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3  ">
            {wishlistItems &&
              wishlistItems.map((item) => (
                <WishlistCard
                  wishlistItem={item}
                  key={item._id}
                  setIsChanged={setIsChanged}
                />
              ))}
          </div>
        )}
        {wishlistItems.length === 0 && (
          <EmptyItems
            headerText={"No items added yet"}
            linkText={"Start Navigate to Courses"}
            toUrl="/courses"
          />
        )}

        {loading && (
          <div className="w-full flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        )}

        {error && <ErrorMessage errorMessage={error} />}
      </ProfilePageContainer>
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
