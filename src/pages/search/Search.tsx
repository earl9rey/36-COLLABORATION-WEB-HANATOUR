// import SearchDetailWrapper from './components/SearchDetailWrapper';
import SearchFilterList from './components/SearchFilterList';
import SearchHeader from './components/SearchHeader';
// import SearchTopFilter from './components/SearchTopFilter';

const Search = () => {
  return (
    <div className="head1-sb-36">
      <SearchHeader arrival="호놀룰루" departure="인천/김포" date="2025.06.03(화) ~ 2025.06.09(월)" />
      <div className="">
        <SearchFilterList />
        {/* <div>
          <SearchTopFilter />
          <SearchDetailWrapper />
        </div> */}
      </div>
    </div>
  );
};

export default Search;
