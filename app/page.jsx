
import Image from "next/image";
import dem1  from '@/public/img/dem1.jpg'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col mt-40 md:basis-3/2">
        <p className="special-word mb-4 text-xs"> Pakistan has the world's most beautiful places</p>
        <h1 className="pb-5">
         Beautiful <span className="special-word">Places in</span><br /> Pakistan
        </h1>

        <p>Pakistan is the best place for every kind of tourist because in Pakistan there is a variety of beauty due to which tourist all around the world come here and enjoy the marvelous scene of beauty and appreciate the nature..</p>
      </div>

      <div className="hidden mt-10  md:block basis-3/4">
        <Image 
          src={dem1}
          alt="beautiful"
          sizes="100vw"
          className=""
        />
      </div>
    </div>
  );
}

