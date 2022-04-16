export enum TopLevelCategory {
  courses = 0,
  services = 1,
  books = 2,
  products = 3,
}
export enum SecondLevelCategory {
  courses = 0,
  services = 1,
  books = 2,
  products = 3,
}

export interface CategoryInterface {
  firstLevel: TopLevelCategory;
  secondLevel?: SecondLevelCategory;
}
