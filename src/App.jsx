import { Stack, Image } from "@mantine/core";
import headerIcon from "./assets/images/gi.png";
import AddCompetitionBox from "./components/AddCompetitionBox";
import CountdownTimer from "./components/CountdownTimer";
import GithubFooter from "./components/GithubFooter";

function App() {
  const getStoredCompetition = () => {
    const retrievedData = window.localStorage.getItem("competition-form");
    return retrievedData ? JSON.parse(retrievedData) : null;
  };

  const storedCompetition = getStoredCompetition();

  // console.log(getStoredCompetition);
  // localStorage.removeItem("competition-form");

  return (
    <>
      <Stack align="center" gap="lg">
        <Image src={headerIcon} alt="Jiujitsu gi emoji" w={100} mt="xl" />
        {storedCompetition ? (
          <CountdownTimer storedCompetition={storedCompetition} />
        ) : (
          <AddCompetitionBox />
        )}
        <GithubFooter />
      </Stack>
    </>
  );
}

export default App;
