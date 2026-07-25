// Крафт по рецептам (data/recipes.json, см. items/Recipe.js). Один и тот же
// движок обслуживает все экраны лагеря — "Создать предмет", "Приготовить еду",
// "Сварить зелья" — просто с разным фильтром recipe.kind.
export class CraftingSystem {
  constructor(recipes) {
    this.recipes = recipes; // Map<recipeId, Recipe>
  }

  getByKind(kind, category = 'all') {
    // фильтрация для CraftingUI
  }

  canCraft(recipeId, inventory, quantity = 1) {
    // сверка requirements * quantity с содержимым инвентаря
  }

  craft(recipeId, inventory, quantity = 1) {
    // списывает ресурсы, добавляет результат
  }
}
