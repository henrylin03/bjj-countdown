import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

//TODO: ADD HOVER TO SAY THIS IS MY GITHUB PORTFOLIO

function GithubFooter() {
  return (
    <ActionIcon
      size={50}
      variant="filled"
      color="gray"
      radius="xl"
      aria-label="Link to my GitHub"
      component="a"
      href="https://github.com/henrylin03/"
      target="_blank"
    >
      <IconBrandGithub size={35} stroke={2.3} />
    </ActionIcon>
  );
}

export default GithubFooter;
