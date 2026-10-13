import type { ReactNode, Ref } from 'react';
import type { Metro } from '../config/metros';
import { AreaSwitcher } from './AreaSwitcher';
import { SearchButton } from './SearchButton';

/**
 * Explore's title row (build notes 4, 1.2; Kylie V03): the city name left at the same 24 pt bold
 * as Stubs, Following and You, one 56 pt row, actions in circles on the right. Map and List share it.
 */
export function ExploreHeader({
  metro,
  areaOpen,
  onAreaOpenChange,
  areaRef,
  children,
}: {
  metro: Metro;
  areaOpen: boolean;
  onAreaOpenChange: (open: boolean) => void;
  areaRef?: Ref<HTMLDivElement>;
  /** Controls that sit left of search (the Map / List switch). */
  children?: ReactNode;
}) {
  return (
    <div className="you-header explore-title-row">
      <div ref={areaRef} className="explore-title-area">
        <AreaSwitcher metro={metro} open={areaOpen} onOpenChange={onAreaOpenChange} variant="title" />
      </div>
      {children}
      <SearchButton metroId={metro.id} className="you-search" />
    </div>
  );
}
