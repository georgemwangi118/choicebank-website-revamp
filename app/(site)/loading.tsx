export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-5">
            <div className="h-4 w-24 bg-white/20 rounded-full" />
            <div className="h-12 w-3/4 bg-white/20 rounded-xl" />
            <div className="h-12 w-1/2 bg-white/20 rounded-xl" />
            <div className="h-4 w-full bg-white/10 rounded-full" />
            <div className="h-4 w-5/6 bg-white/10 rounded-full" />
            <div className="h-12 w-40 bg-white/20 rounded-full mt-4" />
          </div>
          <div className="flex-1 h-80 bg-white/10 rounded-3xl hidden md:block" />
        </div>
      </div>
      {/* Content skeleton */}
      <div className="py-20 px-6 md:px-16 max-w-7xl mx-auto space-y-6">
        <div className="h-4 w-32 bg-gray-200 rounded-full" />
        <div className="h-8 w-64 bg-gray-200 rounded-xl" />
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-100 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
