import { ReduxState } from '@pages/FeedsPage/feedsPageTypes';
import { changeActivation } from '@redux/resourcesSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { allSelectableResources } from './usePrepareData';

export const useSelectedResources = (): { selectedResources: string[]; onResourceSelect: (value: string[]) => void } => {
  const dispatch: ThunkDispatch<void, void, AnyAction> = useDispatch();

  const selectedResources = useSelector<{ resources: ReduxState }, string[]>((state) => {
    return Object.keys(state.resources)
      .map((resource) => {
        return (state.resources as Record<string, { isActive: boolean }>)[resource].isActive ? resource : '';
      })
      .filter((resourceName) => resourceName);
  });

  const onResourceSelect = (value: string[]): void => {
    allSelectableResources.forEach((resource) => {
      dispatch(
        changeActivation({
          resource,
          isActive: value.includes(resource),
        }),
      );
    });
  };

  return { selectedResources, onResourceSelect };
};
