import { useState } from "react";
import Header from "../../components/header";

import ContactUs from "./contact_us";
import Event from "./event";
import HowItWorks from "./how_it_works";
import Introduction from "./introduction";
import Memorial from "./memorial";
import Patreons from "./patreons";
import Team from "./team";
import YearTheme from "./year_theme";

function Home() {
  const [headerActive, setHeaderActive] = useState(false);
  return (
    <div className="h-full w-full">
      <Header active={headerActive} />

      <Introduction onInViewChange={(inView) => setHeaderActive(!inView)} />
      <Event />
      <HowItWorks />

      <YearTheme />
      <Memorial />

      <Team />
      <Patreons />
      <ContactUs />

      {/* Footer */}
    </div>
  );
}

export default Home;
