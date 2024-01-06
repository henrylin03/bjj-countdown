import { Stack, Image, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { useLocalStorage } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import headerIcon from "./assets/images/gi.png";
import AddCompetitionButton from "./components/AddCompetitionButton/AddCompetitionButton";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import GithubFooter from "./components/GithubFooter/GithubFooter";

function App() {
  const [storedCompetitionData, setStoredCompetitionData] = useLocalStorage({
    key: "competition-form",
    defaultValue: null,
  });

  return (
    <MantineProvider theme={{ fontFamily: "Montserrat, sans-serif" }}>
      <ModalsProvider>
        <Stack align="center" bg="#2e294e" justify="space-evenly" h="100vh">
          <header>
            <Image src={headerIcon} id="headerIcon" alt="Jiujitsu gi emoji" />
          </header>
          {storedCompetitionData ? (
            <CountdownTimer storedCompetitionData={storedCompetitionData} />
          ) : (
            <AddCompetitionButton />
          )}
          <GithubFooter />
        </Stack>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
