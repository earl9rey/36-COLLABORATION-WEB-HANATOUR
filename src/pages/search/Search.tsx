import { useState } from 'react';
import FloatingButton from './components/FloatingButton';
import SearchDetailWrapper from './components/SearchDetailWrapper';
import SearchFilterList from './components/SearchFilterList/SearchFilterList';
import SearchHeader from './components/SearchHeader';
import SearchTopFilter from './components/SearchTopFilter';
import { useSearchFilters } from './hooks/useSearchFilters';

const Search = () => {
  const searchFilters = useSearchFilters();
  const [period, setPeriod] = useState<string>('');

  const handleApplyFilter = () => {
    const cleanedPeriod = searchFilters.selectedPeriod.replace(/[^0-9]/g, '');
    setPeriod(cleanedPeriod);
  };

  return (
    <div className="head1-sb-36">
      <SearchHeader arrival="호놀룰루" departure="인천/김포" date="2025.06.03(화) ~ 2025.06.09(월)" />
      <div className="mx-auto flex max-w-[119.2rem] justify-center gap-[6rem]">
        <SearchFilterList {...searchFilters} onApplyFilter={handleApplyFilter} />
        <div className="flex flex-1 flex-col">
          <SearchTopFilter selectedFilters={searchFilters} onReset={() => searchFilters.resetFilters()} />
          <SearchDetailWrapper period={period} page={0} size={20} />
        </div>
      </div>

      <FloatingButton />
    </div>
  );
};

export default Search;
