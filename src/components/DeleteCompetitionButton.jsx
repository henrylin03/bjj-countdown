import { Container, CloseButton, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

// ? not sure if it is the best to be using `mb={-50}` on container or if there is an alternate way of getting the close button to appear on the top right corner!

function DeleteCompetitionButton() {
  const handleCloseButtonClick = () =>
    modals.openConfirmModal({
      title: <Title order={4}>Delete Competition</Title>,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this competition? This action cannot
          be undone.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      // onConfirm: () =>
    });

  return (
    <Container fluid ta="right" m="xs" mb={-50}>
      <CloseButton variant="transparent" onClick={handleCloseButtonClick} />
    </Container>
  );
}

export default DeleteCompetitionButton;
