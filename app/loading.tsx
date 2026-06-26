export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F8]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#E8192C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}