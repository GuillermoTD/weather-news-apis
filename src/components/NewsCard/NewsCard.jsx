import { Button, Card, Flex } from "antd";
import {
  CardNews,
  CardNewsImage,
  CardNewsFront,
  CardNewsButtonBottom,
} from "./NewsCardStyles";
import Paragraph from "antd/es/skeleton/Paragraph";

const NewsCard = (newsObject) => {
  // console.log(newsObject?.newsObject);
  return (
    <div>
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          width: "23rem",
          height: "30rem",
          border: "1px solid #0003",
        }}
      >
        <Flex vertical align="flex-start" justify="space-evenly" gap="0.7rem">
          <Flex style={{ width: "100%", height: "12rem" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={newsObject?.newsObject?.urlToImage}
              alt="NewsImage"
            />
          </Flex>
          <div style={{ overflowWrap: "break-word" }}>
            {newsObject?.newsObject.content}
          </div>
          <p>{newsObject?.newsObject.publishedAt}</p>
          <Button type="primary">Read more</Button>
        </Flex>
      </Card>
    </div>
  );
};

export default NewsCard;
