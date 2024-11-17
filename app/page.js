import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full space-y-4 overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col h-full w-full items-center justify-center">
        <h1 className="text-5xl font-semibold  text-center px-24">Cut Time Spent on <span className="text-primary">item 1 here</span></h1>
        <div className="w-full max-w-3xl mx-auto h-96 m-8 text-center text-white bg-primary/50 rounded-lg">
          
        </div>
      </div>

      <div className="overflow-x-hidden">
        <div className="absolute -bottom-96 ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] border-4 border-primary">
          <div className="mt-5 text-center  text-gray-800 bg-gray-100 py-2 px-4 rounded-full uppercase text-md font-semibold  max-w-40 mx-auto">Features</div>
        </div>
      </div>
    </div>

  );
}
