import Banner from "@/components/homepage/Banner";
import Library from "@/components/homepage/Library";
import LibraryLoading from "@/components/homepage/LibraryLoading";
import { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<LibraryLoading />}>
        <Library />
      </Suspense>
    </div>
  );
};

export default page;