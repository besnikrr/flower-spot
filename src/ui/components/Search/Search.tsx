import styles from './Search.module.scss';
interface SearchProps {
  onChange: (e: any) => void;
}

export const Search = ({ onChange }: SearchProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        placeholder="Looking for something specific?"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <span></span>
    </div>
  );
};
