import React from "react";

const TermsAndConditions = ({ terms_conditions }) => {
  function RichText({ content }) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return (
    <div
      // className="min-h-screen px-5 py-10"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.1), transparent 50%), rgb(5, 20, 27)",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            TERMS & CONDITIONS
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 break-words">
              <RichText content={terms_conditions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
