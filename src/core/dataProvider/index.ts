import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { createQueryParameters, getBaseUrlByResourceName } from './dataProviderHelpers';
import { setData, setError } from '../../redux/resourcesSlice';

import type { ApiKeyInformation, FetchData } from './dataProviderTypes';

const getDataFromApi: FetchData = async (payload, { dispatch }) => {
  const { resource, parameters, valueKeyName } = payload;
  const { baseUrl, apiKeyName, apiKeyValue } = getBaseUrlByResourceName(resource);

  const apiKeyInformation = { [apiKeyName]: apiKeyValue } as ApiKeyInformation;
  const queryParameters = createQueryParameters(parameters, apiKeyInformation);

  try {
    // const response = await axios.get(`${baseUrl}${queryParameters}`, { timeout: 10000 });
    const response = {
      data: {
        status: 'ok',
        totalResults: 169,
        articles: [
          {
            source: { id: 'cbc-news', name: 'CBC News' },
            author: 'CBC News',
            title: 'Quebec struggles to dig out from back-to-back storms | CBC News',
            description:
              'Quebec is still struggling to dig out from record-breaking back-to-back storms, with schools in some parts of the province closed. Most schools in Montreal are open despite the abundance of snow and many sidewalks not being cleared.',
            url: 'http://www.cbc.ca/news/canada/montreal/southern-quebec-snowstorms-schools-closed-1.7461516',
            urlToImage:
              'https://i.cbc.ca/1.7461596.1739888906!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_1180/fea-mtl-storm-20250217.jpg?im=Resize%3D620',
            publishedAt: '2025-02-18T18:07:38.8509631Z',
            content:
              'Quebec is still struggling to recover from record-breaking back-to-back storms, with schools and roads in some parts of the province closed.\r\nSchools in Montreal are open despite the abundance of sno… [+3082 chars]',
          },
          {
            source: { id: 'cbc-news', name: 'CBC News' },
            author: 'CBC News',
            title: "Pearson airport president 'won't speculate' on cause of Monday's plane crash | CBC News",
            description:
              "The president and CEO of Toronto's Pearson International Airport says an investigation into Monday's crash has begun.",
            url: 'http://www.cbc.ca/news/canada/toronto/pearson-update-crash-1.7461708',
            urlToImage:
              'https://i.cbc.ca/1.7461677.1739893078!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/toronto-delta-crash.jpg?im=Resize%3D620',
            publishedAt: '2025-02-18T18:07:35.411908Z',
            content:
              "The president and CEO of Toronto's Pearson International Airport says crash investigators are on site at the airport following a plane crash this week that sent multiple people to hospital.\r\nDeborah … [+603 chars]",
          },
          {
            source: { id: 'news24', name: 'News24' },
            author: 'Compiled by Phumla Makhubo',
            title: "Fort Hare to revoke govt officials' degrees; Ithala another VBS? Today's top 7 stories in 7 minutes",
            description:
              'News24 brings you the top stories of the day, summarised into neat little packages. Read through quickly or listen to the articles via our customised text-to-speech feature.',
            url: 'https://www.news24.com/news24/southafrica/news/fort-hare-to-revoke-govt-officials-degrees-ithala-another-vbs-todays-top-7-stories-in-7-minutes-20250218',
            urlToImage: 'https://cdn.24.co.za/files/Cms/General/d/12707/b51859cea3b246b89402ce4c045da117.jpg',
            publishedAt: '2025-02-18T18:00:17',
            content:
              '- Sphamandla Siyalo Khumalo is on trial for the murder of his ex-girlfriend, Nomfundo Thandiswa Nomonde Msibi, which occurred at a mall in Durban.\r\n- CCTV footage of the gruesome attack, showing Khum… [+291 chars]',
          },
          {
            source: { id: 'cbs-news', name: 'CBS News' },
            author: 'CBS News',
            title: 'Snow expected in Kentucky where floods turned deadly',
            description:
              "Parts of Kentucky still dealing with deadly floods are now expecting snow. CBS News' Karen Hua has the latest.",
            url: 'https://www.cbsnews.com/video/snow-expected-in-kentucky-where-floods-turned-deadly/',
            urlToImage:
              'https://assets3.cbsnewsstatic.com/hub/i/r/2025/02/18/7f77a0c3-d024-4d19-b6f1-da947d201212/thumbnail/1200x630/3d79a9b4356531d0745925ee22e84eb5/cbsn-fusion-snow-expected-in-kentucky-where-floods-turned-deadly-thumbnail.jpg?v=f303dc12868a012283443d8b9123e5fe',
            publishedAt: '2025-02-18T17:57:00+00:00',
            content:
              'Watch CBS News\r\nCopyright ©2025 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On',
          },
          {
            source: { id: 'bild', name: 'Bild' },
            author: 'Johannes Schmitz, Till Henniges',
            title: 'Sado-Maso-Stammtisch: Politik und Schmerz im Münchener Ochsengarten | News',
            description:
              'Im der urigen Kneipe „Ochsengarten“ in München treffen sich Sado-Maso-Fans und diskutieren über Politik, Wahlen und gesellschaftliche Themen.',
            url: 'https://www.bild.de/news/inland/sado-maso-stammtisch-politik-und-schmerz-im-muenchener-ochsengarten-67b300407da76e6629a07a32',
            urlToImage: 'https://images.bild.de/67b300407da76e6629a07a32/2b5f44afbb6cfb368d61f1fe58046059,3ff14c8?w=1280',
            publishedAt: '2025-02-18T17:53:00Z',
            content:
              'Donnerstags treffen sich Sado-Maso-Liebhaber im Ochsengarten. Am Tresen der Kneipe diskutieren sie über Alltägliches und Politik. Dort tauschen sie ihre Wünsche und Sorgen aus, im angrenzenden Darkro… [+128 chars]',
          },
          {
            source: { id: 'cbs-news', name: 'CBS News' },
            author: 'CBS News',
            title: 'New York governor considering removing Eric Adams as NYC mayor',
            description:
              "New York Gov. Kathy Hochul is holding meetings to discuss Eric Adam's future as mayor of New York City. CBS News' Scott MacFarlane reports.",
            url: 'https://www.cbsnews.com/video/new-york-governor-considering-removing-eric-adams-as-nyc-mayor/',
            urlToImage:
              'https://assets1.cbsnewsstatic.com/hub/i/r/2025/02/18/44ed4c4f-e99d-42f9-90d9-3ff1f7a3c064/thumbnail/1200x630/a3db4f75a810d02f2cfa3b7e61fbe2bf/cbsn-fusion-new-york-governor-considering-removing-eric-adams-as-nyc-mayor-thumbnail.jpg?v=f303dc12868a012283443d8b9123e5fe',
            publishedAt: '2025-02-18T17:48:00+00:00',
            content:
              'Watch CBS News\r\nCopyright ©2025 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On',
          },
          {
            source: { id: 'google-news-br', name: 'Google News (Brasil)' },
            author: null,
            title: 'Google News',
            description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
            url: 'https://news.google.com/rss/articles/CBMi0wFBVV95cUxNbjJONE91SGJyd3BvdlZKTUtENk1GaW91V0dSMTVsYjh4ekFfY0ZQZVlKZ3E3ZDlkYTNnVlVaay15MkYwd1NuUkJ3VDBBOGdVNlFUMm0yVFdNdDVIaDk2RGViSm94MnFiVnBOdXFUUndrRHRMcG5sV0FMV1hDejAybzRiREtKTjloNG9XODVOaTBUajJiRllEYkM0YlBvSlUwN1FfLUR1WE5PVGFDNzRwMk5QQkpXOGpmdVc3ZWVjbFBJN3I5MHNoRUVNVzFFdXN6LWRN',
            urlToImage:
              'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
            publishedAt: '2025-02-18T17:43:00+00:00',
            content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
          },
          {
            source: { id: 'cbs-news', name: 'CBS News' },
            author: 'CBS News',
            title: "Can Trump broker peace between Russia's Putin and Ukraine without Zelenskyy?",
            description:
              "President Trump's Secretary of State Marco Rubio kicked off high-level talks with Russian representatives in Saudi Arabia as part of the U.S. efforts to broker a peace deal between Russia and Ukraine. CBS News' Olivia Rinaldi reports.",
            url: 'https://www.cbsnews.com/video/can-trump-broker-peace-between-russias-putin-and-ukraine-without-zelenskyy/',
            urlToImage:
              'https://assets1.cbsnewsstatic.com/hub/i/r/2025/02/18/931a5a0c-15e8-4bd0-8650-31a273290d41/thumbnail/1200x630/ed16f11a228c80731cd26b2fd19693b3/cbsn-fusion-can-trump-broker-peace-between-russias-putin-and-ukraine-without-zelenskyy-thumbnail.jpg?v=f303dc12868a012283443d8b9123e5fe',
            publishedAt: '2025-02-18T17:39:00+00:00',
            content:
              'Watch CBS News\r\nCopyright ©2025 CBS Interactive Inc. All rights reserved.\r\nGet browser notifications for breaking news, live events, and exclusive reporting.\r\nNot NowTurn On',
          },
          {
            source: { id: 'google-news-uk', name: 'Google News (UK)' },
            author: null,
            title: 'Google News',
            description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
            url: 'https://news.google.com/rss/articles/CBMicEFVX3lxTFBXc2tjU3k2cGJ6TG1FcDN2LWFKaWM4Tk1DdU1Bd0c2ZmdNckU3RTdvSkNzLVFNODNSVW9tZy1vSnNqbnBRMjBXdFBtdVJYRFRoTnIzMWdfbEg1aTJiUFltQVNidm9BVmdHUnJmTDcwSGo',
            urlToImage:
              'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
            publishedAt: '2025-02-18T17:38:31+00:00',
            content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
          },
          {
            source: { id: 'google-news-uk', name: 'Google News (UK)' },
            author: null,
            title: 'Google News',
            description: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
            url: 'https://news.google.com/rss/articles/CBMi1gFBVV95cUxPNFZ2RDhiWVp4OFdPbVNua256bjlPVjdhS21JQm9EVUE4QXN0VlNVU0tVWVkzZl90QmY2SzZueGw1b1JiTWNmTHNud3IxOHZ2VXVpVmhqTkR0bHlRWTNFUHhhS2hSam90WjJVSDdyUDhNWXZzQW1yYURNRmVBRDE2dDFDUXZqRXhTSHRTVzBXUUcyQjlJVHNvWVNMUFloLUs0ODVweXRiQ2RxRnhmUGc5dFdfTTlheV9OdEE2a1JTcXM4c3R5UmFqMWRtWF9jOE9LeFRUQldR',
            urlToImage:
              'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw',
            publishedAt: '2025-02-18T17:37:30+00:00',
            content: 'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
          },
        ],
      },
    };
    const data = valueKeyName ? response.data[valueKeyName] : response.data;

    dispatch(setData({ resourceName: resource, data }));
    return data;
  } catch (error) {
    dispatch(setError({ resourceName: resource }));
    throw error; // Re-throw the error for the component to handle if needed
  }
};

export const fetchData = createAsyncThunk('newsResources/fetchData', getDataFromApi);
