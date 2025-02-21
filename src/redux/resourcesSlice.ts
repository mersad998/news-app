import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsResources } from '@providers/dataProvider/dataProviderTypes';
import NYTMockData from '@constants/NYTMockData.json'; // you can uncomment this line to use mock data

import { ResourcesState } from './types';

import type {
  SetDataPayload,
  SetErrorPayload,
  SetBulkParametersPayload,
  SetParameterPayload,
  ChangeActivationPayload,
} from './types';
import type { NewsApiArticleInterface, TheGuardianArticleInterface, NYTimesArticleInterface } from '@pages/FeedsPage/newsTypes';

//  initial data
const initialState: ResourcesState = {
  [NewsResources.NewsApi]: {
    data: null,
    hasError: false,
    isLoading: true,
    isActive: true,
    parameters: {
      page: 1,
      pageSize: 10,
      q: 'news',
    },
  },
  [NewsResources.TheGuardian]: {
    data: null,
    hasError: false,
    isLoading: true,
    isActive: true,
    parameters: {
      page: 1,
      perPage: 10,
    },
  },
  [NewsResources.NewYorkTimes]: {
    data: null,
    hasError: false,
    isLoading: true,
    isActive: false,
    parameters: {
      page: 1,
      pageSize: 10,
    },
  },
};

// create slice
const resourcesSlice = createSlice({
  name: 'newsResources',
  initialState,
  reducers: {
    setData: <
      T extends
        | Omit<NewsApiArticleInterface, 'parameters'>
        | Omit<TheGuardianArticleInterface, 'parameters'>
        | Omit<NYTimesArticleInterface, 'parameters'>,
    >(
      state: ResourcesState,
      action: PayloadAction<SetDataPayload<T>>,
    ) => {
      const { resourceName, data } = action.payload;
      state[resourceName].data = data;
      state[resourceName].isLoading = false;
    },

    setError: (state, action: PayloadAction<SetErrorPayload>) => {
      const { resourceName } = action.payload;
      state[resourceName].hasError = true;
      state[resourceName].isLoading = false;

      // use mock data in case of failure
      state[resourceName].data = NYTMockData.response as NYTimesArticleInterface;
    },

    setParameter: (state, action: PayloadAction<SetParameterPayload>) => {
      const { resource, parameters } = action.payload;
      state[resource].parameters = { ...state[resource].parameters, ...parameters };
    },

    changeActivation: (state, action: PayloadAction<ChangeActivationPayload>) => {
      const { resource, isActive } = action.payload;
      state[resource].isActive = isActive;
    },

    setBulkParameters: (state, action: PayloadAction<SetBulkParametersPayload>) => {
      state[NewsResources.NewsApi].parameters = { ...state.NEWS_API.parameters, ...action.payload[NewsResources.NewsApi] };
      state[NewsResources.TheGuardian].parameters = {
        ...state.THE_GUARDIAN.parameters,
        ...action.payload[NewsResources.TheGuardian],
      };
      state[NewsResources.NewYorkTimes].parameters = {
        ...state.NEW_YORK_TIMES.parameters,
        ...action.payload[NewsResources.NewYorkTimes],
      };
    },
  },
});

// export actions
export const { setData, setError, setParameter, setBulkParameters, changeActivation } = resourcesSlice.actions;

// export reducer
export default resourcesSlice.reducer;
