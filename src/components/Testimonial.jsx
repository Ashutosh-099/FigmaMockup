import EditIcon from "@mui/icons-material/Edit";

export default function Testimonial() {
  return (
    <>
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-auto w-full sm:w-2/3 relative">
        <div className="flex justify-between items-start sm:items-center mb-4">
          {/* <h3 className="font-semibold text-base sm:text-lg">Testimonials</h3> */}
          <h1 className="text-xl sm:text-2xl font-bold mb-4">Testimonials</h1>
          <button className="text-gray-500 hover:text-gray-700 self-start">
            <EditIcon />
          </button>
        </div>

        <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
          &quot;Working with Jennifer was the best experience possible for us.
          We&apos;ve had over 150 B2B partners come from her audience, and
          likely so many more influenced by her! Seriously, the best ROI
          we&apos;ve seen.&quot;
        </p>
        <p className="font-semibold text-right mb-4 text-sm sm:text-base">
          - John Smith, Company
        </p>
        <div className="flex justify-center">
          <button className="px-4 sm:px-6 py-2 bg-gray-700 text-white rounded-lg w-full text-sm sm:text-base">
            Add Testimonials
          </button>
        </div>
      </div>
    </>
  );
}
