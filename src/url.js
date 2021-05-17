import react, { useState, useEffect } from "react";
import { PostUrl, getUrl } from "./api";
import { useParams, useHistory } from "react-router";

export default function URL() {
  let history = useHistory();
  const params = useParams();
  const [longUrl, setLongUrl] = useState("");
  const url = { longUrl };
  const [urlData, setUrlData] = useState([]);

  useEffect(async () => {
    let urls = await getUrl(params.id);
    setUrlData(...urlData, urls.data);
    console.log("asdas");
    console.log(urls);
  }, []);
  async function handleUrlSubmit(e) {
    // e.preventDefault();
    await PostUrl(params.id, url);
    // console.log(params.id, url);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-warning"
            onClick={() => {
              window.localStorage.removeItem("app_token");

              history.push(`/`);
            }}
          >
            Logout
          </button>
        </div>
        <div className="row">
          <div className="col-12">
            <form onSubmit={handleUrlSubmit}>
              <div className="mb-3">
                <label htmlFor="url" className="form-label">
                  Long URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  placeholder="Enter your URL here"
                  value={longUrl}
                  onChange={(e) => {
                    setLongUrl(e.target.value);
                  }}
                />
              </div>
              <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-warning col-3">
                  Shorten URL
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-5 col-12">
          <h2>Your Previous URL's</h2>
          <br />
          <div className="row mt-2">
            <div className="list">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">long-URL</th>
                    <th scope="col">Short-URL</th>
                  </tr>
                </thead>
                <tbody>
                  {urlData.map((item, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td className="urlcol">{item.longUrl}</td>
                        <td className="surlcol">
                          <a
                            href={`https://myurlapp.herokuapp.com/${item.shortUrl}`}
                            target="_blank"
                          >
                           https://myurlapp.herokuapp.com/{item.shortUrl}
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
