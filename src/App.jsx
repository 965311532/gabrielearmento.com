import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
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
    <div className="mx-auto grid max-w-3xl grid-cols-6 gap-3 p-10">
      <Card sizeClass="h-20" spanClass="col-span-6" bgClass="bg-black">
        <h1 className="text-2xl text-white">
          Hi there! Welcome to my portfolio
        </h1>
      </Card>
      <Card
        sizeClass="h-full min-h-48"
        spanClass="md:col-span-5 col-span-6"
        bgClass="bg-black"
      >
        <h1 className="text-2xl text-white">
          22 years old full stack software developer and aspiring entrepreneur
        </h1>
      </Card>
      <div className="col-span-6 md:col-span-1 w-full grid grid-cols-2 md:grid-cols-1 gap-3">
        <Card sizeClass="w-full" bgClass="bg-black">
          <div className="p-1">
            <img src="/public/linkedin-logo.svg" alt="linkedin logo" />
          </div>
        </Card>
        <Card sizeClass="w-full" bgClass="bg-black">
          <div className="p-1">
            <img src="/public/mail-icon.png" alt="github logo" />
          </div>
        </Card>
      </div>
      <Card
        sizeClass="h-72"
        spanClass="col-span-6 md:col-span-3"
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
          className="object-cover w-full h-full rounded-[30px]"
        />
      </Card>
      <Card
        sizeClass="h-72"
        spanClass="col-span-6 md:col-span-3"
        bgClass="bg-black"
      >
        <h1 className="text-2xl text-white">spoti</h1>
      </Card>
      <Card
        sizeClass="h-72"
        spanClass="col-span-6 md:col-span-4"
        bgClass="bg-black"
      >
        <h1 className="text-2xl text-white">About me</h1>
        <span className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          explicabo vitae quo tenetur porro alias molestias distinctio totam?
          Totam, inventore sunt quasi impedit similique sequi natus quo
          quibusdam suscipit fuga!
        </span>
      </Card>
      <Card
        sizeClass="h-72"
        spanClass="col-span-6 md:col-span-2"
        bgClass="bg-black"
      >
        <h1 className="text-2xl text-white">stack</h1>
      </Card>
      <Card sizeClass="h-48" spanClass="col-span-6" bgClass="bg-black">
        <h1 className="text-2xl text-white">contributions</h1>
      </Card>
      <Card sizeClass="h-72" spanClass="col-span-6" bgClass="bg-black">
        <h1 className="text-2xl text-white">contact form</h1>
      </Card>
    </div>
  );
}

export default App;
