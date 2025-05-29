import type { Route } from "./+types/blogs";
import Layout from "../components/layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blogs - Abhyudaya" }
  ];
}

export default function Blogs(){
    return(
        <Layout>
            <p>Blogs Section</p>
        </Layout>
    )
}