import React from "react";
import { notFound } from "next/navigation";
export default function page({ params }) {
  console.log(params.id);
  if (isNaN(Number(params.id))) {
    notFound();
  }
  return (
    <>
      <h1>pruduct: {params.id}</h1>

      <strong>This is pruduct {params.id}</strong>
    </>
  );
}
