import { useLocation } from "react-router-dom";
import Posts from "../reusableComponents/posts";

function CategorySearchPage() {
  const path = useLocation().pathname;
  // const [category, setCategory] = React.useState("");

  const category = path.split("/search/").slice(1).toString();
 
  return (
    <div>
      {/* category section according to the path or search*/}
      <Posts category={category} />
    </div>
  );
}

export default CategorySearchPage;
