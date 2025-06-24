import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center my-10">
      <div className="flex border border-gray-300 rounded overflow-hidden">
        <button
          className="px-4 py-2 text-[#BDBDBD] hover:bg-gray-50 border-r border-gray-300"
          disabled={currentPage === 1}
          onClick={() => onPageChange(1)}
        >
          First
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 border-r border-gray-300 ${
              currentPage === i + 1
                ? "bg-[#23A6F0] text-white"
                : "text-[#23A6F0] hover:bg-gray-50"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 text-[#23A6F0] hover:bg-gray-50"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default Pagination;