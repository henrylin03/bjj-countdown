import { modals } from "@mantine/modals";
import { Box, Text, Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import AddCompetitionModal from "./AddCompetitionModal.jsx";

function AddCompetitionBox() {
  return (
    <Box w="80%" my="xl">
      <Button
        fullWidth
        variant="filled"
        leftSection={<IconCirclePlus size={27} />}
        color="#92809a"
        size="xl"
        style={{ borderRadius: "1.5rem" }}
        mih="25rem"
        onClick={() => {
          modals.open({
            title: <Text class="modalHeading">New Competition</Text>,
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
