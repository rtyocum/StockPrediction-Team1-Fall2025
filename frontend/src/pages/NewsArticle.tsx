import {
  Avatar,
  // Button,
  Card,
  Container,
  // For,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
// import type { User } from "../../../src/db/schema";
import /*React, */ { useState } from "react";
import { LuStar } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

// type NewsArticleProps = {
//   user: User | null;
// };

// came from "read more"
// TODO: display summary text from json and individual tickers in cards. IconButton when clicked, should add to userwatchlist
// TODO: call fetchArticleById endpoint if it exists to filter by article id

export default function NewsArticle(/*user: NewsArticleProps*/) {
  const [added, setAdded] = useState(false);
  const { articleId } = useParams<{ articleId: string }>(); // Extracts 'id' from a route like /users/:id


  return (
    <Container paddingY={8}>
      <Stack gap={4} mb={8}>
        <Heading size="xl">{articleId}</Heading>
        <Text textStyle="lg" color="gray.600">
          article summary
        </Text>
      </Stack>

      <Stack gap="4" direction="row" wrap="wrap">
        {/* <For each=TICKERSARRAY> */}
        {/* {(ticker) => ( */}
        {/* key={ticker.id}> */}
        <Card.Root width="320px" variant="elevated">
          <Card.Body gap="2">
            <Avatar.Root size="lg" shape="rounded">
              <Avatar.Fallback name="tickerSYmbol_placholder" />
            </Avatar.Root>
            <Card.Title mb="2">ticker.symbol Sentiments</Card.Title>
            <Card.Description>
              ticker.tickerSentimentLabel ticket. tickerSentimentScore
            </Card.Description>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <IconButton
              aria-label="add to watchlist"
              // variant="subtle"
              onClick={() => setAdded(!added)}
              color={added ? "yellow" : "white"}
            >
              {added ? <FaStar /> : <LuStar />}
            </IconButton>
          </Card.Footer>
        </Card.Root>
        {/* )} */}
        {/* </For> */}
      </Stack>
    </Container>
  );
}
