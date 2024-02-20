import { useContext, useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";
import ContextApp from "../../contexts/ContextApp";
import { Flex, Select, Space } from "antd";
import useFetch from "../../customeHooks/useFetch";

const NoticiasPage = () => {
  const { newsByCategory, setNewsByCategory, newsData, setNewsData } =
    useContext(ContextApp);

  const [category, setCategory] = useState("");

  const [localData, setLocalData] = useState([]);

  // let newsByCategoryUri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1470c4ac440545f7b8eddfa849d7aebc&category=`;

  // const newsFetchedSearchedByCategory = useFetch(
  //   newsByCategoryUri + import.meta.env.VITE_NEWS_API
  // );

  const selectOptions = [
    {
      label: "Business",
      value: "business",
    },
    {
      label: "Entertainment",
      value: "entertainment",
    },
    {
      label: "General",
      value: "general",
    },
    {
      label: "Health",
      value: "health",
    },
    {
      label: "Science",
      value: "science",
    },
    {
      label: "Sports",
      value: "sports",
    },
    {
      label: "Technology",
      value: "technology",
    },
  ];

  // const fetchNewsPerCategory = useFetch(newsByCategoryUri + category);

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
    setCategory(value);
    console.log();
  };

  useEffect(() => {
    if (category) {
      const newsByCategoryUri = `https://newsapi.org/v2/top-headlines?country=us&apiKey=1470c4ac440545f7b8eddfa849d7aebc&category=${category}`;

        try {
          fetch(newsByCategoryUri)
          .then((res)=>res.json())
          .then((data)=> setLocalData(data.articles))
          
          console.log(localData.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      };
      
    }, [category]);
  

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div>
        <Select
          defaultValue="Select a tag"
          style={{
            width: 200,
          }}
          onChange={handleChange}
          options={selectOptions}
        />
        <p>{newsByCategory.length}</p>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          overflowX: "hidden",
          overflowY: "scroll",
          gap: "1.5rem",
          paddingBottom: "0.8rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {newsData?.articles?.map((item, index) => {
          if (item.urlToImage !== null) {
            return <NewsCard key={index} newsObject={item} />;
          }
        })}
      </div>
    </div>
  );
};
export default NoticiasPage;
