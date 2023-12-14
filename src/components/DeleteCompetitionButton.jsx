import { Container, CloseButton, Text } from "@mantine/core";
import { modals } from "@mantine/modals";

// ? not sure if it is the best to be using `mb={-50}` on container or if there is an alternate way of getting the close button to appear on the top right corner!

function DeleteCompetitionButton() {
  const handleCloseButtonClick = () => {
    const handleConfirmDelete = () => {
      localStorage.removeItem("competition-form");
      window.location.reload();
    };

    modals.openConfirmModal({
      title: <Text class="modalHeading">Delete Competition</Text>,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete this competition? This action cannot
          be undone.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { color: "red" },
      onConfirm: handleConfirmDelete,
    });
  };

  return (
    <Container fluid ta="right" m="xs" mb={-50}>
      <CloseButton
        variant="transparent"
        onClick={handleCloseButtonClick}
        c="lightgrey"
      />
    </Container>
  );
}

export default DeleteCompetitionButton;
