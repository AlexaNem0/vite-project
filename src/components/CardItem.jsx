import { BadgeDelta, Card, Flex, Metric, Text } from "@tremor/react";

const CardItem = () => {
  return (
    <Card className="w-xs" decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">
        <Text>Sales</Text>
        <BadgeDelta deltaType="moderateDecrease">-8.05%</BadgeDelta>
      </Flex>
      <Metric>$ 34,743</Metric>
    </Card>
  );
};

export default CardItem;
