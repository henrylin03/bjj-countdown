import { modals } from "@mantine/modals";
import { Box, Title, Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import AddCompetitionModal from "./AddCompetitionModal.jsx";

function AddCompetitionBox() {
  return (
    <Box w="80%" my="xl">
      <Button
        fullWidth
        variant="filled"
        leftSection={<IconCirclePlus size={27} />}
        color="violet"
        size="xl"
        radius="lg"
        mih="15rem"
        onClick={() => {
          modals.open({
            title: <Title order={4}>New Competition</Title>,
            children: <AddCompetitionModal />,
            centered: true,
          });
        }}
      >
        Add new competition
      </Button>
    </Box>
  );
}

export default AddCompetitionBox;
