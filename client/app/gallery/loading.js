export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading gallery...</p>
      </div>
    </div>
  );
}
