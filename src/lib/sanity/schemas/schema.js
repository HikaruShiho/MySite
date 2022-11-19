import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import work from "./work";
import skill from "./skill";

export default createSchema({
  name: "my_site",
  types: schemaTypes.concat([work,skill]),
});
