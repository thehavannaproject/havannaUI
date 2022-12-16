import BaseLayout from "../components/layout/BaseLayout/BaseLayout";
import HomePage from "@components/organisms/LandingPages/home/HomePage.js/HomePage";

export default function Home() {
  return (
    <BaseLayout>
    <div className="television:flex television:justify-center television:items-center">
      <HomePage/>
    </div>
    </BaseLayout>
  )
}
