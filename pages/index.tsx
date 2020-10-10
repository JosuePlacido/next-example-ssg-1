import { GetStaticProps } from "next";

export default function Home({ user }) {
	return (
		<div>
			<h1>{user.name}</h1>
			<h3>{user.bio}</h3>
			<p>
				<a href={user.url}>Profile</a>
			</p>
		</div>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch("http://api.github.com/users/josueplacido");
	const data = await response.json();
	return {
		props: {
			user: data,
		},
		revalidate: 10,
	};
};
