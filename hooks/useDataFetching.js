"use client"
import useSWR from "swr";
import axios from "axios";

const fetcher = async (...args) => {
  const { data } = await axios.get(...args);
  return data;
};

export const useDataFetching = (path) => {
  const { data, error, isLoading, mutate } = useSWR(path, fetcher);
  return { data, error, loading: isLoading, mutate };
};
