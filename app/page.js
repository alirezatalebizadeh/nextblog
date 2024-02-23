import CardList from "@/components/casrdList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
      <main className="">
        <Featured />
        <CategoryList />
        <div className="">
          <CardList />
          <Menu />
        </div>
      </main>
  );
}
