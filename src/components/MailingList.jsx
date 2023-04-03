import "../../css/index.css";
import "../../css/style.css";

function MailingList() {
  return (
    <section className="section-mailing" id="mailing">
      <div className="container">
        <h2 className="title">Mailing List</h2>
        <div className="mailing-box">
          <div className="mailing-text-box">
            <form
              className="mailing-form"
              name="mailing-list"
              method="post"
              data-netlify="true"
              onSubmit="submit"
            >
              <div>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  name="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="jsmith@example.com"
                  name="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  placeholder="San Juan, Puerto Rico"
                  name="city"
                  required
                />
              </div>
              <div>
                <label htmlFor="select-where">
                  Where did you hear about me?
                </label>
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

              <button className="btn btn--form" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailingList;
