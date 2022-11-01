import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class DeleteCategoryInputDto {
  @Field()
  url_key: string;
}
