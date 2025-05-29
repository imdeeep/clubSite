import type { Route } from "./+types/events";
import Layout from "../components/layout/Layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Events - Abhyudaya" },
    { name: "description", content: "Join our events and workshops." },
  ];
}

export default function Events() {
    return (
       <Layout>
        <p>events section</p>
       </Layout>
    )
}