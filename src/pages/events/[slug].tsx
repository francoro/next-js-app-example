import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function EventPage() {
  const router = useRouter();
  //router.query.slug //file [slug]
  //router.push
  return (
    <Layout>
      <h1>My Event</h1>
    </Layout>
  );
}
