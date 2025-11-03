import { getNewsArticles, type NewsArticleTickers } from "@/api/article_api";
// import type { User } from "../../../src/db/schema";
// import type { NewsArticle } from "../../../src/db/schema.js";
import { Link as ReactLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Table,
} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

// type NewsProps = {
//   user: User | null;
// };

export default function News(/*{ user }: NewsProps*/) {
  // const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState<NewsArticleTickers[]>([]);
  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    const data = await getNewsArticles();
    console.log("articles loading...", data);
    setArticles(data);
  }

  return (
    // default container padding-left/right is 32px so we match it with 8
    // doing stuff like paddingY{8} --> is value * 4px = actual px your using
    <Container paddingY={8}>
      <Heading marginBottom={6}>News Articles</Heading>

      <Box boxShadow="sm">
        <Table.Root>
          <Table.Header>
            <Table.Row bg="gray.50">
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader>Tickers</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Article Insights
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {articles.map((article) => (
              <Table.Row key={article.articleId}>
                <Table.Cell>
                  <Link colorPalette="blue" href={article.url}>
                    {article.title} <LuExternalLink />
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Flex gap={1} flexWrap="wrap">
                    {article.tickers.map((ticker) => (
                      <Badge key={ticker.tickerId}>{ticker.symbol}</Badge>
                    ))}
                  </Flex>
                </Table.Cell>
                <Table.Cell textAlign="end">
                  <Button colorPalette="gray" variant="subtle">
                    <ReactLink to={`/news/${article.articleId}`}>
                      View Insights
                    </ReactLink>
                  </Button>
                </Table.Cell>
                {/* <Table.Cell>
                    <Button colorPalette="gray" variant="subtle">Read More</Button> */}
                {/* <Badge
                    colorScheme={
                      article.overallSentimentLabel === "bullish"
                        ? "green"
                        : article.overallSentimentLabel === "bearish"
                        ? "red"
                        : "gray"
                    }
                  >
                  </Badge> */}
                {/* </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </Container>
  );
}
