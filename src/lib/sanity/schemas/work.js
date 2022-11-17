export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "プロジェクト名",
      type: "string",
    },
    {
      name: "sub_title",
      title: "サブタイトル",
      type: "string",
    },
    {
      name: "description",
      title: "概要",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "サムネイル",
      type: "image",
    },
    {
      name: "technology_stack",
      title: "使用技術",
      type: "array",
      of: [
        {
          name: "technology_stack",
          type: "string",
        },
      ],
    },
  ],
};
