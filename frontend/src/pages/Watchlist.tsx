import { Spinner, Text, VStack } from "@chakra-ui/react";
import type { User } from "../../../src/db/schema";
// import React from "react";

type WatchlistProps = {
  user: User | null;
};

// TODO: if nothing in user watchlist: say "nothing added yet", else show added watchlist items (tickers)

export default function Watchlist(user: WatchlistProps) {
  console.log("user watchlist:", user);
  //   below is placeholder, can delete
  return (<VStack colorPalette="teal" mt={16}>
    <Spinner color="colorPalette.600" />
    <Text color="colorPalette.600">Loading...</Text>
  </VStack>)
}
