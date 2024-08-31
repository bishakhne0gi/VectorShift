import React from "react";
import ReactLoading from "react-loading";
import { toast } from "sonner";
import { useSubmitPipeline } from "./hooks/mutation/useSubmitPipeline";
import usePipelineStore from "./hooks/provider/usePipelineStore";
import { Check, X } from "lucide-react";

export const SubmitButton = () => {
  const { nodes, edges } = usePipelineStore();
  const mutation = useSubmitPipeline();

  const handleSubmit = () => {
    const pipeline = JSON.stringify({ nodes, edges });
    mutation.mutate(pipeline, {
      onSuccess: (data) => {
        toast.custom((t) => (
          <div className="flex font-space_grotesk flex-col bg-[#092312] border-[1px] border-[#297A43] text-[#297A43] p-4 rounded-md w-screen max-w-[340px]">
            <p className="font-bold">Pipeline Analysis</p>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" strokeWidth={2} color="#297A43" />
              Number of nodes:{" "}
              <span className="font-bold">{data.num_nodes}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" strokeWidth={2} color="#297A43" />
              Number of edges:{" "}
              <span className="font-bold">{data.num_edges}</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" strokeWidth={2} color="#297A43" />
              Is DAG:{" "}
              <span className="font-bold">{data.is_dag ? "Yes" : "No"}</span>
            </div>
          </div>
        ));
      },
      onError: (error) => {
        console.error("Error:", error);
        toast.custom((t) => (
          <div className="flex font-space_grotesk flex-col bg-[#290B09] border-[1px] border-[#EA4335] text-[#EA4335] p-4 rounded-md w-screen max-w-[340px]">
            <div className="flex items-center gap-2">
              <X className="w-4 h-4" strokeWidth={2} color="#EA4335" />
              <span className="font-bold">Error</span>
            </div>
            <p>An error occurred while submitting the pipeline.</p>
          </div>
        ));
      },
    });
  };

  return (
    <div className="flex p-4">
      <button
        onClick={handleSubmit}
        className="bg-transparent text-light_purple border-[1px] border-dark_purple px-6 py-2 rounded-md hover:bg-highlight_purple"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <div className="flex items-center gap-2">
            Submitting{" "}
            <ReactLoading type="spin" color="#BF93EC" height={20} width={20} />
          </div>
        ) : (
          "Submit Pipeline"
        )}
      </button>
    </div>
  );
};
