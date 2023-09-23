import { Stack, Image } from "@mantine/core";
import headerIcon from "./assets/images/gi.png";
import AddCompetitionBox from "./components/AddCompetitionBox";
import CountdownTimer from "./components/CountdownTimer";
import GithubFooter from "./components/GithubFooter";

function App() {
  return (
    <>
      <Stack align="center" justify="space-between">
        <Image src={headerIcon} alt="Jiujitsu gi emoji" w={100} mt="xl" />
        <CountdownTimer />
        <AddCompetitionBox />
        <GithubFooter />
      </Stack>
    </>
  );
}

export default App;
