// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { customFetch } from "../../utils/customFetch";
// import { Link } from "react-router-dom";
// import {
//   Pagination,
//   NoteCart,
//   ErrorMessage,
//   ProfilePageContainer,
//   EmptyItems,
//   LoadingSpinner,
// } from "../../components";
// const MyNotes = () => {
//   const [userNotes, setUserNotes] = useState([]);
//   const [isChanged, setIsChanged] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { token } = useSelector((state) => state.userReducers);

//   const [isMorePages, setIsMorePages] = useState(false);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     setIsChanged(false);
//     const fetchMyNotes = async () => {
//       try {
//         setLoading(true);
//         const response = await customFetch.get("userCoursesNotes", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           params: {
//             page: currentPage,
//             limit: itemsPerPage,
//             sort: "-createdAt",
//           },
//         });
//         if (response.data.data.usersNotes) {
//           setUserNotes(response.data.data.usersNotes);
//           setIsMorePages(response.data.data.usersNotes.length === itemsPerPage);
//         } else {
//           setUserNotes([]);
//           setIsMorePages(false);
//           setLoading(false);
//         }
//       } catch (error) {
//         setLoading(false);
//         setError(error.response.data.message);
//       }
//     };

//     fetchMyNotes();
//     setLoading(false);
//   }, [token, itemsPerPage, currentPage, isChanged]);
//   return (
//     <>
//       <ProfilePageContainer>
//         {userNotes.length > 0 && (
//           <div className="grid w-full sm:grid-cols-3  sm:gap-4 md:grid-cols-3  ">
//             {userNotes &&
//               userNotes.map((note) => (
//                 <NoteCart
//                   note={note}
//                   key={note._id}
//                   setIsChanged={setIsChanged}
//                 />
//               ))}
//           </div>
//         )}
//         {userNotes.length === 0 && (
//           <EmptyItems
//             headerText={" No Notes created yet"}
//             linkText={"   Start Courses and take notes"}
//           />
//         )}

//         {loading && <LoadingSpinner />}

//         {error && <ErrorMessage errorMessage={error} />}
//       </ProfilePageContainer>
//       <div className="flex items-center justify-center w-full">
//         <div className="flex justify-end w-[50%]">
//           <Pagination
//             currentPage={currentPage}
//             isMorePages={isMorePages}
//             onPrevPage={() => setCurrentPage((prev) => prev - 1)}
//             onNextPage={() => setCurrentPage((prev) => prev + 1)}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyNotes;
