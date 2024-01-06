/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box, Text, Title, SimpleGrid, Stack } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import DeleteCompetitionButton from "./DeleteCompetitionButton";

export default function CountdownTimer(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

  const storedCompetitionObject = props.storedCompetitionData;

  const setTimeUntilCompetition = () => {
    let currentTime = new Date().getTime();
    const competitionDate = new Date(storedCompetitionObject.date);
    let timeUntilCompetition = competitionDate - currentTime;

    const daysUntilCompetition = Math.floor(
      timeUntilCompetition / (1000 * 60 * 60 * 24)
    );
    setDays(addLeadingZeroes(daysUntilCompetition));
    const hoursUntilCompetition = Math.floor(
      (timeUntilCompetition % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(addLeadingZeroes(hoursUntilCompetition));
    const minutesUntilCompetition = Math.floor(
      (timeUntilCompetition % (1000 * 60 * 60)) / (1000 * 60)
    );
    setMinutes(addLeadingZeroes(minutesUntilCompetition));
    const secondsUntilCompetition = Math.floor(
      (timeUntilCompetition % (1000 * 60)) / 1000
    );
    setSeconds(addLeadingZeroes(secondsUntilCompetition));
  };

  const interval = useInterval(setTimeUntilCompetition, 1000);

  useEffect(() => {
    interval.start();
    interval.stop;
  });

  return (
    <Box
      bg="#92809a"
      c="#181528"
      ta="center"
      w="80%"
      p="xl"
      style={{ borderRadius: "2rem" }}
    >
      <DeleteCompetitionButton />
      <Title
        id="competitionNameDisplay"
        order={1}
        mt="xl"
        tt="uppercase"
        c="#e3dee3"
      >
        {storedCompetitionObject.name}
      </Title>

      <SimpleGrid
        cols={{ base: 2, sm: 4 }}
        spacing="xs"
        verticalSpacing="xs"
        mb="xl"
      >
        <Stack>
          <Text className="timeUnit">{days}</Text>
          <Text className="timeUnitLabel">Days</Text>
        </Stack>
        <Stack>
          <Text className="timeUnit">{hours}</Text>
          <Text className="timeUnitLabel">Hours</Text>
        </Stack>
        <Stack>
          <Text className="timeUnit">{minutes}</Text>
          <Text className="timeUnitLabel">Minutes</Text>
        </Stack>
        <Stack>
          <Text className="timeUnit">{seconds}</Text>
          <Text className="timeUnitLabel">Seconds</Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
