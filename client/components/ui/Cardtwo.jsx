
export function Cardtwo({ children, className = "" }) {
    return (
      <div
        className={`relative w-full h-[200px] bg-white rounded-xl flex items-center justify-center overflow-hidden perspective-[1000px] shadow-[0_0_0_5px_rgba(255,255,255,0.2)] transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] group ${className}`}
      >
        {children}
      </div>
    );
  }
  
