import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const getBlobUrl = async (url) => {
  const res = await fetch(url);
  const blob = await res.blob();
  return URL.createObjectURL(blob);
};

export default function useLatestLocation() {
  const [obscuredUrl, setObscuredUrl] = useState(null);
  const { data, error, isLoading } = useSWR("/api/latest-location", fetcher, {
    // No need to revalidate since it changes so rarely
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  // When data is updated, we need to create a blob from the map url to obscure the api key
  useEffect(() => {
    if (data) {
      getBlobUrl(data.map).then((blobUrl) => {
        setObscuredUrl(blobUrl);
      });
    }
  }, [data]);

  return {
    location: { ...data, map: obscuredUrl },
    isLoading: !error && !data,
    isError: error,
  };
}
