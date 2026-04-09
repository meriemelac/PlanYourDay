import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        
        <h1 className="text-3xl font-bold mb-6">
          Premier App React 🚀
        </h1>

        <p className="text-2xl mb-6">
          Count: {count}
        </p>

        <div className="flex gap-4 justify-center">
          
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            -
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;