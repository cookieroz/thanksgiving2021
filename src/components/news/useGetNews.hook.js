import { useEffect, useState } from "react";
import { useDatabase } from "../../hooks/useDatabaseService.hook";

export const useGetNews = () => {
  const { getAll } = useDatabase("news");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let allNews = await getAll();
        allNews = allNews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setNews(allNews);
        setError(false);
        setLoading(false);
      } catch (e) {
        setError(`error loading news data: ${e}`);
        setLoading(false);
      }
    })();
  }, []);

  return { error, loading, news };
};
