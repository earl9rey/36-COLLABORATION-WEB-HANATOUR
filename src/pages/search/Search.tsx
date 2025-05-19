import SearchDetailWrapper from './components/SearchDetailWrapper';
import SearchHeader from './components/SearchHeader';
import SearchTopFilter from './components/SearchTopFilter';

const Search = () => {
  return (
    <div className="head1-sb-36">
      <SearchHeader />
      <SearchTopFilter />
      <SearchDetailWrapper />
    </div>
  );
};

export default Search;
