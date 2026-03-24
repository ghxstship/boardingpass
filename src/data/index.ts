import production from './production';
import operations from './operations';
import foodBeverage from './food-beverage';
import talentIndustry from './talent-industry';
import guests from './guests';
import temporary from './temporary';
import type { GuideConfig } from './types';

export const guides: Record<string, GuideConfig> = {
  production,
  operations,
  'food-beverage': foodBeverage,
  'talent-industry': talentIndustry,
  guests,
  temporary,
};

export const guideSlugs = Object.keys(guides);

export { production, operations, foodBeverage, talentIndustry, guests, temporary };
export * from './types';
export * from './shared';
