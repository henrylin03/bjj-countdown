import { useForm, isNotEmpty } from "@mantine/form";
import { Button, Text, TextInput, Stack } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import { modals } from "@mantine/modals";
import { IconTrophyFilled, IconCalendarEvent } from "@tabler/icons-react";

function AddCompetitionModal() {
  const handleFormSubmit = () => {
    window.localStorage.setItem(
      "competition-form",
      JSON.stringify(form.values)
    );
    modals.closeAll();
    location.reload();
  };

  const getTomorrowsDate = () => {
    const resultDate = new Date();
    resultDate.setDate(resultDate.getDate() + 1);
    return resultDate;
  };

  const form = useForm({
    initialValues: { name: "", date: null },
    validate: {
      name: isNotEmpty("Enter the competition name"),
      date: isNotEmpty("Select the competition date"),
    },
  });

  return (
    <article>
      <form onSubmit={form.onSubmit(handleFormSubmit)}>
        <Stack spacing="md">
          <TextInput
            icon={<IconTrophyFilled size="1.2rem" />}
            placeholder="Competition"
            label="Competition"
            {...form.getInputProps("name")}
            withAsterisk
          />
          <DateInput
            clearable
            minDate={getTomorrowsDate()}
            icon={<IconCalendarEvent size="1.2rem" />}
            valueFormat="D MMMM YYYY"
            placeholder="Date"
            label="Date"
            withAsterisk
            {...form.getInputProps("date")}
          />
          <Stack position="center" gap="xs">
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
          </Stack>
        </Stack>
      </form>
    </article>
  );
}

export default AddCompetitionModal;
