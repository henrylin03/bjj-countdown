import { useForm, isNotEmpty } from "@mantine/form";
import { Button, Text, TextInput, Stack, Group } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { modals } from "@mantine/modals";
import { IconTrophyFilled, IconCalendarEvent } from "@tabler/icons-react";

function AddCompetitionModal() {
  const handleFormSubmit = () => {
    // add to local storage
    window.localStorage.setItem(
      "competition-form",
      JSON.stringify(form.values)
    );

    modals.closeAll();

    location.reload();
  };

  //? would it be a good idea to pull from localstorage the last name and date of competition?

  const form = useForm({
    initialValues: { name: "", date: null },
    validate: {
      name: isNotEmpty("Enter the competition name"),
      date: isNotEmpty("Select the competition date"),
    },
  });

  return (
    <Stack>
      <Text>Please enter the details of your next competition</Text>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack spacing="md">
          <TextInput
            icon={<IconTrophyFilled size="1.2rem" />}
            placeholder="Competition"
            label="Competition"
            {...form.getInputProps("name")}
            withAsterisk
          />

          <DatePickerInput
            minDate={new Date()}
            icon={<IconCalendarEvent size="1.2rem" />}
            valueFormat="DD MMM YYYY"
            placeholder="Date"
            label="Date"
            withAsterisk
            popoverProps={{ withinPortal: true }} // ensures full visibility of datepicker
            {...form.getInputProps("date")}
          />

          <Group position="center" spacing="xs">
            <Button fullWidth color="violet" radius="md" type="submit">
              Add
            </Button>
            <Button
              color="gray"
              c="black"
              fullWidth
              variant="light"
              radius="md"
              onClick={modals.closeAll}
            >
              Close
            </Button>
          </Group>
        </Stack>
      </form>
    </Stack>
  );
}

export default AddCompetitionModal;
