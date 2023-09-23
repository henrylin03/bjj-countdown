import { useState, useEffect } from "react";
import { Box, Text, Title, SimpleGrid, Stack } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import DeleteCompetitionButton from "./DeleteCompetitionButton";

//TODO: add close button and start delete confirmation flow (modal)
//TODO: ensure responsive design of the box
// ? should this be split based on container and presentational components for ease of maintenance?

export default function CountdownTimer(props) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const addLeadingZeroes = (value) => (value < 10 ? `0${value}` : value);

  const storedCompetitionObject = props.storedCompetition;

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
    return interval.stop;
  }, []);

  return (
    <Box
      bg="lightgray"
      mt="xl"
      ta="center"
      style={(theme) => ({
        width: "80%",
        borderRadius: theme.radius.lg,
      })}
    >
      <DeleteCompetitionButton />
      <Title id="competition-name-display" order={1} mt="xl" tt="capitalize">
        {storedCompetitionObject.name}
      </Title>

      <SimpleGrid
        id="countdown-timer"
        cols={4}
        mb="xl"
        spacing="xs"
        verticalSpacing="xs"
      >
        <div>
          <Stack>
            <Text fz={130}>{days}</Text>
            <Text>Days</Text>
          </Stack>
        </div>
        <div>
          <Stack>
            <Text fz={130}>{hours}</Text>
            <Text>Hours</Text>
          </Stack>
        </div>
        <div>
          <Stack>
            <Text fz={130}>{minutes}</Text>
            <Text>Minutes</Text>
          </Stack>
        </div>
        <div>
          <Stack>
            <Text fz={130}>{seconds}</Text>
            <Text>Seconds</Text>
          </Stack>
        </div>
      </SimpleGrid>
    </Box>
  );
}
