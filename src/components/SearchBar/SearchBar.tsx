import { Formik, Form, Field } from 'formik';
import styles from './SearchBar.module.css';
import toast from 'react-hot-toast';

export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

interface SearchFormValues {
  query: string;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const initialValues: SearchFormValues = { query: '' };

  const handleSubmit = (values: SearchFormValues) => {
    const query = values.query.trim();

    if (!query) {
      toast.error('Please enter your search query');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.form}>
            <Field
              className={styles.input}
              type="text"
              name="query"
              autoComplete="off"
              placeholder="Search movies..."
              autoFocus
            />
            <button className={styles.button} type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;
