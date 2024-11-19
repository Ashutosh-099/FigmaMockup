import EditIcon from "@mui/icons-material/Edit";

export default function Collaborate() {
  return (
    <>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 h-auto w-full sm:w-2/3">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Let&apos;s Collaborate
        </h1>
        <button className="px-3 sm:px-4 py-2 bg-gray-700 text-white rounded-lg mb-4 text-xs sm:text-sm">
          + Add Product
        </button>
        {[1, 2].map((product) => (
          <div key={product} className="rounded-lg p-3 sm:p-4 mb-4 ">
            <div className="flex justify-between items-start sm:items-center mb-4">
              <h3 className="font-semibold text-base sm:text-lg">
                Product #{product}
              </h3>
              <button className="text-gray-500 hover:text-gray-700 self-start">
                <EditIcon />
              </button>
            </div>
            <div className="relative">
              <textarea
                placeholder="Explain here ......"
                className="w-full h-24 p-3 border rounded-lg resize-none text-sm"
              ></textarea>

              <p className="absolute bottom-2 right-4 font-semibold text-sm sm:text-lg">
                USD 350
              </p>
            </div>

            <div className="flex justify-end mt-4">
              <button className="px-4 py-2 bg-sky-400 text-white rounded-lg text-sm w-full md:w-auto">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
