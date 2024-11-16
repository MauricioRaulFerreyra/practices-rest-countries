import { Suspense } from "react"
import Header from '../../components/layout/Header'
import { LoadingSpinner } from "../../components/loadingSpinner/LoadingSpinner"
import CountryListWithSuspense from "../../components/countryListWithSuspense/CountryListWithSuspense"

const Home = () => {

  return (
    <div className="bg-white dark:bg-gray-700 min-h-screen">
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <CountryListWithSuspense />
      </Suspense>
    </div>
  );
};

export default Home;