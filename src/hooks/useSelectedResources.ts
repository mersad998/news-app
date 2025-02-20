import { ReduxState } from '@pages/FeedsPage/feedsPageTypes';
import { changeActivation } from '@redux/resourcesSlice';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { allSelectableResources } from './usePrepareData';

export const useSelectedResources = () => {
  const dispatch: ThunkDispatch<void, void, AnyAction> = useDispatch();

  const selectedResources = useSelector<{ resources: ReduxState }>((state) => {
    return Object.keys(state.resources)
      .map((resource) => {
        return (state.resources as any)[resource]['isActive'] ? resource : '';
      })
      .filter((res) => res);
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
