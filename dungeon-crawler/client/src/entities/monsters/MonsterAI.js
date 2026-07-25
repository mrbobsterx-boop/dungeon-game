// Стратегии поведения: патруль, преследование, атака в ближнем/дальнем бою, стайное поведение.
export const behaviors = {
  patrol(entity, world) {},
  chase(entity, world, target) {},
  attack(entity, world, target) {},
  flee(entity, world, target) {}
};
