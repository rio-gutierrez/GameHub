import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: (unknown | undefined)[] = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: abortController.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        // we need  to "ignore" the CanceledError bc there will always be an
        // error of this type by default due to StrictMode unmounting the component
        // once before re-rendering
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // cleanup after call
    return () => abortController.abort();
  }, [...deps]);

  return { data, error, isLoading };
};

export default useData;
