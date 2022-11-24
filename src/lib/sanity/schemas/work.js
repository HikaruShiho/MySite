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
      type: "text",
    },
    {
      name: "url",
      title: "URL or Github",
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
    {
      name: "part",
      title: "担当箇所",
      type: "array",
      of: [
        {
          name: "part",
          type: "string",
        },
      ],
    },
  ],
};
