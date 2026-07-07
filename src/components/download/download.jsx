import { assets } from "../../assets/assets";
import "./download.css";

function Download() {
  return (
    <div className="d-c">
      <h1>For a Better Experience, Download <br/>the ZESTO App</h1>
      <p>Track your order, save favourites, and get exclusive deals — right from your pocket.</p>
      <div className="images-sec">
        <img src={assets.play_store}/>
        <img src={assets.app_store}/>
      </div>
    </div>
  );
}

export default Download;
