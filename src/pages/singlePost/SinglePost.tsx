import { useParams } from "react-router-dom";
import { FooterForm } from "../../components/footerForm/FooterForm";
import { HeroSinglePost } from "../../components/hero/heroSinglePost/HeroSinglePost";

const SinglePost = () => {
  const { ID } = useParams();
  const id = ID;
  return (
    <>
      <HeroSinglePost ID={id} />
      <FooterForm />
    </>
  );
};

export default SinglePost;
