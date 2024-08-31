import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { useEffect, useState } from "react";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { VerifiedIcon } from "lucide-react";

const queryClient = new QueryClient();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark_grey">
        <div className="flex items-center gap-2 text-4xl font-bold text-light_purple rotate-90 md:rotate-0">
          <VerifiedIcon className="w-10 h-10 mr-2 animate-pulse" />
          <span className="text-white animate-color-shift">Vector</span>
          <span className="animate-color-shift">Shift</span>
        </div>
      </div>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-dark_grey font-space_grotesk text-white px-8">
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
