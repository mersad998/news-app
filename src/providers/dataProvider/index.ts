import { createAsyncThunk } from '@reduxjs/toolkit';

import { getDataFromApi } from './DataProvider.helper';

export const fetchData = createAsyncThunk('newsResources/fetchData', getDataFromApi);
