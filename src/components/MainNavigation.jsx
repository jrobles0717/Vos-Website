import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <a className={classes.link} href="#">
              Videos
            </a>
          </li>
          <li>
            <a className={classes.link} href="#">
              About Me
            </a>
          </li>
          <li>
            <a className={[classes.link, classes.cta].join(" ")} href="#">
              Mailing List
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
