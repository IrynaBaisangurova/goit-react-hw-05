import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.contentWrapper}> 
      <h1 className={s.title}> Page not found
					<span className={s.text}>
						<Link to='/'>Go To Home Page</Link>
					</span>
      </h1>
    </div>
  );
};

export default NotFoundPage;
