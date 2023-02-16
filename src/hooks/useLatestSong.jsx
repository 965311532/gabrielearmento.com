import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useLatestSong() {
  const { data, error, isLoading } = useSWR("/api/latest-song", fetcher);

  return {
    song: data,
    isLoading,
    isError: error,
  };
}
