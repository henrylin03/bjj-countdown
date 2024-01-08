import { ActionIcon } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import styles from "./GithubFooter.module.css";

function GithubFooter() {
  return (
    <footer>
      <ActionIcon
        className={styles.iconContainer}
        size="xl"
        variant="filled"
        radius="xl"
        color="#2e294e"
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
