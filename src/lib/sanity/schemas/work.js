export default {
  name: "work",
  title: "Work",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "プロジェクト名",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      description: "プロジェクト概要",
      type: "string",
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      description: "サムネイル画像",
      type: "image",
    },
    {
      name: "technology_stack",
      title: "Technology Stack",
      description: "使用技術",
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
