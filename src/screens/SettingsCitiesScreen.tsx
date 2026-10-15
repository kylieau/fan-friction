import { CityList } from '../components/HomePicker';
import { BackLink } from '../components/BackLink';

/**
 * Settings › Home & cities (build 5, items 8–9; board favorite-cities c): the first-open city list as a page.
 * Setting home here doesn't leave the page.
 */
export function SettingsCitiesScreen() {
  return (
    <div className="screen page">
      <BackLink to="/you/settings" label="Settings" />
      <h1 className="page-title">Home &amp; cities</h1>
      <div className="settings">
        <div className="settings-heading">Home</div>
        <p className="you-fine">Tap a city to make it home. Star any others you follow; they're pinned under Home and in the city menu.</p>
        <CityList variant="page" />
      </div>
    </div>
  );
}
