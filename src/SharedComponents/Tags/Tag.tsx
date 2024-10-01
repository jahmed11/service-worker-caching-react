import styles from "./tag.module.css";

interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return <span className={styles.tag}>{name}</span>;
};

export default Tag;
