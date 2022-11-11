import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  
  function renderCateoryItem(itemData) {
    //선택사항, 단순히 JSX코드 길이를 줄이기 위함
    function pressHandler() {
        navigation.navigate("MealsOverview")
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCateoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
