import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCateoryItem(itemData) { //선택사항, 단순히 JSX코드 길이를 줄이기 위함
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
    return (
        <FlatList 
        data={CATEGORIES} 
        keyExtractor={(item) => item.id}
        renderItem={renderCateoryItem} />
    )
}

export default CategoriesScreen;