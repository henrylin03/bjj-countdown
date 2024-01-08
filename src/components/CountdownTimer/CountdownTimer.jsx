/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Box, Title, SimpleGrid, Stack, Text } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import DeleteCompetitionButton from "./DeleteCompetitionButton";
import styles from "./CountdownTimer.module.css";

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
    return interval.stop;
  });

  const timeUnitsData = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];
  const timeUnits = timeUnitsData.map((unit) => (
    <Stack align="center" gap="xs">
      <Text className={styles.timeUnit} ta="center">
        {unit.value}
      </Text>
      <Text className={styles.timeUnitLabel} ta="center">
        {unit.label}
      </Text>
    </Stack>
  ));

  return (
    <Box className={styles.container} ta="center">
      <DeleteCompetitionButton />
      <Title className={styles.competitionName} tt="uppercase">
        {storedCompetitionObject.name}
      </Title>

      <SimpleGrid cols={{ base: 2, sm: 4 }} verticalSpacing="xl">
        {timeUnits}
      </SimpleGrid>
    </Box>
  );
}
