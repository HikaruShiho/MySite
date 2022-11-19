export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "skill",
      title: "スキル",
      type: "array",
      of: [
        {
          name: "icon",
          type: "image",
        },
      ],
    },
  ],
};
