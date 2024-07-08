export default function Home() {
  return (
    <div className="ml-72">
      <div className="w-full h-[35vh] bg-orange-400 flex-center">
        <p>Algo chamativo</p>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-indigo-500">Oi</div>
          <div className="flex-center bg-purple-500">Oi</div>
          <div className="flex-center bg-blue-500">Oi</div>
          <div className="flex-center bg-emerald-500">Oi</div>
        </div>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8  flex flex-col gap-4">
            {/* Item */}
            <div className="flex gap-4 bg-purple-500 rounded-md">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Let mais</button>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-4 bg-purple-500">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Let mais</button>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-4 bg-purple-500">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Let mais</button>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-4 bg-purple-500">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Let mais</button>
              </div>
            </div>
            {/* End Item */}
            {/* Item */}
            <div className="flex gap-4 bg-purple-500">
              <div>
                <img
                  className="w-auto h-[200px]"
                  src="https://placehold.co/600x400"
                  alt="Image description"
                />
              </div>
              <div className="flex flex-col gap-2 py-4">
                <h2 className="text-3xl">Algum título</h2>
                <p className="flex-grow">Alguma descrição</p>
                <button>Let mais</button>
              </div>
            </div>
            {/* End Item */}
          </div>
          <div className="col-span-4 bg-emerald-500">B</div>
        </div>
      </div>
    </div>
  );
}
