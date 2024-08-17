"use client";
import React, { useEffect, useState } from "react";

import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const topAnimes = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(topAnimes);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`TOP ANIME ${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime?.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
