import CardList from "@/components/casrdList/CardList";
import CategoryList from "@/components/categoryList/CategoryList";
import Featured from "@/components/featured/Featured";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <main>
      <Featured />
      <CategoryList />
      <div className="grid grid-cols-7 gap-5">
        <CardList />
        <Menu />
      </div>
    </main>
  );
}
