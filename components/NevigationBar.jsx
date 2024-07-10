import { navBarOptions } from "@/constants";
import Image from "next/image";
const NevigationBar = () => {
  return (
    <section>
      <Image
        src={navBarOptions.logo}
        alt=""
        height={100}
        width={100}
        style={{ height: "auto", width: "10rem" }}
      />
      <ul>
        {Object.keys(navBarOptions.tabs).map((tab, index) => (
          <li key={tab+"-"+index}>
            <a href={navBarOptions.tabs[tab]} className="no-underline">{tab}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NevigationBar;
