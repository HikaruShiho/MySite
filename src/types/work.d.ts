export interface Work extends WorkBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "work";
}

export type WorkBody = {
  title: string;
  sub_title: string;
  description: string;
  thumbnail?: string;
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  thumbnail_url: string;
  technology_stack: string[];
  part: string[];
  url: string;
};
