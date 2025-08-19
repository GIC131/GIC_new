
export function CardContent({ title, description, children, className = "" }) {
    return (
      <div
        className={`absolute top-0 left-0 w-full h-full p-6 bg-gray-100 transform rotate-x-[-90deg] origin-bottom transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0 ${className}`}
      >
        {children ? (
          children
        ) : (
          <>
            <p className="text-xl font-bold text-[#333]">{title}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-300 leading-relaxed">{description}</p>
          </>
        )}
      </div>
    );
  }
  