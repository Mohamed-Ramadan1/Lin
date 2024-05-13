const PageIntro = ({ pageName }) => {
  return (
    <h1 className="text-2xl font-semibold">
      Dashboard / <span className="text-blue-600">{pageName}</span>
    </h1>
  );
};

export default PageIntro;
