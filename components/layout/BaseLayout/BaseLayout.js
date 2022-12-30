import Footer from "@layout/Footer";
import Header from "@layout/Header/Header";

const BaseLayout = ({children} ) => {
	return (
		<div className='relative'>
			<Header/>
			<main>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default BaseLayout;
