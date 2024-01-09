import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import styles from "./GithubFooter.module.css";

function GithubFooter() {
  return (
    <footer>
      <ActionIcon
        size={50}
        variant="filled"
        color="#2e294e"
        radius="xl"
        aria-label="Link to my GitHub"
        component="a"
        href="https://github.com/henrylin03/"
        target="_blank"
      >
        <IconBrandGithub stroke={2.3} className={styles.icon} />
      </ActionIcon>
    </footer>
  );
}

export default GithubFooter;
