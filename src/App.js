import {
  useQuery,
  useQueries,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import axios from 'axios';

import './App.scss';
// import Species from './Species';

const API_URL = 'https://swapi.dev/api/films/2/';
// const SPECIES_IMAGES = {
//   droid:
//     'https://static.wikia.nocookie.net/starwars/images/f/fb/Droid_Trio_TLJ_alt.png',
//   human:
//     'https://static.wikia.nocookie.net/starwars/images/3/3f/HumansInTheResistance-TROS.jpg',
//   trandoshan:
//     'https://static.wikia.nocookie.net/starwars/images/7/72/Bossk_full_body.png',
//   wookie:
//     'https://static.wikia.nocookie.net/starwars/images/1/1e/Chewbacca-Fathead.png',
//   yoda: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png',
// };
// const CM_TO_IN_CONVERSION_RATIO = 2.54;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SpeciesList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

function SpeciesList() {
  const {data: speciesList} = useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const {rest: data} = await axios(API_URL);
      console.log(data);
      return data;
    },
  });

  // const {data, status, error} = useQueries({
  //   queries: species.length && species.map(async specie => {
  //     return {
  //       queryKey: ['specie', specie],
  //       queryFn: async () => await axios(specie),
  //       enabled: !!species,
  //     };
  //   }),
  // });

  // if (status === 'loading') {
  //   return <span>Loading...</span>;
  // }

  // if (status === 'error') {
  //   return <span>Error: {error.message}</span>;
  // }

  // console.log(speciesList);

  return (
    <div className="App">
      <h1>Empire Strikes Back - Species Listing</h1>

      <div className="App-species" />
    </div>
  );
}

export default App;
