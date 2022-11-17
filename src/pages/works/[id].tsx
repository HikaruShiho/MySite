import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Work } from "types/work";
import { fetchWorks, fetchWorkData } from "utils/work/fetchWork";

type Props = {
  work: Work[];
};

const WorkId = ({ work }: Props) => {
  return (
    <>
      <div>{work[0].title}</div>
      <div>{work[0].thumbnail_url}</div>
      <div>{work[0].sub_title}</div>
      <div>{work[0]._rev}</div>
      <div>{work[0].title}</div>
      <div>{work[0].title}</div>
    </>
  );
};

export default WorkId;

export const getStaticPaths: GetStaticPaths = async () => {
  const { works } = await fetchWorks();
  const paths = works.map((work: Work) => {
    return { params: { id: work._id } };
  });
  console.log("path>>>>>>>>>>>", paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log("params>>>>>>>>>>>", params);
  const { work } = await fetchWorkData(params?.id as string);
  return {
    props: {
      work,
    },
  };
};
