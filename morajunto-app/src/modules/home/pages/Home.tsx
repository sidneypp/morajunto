import { AdvertiseForFree } from "../components/AdvertiseForFree";
import { AvailableCities } from "../components/AvailableCities";
import { Benefits } from "../components/Benefits";
import { SearchRoom } from "../components/SearchRoom";

export function Home() {
  return (
    <>
      <SearchRoom />
      <AvailableCities />
      <Benefits />
      <AdvertiseForFree />
    </>
  );
}
