export interface Work extends WorkBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
}

export type WorkBody = {
  description: string;
  part: string[];
  sub_title: string;
  technology_stack: string[];
  thumbnail: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  thumbnail_url?: string;
  title: string;
  url: string;
};
