/* eslint-disable react/prop-types */
import EditIcon from "@mui/icons-material/Edit";

export default function Box({ head, data, tags, icon, buttons }) {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full sm:w-2/3">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            
            <h1 className="text-xl sm:text-2xl font-bold mb-4">{head}</h1>
           
            {data.length > 0 &&
              data.map((item, index) => {
                return (
                  <p className="text-gray-500 text-sm sm:text-base" key={index}>
                    {item}
                  </p>
                );
              })}
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {tags.length > 0 &&
                tags.map((tag, index) => {
                  return (
                    <span
                      className="px-3 py-1 bg-gray-200 rounded-full text-xs sm:text-sm"
                      key={index}
                    >
                      {tag}
                    </span>
                  );
                })}
              {buttons.length > 0 &&
                buttons.map((btn, index) => {
                  return (
                    <button
                      className="px-4 py-2 bg-gray-700 text-white rounded-lg text-xs sm:text-sm"
                      key={index}
                    >
                      + Add Previous Collaboration
                    </button>
                  );
                })}
            </div>
          </div>
          {icon && (
            <button className="text-gray-500 hover:text-gray-700 self-start">
              <EditIcon />
            </button>
          )}
        </div>
      </div>
    </>
  );
}