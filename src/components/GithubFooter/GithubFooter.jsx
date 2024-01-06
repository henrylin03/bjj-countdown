import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

function GithubFooter() {
  return (
    <ActionIcon
      size={50}
      variant="filled"
      color="#2e294e"
      radius="xl"
      aria-label="Link to my GitHub"
      component="a"
      href="https://github.com/henrylin03/"
      target="_blank"
      mb="xl"
    >
      <IconBrandGithub size={30} stroke={2.3} />
    </ActionIcon>
  );
}

export default GithubFooter;
