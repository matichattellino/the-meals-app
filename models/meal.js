class Meal {
    constructor(
        id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps, 
        isGlutenFree,
        isVegan, 
        isVegetarian,
        isLactoseFree
    ) {
        this.id = id,
        this.categoryIds = categoryIds,
        this.title = title,
        this.imageUrl = imageUrl,
        this.ingredients = ingredients,
        this.steps = steps,
        this.isGlutenFree = isGlutenFree,
        this.isVegan = isVegan,
        this.isVegetarian = isVegetarian,
        this.isLactoseFree = isLactoseFree,
        this.affordability = affordability,
        this.complexity = complexity,
        this.duration = duration
    }
}

export default Meal;