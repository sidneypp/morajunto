import { IsBoolean } from 'class-validator';
import { PropertyRule } from '../entities/property-rule.entity';

export class CreatePropertyRuleDto extends PropertyRule {
  @IsBoolean()
  smokingAllowed: boolean;

  @IsBoolean()
  childrenAllowed: boolean;

  @IsBoolean()
  petsAllowed: boolean;

  @IsBoolean()
  alcoholAllowed: boolean;

  @IsBoolean()
  guestsAllowed: boolean;
}
