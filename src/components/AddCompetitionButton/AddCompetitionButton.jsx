import { modals } from "@mantine/modals";
import { Text, Button } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import AddCompetitionModal from "./AddCompetitionModal.jsx";
import styles from "./AddCompetitionButton.module.css";

function AddCompetitionBox() {
  return (
    <Button
      variant="filled"
      size="xl"
      leftSection={<IconCirclePlus size={27} />}
      className={styles.button}
      onClick={() => {
        modals.open({
          title: <Text className="modalHeading">New Competition</Text>,
          children: <AddCompetitionModal />,
          centered: true,
        });
      }}
    >
      Add competition
    </Button>
  );
}

export default AddCompetitionBox;
