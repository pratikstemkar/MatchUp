import { Link } from "react-router-dom";

const Navlink = ({ params }: { params: { link: string } }) => {
	return <Link to={`/${params.link.toLowerCase()}`}>{params.link}</Link>;
};

export default Navlink;
