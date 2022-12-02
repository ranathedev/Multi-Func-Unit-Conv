import Link from "next/link";

import stl from "./Stories.module.scss";

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/homepage">HomePage</Link>
    <Link href="/stories/navbar">Navbar</Link>
    <Link href="/stories/unit-converter">UnitConverter</Link>
    <Link href="/stories/sidebar">Sidebar</Link>
  </div>
);

export default StoriesLinks;
