import { Stack, Image } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import headerIcon from "./assets/images/gi.png";
import AddCompetitionBox from "./components/AddCompetitionBox";
import CountdownTimer from "./components/CountdownTimer";
import GithubFooter from "./components/GithubFooter";

function App() {
  const [storedCompetitionData, setStoredCompetitionData] = useLocalStorage({
    key: "competition-form",
    defaultValue: null,
  });

  return (
    <>
      <Stack align="center" gap="lg">
        <Image src={headerIcon} alt="Jiujitsu gi emoji" w={100} mt="xl" />
        {storedCompetitionData ? (
          <CountdownTimer storedCompetitionData={storedCompetitionData} />
        ) : (
          <AddCompetitionBox />
        )}
        <GithubFooter />
      </Stack>
    </>
  );
}

export default App;
