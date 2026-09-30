import { SearchIcon } from '../components/Icons';

export function NightsScreen() {
  return (
    <div className="screen page">
      <h1 className="page-title">Nights</h1>
      <label className="search-box">
        <SearchIcon />
        <input type="search" placeholder="Search a night, team or artist" disabled />
      </label>
      <div className="card empty-card">
        <div className="card-title">The calendar is on its way.</div>
        <div className="card-body">
          A calendar shaded by each night's rating, plus Famous nights, arrives in step 4.
        </div>
      </div>
    </div>
  );
}
