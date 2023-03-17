import classes from "./MailingList.module.css";

function MailingList() {
  return (
    <section className={classes.section} id="mailing">
      <div className={classes.container}>
        <h2 className={classes.primaryTitle}>Mailing List</h2>
        <div className={classes.ctaBox}>
          <div className={classes.textBox}>
            {/* <h3 className={classes.secondaryTitle}>
              Be the first one to hear my incoming music and more!
            </h3>
            <p className={classes.ctaText}>
              Feel free to hear new style of music with diversity and enjoy the
              moment!
            </p> */}
            <form className={classes.form} name="mailing-list" netlify>
              <div>
                <label for="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  required
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jsmith@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label for="city">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder="San Juan, Puerto Rico"
                  name="city"
                  required
                />
              </div>
              <div>
                <label for="select-where">Where did you hear about me?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="spotify">Spotify</option>
                  <option value="apple">Apple Music</option>
                  <option value="amazon">Amazon Music</option>
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter</option>
                  <option value="facebook">Facebook</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className={classes.btnForm}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailingList;
