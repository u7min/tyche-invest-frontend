import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      <Helmet>
        <title>My Invest | Landing</title>
      </Helmet>
      <div>Landing Page</div>
      <div>
        <div>
          <Link to={"/allocation"}>Go Allocation</Link>
        </div>
        <div>
          <Link to={"/conclude-assets-value"}>Go Conclude Assets Value</Link>
        </div>
        <div>
          <Link to={"/statistics"}>Go Statistics</Link>
        </div>
      </div>
    </div>
  );
};
