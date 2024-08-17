import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 10)


  return (
    <>
      <section>
        <Header
          title="Top Anime"
          linkTitle="Lihat Semua"
          linkHref="/topAnime"
        />
        <AnimeList api={topAnime} />
      </section>
      <section className="pt-5">
        <Header
          title="Rekomendasi"
        />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  );
};

export default Page;
