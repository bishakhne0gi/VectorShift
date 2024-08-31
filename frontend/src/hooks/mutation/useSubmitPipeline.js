import { useMutation } from "@tanstack/react-query";
import { client } from "../../utils/client";
import { ENDPOINTS } from "../../utils/api.config";

export const useSubmitPipeline = () => {
  return useMutation({
    mutationFn: async (pipeline) => {
      return client
        .post(ENDPOINTS.PARSE_PIPELINE, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ pipeline }),
        })
        .json();
    },
  });
};
