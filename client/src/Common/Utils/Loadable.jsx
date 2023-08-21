import { Suspense } from "react";

// Project imports
import Loader from "../Components/Loaders/Loader";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
