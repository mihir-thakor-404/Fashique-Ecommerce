import Banner from "./Banner/page";
import Blogs from "./Blogs/page";
import Category from "./Category/page";
import Companies from "./Companies/page";
import Follow from "./Follow/page";
import Hero from "./Hero/page";
import PopularProducts from "./PopularProducts/page";
import Trending from "./Trending/page";


export default function Index() {
    return (
        <>
            <Hero />
            <Category />
            <Trending />
            <Banner />
            <PopularProducts />
            <Companies />
            <Blogs />
            <Follow />
        </>
    )
}
