import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();

  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id}
  })

  return (
    <>
      <div className="pt-5 px-8  flex justify-center items-center text-color-whitee">
        {/* TITLE AND YEAR */}
        <h3 className="text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>

      </div>

      <div className="pt-6 px-4 gap-2 text-color-whitee flex sm:flex-nowrap flex-wrap">
        {/* IMAGE ANIME */}
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-auto object-cover px-1 rounded"
        />
        {/* info anime */}
        <div className="px-1">
            <p>
              <span className="font-bold">Japanese : </span>
              {anime.data.title_japanese}
            </p>
            <p>
              <span className="font-bold">Rank : </span>
              {anime.data.rank}
            </p>
            <p>
              <span className="font-bold">Score : </span>
              {anime.data.score}
            </p>
            <p>
              <span className="font-bold">Type : </span>
              {anime.data.type}
            </p>
            <p>
              <span className="font-bold">Season : </span>
              {anime.data.season}
            </p>
            <p>
              <span className="font-bold">Duration : </span>
              {anime.data.duration}
            </p>
            <p>
              <span className="font-bold">Rating : </span>
              {anime.data.rating}
            </p>
            {
              !collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title} />
            }
          </div>
        </div>
      {/* SINOPSIS */}
      <div className="py-3 px-4">
        <div className="text-color-whitee bg-color-bluee py-2 px-2 rounded">
          <h3 className="font-bold py-2">SYNOPSIS :</h3>
          <p className="text-justify">{anime.data.synopsis}</p>
        </div>
      </div>
      <div>
        <div className="py-2 px-4">
          <h3 className="text-color-whitee">Komentar Penonton :</h3>
          <div className="text-color-whitee text-md py-2">
            <CommentBox anime_mal_id={id} />
          </div>
        </div>
        {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title} />}
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
