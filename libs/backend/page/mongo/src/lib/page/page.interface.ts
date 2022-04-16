import { CategoryInterface } from '../category/category.interface';
import { AdvantageInterface } from '../advantage/advantage.interface';

export interface PageInterface {
  alias: string;
  product_category: string;
  title: string;
  seoText: string;
  tagsTitle: string;

  page_category: CategoryInterface;
  advantages: Array<AdvantageInterface>;
  tags: Array<string>;
}
