import Image from "next/image"
import Link from "next/link";

const AnimeList = ({api}) => {
  return (
    <div className="animecard grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data?.map((anime, index) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} className="shadow-xl text-color-whitee hover:text-color-bluee transition-all" key={index}>
            <Image src={anime.images.webp.image_url} alt="..." width={300} height={300} className="w-full object-cover"/>
            <h3 className="font-bold md:text-sm text-md p-4">{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList;