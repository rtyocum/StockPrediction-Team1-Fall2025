import { Spinner, Text, VStack } from "@chakra-ui/react";

// leaving this here in case we need to make a ticker page

export default function Ticker() {
  return (<VStack colorPalette="teal">
        <Spinner color="colorPalette.600" />
        <Text color="colorPalette.600">Loading...</Text>
      </VStack>)
}
