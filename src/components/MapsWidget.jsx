import { useEffect, useState } from "react";
import Card from "./Card";

export default function MapsWidget() {
  const [latestLocationImg, setLatestLocationImage] = useState();

  const fetchImage = async () => {
    const locationData = await fetch("/api/latest-location");
    const location = await locationData.json();
    const image = await fetch(location.map);
    const imageBlob = await image.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setLatestLocationImage(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <Card
      sizeClass="h-full"
      spanClass="col-span-6 md:col-span-2"
      bgClass="bg-black relative p-0"
    >
      <div className="absolute">
        <span className="block h-8 w-8 animate-ping-slow rounded-full bg-blue-400"></span>
      </div>
      <div className="absolute">
        <span className="block h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white shadow-xl"></span>
      </div>

      <img
        src={latestLocationImg}
        alt="latest location"
        className="object-cover w-full h-full rounded-[20px]"
      />
    </Card>
  );
}
