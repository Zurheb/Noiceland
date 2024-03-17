import { Footer } from "../footer/Footer"
import { BigNews } from "./BIgNews/BigNews"
import { Hero } from "./Hero/Hero"
import { LatestPhoto } from "./LatestPhoto/LatestPhoto"
import { Post } from "./Post/Post"

export const Main = () => {
  return (
    <main>
        <Hero/>
        <BigNews/>
        <LatestPhoto/>
        <Post/>
        <Footer/>
    </main>
 )
}
